"use client";

import React from 'react';

const Slide15: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        <span className="bg-green-400 px-3 py-1">Step 4: Sustainability KPIs - Product performance</span>
      </h1>

      {/* Main Content */}
      <div className="flex-1 flex gap-8">
        {/* Table Section */}
        <div className="flex-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800 border-b border-gray-700">
              <div className="text-white font-bold text-lg">Category</div>
              <div className="text-white font-bold text-lg">Key Performance Indicator (KPI)</div>
              <div className="text-white font-bold text-lg">Business Implication</div>
            </div>

            {/* Table Body */}
            <div className="p-6 space-y-4">
              {/* Category Row */}
              <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="text-white font-bold text-xl">Product Performance</h3>
              </div>

              {/* KPI Row 1 */}
              <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
                <div className="text-gray-400 font-medium"></div>
                <div className="text-white font-semibold">
                  Average Portfolio Luminous Efficacy (lm/W)
                </div>
                <div className="text-gray-300 leading-relaxed">
                  Tracks core energy efficiency; directly impacts customer operating costs and use-phase emissions.
                </div>
              </div>

              {/* KPI Row 2 */}
              <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
                <div className="text-gray-400 font-medium"></div>
                <div className="text-white font-semibold">
                  % of Revenue from Products with a Verified EPD
                </div>
                <div className="text-gray-300 leading-relaxed">
                  Measures market acceptance of sustainable products and progress in transparency.
                </div>
              </div>

              {/* KPI Row 3 */}
              <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
                <div className="text-gray-400 font-medium"></div>
                <div className="text-white font-semibold">
                  % of Product Portfolio Designed for Disassembly/Repair
                </div>
                <div className="text-gray-300 leading-relaxed">
                  Quantifies commitment to circular economy principles; reduces waste and creates service revenue opportunities.
                </div>
              </div>

              {/* KPI Row 4 */}
              <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
                <div className="text-gray-400 font-medium"></div>
                <div className="text-white font-semibold">
                  Average Recycled Aluminum Content (%)
                </div>
                <div className="text-gray-300 leading-relaxed">
                  Reduces embodied carbon footprint; de-risks supply chain from virgin material price volatility.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Circle Section */}
        <div className="w-80 flex items-center justify-center">
          <div className="relative w-64 h-64 rounded-full border-4 border-dashed border-green-500 flex items-center justify-center hover:scale-110 hover:border-green-400 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer">
            <div className="text-center px-6">
              <p className="text-2xl font-bold text-gray-800 leading-tight">
                create an internal product benchmark
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide15;
