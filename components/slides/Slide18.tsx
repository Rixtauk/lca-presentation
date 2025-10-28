"use client";

import React from 'react';
import Image from 'next/image';

const Slide18: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col items-center justify-center overflow-auto">
      {/* Logo Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-gray-900 mb-3">
          LCA<span className="text-green-500">=</span>CALC
        </h1>
        <p className="text-lg text-gray-600 tracking-wider uppercase">
          SMART ECO-LIGHTING METRICS
        </p>
      </div>

      {/* Main Message */}
      <div className="text-center mb-16 max-w-4xl">
        <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Decision-makers need informed data.
        </h2>
        <p className="text-3xl font-semibold text-blue-600 leading-relaxed">
          TOGETHER, LET'S MAKE THE LIGHTING INDUSTRY MORE SUSTAINABLE
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-2 gap-16 mt-auto">
        {/* Left - QR Code and Website */}
        <div className="flex flex-col items-center space-y-4 group">
          {/* QR Code */}
          <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center border-4 border-gray-300 group-hover:border-green-400 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 cursor-pointer overflow-hidden">
            <Image
              src="/images/qr-code.png"
              alt="LCA-CALC Website QR Code"
              width={192}
              height={192}
              className="object-contain"
              priority
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">WEB</p>
            <a
              href="https://www.lca-calc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-400 hover:decoration-blue-600 transition-all duration-300 inline-block hover:scale-110"
            >
              www.lca-calc.com
            </a>
          </div>
        </div>

        {/* Right - Email Contact */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-center space-y-3 group cursor-pointer">
            <p className="text-sm text-gray-500 uppercase tracking-wide">E-Mail</p>
            <p className="text-2xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              Tiphaine Treins
            </p>
            <a
              href="mailto:tiphaine@lca-calc.com"
              className="text-xl font-medium text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-400 hover:decoration-blue-600 transition-all duration-300 inline-block hover:scale-110"
            >
              tiphaine@lca-calc.com
            </a>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 flex items-center justify-center space-x-3">
            <div className="w-12 h-1 bg-green-400 rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="mt-16 text-center">
        <p className="text-sm text-gray-400 italic">
          Turning environmental data into actionable business intelligence
        </p>
      </div>
    </div>
  );
};

export default Slide18;
