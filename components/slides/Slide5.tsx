"use client";

import React from 'react';

const Slide5: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-8">
        Step 1:{' '}
        <span className="bg-green-400 px-3 py-1">WHAT IS A LCA?</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-gray-700 mb-12 leading-relaxed max-w-6xl">
        A Life Cycle Assessment evaluates the environmental footprint of an object from cradle to grave.
        It is a standardised process defined by standards, PCR and PSR.
      </p>

      {/* Two Diagrams Side by Side */}
      <div className="flex-1 grid grid-cols-2 gap-12">
        {/* Left Diagram - Circular LCA Flow */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full aspect-square max-w-lg">
            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gray-100 border-4 border-gray-300 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">LCA</div>
                <div className="text-sm text-gray-600">(Life cycle</div>
                <div className="text-sm text-gray-600">assessment)</div>
              </div>
            </div>

            {/* Resource Extraction - Top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 group cursor-pointer transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
                </svg>
                <div className="text-xs font-semibold text-center whitespace-nowrap">resource extraction</div>
              </div>
            </div>

            {/* Production - Top Right */}
            <div className="absolute top-8 right-8 group cursor-pointer transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4z"/>
                </svg>
                <div className="text-xs font-semibold text-center">production</div>
              </div>
            </div>

            {/* Distribution - Right */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 group cursor-pointer transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5M6 18.5A1.5 1.5 0 014.5 17 1.5 1.5 0 016 15.5 1.5 1.5 0 017.5 17 1.5 1.5 0 016 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-5l-3-4z"/>
                </svg>
                <div className="text-xs font-semibold text-center">distribution</div>
              </div>
            </div>

            {/* Consumption/Use - Bottom Right */}
            <div className="absolute bottom-8 right-8 group cursor-pointer transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <div className="text-xs font-semibold text-center">consumption/use</div>
              </div>
            </div>

            {/* Disposal - Bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 group cursor-pointer transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all">
                <svg className="w-12 h-12 mx-auto mb-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"/>
                </svg>
                <div className="text-xs font-semibold text-center">disposal</div>
              </div>
            </div>

            {/* Recycling - Bottom Left */}
            <div className="absolute bottom-8 left-8 group cursor-pointer transition-all duration-300 hover:scale-110">
              <div className="bg-white rounded-lg p-4 shadow-md border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all">
                <svg className="w-12 h-12 mx-auto mb-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.82 15.42l-2.5-4.33a1 1 0 00-1.73 0l-2.5 4.33a1 1 0 00.87 1.5h1v2a1 1 0 001 1h2a1 1 0 001-1v-2h1a1 1 0 00.86-1.5M6.82 15.42l-2.5-4.33a1 1 0 00-1.73 0l-2.5 4.33a1 1 0 00.87 1.5h1v2a1 1 0 001 1h2a1 1 0 001-1v-2h1a1 1 0 00.86-1.5m6-10.84l-2.5-4.33a1 1 0 00-1.73 0L6.09 4.58a1 1 0 00.87 1.5h1v2a1 1 0 001 1h2a1 1 0 001-1v-2h1a1 1 0 00.86-1.5"/>
                </svg>
                <div className="text-xs font-semibold text-center text-green-600">recycling</div>
              </div>
            </div>

            {/* Circular Arrows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#60a5fa" />
                </marker>
              </defs>
              <circle cx="200" cy="200" r="150" fill="none" stroke="#60a5fa" strokeWidth="3" strokeDasharray="10,5" opacity="0.3"/>
            </svg>
          </div>
        </div>

        {/* Right Diagram - Stages Breakdown */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Section A */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-gray-800">A. Construction & Installation</h3>
                  <span className="bg-green-400 text-white text-xs font-bold px-2 py-1 rounded">REUSE</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• A1. MATERIAL EXTRACTION</li>
                  <li>• A2. TRANSPORT</li>
                  <li>• A3. MANUFACTURING</li>
                  <li>• A4. TRANSPORT</li>
                  <li>• A5. INSTALLATION</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section B */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">B. Maintenance</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• B2. MAINTENANCE</li>
                  <li>• B6. ENERGY IN USE</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section C */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">C. Deconstruction & Disposal</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• C1. DEINSTALLATION</li>
                  <li>• C2. TRANSPORT</li>
                  <li>• C3. WASTE PROCESSING</li>
                  <li>• C4. DISPOSAL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
