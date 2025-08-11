// CSV数据解析工具函数

export interface ModelData {
  'Paper Title': string;
  'Model Name': string;
  'Deterministic/Generative': string;
  'Network Architecture': string;
  'Separation Model': string;
  maskMapping: string;
  encoderDecoder: string;
  'Learning Method': string;
  'Publication Year': string;
  'Speaker Known/Unknown': string;
  WSJ0_2Mix_SI_SNRi: string;
  WSJ0_2Mix_SDRi: string;
  WHAM_SI_SNRi: string;
  WHAM_SDRi: string;
  LibriMix_SI_SNRi: string;
  LibriMix_SDRi: string;
  WHAMR_SI_SNRi: string;
  WHAMR_SDRi: string;
  LRS2_2Mix_SI_SNRi: string;
  LRS2_2Mix_SDRi: string;
  SonicSet_SI_SNR: string;
  SonicSet_SDR: string;
  params: string;
  'Code Link': string;
  'Paper Link': string;
}

export interface ProcessedModelData {
  id: string;
  paperName: string;
  modelName: string;
  type: string; // 确定性/生成式
  networkStructure: string;
  separationModel: string;
  maskMapping: string;
  encoderDecoder: string;
  learningMethod: string;
  publishYear: number;
  speakerKnown: string;
  performance: {
    WSJ0_2Mix: { SI_SNRi: number | null; SDRi: number | null };
    WHAM: { SI_SNRi: number | null; SDRi: number | null };
    LibriMix: { SI_SNRi: number | null; SDRi: number | null };
    WHAMR: { SI_SNRi: number | null; SDRi: number | null };
    LRS2_2Mix: { SI_SNRi: number | null; SDRi: number | null };
    SonicSet: { SI_SNR: number | null; SDR: number | null };
  };
  params: number | null;
  codeLink: string;
  paperLink: string;
  notes: string;
}

// 解析性能数据，将字符串转换为数字或null
function parsePerformanceValue(value: string): number | null {
  if (!value || value === '-' || value.trim() === '') {
    return null;
  }
  // 处理带有（c）标记的值
  const cleanValue = value.replace(/（c）/g, '').replace(/\(c\)/g, '').trim();
  const parsed = parseFloat(cleanValue);
  return isNaN(parsed) ? null : parsed;
}

// 解析参数数量
function parseParams(value: string): number | null {
  if (!value || value === '-' || value.trim() === '') {
    return null;
  }
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

// 解析发表年份
function parseYear(value: string): number {
  const parsed = parseInt(value);
  return isNaN(parsed) ? 2020 : parsed; // 默认值
}

// 解析CSV数据
export function parseCSVData(csvContent: string): ProcessedModelData[] {
  const lines = csvContent.split('\n');
  const models: ProcessedModelData[] = [];
  
  // 跳过前两行（标题行）
  for (let i = 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.split(',').every(cell => !cell.trim())) {
      continue; // 跳过空行
    }
    
    const columns = parseCSVLine(line);
    if (columns.length < 23 || !columns[0] || !columns[1]) {
      continue; // 跳过无效行
    }
    
    const model: ProcessedModelData = {
      id: `model_${i}`,
      paperName: columns[0] || '',
      modelName: columns[1] || '',
      type: columns[2] || '',
      networkStructure: columns[3] || '',
      separationModel: columns[4] || '',
      maskMapping: columns[5] || '',
      encoderDecoder: columns[6] || '',
      learningMethod: columns[7] || '',
      publishYear: parseYear(columns[8]),
      speakerKnown: columns[9] || '',
      performance: {
        WSJ0_2Mix: {
          SI_SNRi: parsePerformanceValue(columns[10]),
          SDRi: parsePerformanceValue(columns[11])
        },
        WHAM: {
          SI_SNRi: parsePerformanceValue(columns[12]),
          SDRi: parsePerformanceValue(columns[13])
        },
        LibriMix: {
          SI_SNRi: parsePerformanceValue(columns[14]),
          SDRi: parsePerformanceValue(columns[15])
        },
        WHAMR: {
          SI_SNRi: parsePerformanceValue(columns[16]),
          SDRi: parsePerformanceValue(columns[17])
        },
        LRS2_2Mix: {
          SI_SNRi: parsePerformanceValue(columns[18]),
          SDRi: parsePerformanceValue(columns[19])
        },
        SonicSet: {
          SI_SNR: parsePerformanceValue(columns[20]),
          SDR: parsePerformanceValue(columns[21])
        }
      },
      params: parseParams(columns[22]),
      codeLink: columns[23] || '',
      paperLink: columns[24] || '',
      notes: columns[25] || ''
    };
    
    models.push(model);
  }
  
  return models;
}

