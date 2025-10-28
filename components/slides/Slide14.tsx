"use client";

import React from 'react';

const Slide14: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Step 3: Portfolio Carbon or single score Matrix
      </h1>

      {/* Subtitle */}
      <h2 className="text-xl text-gray-700 mb-12 text-center">
        Create your own rating system
      </h2>

      {/* Main Content Container */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl flex gap-8">

          {/* Matrix Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 h-full">

              {/* Quadrant 1 - Top Left */}
              <div className="bg-gradient-to-br from-teal-900 to-teal-800 rounded-xl p-6 shadow-xl border-4 border-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 hover:-translate-y-2 hover:border-teal-500 cursor-pointer group">
                <div className="mb-4">
                  <span className="inline-block bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500">
                    SCALE OPPORTUNITY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-teal-200">
                  QUADRANT 1:<br/>Hidden Potential
                </h3>
                <div className="bg-teal-950/50 rounded-lg p-4 border border-teal-700">
                  <p className="text-teal-100 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                    Excellent environmental performance but underutilized.
                  </p>
                </div>
                <div className="mt-4 text-teal-300 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1">
                  ✓ Low carbon footprint<br/>
                  ✓ Growth potential<br/>
                  ✓ Market expansion ready
                </div>
              </div>

              {/* Quadrant 2 - Top Right */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-6 shadow-xl border-4 border-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 hover:-translate-y-2 hover:border-yellow-500 cursor-pointer group">
                <div className="mb-4">
                  <span className="inline-block bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-500">
                    MEDIUM PRIORITY
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-yellow-200">
                  QUADRANT 2:<br/>Inefficient Niche
                </h3>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
                  <p className="text-gray-100 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                    High emissions per unit, but low sales volume limits total impact.
                  </p>
                </div>
                <div className="mt-4 text-yellow-300 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1">
                  ⚠ High unit footprint<br/>
                  ⚠ Limited market reach<br/>
                  ⚠ Optimize if scaling
                </div>
              </div>

              {/* Quadrant 3 - Bottom Left */}
              <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl p-6 shadow-xl border-4 border-red-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 hover:-translate-y-2 hover:border-red-500 cursor-pointer group">
                <div className="mb-4">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 animate-pulse">
                    URGENT ACTION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-red-200">
                  QUADRANT 3:<br/>Carbon Hotspots
                </h3>
                <div className="bg-red-950/50 rounded-lg p-4 border border-red-700">
                  <p className="text-red-100 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                    High emissions AND high sales = Maximum total carbon impact.
                  </p>
                </div>
                <div className="mt-4 text-red-300 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1">
                  🚨 Highest total impact<br/>
                  🚨 Immediate redesign needed<br/>
                  🚨 Top strategic priority
                </div>
              </div>

              {/* Quadrant 4 - Bottom Right */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 shadow-xl border-4 border-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 hover:border-blue-500 cursor-pointer group">
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
                    MAINTAIN & PROMOTE
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-blue-200">
                  QUADRANT 4:<br/>Sustainable Stars
                </h3>
                <div className="bg-blue-950/50 rounded-lg p-4 border border-blue-700">
                  <p className="text-blue-100 text-sm leading-relaxed transition-all duration-300 group-hover:text-white">
                    Low emissions with high sales. Best-case scenario.
                  </p>
                </div>
                <div className="mt-4 text-blue-300 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1">
                  ⭐ Optimal performance<br/>
                  ⭐ Marketing advantage<br/>
                  ⭐ Industry leadership
                </div>
              </div>

            </div>

            {/* Axis Labels */}
            <div className="mt-4 flex justify-between text-sm font-semibold text-gray-700">
              <span className="text-left">← Low Sales Volume</span>
              <span className="text-right">High Sales Volume →</span>
            </div>
            <div className="flex items-center mt-8">
              <div className="text-sm font-semibold text-gray-700 -rotate-90 origin-center whitespace-nowrap absolute -left-4">
                ← Low CO₂ per unit
              </div>
              <div className="text-sm font-semibold text-gray-700 -rotate-90 origin-center whitespace-nowrap absolute -left-4" style={{marginTop: '200px'}}>
                High CO₂ per unit →
              </div>
            </div>
          </div>

          {/* Right Side - Benchmark Circle */}
          <div className="w-80 flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-8 border-dashed border-green-500 bg-green-50/30 flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-green-500/50 hover:rotate-12 hover:border-green-600 cursor-pointer group">
                <div className="text-center p-8">
                  <div className="text-5xl mb-4 transition-all duration-300 group-hover:scale-125">📊</div>
                  <p className="text-lg font-bold text-green-800 leading-tight transition-all duration-300 group-hover:text-green-600">
                    create an internal product benchmark
                  </p>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl transition-all duration-500 group-hover:bg-green-400/40 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Slide14;
