"use client";

import React from 'react';

const Slide13: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Step 3: Portfolio Carbon Impact Analysis
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl text-gray-700 mb-12 text-center">
        Scanning and analyzing product carbon emissions for strategic decision-making
      </h2>

      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left - Formula Visualization */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-300 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Carbon Impact Formula</h3>

                <div className="space-y-4">
                  {/* CO2 per unit */}
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-yellow-900 mb-1">CO₂ per unit</div>
                      <div className="text-2xl font-bold text-yellow-900">kg CO₂/unit</div>
                    </div>
                  </div>

                  {/* Multiply symbol */}
                  <div className="text-center">
                    <div className="inline-block bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:rotate-180 cursor-pointer">
                      ×
                    </div>
                  </div>

                  {/* Sales Volume */}
                  <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-orange-900 mb-1">Sales Volume</div>
                      <div className="text-2xl font-bold text-orange-900">units/year</div>
                    </div>
                  </div>

                  {/* Equals symbol */}
                  <div className="text-center">
                    <div className="inline-block bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg transition-all duration-300 hover:scale-125 hover:shadow-2xl hover:rotate-180 cursor-pointer">
                      =
                    </div>
                  </div>

                  {/* Total Impact */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-green-900 mb-1">Total CO₂ Impact</div>
                      <div className="text-2xl font-bold text-white">kg CO₂/year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Product Comparison Cards */}
            <div className="flex flex-col justify-center space-y-6">
              {/* High Impact Product */}
              <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 shadow-xl border-4 border-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🔥</div>
                  <h3 className="text-xl font-bold text-white">High Impact Product</h3>
                </div>
                <div className="bg-red-950/50 rounded-lg p-4 border border-red-700">
                  <p className="text-white font-semibold mb-2">Product B: Budget LED Floodlight</p>
                  <div className="space-y-1 text-red-100 text-sm">
                    <p><span className="font-bold text-yellow-300">15 kg CO₂</span> per unit</p>
                    <p className="flex items-center">
                      <span className="text-2xl mx-2">×</span>
                      <span className="font-bold text-yellow-300">1,000 units/year</span>
                    </p>
                    <div className="border-t border-red-700 my-2"></div>
                    <p className="flex items-center">
                      <span className="text-2xl mx-2">=</span>
                      <span className="font-bold text-2xl text-red-300">15,000 kg CO₂/year</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Low Impact Product */}
              <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl p-6 shadow-xl border-4 border-green-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🌱</div>
                  <h3 className="text-xl font-bold text-white">Low Impact Product</h3>
                </div>
                <div className="bg-green-950/50 rounded-lg p-4 border border-green-700">
                  <p className="text-white font-semibold mb-2">Product A: Premium LED Downlight</p>
                  <div className="space-y-1 text-green-100 text-sm">
                    <p><span className="font-bold text-lime-300">5 kg CO₂</span> per unit</p>
                    <p className="flex items-center">
                      <span className="text-2xl mx-2">×</span>
                      <span className="font-bold text-lime-300">1,000 units/year</span>
                    </p>
                    <div className="border-t border-green-700 my-2"></div>
                    <p className="flex items-center">
                      <span className="text-2xl mx-2">=</span>
                      <span className="font-bold text-2xl text-green-300">5,000 kg CO₂/year</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Action Items */}
            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Strategic Actions</h3>

                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-x-2 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-125">🎯</div>
                      <div>
                        <p className="font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">Priority #1 for redesign efforts</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-x-2 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-125">♻️</div>
                      <div>
                        <p className="font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Material substitution analysis</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-x-2 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-125">🔧</div>
                      <div>
                        <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Evaluate component alternatives</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-x-2 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-125">📈</div>
                      <div>
                        <p className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Set quantified reduction targets</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-md border-l-4 border-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-x-2 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl transition-transform duration-300 group-hover:scale-125">🌍</div>
                      <div>
                        <p className="font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Supply chain optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide13;
