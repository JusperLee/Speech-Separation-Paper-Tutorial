import React from 'react';
import { X, ExternalLink, Github, BookOpen, Calendar, Cpu, Users, Database, BarChart3 } from 'lucide-react';
import { ProcessedModelData } from '../utils/csvParser';

interface ModelDetailModalProps {
  model: ProcessedModelData;
  isOpen: boolean;
  onClose: () => void;
}

const ModelDetailModal: React.FC<ModelDetailModalProps> = ({ model, isOpen, onClose }) => {
  if (!isOpen) return null;

  // 数据集列表 - 显示名称和实际字段名的映射
  const datasetMapping = [
    { display: 'WSJ0-2Mix', field: 'WSJ0_2Mix' },
    { display: 'WHAM!', field: 'WHAM' },
    { display: 'LibriMix', field: 'LibriMix' },
    { display: 'WHAMR!', field: 'WHAMR' },
    { display: 'LRS2-2Mix', field: 'LRS2_2Mix' },
    { display: 'SonicSet', field: 'SonicSet' }
  ];

  // 获取性能数据
  const getPerformanceData = () => {
    return datasetMapping.map(({ display, field }) => {
      const perf = model.performance[field];
      let siSnri, sdri;
      
      if (perf) {
        if (field === 'SonicSet') {
          // SonicSet 使用不同的指标名称
          siSnri = perf.SI_SNR;
          sdri = perf.SDR;
        } else {
          siSnri = perf.SI_SNRi;
          sdri = perf.SDRi;
        }
      }
      
      return {
        dataset: display,
        siSnri: siSnri !== undefined && siSnri !== null ? siSnri.toFixed(2) : '-',
        sdri: sdri !== undefined && sdri !== null ? sdri.toFixed(2) : '-',
        hasData: (siSnri !== undefined && siSnri !== null) || (sdri !== undefined && sdri !== null)
      };
    });
  };

  const performanceData = getPerformanceData();
  const hasAnyPerformanceData = performanceData.some(data => data.hasData);

  // 处理背景点击
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* 头部 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-4 flex items-center justify-between rounded-t-lg">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 truncate">{model.modelName}</h2>
            <p className="text-sm text-gray-600 mt-1">Published in {model.publishYear}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 ml-4"
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* 基本信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                <Database className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-indigo-600" />
                Basic Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3 text-gray-500" />
                  <span className="text-sm text-gray-600 w-20">Year:</span>
                  <span className="text-sm font-medium">{model.publishYear}</span>
                </div>
                
                {model.type && (
                  <div className="flex items-center">
                    <Cpu className="h-4 w-4 mr-3 text-gray-500" />
                    <span className="text-sm text-gray-600 w-20">Type:</span>
                    <span className="text-sm font-medium">{model.type}</span>
                  </div>
                )}
                
                {model.networkStructure && (
                  <div className="flex items-start">
                    <Users className="h-4 w-4 mr-3 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 w-20 flex-shrink-0">Architecture:</span>
                    <span className="text-sm font-medium flex-1 break-words">{model.networkStructure}</span>
                  </div>
                )}
                
                {model.separationModel && (
                  <div className="flex items-start">
                    <BarChart3 className="h-4 w-4 mr-3 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 w-20 flex-shrink-0">Model:</span>
                    <span className="text-sm font-medium flex-1 break-words">{model.separationModel}</span>
                  </div>
                )}
                
                {model.learningMethod && (
                  <div className="flex items-start">
                    <Cpu className="h-4 w-4 mr-3 text-gray-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 w-20 flex-shrink-0">Method:</span>
                    <span className="text-sm font-medium break-words">{model.learningMethod}</span>
                  </div>
                )}
                
                {model.speakerKnown && (
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-3 text-gray-500" />
                    <span className="text-sm text-gray-600 w-20">Speaker:</span>
                    <span className="text-sm font-medium">{model.speakerKnown}</span>
                  </div>
                )}
                
                {model.params && (
                  <div className="flex items-center">
                    <Database className="h-4 w-4 mr-3 text-gray-500" />
                    <span className="text-sm text-gray-600 w-20">Params:</span>
                    <span className="text-sm font-medium">{model.params}</span>
                  </div>
                )}
              </div>
            </div>

            {/* 链接信息 */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-indigo-600" />
                Related Links
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                {model.paperLink ? (
                  <a
                    href={model.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                  >
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-blue-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-blue-900">Paper Link</div>
                      <div className="text-xs text-blue-600 truncate">{model.paperLink}</div>
                    </div>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 group-hover:text-blue-800 flex-shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-gray-400" />
                    <div className="text-sm text-gray-500">No paper link available</div>
                  </div>
                )}
                
                {model.codeLink ? (
                  <a
                    href={model.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-green-900">Code Link</div>
                      <div className="text-xs text-green-600 truncate">{model.codeLink}</div>
                    </div>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 group-hover:text-green-800 flex-shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-3 text-gray-400" />
                    <div className="text-sm text-gray-500">No code link available</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 性能数据表格 */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-indigo-600" />
              Performance Data
            </h3>
            
            {hasAnyPerformanceData ? (
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dataset
                        </th>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SI-SNRi (dB)
                        </th>
                        <th className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          SDRi (dB)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {performanceData.map((data, index) => (
                        <tr key={data.dataset} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium text-gray-900">
                            <div className="truncate max-w-[120px] sm:max-w-none">{data.dataset}</div>
                          </td>
                          <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-center">
                            <span className={`${data.siSnri !== '-' ? 'text-green-600 font-medium' : 'text-gray-400'}`}>
                              {data.siSnri}
                            </span>
                          </td>
                          <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-center">
                            <span className={`${data.sdri !== '-' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                              {data.sdri}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No performance data available for this model</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailModal;