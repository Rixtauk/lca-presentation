"use client";

import React, { useState } from 'react';

const Slide4: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  const handleClick = () => {
    if (visibleSteps < 4) {
      setVisibleSteps(visibleSteps + 1);
    }
  };

  return (
    <div
      className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto cursor-pointer"
      onClick={handleClick}
    >
      {/* Title */}
      <h1 className="text-5xl font-bold mb-16">
        The four steps of{' '}
        <span className="bg-green-400 px-3 py-1">LCA maturity</span>
      </h1>

      {/* Four Steps */}
      <div className="flex-1 grid grid-cols-4 gap-8">
        {/* Step 1 - Pilot */}
        <div className={`flex flex-col items-center transition-opacity duration-500 ${
          visibleSteps >= 1 ? 'opacity-100 animate-in fade-in' : 'opacity-0'
        }`}>
          <div className="w-32 h-32 rounded-full bg-gray-400 flex items-center justify-center mb-6">
            <span className="text-white text-5xl font-bold">1</span>
          </div>
          <div className="w-24 h-24 mb-6 flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pilot</h2>
          <div className="text-center space-y-2">
            <p className="text-base text-gray-700">• Understanding regulatory requirements</p>
            <p className="text-base text-gray-700">• Building internal awareness and capability</p>
          </div>
        </div>

        {/* Step 2 - EPDs */}
        <div className={`flex flex-col items-center transition-opacity duration-500 ${
          visibleSteps >= 2 ? 'opacity-100 animate-in fade-in' : 'opacity-0'
        }`}>
          <div className="w-32 h-32 rounded-full bg-blue-900 flex items-center justify-center mb-6">
            <span className="text-white text-5xl font-bold">2</span>
          </div>
          <div className="w-24 h-24 mb-6 flex items-center justify-center">
            <svg className="w-20 h-20 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">EPDs</h2>
          <div className="text-center space-y-2">
            <p className="text-base text-gray-700">• building market trust.</p>
            <p className="text-base text-gray-700">• Meeting tender requirements and green building standards</p>
            <p className="text-base text-gray-700">• Building trust with sustainability-conscious customers</p>
          </div>
        </div>

        {/* Step 3 - PLM Integration */}
        <div className={`flex flex-col items-center transition-opacity duration-500 ${
          visibleSteps >= 3 ? 'opacity-100 animate-in fade-in' : 'opacity-0'
        }`}>
          <div className="w-32 h-32 rounded-full bg-blue-400 flex items-center justify-center mb-6">
            <span className="text-white text-5xl font-bold">3</span>
          </div>
          <div className="w-24 h-24 mb-6 flex items-center justify-center">
            <svg className="w-20 h-20 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">PLM Integration</h2>
          <div className="text-center space-y-2">
            <p className="text-base text-gray-700">• automated data input</p>
            <p className="text-base text-gray-700">• Supplier data integrated into procurement systems</p>
            <p className="text-base text-gray-700">• Real-time environmental feedback for engineers</p>
          </div>
        </div>

        {/* Step 4 - Enterprise KPIs */}
        <div className={`flex flex-col items-center transition-opacity duration-500 ${
          visibleSteps >= 4 ? 'opacity-100 animate-in fade-in' : 'opacity-0'
        }`}>
          <div className="w-32 h-32 rounded-full bg-green-500 flex items-center justify-center mb-6">
            <span className="text-white text-5xl font-bold">4</span>
          </div>
          <div className="w-24 h-24 mb-6 flex items-center justify-center">
            <svg className="w-20 h-20 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enterprise KPIs</h2>
          <div className="text-center space-y-2">
            <p className="text-base text-gray-700">• Sustainability driving business decisions and profitability.</p>
            <p className="text-base text-gray-700">• Sustainability KPIs linked to business performance</p>
            <p className="text-base text-gray-700">• Revenue growth through premium positioning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