// 解析CSV行，处理引号内的逗号
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// 获取所有分类选项
export function getCategories(models: ProcessedModelData[]) {
  const categories = {
    type: new Set<string>(),
    networkStructure: new Set<string>(),
    separationModel: new Set<string>(),
    learningMethod: new Set<string>(),
    speakerKnown: new Set<string>()
  };
  
  models.forEach(model => {
    if (model.type) categories.type.add(model.type);
    if (model.networkStructure) categories.networkStructure.add(model.networkStructure);
    if (model.separationModel) categories.separationModel.add(model.separationModel);
    if (model.learningMethod) categories.learningMethod.add(model.learningMethod);
    if (model.speakerKnown) categories.speakerKnown.add(model.speakerKnown);
  });
  
  return {
    type: Array.from(categories.type).sort(),
    networkStructure: Array.from(categories.networkStructure).sort(),
    separationModel: Array.from(categories.separationModel).sort(),
    learningMethod: Array.from(categories.learningMethod).sort(),
    speakerKnown: Array.from(categories.speakerKnown).sort()
  };
}

// 按年份分组模型
export function groupModelsByYear(models: ProcessedModelData[]) {
  const grouped: { [year: number]: ProcessedModelData[] } = {};
  
  models.forEach(model => {
    const year = model.publishYear;
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(model);
  });
  
  return grouped;
}

// 筛选模型
export function filterModels(
  models: ProcessedModelData[],
  filters: {
    type?: string;
    networkStructure?: string;
    separationModel?: string;
    learningMethod?: string;
    speakerKnown?: string;
    search?: string;
  }
): ProcessedModelData[] {
  return models.filter(model => {
    // 类型筛选
    if (filters.type && filters.type !== 'All' && model.type !== filters.type) {
      return false;
    }
    
    // 网络结构筛选
    if (filters.networkStructure && filters.networkStructure !== 'All' && model.networkStructure !== filters.networkStructure) {
      return false;
    }
    
    // 分离模型筛选
    if (filters.separationModel && filters.separationModel !== 'All' && model.separationModel !== filters.separationModel) {
      return false;
    }
    
    // 学习方式筛选
    if (filters.learningMethod && filters.learningMethod !== 'All' && model.learningMethod !== filters.learningMethod) {
      return false;
    }
    
    // 说话人已知/未知筛选
    if (filters.speakerKnown && filters.speakerKnown !== 'All' && model.speakerKnown !== filters.speakerKnown) {
      return false;
    }
    
    // 搜索筛选
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      return (
        model.modelName.toLowerCase().includes(searchTerm) ||
        model.paperName.toLowerCase().includes(searchTerm)
      );
    }
    
    return true;
  });
}

// 获取数据集性能统计
export function getPerformanceStats(models: ProcessedModelData[]) {
  const datasets = ['WSJ0_2Mix', 'WHAM', 'LibriMix', 'WHAMR', 'LRS2_2Mix', 'SonicSet'] as const;
  const stats: { [key: string]: { count: number; avg: number; max: number; min: number } } = {};
  
  datasets.forEach(dataset => {
    const validModels = models.filter(model => hasPerformanceData(model, dataset));
    
    if (validModels.length > 0) {
      const allValues: number[] = [];
      
      validModels.forEach(model => {
        const perf = model.performance[dataset];
        if (perf) {
          if (dataset === 'SonicSet') {
            if ('SI_SNR' in perf && perf.SI_SNR !== null) allValues.push(perf.SI_SNR);
            if ('SDR' in perf && perf.SDR !== null) allValues.push(perf.SDR);
          } else {
            if ('SI_SNRi' in perf && perf.SI_SNRi !== null) allValues.push(perf.SI_SNRi);
            if ('SDRi' in perf && perf.SDRi !== null) allValues.push(perf.SDRi);
          }
        }
      });
      
      if (allValues.length > 0) {
        stats[dataset] = {
          count: validModels.length,
          avg: allValues.reduce((a, b) => a + b, 0) / allValues.length,
          max: Math.max(...allValues),
          min: Math.min(...allValues)
        };
      }
    }
  });
  
  return stats;
}

// 检查模型是否有性能数据
export function hasPerformanceData(model: ProcessedModelData, dataset: string): boolean {
  const perf = model.performance[dataset as keyof typeof model.performance];
  if (!perf) return false;
  
  if (dataset === 'SonicSet') {
    // SonicSet 使用 SI_SNR 和 SDR
    return 'SI_SNR' in perf && 'SDR' in perf && 
           (perf.SI_SNR !== null || perf.SDR !== null);
  }
  
  // 其他数据集使用 SI_SNRi 和 SDRi
  return 'SI_SNRi' in perf && 'SDRi' in perf && 
         (perf.SI_SNRi !== null || perf.SDRi !== null);
}

// 获取有性能数据的模型
export function getModelsWithPerformance(models: ProcessedModelData[], dataset: string): ProcessedModelData[] {
  return models.filter(model => hasPerformanceData(model, dataset));
}