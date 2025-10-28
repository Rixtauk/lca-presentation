import React from 'react';

const Slide3: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        Digital Product Passport:{' '}
        <span className="bg-green-400 px-3 py-1">What Data You'll Need</span>
      </h1>

      {/* 2x2 Grid */}
      <div className="flex-1 grid grid-cols-2 gap-8">
        {/* General Information */}
        <div className="border-4 border-blue-600 rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-blue-700 transition-all duration-300 ease-in-out cursor-pointer bg-white">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">General Information</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>• Unique Product Identifier (QR/RFID)</li>
            <li>• Manufacturer & Contact Information</li>
            <li>• Product Name, Model, Version</li>
            <li>• Date of Manufacture</li>
            <li>• Country of Origin</li>
            <li>• Compliance Declarations (CE, RoHS, REACH)</li>
          </ul>
        </div>

        {/* Environmental Impact */}
        <div className="bg-green-100 rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:bg-green-200 transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Environmental Impact</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>• Complete LCA Results (A1-C4)</li>
            <li>• Carbon Footprint (kg CO2e)</li>
            <li>• Primary Energy Demand</li>
            <li>• Water Footprint</li>
            <li>• Ozone Depletion Potential</li>
            <li>• Reference to Published EPD</li>
          </ul>
        </div>

        {/* Durability & Maintenance */}
        <div className="border-4 border-green-500 rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-green-600 transition-all duration-300 ease-in-out cursor-pointer bg-white">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Durability & Maintenance</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>• Expected Service Life (L70/L80)</li>
            <li>• Failure Rate Data</li>
            <li>• Maintenance Instructions</li>
            <li>• Spare Parts Availability Period</li>
            <li>• Repair & Disassembly Instructions</li>
            <li>• Software Update Availability</li>
          </ul>
        </div>

        {/* Circularity & Materials */}
        <div className="border-4 border-green-500 rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-green-600 transition-all duration-300 ease-in-out cursor-pointer bg-white">
          <h2 className="text-2xl font-bold text-green-700 mb-6">Circularity & Materials</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>• Bill of Materials with Masses</li>
            <li>• Recycled Content %</li>
            <li>• Recyclability Rate %</li>
            <li>• Substances of Concern (SVHC)</li>
            <li>• End-of-Life Instructions</li>
            <li>• Take-Back Program Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
