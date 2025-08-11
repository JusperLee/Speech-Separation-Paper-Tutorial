import React, { useState, useEffect } from 'react';
import { Filter, X, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { ProcessedModelData } from '../utils/csvParser';

interface FilterBarProps {
  models: ProcessedModelData[];
  filters: {
    search: string;
    type: string;
    networkStructure: string;
    separationModel: string;
    learningMethod: string;
    speakerKnown: string;
  };
  onFiltersChange: (filters: any) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ models, filters, onFiltersChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  // 从模型数据中提取唯一值
  const types = [...new Set(models.map(m => m.type).filter(Boolean))];
  const networkStructures = [...new Set(models.map(m => m.networkStructure).filter(Boolean))];
  const separationModels = [...new Set(models.map(m => m.separationModel).filter(Boolean))];
  const learningMethods = [...new Set(models.map(m => m.learningMethod).filter(Boolean))];
  const speakerKnownOptions = [...new Set(models.map(m => m.speakerKnown).filter(Boolean))];

  const clearAllFilters = () => {
    onFiltersChange({
      type: '',
      networkStructure: '',
      separationModel: '',
      learningMethod: '',
      speakerKnown: '',
      search: ''
    });
  };

  // 检查是否有活跃的筛选器
  const hasActiveFilters = Object.values(filters).some(value => value !== '');
  
  // 获取活跃筛选器数量
  const getActiveFilterCount = () => {
    return Object.values(filters).filter(value => value !== '').length;
  };
  
  // 响应式处理
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsExpanded(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* 头部区域 */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <span className="text-sm text-gray-500">({getActiveFilterCount()} active filters)</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear All</span>
              </button>
            )}
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="sm:hidden flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
            </button>
          </div>
        </div>

        {/* 搜索框 - 始终显示 */}
        <div className="mt-4">
          <div className={`relative transition-all duration-200 ${
            searchFocused ? 'transform scale-[1.02]' : ''
          }`}>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search model names, authors or keywords..."
              value={filters.search}
              onChange={(e) => onFiltersChange({ ...filters, search: e.target.value })}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-sm"
            />
            {filters.search && (
              <button
                onClick={() => onFiltersChange({ ...filters, search: '' })}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 筛选器区域 */}
      <div className={`transition-all duration-300 ease-in-out ${
        isExpanded || window.innerWidth >= 640 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 sm:max-h-96 sm:opacity-100'
      } overflow-hidden`}>
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* 类型筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={filters.type}
                onChange={(e) => onFiltersChange({ ...filters, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* 网络结构筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Network Architecture</label>
              <select
                value={filters.networkStructure}
                onChange={(e) => onFiltersChange({ ...filters, networkStructure: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Architectures</option>
                {networkStructures.map(structure => (
                  <option key={structure} value={structure}>{structure}</option>
                ))}
              </select>
            </div>

            {/* 分离模型筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Separation Model</label>
              <select
                value={filters.separationModel}
                onChange={(e) => onFiltersChange({ ...filters, separationModel: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Models</option>
                {separationModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* 学习方式筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Learning Method</label>
              <select
                value={filters.learningMethod}
                onChange={(e) => onFiltersChange({ ...filters, learningMethod: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All Methods</option>
                {learningMethods.map(method => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>

            {/* 说话人已知筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Speaker Known</label>
              <select
                value={filters.speakerKnown}
                onChange={(e) => onFiltersChange({ ...filters, speakerKnown: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="">All</option>
                {speakerKnownOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;