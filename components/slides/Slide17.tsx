"use client";

import React from 'react';

const Slide17: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        <span className="bg-green-400 px-3 py-1">Next Steps: From Insight to Action?</span>
      </h1>

      {/* Three Column Layout */}
      <div className="flex-1 flex gap-8 mb-12">
        {/* Left Column - Free Pilot */}
        <div className="flex-1 relative border-4 border-dashed border-green-500 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:border-green-400 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer group">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg group-hover:scale-110 transition-all duration-300">
            FREE PILOT
          </div>

          <div className="text-center space-y-6">
            <div className="text-8xl font-bold text-green-500 group-hover:text-green-600 transition-colors duration-300">
              30 min
            </div>
            <div className="text-3xl font-bold text-gray-800">
              Design Diagnostic
            </div>
            <div className="text-lg text-gray-600 leading-relaxed max-w-sm">
              Book a complimentary session to identify specific opportunities within your product portfolio
            </div>
          </div>
        </div>

        {/* Middle Column - Benefits */}
        <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center space-y-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer">
          <div className="text-center space-y-6">
            <div className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-300">
              Save on LCA metrics
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-300">
              Save on material cost
            </div>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            <div className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
              Win Green tender
            </div>
          </div>
        </div>

        {/* Right Column - Regulatory Deadline */}
        <div className="flex-1 relative border-4 border-dashed border-green-500 rounded-2xl p-8 flex flex-col items-center justify-center hover:scale-105 hover:border-green-400 hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer group">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg group-hover:scale-110 transition-all duration-300">
            Be DPP ready
          </div>

          <div className="text-center space-y-6">
            <div className="text-8xl font-bold text-green-500 group-hover:text-green-600 transition-colors duration-300">
              2028
            </div>
            <div className="text-3xl font-bold text-gray-800">
              Regulatory Deadline
            </div>
            <div className="text-lg text-gray-600 leading-relaxed max-w-sm">
              Be fully prepared for CSRD and Green Claims Directive implementation
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full Width Text */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
        <p className="text-white text-xl text-center leading-relaxed">
          <span className="font-bold text-2xl">Transform compliance into competitive advantage.</span>
          <br />
          LCA data is no longer just a regulatory checkbox - it's a strategic tool that drives cost savings,
          unlocks new revenue opportunities, and positions your brand as an industry leader in sustainability.
        </p>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Join leading manufacturers who are turning environmental transparency into a profit driver
        </p>
      </div>
    </div>
  );
};

export default Slide17;
