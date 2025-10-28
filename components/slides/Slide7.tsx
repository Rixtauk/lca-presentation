"use client";

import React, { useState } from 'react';

const Slide7: React.FC = () => {
  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const componentData = [
    { name: 'Aluminium Housing', percentage: 45, color: 'bg-green-500', hoverColor: 'bg-green-600' },
    { name: 'LED Driver', percentage: 25, color: 'bg-blue-500', hoverColor: 'bg-blue-600' },
    { name: 'Optical Components', percentage: 18, color: 'bg-orange-500', hoverColor: 'bg-orange-600' },
    { name: 'Other Components', percentage: 12, color: 'bg-gray-400', hoverColor: 'bg-gray-500' },
  ];

  const impactAreas = [
    'Aluminium extraction & processing - primary contributor to carbon footprint',
    'Rare earth elements in LEDs - resource depletion concerns',
    'Electronic component manufacturing - toxicity impacts',
    'Transportation & logistics - secondary emission source',
    'Electricity consumption',
  ];

  const environmentalCategories = [
    { code: 'CC', name: 'Climate Change', unit: 'kg CO₂ eq' },
    { code: 'OD', name: 'Ozone Depletion', unit: 'kg CFC11 eq' },
    { code: 'IR', name: 'Ionizing Radiation', unit: 'kBq U-235 eq' },
    { code: 'POF', name: 'Photochemical Ozone Formation', unit: '' },
    { code: 'RUMM', name: 'Resource Use - Minerals & Metals', unit: '' },
    { code: 'RUF', name: 'Resource use, fossils', unit: '' },
    { code: 'A', name: 'Acidification', unit: 'mol H+ eq' },
  ];

  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        Step 1:{' '}
        <span className="bg-green-400 px-3 py-1">Identifying hotspots - case study</span>
      </h1>

      {/* Three Columns Layout */}
      <div className="flex-1 grid grid-cols-3 gap-8">
        {/* Column 1 - Component Impact Contribution */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Component Impact Contribution
          </h2>

          <div className="space-y-6">
            {componentData.map((component, index) => (
              <div
                key={index}
                className="transition-all duration-300"
                onMouseEnter={() => setHoveredBar(component.name)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">{component.name}</span>
                  <span className="text-lg font-bold text-gray-800">{component.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden shadow-inner">
                  <div
                    className={`h-full ${hoveredBar === component.name ? component.hoverColor : component.color} transition-all duration-500 ease-out flex items-center justify-end pr-3`}
                    style={{
                      width: `${component.percentage}%`,
                      transform: hoveredBar === component.name ? 'scaleY(1.1)' : 'scaleY(1)',
                    }}
                  >
                    <span className="text-white font-bold text-sm">{component.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-3">
              {componentData.map((component, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${component.color}`}></div>
                  <span className="text-xs text-gray-600">{component.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2 - Key Environmental Impact Areas */}
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 border-2 border-orange-300 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Key Environmental Impact Areas
          </h2>

          <div className="space-y-4">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-orange-200"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed flex-1">
                    {area}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Warning Icon */}
          <div className="mt-6 flex items-center justify-center">
            <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
          </div>
        </div>

        {/* Column 3 - Environmental Impact Categories */}
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Environmental Impact Categories
          </h2>

          <div className="space-y-3">
            {environmentalCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {category.code}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">
                      {category.name}
                    </h3>
                    {category.unit && (
                      <p className="text-xs text-gray-600 italic">
                        ({category.unit})
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Icon */}
          <div className="mt-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Impact analysis based on comprehensive Life Cycle Assessment methodology
        </p>
      </div>
    </div>
  );
};

export default Slide7;
