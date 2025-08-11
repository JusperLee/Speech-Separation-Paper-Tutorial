import React, { useState } from 'react';
import { useModelData } from './hooks/useModelData';
import FilterBar from './components/FilterBar';
import Timeline from './components/Timeline';
import ModelDetailModal from './components/ModelDetailModal';
import PerformanceChart from './components/PerformanceChart';
import { ProcessedModelData, groupModelsByYear } from './utils/csvParser';
import { Loader2, AlertCircle, BookOpen, BarChart3 } from 'lucide-react';
import './App.css';

function App() {
  const { models, categories, groupedByYear, loading, error, filterModels } = useModelData();
  const [filters, setFilters] = useState({
    type: '',
    networkStructure: '',
    separationModel: '',
    learningMethod: '',
    speakerKnown: '',
    search: ''
  });
  const [selectedModel, setSelectedModel] = useState<ProcessedModelData | null>(null);
  const [showChart, setShowChart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredModels = filterModels(filters);
  const filteredGroupedByYear = groupModelsByYear(filteredModels);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const handleModelClick = (model: ProcessedModelData) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading speech separation models...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-800 mb-2">Failed to Load Data</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-0 sm:h-16 space-y-3 sm:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Speech Separation Models Survey</h1>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full w-fit">
                {filteredModels.length} Models
              </span>
            </div>
            <button
              onClick={() => setShowChart(!showChart)}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
            >
              <BarChart3 className="h-5 w-5" />
              <span>{showChart ? 'Hide Chart' : 'Show Chart'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* 筛选栏 */}
        <div className="mb-6 lg:mb-8">
          <FilterBar
          filters={filters}
          onFiltersChange={setFilters}
          models={models}
        />
        </div>

        {/* 性能图表 */}
        {showChart && (
          <div className="mb-6 lg:mb-8">
            <PerformanceChart models={filteredModels} />
          </div>
        )}

        {/* 时间轴 */}
        <Timeline
          models={filteredModels}
          groupedByYear={filteredGroupedByYear}
          onModelClick={handleModelClick}
        />
      </main>

      {/* Model Detail Modal */}
      {selectedModel && (
        <ModelDetailModal
          model={selectedModel}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}

      {/* 页脚 */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600 text-sm">
            © Kai Li | Last updated: January. 4th, 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
