import React from 'react';
import { Calendar, Users, Cpu, BookOpen, ExternalLink, Github } from 'lucide-react';
import { ProcessedModelData } from '../utils/csvParser';

interface TimelineProps {
  models: ProcessedModelData[];
  groupedByYear: { [year: number]: ProcessedModelData[] };
  onModelClick: (model: ProcessedModelData) => void;
}

const Timeline: React.FC<TimelineProps> = ({ models, groupedByYear, onModelClick }) => {
  // 按年份排序（最新的在前）
  const sortedYears = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // 获取模型的性能指标摘要
  const getPerformanceSummary = (model: ProcessedModelData) => {
    const datasets = ['WSJ0_2Mix', 'WHAM', 'LibriMix', 'WHAMR', 'LRS2_2Mix', 'SonicSet'];
    const hasResults = datasets.some(dataset => {
      const datasetData = model.performance[dataset as keyof typeof model.performance];
      if (datasetData && typeof datasetData === 'object') {
        if (dataset === 'SonicSet') {
          return (datasetData as any).SI_SNR !== undefined || (datasetData as any).SDR !== undefined;
        } else {
          return (datasetData as any).SI_SNRi !== undefined || (datasetData as any).SDRi !== undefined;
        }
      }
      return false;
    });
    return hasResults;
  };

  // 获取模型卡片的颜色主题
  const getCardTheme = (model: ProcessedModelData) => {
    const themes = {
      '确定性': 'from-blue-500 to-blue-600',
      '生成式': 'from-purple-500 to-purple-600',
      'default': 'from-gray-500 to-gray-600'
    };
    return themes[model.type as keyof typeof themes] || themes.default;
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Model Timeline</h2>
        <p className="text-gray-600">Development history of speech separation models by publication year</p>
      </div>

      {sortedYears.map((year, yearIndex) => {
        const yearModels = groupedByYear[year] || [];
        const sortedModels = yearModels.sort((a, b) => a.modelName.localeCompare(b.modelName));

        return (
          <div key={year} className="relative">
            {/* 年份标题 */}
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full font-bold text-lg shadow-lg">
                {year}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">{year}</h3>
                <p className="text-sm text-gray-600">{sortedModels.length} models</p>
              </div>
              {/* 时间轴线条 */}
              {yearIndex < sortedYears.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300 -z-10"></div>
              )}
            </div>

            {/* 模型卡片网格 */}
            <div className="ml-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 mb-8">
              {sortedModels.map((model, index) => (
                <div
                  key={`${model.modelName}-${index}`}
                  onClick={() => onModelClick(model)}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-[1.02] border border-gray-200 hover:border-indigo-300"
                >
                  {/* 卡片头部 */}
                  <div className={`h-2 bg-gradient-to-r ${getCardTheme(model)} rounded-t-lg`}></div>
                  
                  <div className="p-3 lg:p-4">
                    {/* 模型名称 */}
                    <h4 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                      {model.modelName}
                    </h4>

                    {/* 基本信息 */}
                    <div className="space-y-2 lg:space-y-3 mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-indigo-500" />
                        <span>{model.publishYear}</span>
                      </div>
                      
                      {model.type && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Cpu className="h-4 w-4 mr-2 text-indigo-500" />
                          <span>{model.type}</span>
                        </div>
                      )}
                      
                      {model.networkStructure && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-indigo-500 flex-shrink-0" />
                          <span className="truncate">{model.networkStructure}</span>
                        </div>
                      )}
                    </div>

                    {/* 性能指标 */}
                    <div className="mb-3">
                      {getPerformanceSummary(model) ? (
                        <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                          Has performance data
                        </div>
                      ) : (
                        <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-1"></div>
                          No performance data
                        </div>
                      )}
                    </div>

                    {/* 链接预览 */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {model.paperLink && (
                          <div className="flex items-center text-xs text-blue-600">
                            <BookOpen className="h-3 w-3 mr-1" />
                            <span className="hidden sm:inline">Paper</span>
                          </div>
                        )}
                        {model.codeLink && (
                          <div className="flex items-center text-xs text-green-600">
                            <Github className="h-3 w-3 mr-1" />
                            <span className="hidden sm:inline">Code</span>
                          </div>
                        )}
                      </div>
                      
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>

                    {/* 参数信息 */}
                    {model.params && (
                      <div className="mt-2 text-xs text-gray-500">
                        Params: {model.params}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* 空状态 */}
      {sortedYears.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No matching models found</h3>
          <p className="text-gray-600">Please try adjusting the filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Timeline;