"use client";

import React from 'react';

const Slide12: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        <span className="bg-green-400 px-3 py-1">Step 3: ERP-PLM-LCA Benefits</span>
      </h1>

      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl">
          <div className="flex items-center justify-between gap-6">

            {/* Left Side - Input Systems */}
            <div className="flex-shrink-0 space-y-4 w-64">
              {/* PLM System */}
              <div className="border-4 border-purple-600 rounded-lg p-4 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-300 hover:border-purple-500 hover:-translate-y-1 cursor-pointer">
                <div className="text-lg font-bold text-purple-600 mb-3 transition-colors duration-300">PLM System</div>
                <div className="text-sm text-gray-700 space-y-1 mb-3">
                  <p>Complete BOM</p>
                  <p>Materials & Masses</p>
                  <p>Manufacturing Data</p>
                </div>
                <div className="text-xs text-gray-600 font-semibold">Product Lifecycle Management</div>
              </div>

              {/* ERP System */}
              <div className="border-4 border-blue-600 rounded-lg p-4 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300 hover:border-blue-500 hover:-translate-y-1 cursor-pointer">
                <div className="text-lg font-bold text-blue-600 mb-3 transition-colors duration-300">ERP System</div>
                <div className="text-sm text-gray-700 space-y-1 mb-3">
                  <p>Business transactions</p>
                  <p>Procurement & Inventory</p>
                  <p>Production & Financial operations</p>
                </div>
                <div className="text-xs text-gray-600 font-semibold">Enterprise Resource Planning</div>
              </div>

              {/* EPDs from supply chain */}
              <div className="border-4 border-blue-600 rounded-lg p-4 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-300 hover:border-blue-500 hover:-translate-y-1 cursor-pointer">
                <div className="text-lg font-bold text-blue-600 mb-3 transition-colors duration-300">EPDs from supply chain</div>
                <div className="text-sm text-gray-700">
                  <p className="flex items-center">
                    <span className="text-blue-600 mr-2">&gt;</span>
                    Module A1 data
                  </p>
                </div>
              </div>
            </div>

            {/* Dotted Line with API */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-24 border-l-4 border-dotted border-gray-400"></div>
              <div className="px-3 py-1 border-2 border-gray-400 rounded bg-white text-xs font-bold transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-green-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 cursor-pointer animate-pulse">
                API
              </div>
              <div className="h-24 border-l-4 border-dotted border-green-500"></div>
            </div>

            {/* Center - LCA CALC */}
            <div className="flex-shrink-0">
              <div className="w-56 border-4 border-green-600 rounded-lg p-6 bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-300 hover:border-green-500 hover:-translate-y-2 cursor-pointer">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2 transition-colors duration-300">LCA=CALC</div>
                  <div className="text-sm text-gray-600 mb-3 font-semibold">SMART ECO-LIGHTING METRICS</div>
                  <div className="text-sm text-gray-700 font-semibold leading-relaxed">
                    Automated<br/>Environmental<br/>Calculations
                  </div>
                </div>
              </div>
            </div>

            {/* Dotted Line with API */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-24 border-l-4 border-dotted border-green-500"></div>
              <div className="px-3 py-1 border-2 border-gray-400 rounded bg-white text-xs font-bold transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-green-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 cursor-pointer animate-pulse">
                API
              </div>
              <div className="h-24 border-l-4 border-dotted border-gray-400"></div>
            </div>

            {/* Right Side - Outputs */}
            <div className="flex-shrink-0 space-y-6 w-72">
              {/* Complying with markets access regulations */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-300 hover:rotate-6">
                  <div className="text-3xl">🌍</div>
                </div>
                <div className="flex-1 bg-white border-2 border-red-500 rounded-lg p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-red-600 hover:-translate-x-2">
                  <p className="text-sm font-bold text-gray-800">Complying with markets access regulations</p>
                </div>
              </div>

              {/* Eco-design */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-300 hover:rotate-6">
                  <div className="text-3xl">🎨</div>
                </div>
                <div className="flex-1 bg-white border-2 border-orange-500 rounded-lg p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-600 hover:-translate-x-2">
                  <p className="text-sm font-bold text-gray-800 mb-2">Eco-design</p>
                  <div className="text-xs text-gray-700 space-y-0.5">
                    <p><span className="text-orange-600">&gt;</span> procurement</p>
                    <p><span className="text-orange-600">&gt;</span> material</p>
                    <p><span className="text-orange-600">&gt;</span> circular design</p>
                  </div>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-300 hover:rotate-6">
                  <div className="text-3xl">📢</div>
                </div>
                <div className="flex-1 bg-white border-2 border-pink-500 rounded-lg p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-pink-600 hover:-translate-x-2">
                  <p className="text-sm font-bold text-gray-800 mb-2">Marketing</p>
                  <div className="text-xs text-gray-700 space-y-0.5">
                    <p><span className="text-pink-600">&gt;</span> Green procurement</p>
                    <p><span className="text-pink-600">&gt;</span> ESG</p>
                    <p><span className="text-pink-600">&gt;</span> scope 3</p>
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

export default Slide12;
