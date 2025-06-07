import React from 'react';
import { 
  Database, 
  Brain, 
  Shield, 
  BarChart3, 
  ArrowRight, 
  Cloud, 
  Cpu, 
  FileText,
  AlertTriangle,
  CheckCircle2,
  Users,
  Monitor
} from 'lucide-react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="h-6 w-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-900">Multi-Agent Portfolio Risk Management Architecture</h2>
      </div>

      {/* Data Sources Layer */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-600" />
          Data Sources Layer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
            <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-blue-800">BigQuery</h4>
            <p className="text-sm text-blue-600 mt-1">Portfolio Data Warehouse</p>
            <div className="text-xs text-blue-500 mt-2">
              • Asset weights<br/>
              • Historical returns<br/>
              • Market data
            </div>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
            <Database className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-green-800">AlloyDB</h4>
            <p className="text-sm text-green-600 mt-1">Compliance Rules Engine</p>
            <div className="text-xs text-green-500 mt-2">
              • Regulatory rules<br/>
              • ESG requirements<br/>
              • Risk limits
            </div>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 text-center">
            <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold text-purple-800">Gemini Pro</h4>
            <p className="text-sm text-purple-600 mt-1">AI Model</p>
            <div className="text-xs text-purple-500 mt-2">
              • Risk analysis<br/>
              • Pattern recognition<br/>
              • Insights generation
            </div>
          </div>
        </div>
      </div>

      {/* Agent Layer */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <Users className="h-5 w-5 text-indigo-600" />
          Multi-Agent Processing Layer
        </h3>
        
        {/* Conductor Agent */}
        <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-indigo-600 text-white p-3 rounded-full">
              <Cpu className="h-6 w-6" />
            </div>
          </div>
          <h4 className="text-center font-bold text-indigo-800 text-lg">Conductor Agent</h4>
          <p className="text-center text-indigo-600 text-sm mt-1">Orchestrates workflow and coordinates sub-agents</p>
        </div>

        {/* Sub-Agents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portfolio Exposure Agent */}
          <div className="relative">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-600 text-white p-2 rounded-full">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-orange-800">Portfolio Exposure Agent</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-700 text-sm">Responsibilities:</h5>
                  <ul className="text-xs text-orange-600 mt-1 space-y-1">
                    <li>• Calculate Value at Risk (VaR)</li>
                    <li>• Analyze portfolio volatility</li>
                    <li>• Compute Sharpe ratios</li>
                    <li>• Risk metric aggregation</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-700 text-sm">Outputs:</h5>
                  <div className="text-xs text-orange-600 mt-1">
                    VaR_95: -2.34%<br/>
                    Volatility: 12.67%<br/>
                    Sharpe Ratio: 1.89
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow to Conductor */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <ArrowRight className="h-6 w-6 text-indigo-400 rotate-[-90deg]" />
            </div>
          </div>

          {/* Compliance Agent */}
          <div className="relative">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-600 text-white p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
                <h4 className="font-bold text-emerald-800">Compliance Agent</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 text-sm">Responsibilities:</h5>
                  <ul className="text-xs text-emerald-600 mt-1 space-y-1">
                    <li>• Validate exposure limits</li>
                    <li>• Check ESG compliance</li>
                    <li>• Monitor regulatory rules</li>
                    <li>• Generate compliance reports</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-emerald-200">
                  <h5 className="font-semibold text-emerald-700 text-sm">Status Checks:</h5>
                  <div className="space-y-1 mt-1">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span className="text-emerald-600">Max Exposure: Passed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="h-3 w-3 text-green-500" />
                      <span className="text-emerald-600">ESG Compliance: Passed</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <AlertTriangle className="h-3 w-3 text-amber-500" />
                      <span className="text-emerald-600">Liquidity: Warning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow to Conductor */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <ArrowRight className="h-6 w-6 text-indigo-400 rotate-[-90deg]" />
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Arrows */}
      <div className="flex justify-center mb-8">
        <ArrowRight className="h-8 w-8 text-gray-400 rotate-90" />
      </div>

      {/* Output Layer */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <Monitor className="h-5 w-5 text-gray-600" />
          Presentation Layer
        </h3>
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg mb-3">
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800">Risk Dashboard</h4>
              <p className="text-sm text-gray-600 mt-1">Real-time risk metrics and VaR calculations</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg mb-3">
                <Shield className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800">Compliance Reports</h4>
              <p className="text-sm text-gray-600 mt-1">Regulatory status and compliance monitoring</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-lg mb-3">
                <FileText className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-gray-800">Analytics Reports</h4>
              <p className="text-sm text-gray-600 mt-1">Detailed portfolio analysis and insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Stack */}
      <div className="bg-gray-900 text-white rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Cpu className="h-5 w-5" />
          Technology Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">AI/ML</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Google ADK</li>
              <li>• Gemini Pro</li>
              <li>• NumPy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Data</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• BigQuery</li>
              <li>• AlloyDB</li>
              <li>• Cloud Storage</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-400 mb-2">Compute</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Agent Framework</li>
              <li>• Python Runtime</li>
              <li>• Async Processing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-orange-400 mb-2">Frontend</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• React</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;