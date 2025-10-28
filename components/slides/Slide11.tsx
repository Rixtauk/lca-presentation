"use client";

import React from 'react';

const Slide11: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="bg-green-400 px-3 py-1">Step 3: ERP-PLM-LCA Integration Ecosystem - For New Products</span>
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl text-gray-700 mb-12 text-center">
        Understanding System Relationships for Sustainable Manufacturing
      </h2>

      {/* Main Diagram Container */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-6xl">
          {/* System Integration Diagram */}
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center justify-between gap-4">
              {/* CAD Box */}
              <div className="flex-shrink-0">
                <div className="w-32 h-24 border-4 border-indigo-600 rounded-lg flex items-center justify-center bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-300 hover:border-indigo-500 hover:-translate-y-1 cursor-pointer">
                  <div className="text-center">
                    <div className="text-xl font-bold text-indigo-600 transition-colors duration-300 hover:text-indigo-700">CAD</div>
                    <div className="text-xs text-gray-600">software</div>
                  </div>
                </div>
              </div>

              {/* Dotted Line */}
              <div className="w-8 border-t-4 border-dotted border-gray-400"></div>

              {/* PLM System Box */}
              <div className="flex-shrink-0">
                <div className="w-40 border-4 border-purple-600 rounded-lg p-4 bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-300 hover:border-purple-500 hover:-translate-y-1 cursor-pointer">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600 mb-2 transition-colors duration-300">PLM System</div>
                    <div className="text-xs text-gray-700 space-y-1">
                      <p>Complete BOM</p>
                      <p>Materials & Masses</p>
                      <p>Manufacturing Data</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-center mt-2 font-semibold">Product Lifecycle Management</div>
                </div>
              </div>

              {/* Dotted Line */}
              <div className="w-8 border-t-4 border-dotted border-gray-400"></div>

              {/* Data Section */}
              <div className="flex-1 border-4 border-dashed border-gray-400 rounded-lg p-4 bg-gray-50 transition-all duration-300 hover:border-gray-500 hover:bg-gray-100">
                <div className="space-y-2">
                  <div className="bg-white border border-gray-300 rounded p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400 hover:-translate-y-0.5 cursor-pointer">
                    <div className="font-bold text-sm text-gray-800 transition-colors duration-300">Material Quantities</div>
                    <div className="text-xs text-gray-600">Mass and type of each material in the BOM</div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400 hover:-translate-y-0.5 cursor-pointer">
                    <div className="font-bold text-sm text-gray-800 transition-colors duration-300">Product Specifications</div>
                    <div className="text-xs text-gray-600">Technical details affecting lifecycle</div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400 hover:-translate-y-0.5 cursor-pointer">
                    <div className="font-bold text-sm text-gray-800 transition-colors duration-300">Manufacturing Processes</div>
                    <div className="text-xs text-gray-600">Production methods and energy consumption</div>
                  </div>
                  <div className="bg-white border border-gray-300 rounded p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400 hover:-translate-y-0.5 cursor-pointer">
                    <div className="font-bold text-sm text-gray-800 transition-colors duration-300">End-of-Life Instructions</div>
                    <div className="text-xs text-gray-600">Disassembly and recycling guidelines</div>
                  </div>
                </div>
              </div>

              {/* API and Arrow */}
              <div className="flex items-center gap-2">
                <div className="w-8 border-t-4 border-dotted border-gray-400"></div>
                <div className="px-2 py-1 border-2 border-gray-400 rounded bg-white text-xs font-bold transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-green-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 cursor-pointer animate-pulse">API</div>
                <div className="w-8 border-t-4 border-dotted border-green-500"></div>
              </div>

              {/* LCA-CALC Box */}
              <div className="flex-shrink-0">
                <div className="w-48 border-4 border-green-600 rounded-lg p-4 bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-300 hover:border-green-500 hover:-translate-y-1 cursor-pointer">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600 transition-colors duration-300">LCA=CALC</div>
                    <div className="text-xs text-gray-600 mb-2">SMART ECO-LIGHTING METRICS</div>
                    <div className="text-xs text-gray-700 font-semibold">Automated<br/>Environmental<br/>Calculations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Loop */}
            <div className="mt-12 relative">
              {/* Bottom Section - Live Material Analysis */}
              <div className="bg-green-50 border-4 border-green-500 rounded-lg p-4 transition-all duration-300 hover:bg-green-100 hover:border-green-600 hover:shadow-xl hover:shadow-green-200">
                <div className="text-center mb-3">
                  <div className="inline-block border-2 border-gray-800 rounded px-3 py-1 bg-white transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-green-600 cursor-pointer">
                    <span className="font-bold text-sm">Live material analysis</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-start transition-all duration-300 hover:translate-x-1 cursor-pointer group">
                      <span className="text-green-600 mr-2 transition-all duration-300 group-hover:scale-125">&gt;</span>
                      <span className="group-hover:text-green-700 group-hover:font-semibold transition-all duration-300">Improving material use</span>
                    </div>
                    <div className="flex items-start transition-all duration-300 hover:translate-x-1 cursor-pointer group">
                      <span className="text-green-600 mr-2 transition-all duration-300 group-hover:scale-125">&gt;</span>
                      <span className="group-hover:text-green-700 group-hover:font-semibold transition-all duration-300">Multi scenario tests</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-start transition-all duration-300 hover:translate-x-1 cursor-pointer group">
                      <span className="text-green-600 mr-2 transition-all duration-300 group-hover:scale-125">&gt;</span>
                      <span className="group-hover:text-green-700 group-hover:font-semibold transition-all duration-300">Model circularity options</span>
                    </div>
                    <div className="flex items-start transition-all duration-300 hover:translate-x-1 cursor-pointer group">
                      <span className="text-green-600 mr-2 transition-all duration-300 group-hover:scale-125">&gt;</span>
                      <span className="group-hover:text-green-700 group-hover:font-semibold transition-all duration-300">Defining re-use compo-</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dotted Arrow Back */}
              <svg className="absolute -top-8 left-0 right-0 w-full h-8" viewBox="0 0 1000 50" preserveAspectRatio="none">
                <defs>
                  <marker id="arrowback" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto">
                    <polygon points="10 0, 10 10, 0 5" fill="#10b981" />
                  </marker>
                </defs>
                <path
                  d="M 950 10 L 50 10 L 50 40"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="6,6"
                  markerEnd="url(#arrowback)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide11;
