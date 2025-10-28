import React from 'react';

const Slide2: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        What is the digital passport:{' '}
        <span className="bg-green-400 px-3 py-1">DPP</span>
      </h1>

      {/* Two Column Layout */}
      <div className="flex-1 grid grid-cols-2 gap-12">
        {/* Left Column - What is it? */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">What is it?</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">&gt;</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Dynamic digital record for each product
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">&gt;</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Accessible via QR code to all stakeholders
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">&gt;</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Makes data transparency mandatory
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-2xl mr-4">&gt;</span>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Enables objective product comparisons
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Timeline & Impact */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Timeline & Impact</h2>
          <div className="space-y-6">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
              <p className="text-xl font-semibold">First working plan: April 2025</p>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer">
              <p className="text-xl font-semibold">Central DPP registry: July 2026</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] hover:bg-green-600 transition-all duration-300 ease-in-out cursor-pointer">
              <p className="text-xl font-semibold mb-2">Lighting industry: expected in 2028</p>
              <p className="text-base opacity-90">Complete luminaire & components coverage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="mt-12 bg-gray-900 text-white text-center py-6 rounded-lg">
        <p className="text-3xl font-bold">The time to prepare is NOW</p>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <p className="text-sm text-gray-500">In partnership with LIFECAL</p>
      </div>
    </div>
  );
};

export default Slide2;
