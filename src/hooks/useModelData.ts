import { useState, useEffect } from 'react';
import { ProcessedModelData, parseCSVData, getCategories, groupModelsByYear, filterModels, getPerformanceStats } from '../utils/csvParser';

export interface UseModelDataReturn {
  models: ProcessedModelData[];
  categories: {
    type: string[];
    networkStructure: string[];
    separationModel: string[];
    learningMethod: string[];
    speakerKnown: string[];
  };
  groupedByYear: { [year: number]: ProcessedModelData[] };
  performanceStats: { [key: string]: { count: number; avgSI_SNRi?: number; avgSDRi?: number } };
  loading: boolean;
  error: string | null;
  filterModels: (filters: {
    type?: string;
    networkStructure?: string;
    separationModel?: string;
    learningMethod?: string;
    speakerKnown?: string;
    search?: string;
  }) => ProcessedModelData[];
}

export function useModelData(): UseModelDataReturn {
  const [models, setModels] = useState<ProcessedModelData[]>([]);
  const [categories, setCategories] = useState({
    type: [],
    networkStructure: [],
    separationModel: [],
    learningMethod: [],
    speakerKnown: []
  });
  const [groupedByYear, setGroupedByYear] = useState<{ [year: number]: ProcessedModelData[] }>({});
  const [performanceStats, setPerformanceStats] = useState<{ [key: string]: { count: number; avgSI_SNRi?: number; avgSDRi?: number } }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // 读取CSV文件
        const basePath = import.meta.env.BASE_URL || '/';
        const csvPath = `${basePath}speech-separation-models.csv`.replace(/\/+/g, '/');
        const response = await fetch(csvPath);
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.statusText}`);
        }
        
        const csvContent = await response.text();
        
        // 解析数据
        const parsedModels = parseCSVData(csvContent);
        console.log('Parsed models:', parsedModels.length);
        
        // 设置数据
        setModels(parsedModels);
        setCategories(getCategories(parsedModels));
        setGroupedByYear(groupModelsByYear(parsedModels));
        setPerformanceStats(getPerformanceStats(parsedModels));
        
      } catch (err) {
        console.error('Error loading model data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filterModelsFn = (filters: {
    type?: string;
    networkStructure?: string;
    separationModel?: string;
    learningMethod?: string;
    speakerKnown?: string;
    search?: string;
  }) => {
    return filterModels(models, filters);
  };

  return {
    models,
    categories,
    groupedByYear,
    performanceStats,
    loading,
    error,
    filterModels: filterModelsFn
  };
}