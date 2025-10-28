"use client";

import React from 'react';

const Slide10: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        <span className="bg-green-400 px-3 py-1">Step 2: EPDs</span>
      </h1>

      {/* Two Column Layout */}
      <div className="flex-1 grid grid-cols-2 gap-12">
        {/* Left Column - Diagram */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Center Circle - EPDs Publisher */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center shadow-xl z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
              <div className="text-center text-white">
                <div className="text-lg font-bold">EPDs</div>
                <div className="text-sm">publisher</div>
              </div>
            </div>

            {/* Top Circle - Third Party Verifier */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
              <div className="text-center text-white px-4">
                <div className="text-sm font-medium leading-tight">Third party</div>
                <div className="text-sm font-medium leading-tight">verifiefr - ap-</div>
                <div className="text-sm font-medium leading-tight">proved by EPD</div>
                <div className="text-sm font-medium leading-tight">publisher</div>
              </div>
            </div>

            {/* Bottom Left Circle - LCA-CALC */}
            <div className="absolute bottom-12 left-8 w-48 h-48 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
              <div className="text-center text-white">
                <div className="text-lg font-bold">LCA-CALC</div>
                <div className="text-sm mt-1">Automated</div>
                <div className="text-sm">pre-verified</div>
                <div className="text-sm">EPDs</div>
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
                </marker>
              </defs>
              {/* Dotted connecting lines */}
              <line x1="120" y1="130" x2="200" y2="180" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="200" y1="220" x2="280" y2="200" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="140" y1="280" x2="260" y2="240" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

          {/* Bottom Info Box */}
          <div className="mt-8 bg-indigo-700 text-white rounded-lg p-6 max-w-md shadow-lg">
            <p className="text-sm leading-relaxed text-center">
              <span className="font-semibold">Automated pre-verified EPDs available on LCA-CALC for the following publishers:</span>
              <br />
              EPDs international - PEP Ecopoassport - EPD Hub - CSA
            </p>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Environmental Product Declaration Section */}
          <div className="transition-all duration-300 ease-in-out hover:translate-x-2 p-4 rounded-lg hover:bg-green-50 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-green-600">Environmental Product Declaration</span> (EPD)
            </h2>
            <div className="space-y-3">
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Must be verified by certified Third-party provider - cost +/- 3000$ per product
                </p>
              </div>
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Standardized format (EN 15804, ISO 14025)
                </p>
              </div>
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Enables comparison between products
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="transition-all duration-300 ease-in-out hover:translate-x-2 p-4 rounded-lg hover:bg-indigo-50 hover:shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">Benefits</h2>
            <div className="space-y-3">
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Required for green building certifications
                </p>
              </div>
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wins tenders in public procurement
                </p>
              </div>
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Builds trust with specifiers
                </p>
              </div>
              <div className="flex items-start transition-all duration-200 hover:translate-x-1">
                <span className="text-gray-700 text-xl mr-3">&gt;</span>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Proves claims with data, not marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10;
