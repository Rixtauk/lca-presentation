"use client";

import React, { useState } from 'react';

interface InfoData {
  title: string;
  content: string;
}

const Slide6: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<'general' | 'luminaires'>('general');
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState<InfoData | null>(null);
  const [pulsingElement, setPulsingElement] = useState<string | null>(null);

  const infoData: { [key: string]: InfoData } = {
    'raw-materials': {
      title: 'A1: Raw Materials Supply',
      content: 'This stage covers the extraction, processing, and supply of raw materials used in the building product. It includes mining, quarrying, harvesting, and initial processing of materials like steel, concrete, wood, and other building components.'
    },
    'transport': {
      title: 'A2: Transport to Manufacturing',
      content: 'Transportation of raw materials from their source to the manufacturing facility. This includes all modes of transport (truck, rail, ship, air) and associated environmental impacts.'
    },
    'manufacturing': {
      title: 'A3: Manufacturing',
      content: 'The production and manufacturing processes that transform raw materials into building products. This includes energy consumption, waste generation, and emissions from manufacturing facilities.'
    },
    'transport-site': {
      title: 'A4: Transport to Construction Site',
      content: 'Transportation of manufactured products from the factory to the construction site. This includes packaging, loading, transport modes, and delivery logistics.'
    },
    'installation': {
      title: 'A5: Construction and Installation Process',
      content: 'On-site construction activities including installation, assembly, and construction processes. This covers energy use, waste generation, and emissions during the construction phase.'
    },
    'use-stage': {
      title: 'B1: Use',
      content: 'The functional use of the building or building component during its service life. This stage considers the direct impacts from the use of the building. For luminaires, this module is typically excluded as lighting fixtures don\'t have direct use impacts beyond energy consumption.'
    },
    'maintenance': {
      title: 'B2: Maintenance',
      content: 'Regular maintenance activities required to keep the building functioning properly. This includes cleaning, servicing, and routine upkeep throughout the building\'s life cycle.'
    },
    'repair': {
      title: 'B3: Repair',
      content: 'Repair activities needed to restore the building to its functional state. This includes fixing damage, replacing worn components, and addressing performance issues. For luminaires, this is typically excluded as repairs are uncommon.'
    },
    'replacement': {
      title: 'B4: Replacement',
      content: 'Replacement of building components that have reached the end of their service life during the building\'s operational phase. For luminaires, this is typically excluded as the entire fixture is usually replaced rather than components.'
    },
    'refurbishment': {
      title: 'B5: Refurbishment',
      content: 'Major renovation or refurbishment activities that upgrade or modify the building during its use phase. For luminaires, this is typically excluded as lighting fixtures are rarely refurbished.'
    },
    'operational-energy': {
      title: 'B6: Operational Energy',
      content: 'Energy consumption during the building\'s operational phase including heating, cooling, lighting, ventilation, and other building systems. This is often the largest impact category for buildings.'
    },
    'operational-water': {
      title: 'B7: Operational Water',
      content: 'Water consumption during the building\'s operational phase including potable water use, irrigation, and other water-related building functions.'
    },
    'deconstruction': {
      title: 'C1: Deconstruction/Demolition',
      content: 'The process of dismantling or demolishing the building at the end of its service life. For luminaires, this is typically excluded as lighting fixtures are simply removed rather than demolished.'
    },
    'transport-waste': {
      title: 'C2: Transport to Waste Processing',
      content: 'Transportation of waste materials from the demolition site to waste processing facilities. This includes sorting, loading, and transport of different waste streams.'
    },
    'waste-processing': {
      title: 'C3: Waste Processing',
      content: 'Processing of waste materials including sorting, cleaning, and preparation for recycling or disposal. This covers energy use and emissions from waste processing facilities.'
    },
    'disposal': {
      title: 'C4: Disposal',
      content: 'Final disposal of waste materials that cannot be recycled or recovered. This includes landfilling, incineration, and other disposal methods along with their environmental impacts.'
    },
    'benefits-loads': {
      title: 'Benefits and Loads',
      content: 'The net environmental benefits or loads that result from reuse, recovery, and recycling activities beyond the building\'s system boundary. This can include avoided impacts from displacing virgin materials.'
    },
    'reuse': {
      title: 'Reuse',
      content: 'Direct reuse of building components or materials in new applications without significant processing. This can provide significant environmental benefits by avoiding new production.'
    },
    'recovery': {
      title: 'Recovery',
      content: 'Recovery of materials or energy from building components at end-of-life. This includes energy recovery from incineration and material recovery from processing.'
    },
    'recycling': {
      title: 'Recycling Potential',
      content: 'The potential for recycling building materials into new products. This considers the recyclability of materials and the environmental benefits of recycling versus virgin material production.'
    },
    'cradle-gate': {
      title: 'Cradle to Gate',
      content: 'Life cycle assessment from raw material extraction through manufacturing (A1-A3). This boundary is commonly used for Environmental Product Declarations (EPDs) of building products.'
    },
    'cradle-grave': {
      title: 'Cradle to Grave',
      content: 'Complete life cycle assessment from raw material extraction through end-of-life (A1-C4). This provides comprehensive building life cycle information including operational impacts.'
    },
    'cradle-cradle': {
      title: 'Cradle to Cradle',
      content: 'Life cycle assessment including benefits and loads beyond the system boundary (A1-C4+D). This approach considers the full circular economy potential of building materials and components.'
    }
  };

  const excludedModules = currentMode === 'luminaires'
    ? ['use-stage', 'repair', 'replacement', 'refurbishment', 'deconstruction']
    : [];

  const handleElementClick = (infoKey: string) => {
    if (excludedModules.includes(infoKey)) {
      return;
    }

    const info = infoData[infoKey];
    if (info) {
      setSelectedInfo(info);
      setShowInfoPanel(true);
      setPulsingElement(infoKey);
      setTimeout(() => setPulsingElement(null), 2000);
    }
  };

  const closeInfoPanel = () => {
    setShowInfoPanel(false);
    setSelectedInfo(null);
  };

  const isExcluded = (infoKey: string) => excludedModules.includes(infoKey);

  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-200 p-8 overflow-auto">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800">
        Step 1: LCA -{' '}
        <span className="bg-green-400 px-3 py-1">FROM MODULE A TO MODULE D</span>
      </h1>

      {/* Mode Selector */}
      <div className="flex justify-center gap-5 mb-6">
        <button
          onClick={() => setCurrentMode('general')}
          className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
            currentMode === 'general'
              ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg -translate-y-1'
              : 'bg-gradient-to-br from-blue-400 to-blue-600 text-white hover:from-blue-600 hover:to-blue-800'
          }`}
        >
          General Building LCA
        </button>
        <button
          onClick={() => setCurrentMode('luminaires')}
          className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
            currentMode === 'luminaires'
              ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg -translate-y-1'
              : 'bg-gradient-to-br from-orange-300 to-orange-500 text-white hover:from-orange-500 hover:to-orange-700'
          }`}
        >
          Luminaires LCA
        </button>
      </div>

      {/* Mode Info */}
      <div
        className={`text-center mb-5 px-6 py-4 rounded-xl font-medium transition-all duration-300 max-w-4xl mx-auto ${
          currentMode === 'general'
            ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900'
            : 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-900'
        }`}
      >
        {currentMode === 'general' ? (
          <span>
            <strong>General Building LCA:</strong> Complete life cycle assessment including all stages and modules for comprehensive building analysis.
          </span>
        ) : (
          <span>
            <strong>Luminaires LCA:</strong> Specialized LCA for lighting fixtures with excluded modules that are not applicable to luminaires.
          </span>
        )}
      </div>

      {/* Main Diagram Container */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-5 items-stretch mb-5">
          {/* Main Stages Section */}
          <div className="flex-1 bg-gray-100 rounded-xl p-5 border-2 border-dashed border-blue-300">
            <div className="flex gap-2">
              {/* Product Stage (A1-A3) */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-amber-900 to-amber-800 text-white px-3 py-3 rounded-lg mb-2 font-bold text-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
                  Product Stage<br />(A1 - A3)
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    onClick={() => handleElementClick('raw-materials')}
                    className={`bg-amber-900 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'raw-materials' ? 'animate-pulse' : ''
                    }`}
                  >
                    A1: Raw Materials Supply
                  </div>
                  <div
                    onClick={() => handleElementClick('transport')}
                    className={`bg-amber-900 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'transport' ? 'animate-pulse' : ''
                    }`}
                  >
                    A2: Transport
                  </div>
                  <div
                    onClick={() => handleElementClick('manufacturing')}
                    className={`bg-amber-900 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'manufacturing' ? 'animate-pulse' : ''
                    }`}
                  >
                    A3: Manufacturing
                  </div>
                </div>
              </div>

              {/* Construction Stage (A4-A5) */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 text-white px-3 py-3 rounded-lg mb-2 font-bold text-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
                  Construction Stage<br />(A4 - A5)
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    onClick={() => handleElementClick('transport-site')}
                    className={`bg-orange-600 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'transport-site' ? 'animate-pulse' : ''
                    }`}
                  >
                    A4: Transport
                  </div>
                  <div
                    onClick={() => handleElementClick('installation')}
                    className={`bg-orange-600 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'installation' ? 'animate-pulse' : ''
                    }`}
                  >
                    A5: Construction and Installation Process
                  </div>
                </div>
              </div>

              {/* Use Stage (B1-B7) */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 text-white px-3 py-3 rounded-lg mb-2 font-bold text-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
                  {currentMode === 'general' ? (
                    <>Use Stage<br />(B1 - B7)</>
                  ) : (
                    <>Use Stage<br />(B2, B6, B7)</>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    onClick={() => handleElementClick('use-stage')}
                    className={`${
                      isExcluded('use-stage')
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed relative'
                        : 'bg-yellow-600 text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                    } px-2 py-2 rounded-md text-xs transition-all ${
                      pulsingElement === 'use-stage' ? 'animate-pulse' : ''
                    }`}
                  >
                    B1: Use
                    {isExcluded('use-stage') && (
                      <div className="absolute top-1/2 left-1/10 right-1/10 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div
                    onClick={() => handleElementClick('maintenance')}
                    className={`bg-yellow-600 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'maintenance' ? 'animate-pulse' : ''
                    }`}
                  >
                    B2: Maintenance
                  </div>
                  <div
                    onClick={() => handleElementClick('repair')}
                    className={`${
                      isExcluded('repair')
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed relative'
                        : 'bg-yellow-600 text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                    } px-2 py-2 rounded-md text-xs transition-all ${
                      pulsingElement === 'repair' ? 'animate-pulse' : ''
                    }`}
                  >
                    B3: Repair
                    {isExcluded('repair') && (
                      <div className="absolute top-1/2 left-1/10 right-1/10 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div
                    onClick={() => handleElementClick('replacement')}
                    className={`${
                      isExcluded('replacement')
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed relative'
                        : 'bg-yellow-600 text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                    } px-2 py-2 rounded-md text-xs transition-all ${
                      pulsingElement === 'replacement' ? 'animate-pulse' : ''
                    }`}
                  >
                    B4: Replacement
                    {isExcluded('replacement') && (
                      <div className="absolute top-1/2 left-1/10 right-1/10 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div
                    onClick={() => handleElementClick('refurbishment')}
                    className={`${
                      isExcluded('refurbishment')
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed relative'
                        : 'bg-yellow-600 text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                    } px-2 py-2 rounded-md text-xs transition-all ${
                      pulsingElement === 'refurbishment' ? 'animate-pulse' : ''
                    }`}
                  >
                    B5: Refurbishment
                    {isExcluded('refurbishment') && (
                      <div className="absolute top-1/2 left-1/10 right-1/10 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* End of Life Stage (C1-C4) */}
              <div className="flex-1 text-center">
                <div className="bg-gradient-to-br from-green-600 to-green-500 text-white px-3 py-3 rounded-lg mb-2 font-bold text-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
                  {currentMode === 'general' ? (
                    <>End of Life Stage<br />(C1 - C4)</>
                  ) : (
                    <>End of Life Stage<br />(C2 - C4)</>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    onClick={() => handleElementClick('deconstruction')}
                    className={`${
                      isExcluded('deconstruction')
                        ? 'bg-gray-400 text-gray-600 cursor-not-allowed relative'
                        : 'bg-green-600 text-white cursor-pointer hover:scale-105 hover:shadow-lg'
                    } px-2 py-2 rounded-md text-xs transition-all ${
                      pulsingElement === 'deconstruction' ? 'animate-pulse' : ''
                    }`}
                  >
                    C1: Deconstruction Demolition
                    {isExcluded('deconstruction') && (
                      <div className="absolute top-1/2 left-1/10 right-1/10 h-0.5 bg-red-600 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <div
                    onClick={() => handleElementClick('transport-waste')}
                    className={`bg-green-600 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'transport-waste' ? 'animate-pulse' : ''
                    }`}
                  >
                    C2: Transport
                  </div>
                  <div
                    onClick={() => handleElementClick('waste-processing')}
                    className={`bg-green-600 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'waste-processing' ? 'animate-pulse' : ''
                    }`}
                  >
                    C3: Waste Processing
                  </div>
                  <div
                    onClick={() => handleElementClick('disposal')}
                    className={`bg-green-600 text-white px-2 py-2 rounded-md text-xs cursor-pointer transition-all hover:scale-105 hover:shadow-lg ${
                      pulsingElement === 'disposal' ? 'animate-pulse' : ''
                    }`}
                  >
                    C4: Disposal
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Circular Economy Section */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-5 border-2 border-dashed border-teal-400 min-w-[220px]">
            <div className="font-bold mb-4 text-base cursor-pointer transition-all hover:scale-105">
              Circular Economy<br />Beyond the Building Life Cycle Stage (D)
            </div>
            <div className="flex flex-col gap-2">
              <div
                onClick={() => handleElementClick('benefits-loads')}
                className={`bg-teal-700 text-white px-3 py-2 rounded-md cursor-pointer transition-all hover:bg-teal-800 hover:translate-x-1 text-sm ${
                  pulsingElement === 'benefits-loads' ? 'animate-pulse' : ''
                }`}
              >
                Benefits and Loads
              </div>
              <div className="flex gap-2">
                <div
                  onClick={() => handleElementClick('reuse')}
                  className={`flex-1 bg-teal-700 text-white px-2 py-2 rounded-md cursor-pointer transition-all hover:bg-teal-800 hover:translate-x-1 text-xs ${
                    pulsingElement === 'reuse' ? 'animate-pulse' : ''
                  }`}
                >
                  Reuse
                </div>
                <div
                  onClick={() => handleElementClick('recovery')}
                  className={`flex-1 bg-teal-700 text-white px-2 py-2 rounded-md cursor-pointer transition-all hover:bg-teal-800 hover:translate-x-1 text-xs ${
                    pulsingElement === 'recovery' ? 'animate-pulse' : ''
                  }`}
                >
                  Recovery
                </div>
                <div
                  onClick={() => handleElementClick('recycling')}
                  className={`flex-1 bg-teal-700 text-white px-2 py-2 rounded-md cursor-pointer transition-all hover:bg-teal-800 hover:translate-x-1 text-xs ${
                    pulsingElement === 'recycling' ? 'animate-pulse' : ''
                  }`}
                >
                  Recycling Potential
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Impact Section */}
        <div className="bg-blue-50 rounded-xl p-5 mb-5 border-2 border-dashed border-blue-300">
          <div className="text-blue-700 font-bold mb-4 text-lg">Operational Impact</div>
          <div className="flex gap-3 flex-wrap">
            <div
              onClick={() => handleElementClick('operational-energy')}
              className={`bg-gradient-to-br from-yellow-600 to-yellow-500 text-white px-5 py-3 rounded-lg cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg font-medium ${
                pulsingElement === 'operational-energy' ? 'animate-pulse' : ''
              }`}
            >
              B6: Operational Energy
            </div>
            <div
              onClick={() => handleElementClick('operational-water')}
              className={`bg-gradient-to-br from-yellow-600 to-yellow-500 text-white px-5 py-3 rounded-lg cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg font-medium ${
                pulsingElement === 'operational-water' ? 'animate-pulse' : ''
              }`}
            >
              B7: Operational Water
            </div>
          </div>
        </div>

        {/* Scope Indicators */}
        <div className="flex justify-between gap-8 bg-gray-100 rounded-xl p-5">
          <div className="flex-1">
            <div className="font-bold mb-2 text-sm">Cradle to Gate</div>
            <div
              onClick={() => handleElementClick('cradle-gate')}
              className={`h-2 bg-blue-500 rounded-full cursor-pointer transition-all hover:bg-blue-700 hover:h-3 ${
                pulsingElement === 'cradle-gate' ? 'animate-pulse' : ''
              }`}
              style={{ width: '15%' }}
            ></div>
          </div>
          <div className="flex-1">
            <div className="font-bold mb-2 text-sm">Cradle to Grave (Building Life Cycle Information)</div>
            <div
              onClick={() => handleElementClick('cradle-grave')}
              className={`h-2 bg-blue-500 rounded-full cursor-pointer transition-all hover:bg-blue-700 hover:h-3 ${
                pulsingElement === 'cradle-grave' ? 'animate-pulse' : ''
              }`}
              style={{ width: '60%' }}
            ></div>
          </div>
          <div className="flex-1">
            <div className="font-bold mb-2 text-sm">Cradle to Cradle (Building Assessment Information)</div>
            <div
              onClick={() => handleElementClick('cradle-cradle')}
              className={`h-2 bg-blue-500 rounded-full cursor-pointer transition-all hover:bg-blue-700 hover:h-3 ${
                pulsingElement === 'cradle-cradle' ? 'animate-pulse' : ''
              }`}
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-5 mt-5 text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-amber-900"></div>
            <span>Product Stage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-orange-600"></div>
            <span>Construction Stage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-yellow-600"></div>
            <span>Use Stage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-green-600"></div>
            <span>End of Life Stage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-teal-500"></div>
            <span>Circular Economy</span>
          </div>
        </div>

        {/* Excluded Modules Notice */}
        {currentMode === 'luminaires' && (
          <div className="mt-5 bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-lg text-center">
            <strong>Excluded Modules for Luminaires LCA:</strong> The following modules are not typically applicable for lighting fixtures.
            <div className="flex justify-center gap-3 mt-3 flex-wrap">
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs">B1: Use</div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs">B3: Repair</div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs">B4: Replacement</div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs">B5: Refurbishment</div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs">C1: Deconstruction</div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay and Info Panel */}
      {showInfoPanel && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={closeInfoPanel}
          ></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 max-w-xl z-50 transition-all">
            <button
              onClick={closeInfoPanel}
              className="absolute top-4 right-5 text-3xl text-gray-500 hover:text-red-600 transition-colors"
            >
              &times;
            </button>
            {selectedInfo && (
              <>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-3">
                  {selectedInfo.title}
                </h3>
                <div className="text-gray-700 leading-relaxed">{selectedInfo.content}</div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Slide6;
