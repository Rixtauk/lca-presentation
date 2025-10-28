import React from 'react';

const Slide1: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        Why LCA matter:{' '}
        <span className="bg-green-400 px-3 py-1">
          2026 Regulatory Landscape
        </span>
      </h1>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        {/* CSRD Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            &gt; CSRD Supplier Pressure
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Large companies must report Scope 3 emissions, creating cascade effects throughout supply chains.
            Suppliers without robust LCA data will face exclusion from procurement opportunities.
          </p>
        </div>

        {/* Green Claims Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            &gt; Green Claims Verification Rules
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The EU Green Claims Directive requires all environmental marketing claims to be substantiated with verified
            life-cycle assessment data. Unsubstantiated claims risk regulatory penalties and reputational damage.
          </p>
        </div>

        {/* DPP Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            &gt; EU Digital product passport (DPP)
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            aiming to improve product transparency, traceability, and circularity by providing standardized digital infor-
            mation on a product's lifecycle, materials, and environmental impact will be mandatory by 2028.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Source: environment.ec.europa.eu, EU's Ecodesign for Sustainable Products Regulation (ESPR)
        </p>
      </div>
    </div>
  );
};

export default Slide1;
