"use client";

import React from 'react';

const Slide16: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        <span className="bg-green-400 px-3 py-1">Step 4: Sustainability KPIs - Supply chain & circularity</span>
      </h1>

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl max-w-6xl">
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
              <h3 className="text-white font-bold text-xl">Supply Chain & Circularity</h3>
            </div>

            {/* KPI Row 1 */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
              <div className="text-gray-400 font-medium"></div>
              <div className="text-white font-semibold">
                Scope 3 GHG Emissions (Category 1: Purchased Goods)
              </div>
              <div className="text-gray-300 leading-relaxed">
                Addresses the largest source of emissions for most manufacturers; requires deep supplier engagement.
              </div>
            </div>

            {/* KPI Row 2 */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
              <div className="text-gray-400 font-medium"></div>
              <div className="text-white font-semibold">
                E-waste Recycling/Refurbishment Rate (%)
              </div>
              <div className="text-gray-300 leading-relaxed">
                Measures the effectiveness of take-back programs and commitment to producer responsibility.
              </div>
            </div>

            {/* KPI Row 3 */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-gray-800 rounded-lg hover:bg-gray-750 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer border border-transparent hover:border-green-400">
              <div className="text-gray-400 font-medium"></div>
              <div className="text-white font-semibold">
                % of Key Suppliers with Validated Science-Based Targets
              </div>
              <div className="text-gray-300 leading-relaxed">
                Extends sustainability expectations into the supply chain, reducing upstream risk and impact.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-12 max-w-6xl">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Key Insight:</span> These KPIs provide measurable targets
              that align sustainability initiatives with business objectives, enabling tracking of progress and
              demonstrating commitment to stakeholders and regulatory bodies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide16;
