import React, { useState } from 'react';
import { BarChart3, PieChart, AlertTriangle, CheckCircle2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import TextFormattingShowcase from './components/TextFormattingShowcase';
import ArchitectureDiagram from './components/ArchitectureDiagram';

// Simulated portfolio data
const portfolioData = {
  totalValue: 2457890.45,
  dailyChange: 1.23,
  riskMetrics: {
    var95: -2.34,
    volatility: 12.67,
    sharpeRatio: 1.89
  },
  compliance: {
    status: "Compliant",
    checks: [
      { name: "Max Exposure", status: "passed" },
      { name: "ESG Compliance", status: "passed" },
      { name: "Liquidity", status: "warning" }
    ]
  },
  assets: [
    { name: "US Equities", allocation: 45, value: 1106050.70 },
    { name: "Fixed Income", allocation: 30, value: 737367.13 },
    { name: "International", allocation: 15, value: 368683.57 },
    { name: "Alternatives", allocation: 10, value: 245789.05 }
  ]
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);
}

function App() {
  const [selectedMetric, setSelectedMetric] = useState('var');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-indigo-600" />
              Portfolio Analytics Dashboard
            </h1>
            <div className="flex items-center gap-2">
              <span className={`text-lg font-semibold ${portfolioData.dailyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {portfolioData.dailyChange >= 0 ? (
                  <ArrowUpRight className="inline h-5 w-5" />
                ) : (
                  <ArrowDownRight className="inline h-5 w-5" />
                )}
                {Math.abs(portfolioData.dailyChange)}%
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Architecture Diagram */}
        <div className="mb-8">
          <ArchitectureDiagram />
        </div>

        {/* Portfolio Value */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Total Portfolio Value</h2>
          <p className="text-3xl font-bold text-gray-900">{formatCurrency(portfolioData.totalValue)}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Risk Metrics */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Risk Metrics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Value at Risk (95%)</span>
                <span className="text-red-600 font-semibold">{portfolioData.riskMetrics.var95}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Volatility</span>
                <span className="text-gray-900 font-semibold">{portfolioData.riskMetrics.volatility}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Sharpe Ratio</span>
                <span className="text-green-600 font-semibold">{portfolioData.riskMetrics.sharpeRatio}</span>
              </div>
            </div>
          </div>

          {/* Compliance Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Compliance Status</h2>
            <div className="space-y-4">
              {portfolioData.compliance.checks.map((check, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">{check.name}</span>
                  {check.status === 'passed' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Asset Allocation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <PieChart className="h-48 w-48 text-indigo-600" />
              </div>
              <div className="space-y-4">
                {portfolioData.assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">{asset.name}</span>
                      <span className="block text-sm text-gray-500">{formatCurrency(asset.value)}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{asset.allocation}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text Formatting Showcase */}
          <div className="lg:col-span-2">
            <TextFormattingShowcase />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;