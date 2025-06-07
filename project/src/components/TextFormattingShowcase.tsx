import React from 'react';
import { ExternalLink, Code, FileText } from 'lucide-react';

const TextFormattingShowcase: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-5 w-5 text-indigo-600" />
        <h2 className="text-lg font-medium text-gray-900">Documentation & Formatting</h2>
      </div>
      
      <div className="space-y-6">
        {/* Headline */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2 border-b-2 border-gray-200 pb-2">
            Portfolio Risk Assessment Guidelines
          </h2>
        </div>

        {/* Bold and Italics */}
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Our risk management framework employs <strong className="font-semibold text-gray-900">advanced quantitative models</strong> to 
            assess portfolio exposure. The system continuously monitors <em className="italic text-gray-800">real-time market conditions</em> and 
            provides <strong className="font-semibold text-gray-900">comprehensive compliance reporting</strong> to ensure regulatory adherence.
          </p>
        </div>

        {/* Links */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">External Resources</h3>
          <div className="space-y-2">
            <a 
              href="https://www.sec.gov/investment" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
            >
              SEC Investment Guidelines
              <ExternalLink className="h-4 w-4" />
            </a>
            <br />
            <a 
              href="https://www.bis.org/basel_framework/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
            >
              Basel Framework Documentation
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <div className="w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <FileText className="h-12 w-12 text-gray-500" />
          </div>
          <p className="text-gray-600 text-sm">Risk Assessment Workflow Diagram</p>
          <p className="text-xs text-gray-500 mt-1">Visual representation of our multi-agent system</p>
        </div>

        {/* Code Block */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Code className="h-4 w-4 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Risk Calculation Example</h3>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="text-green-400">
{`# Calculate Value at Risk (VaR) at 95% confidence
def calculate_var_95(returns, weights):
    portfolio_return = np.sum(returns * weights)
    portfolio_volatility = np.sqrt(
        np.dot(weights.T, np.dot(np.cov(returns) * 252, weights))
    )
    var_95 = portfolio_return - 1.645 * portfolio_volatility
    return var_95

# Example usage
var_result = calculate_var_95(historical_returns, asset_weights)
print(f"Portfolio VaR (95%): {var_result:.2%}")`}
              </code>
            </pre>
          </div>
        </div>

        {/* Additional formatting examples */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <h3 className="font-semibold text-amber-800 mb-2">Key Risk Metrics</h3>
          <ul className="space-y-1 text-amber-700">
            <li><strong>Value at Risk (VaR)</strong>: Maximum expected loss over a specific time period</li>
            <li><strong>Sharpe Ratio</strong>: Risk-adjusted return measurement</li>
            <li><em>Volatility</em>: Standard deviation of portfolio returns</li>
          </ul>
        </div>

        {/* Quote-style formatting */}
        <blockquote className="border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50">
          <p className="text-indigo-800 italic">
            "Risk comes from not knowing what you're doing. Our multi-agent system provides 
            comprehensive visibility into portfolio exposure and compliance status."
          </p>
          <footer className="text-indigo-600 text-sm mt-2">— Portfolio Risk Management Team</footer>
        </blockquote>
      </div>
    </div>
  );
};

export default TextFormattingShowcase;