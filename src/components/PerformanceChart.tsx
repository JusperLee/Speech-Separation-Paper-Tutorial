import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter } from 'recharts';
import { BarChart3, TrendingUp, Activity } from 'lucide-react';
import { ProcessedModelData } from '../utils/csvParser';

interface PerformanceChartProps {
  models: ProcessedModelData[];
}

type ChartType = 'bar' | 'line' | 'scatter';
type MetricType = 'SI-SNRi' | 'SDRi';
type DatasetType = 'WSJ0_2Mix' | 'WHAM' | 'LibriMix' | 'WHAMR' | 'LRS2_2Mix' | 'SonicSet';

const PerformanceChart: React.FC<PerformanceChartProps> = ({ models }) => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  const [metricType, setMetricType] = useState<MetricType>('SI-SNRi');
  const [selectedDataset, setSelectedDataset] = useState<DatasetType>('WSJ0_2Mix');

  const datasets: DatasetType[] = ['WSJ0_2Mix', 'WHAM', 'LibriMix', 'WHAMR', 'LRS2_2Mix', 'SonicSet'];

  // 准备图表数据
  const prepareChartData = () => {
    // 根据数据集和指标类型构建数据键
    let dataKey: string;
    if (selectedDataset === 'SonicSet') {
      // SonicSet 使用不同的指标名称
      dataKey = metricType === 'SI-SNRi' ? 'SI_SNR' : 'SDR';
    } else {
      dataKey = metricType === 'SI-SNRi' ? 'SI_SNRi' : 'SDRi';
    }
    
    // 过滤有数据的模型并按年份分组
    const modelsWithData = models
      .filter(model => {
        const perf = model.performance[selectedDataset];
        return perf && perf[dataKey as keyof typeof perf] !== undefined && perf[dataKey as keyof typeof perf] !== null;
      })
      .sort((a, b) => a.publishYear - b.publishYear);

    if (chartType === 'scatter') {
      // 散点图：显示年份 vs 性能
      return modelsWithData.map(model => {
        const perf = model.performance[selectedDataset];
        const value = perf ? perf[dataKey as keyof typeof perf] : null;
        return {
          year: model.publishYear,
          value: value,
          model: model.modelName,
          type: model.type
        };
      });
    } else {
      // 柱状图和折线图：按年份聚合
      const yearGroups: { [year: number]: number[] } = {};
      
      modelsWithData.forEach(model => {
        const year = model.publishYear;
        const perf = model.performance[selectedDataset];
        const value = perf ? perf[dataKey as keyof typeof perf] : null;
        if (value !== undefined && value !== null) {
          if (!yearGroups[year]) yearGroups[year] = [];
          yearGroups[year].push(value);
        }
      });

      return Object.entries(yearGroups)
        .map(([year, values]) => ({
          year: parseInt(year),
          average: values.reduce((sum, val) => sum + val, 0) / values.length,
          max: Math.max(...values),
          min: Math.min(...values),
          count: values.length
        }))
        .sort((a, b) => a.year - b.year);
    }
  };

  const chartData = prepareChartData();

  // 自定义Tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      if (chartType === 'scatter') {
        const data = payload[0].payload;
        return (
          <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
            <p className="font-medium">{data.model}</p>
            <p className="text-sm text-gray-600">Year: {data.year}</p>
            <p className="text-sm text-gray-600">Type: {data.type}</p>
            <p className="text-sm font-medium text-indigo-600">
              {metricType}: {data.value.toFixed(2)} dB
            </p>
          </div>
        );
      } else {
        const data = payload[0].payload;
        return (
          <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
            <p className="font-medium">{label}</p>
            <p className="text-sm text-gray-600">Model Count: {data.count}</p>
            <p className="text-sm font-medium text-indigo-600">
              Average {metricType}: {data.average.toFixed(2)} dB
            </p>
            <p className="text-sm text-green-600">
              Max: {data.max.toFixed(2)} dB
            </p>
            <p className="text-sm text-red-600">
              Min: {data.min.toFixed(2)} dB
            </p>
          </div>
        );
      }
    }
    return null;
  };

  // 渲染图表
  const renderChart = () => {
    if (chartData.length === 0) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p>No performance data available for this dataset</p>
          </div>
        </div>
      );
    }

    const commonProps = {
      width: '100%',
      height: 400,
      data: chartData,
      margin: { top: 20, right: 30, left: 20, bottom: 5 }
    };

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer {...commonProps}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: `${metricType} (dB)`, angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="average" fill="#4f46e5" name={`Average ${metricType}`} />
              <Bar dataKey="max" fill="#10b981" name={`Max ${metricType}`} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer {...commonProps}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: `${metricType} (dB)`, angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="average" stroke="#4f46e5" strokeWidth={2} name={`Average ${metricType}`} />
              <Line type="monotone" dataKey="max" stroke="#10b981" strokeWidth={2} name={`Max ${metricType}`} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'scatter':
        return (
          <ResponsiveContainer {...commonProps}>
            <ScatterChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" type="number" domain={['dataMin', 'dataMax']} />
              <YAxis dataKey="value" label={{ value: `${metricType} (dB)`, angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<CustomTooltip />} />
              <Scatter dataKey="value" fill="#4f46e5" />
            </ScatterChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* 头部控制 */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">Performance Data Visualization</h3>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {/* 数据集选择 */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Dataset:</label>
            <select
              value={selectedDataset}
              onChange={(e) => setSelectedDataset(e.target.value as DatasetType)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="WSJ0_2Mix">WSJ0-2Mix</option>
              <option value="WHAM">WHAM!</option>
              <option value="LibriMix">LibriMix</option>
              <option value="WHAMR">WHAMR!</option>
              <option value="LRS2_2Mix">LRS2-2Mix</option>
              <option value="SonicSet">SonicSet</option>
            </select>
          </div>
          
          {/* 指标选择 */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Metric:</label>
            <select
              value={metricType}
              onChange={(e) => setMetricType(e.target.value as MetricType)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="SI-SNRi">SI-SNRi</option>
              <option value="SDRi">SDRi</option>
            </select>
          </div>
          
          {/* 图表类型选择 */}
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Chart:</label>
            <div className="flex space-x-1">
              <button
                onClick={() => setChartType('bar')}
                className={`p-2 rounded-md transition-colors ${
                  chartType === 'bar' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
                title="Bar Chart"
              >
                <BarChart3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setChartType('line')}
                className={`p-2 rounded-md transition-colors ${
                  chartType === 'line' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
                title="Line Chart"
              >
                <TrendingUp className="h-4 w-4" />
              </button>
              <button
                onClick={() => setChartType('scatter')}
                className={`p-2 rounded-md transition-colors ${
                  chartType === 'scatter' 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
                title="Scatter Plot"
              >
                <Activity className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 图表区域 */}
      <div className="w-full">
        {renderChart()}
      </div>
      
      {/* 统计信息 */}
      {chartData.length > 0 && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">
              {chartType === 'scatter' ? chartData.length : chartData.reduce((sum, item) => sum + (item as any).count, 0)}
            </div>
            <div className="text-sm text-gray-600">Model Count</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {chartType === 'scatter' 
                ? Math.max(...chartData.map(item => (item as any).value)).toFixed(1)
                : Math.max(...chartData.map(item => (item as any).max)).toFixed(1)
              }
            </div>
            <div className="text-sm text-gray-600">Max Value (dB)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {chartType === 'scatter'
                ? (chartData.reduce((sum, item) => sum + (item as any).value, 0) / chartData.length).toFixed(1)
                : (chartData.reduce((sum, item) => sum + (item as any).average * (item as any).count, 0) / 
                   chartData.reduce((sum, item) => sum + (item as any).count, 0)).toFixed(1)
              }
            </div>
            <div className="text-sm text-gray-600">Average (dB)</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-600">
              {chartData[chartData.length - 1]?.year || '-'}
            </div>
            <div className="text-sm text-gray-600">Latest Year</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;