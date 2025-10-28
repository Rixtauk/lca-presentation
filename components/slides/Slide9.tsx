"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const Slide9: React.FC = () => {
  return (
    <div className="w-screen h-screen min-w-full flex-shrink-0 bg-white p-8 md:p-16 flex flex-col overflow-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-12">
        <span className="bg-green-400 px-3 py-1">3 ways to presents LCA data</span>
      </h1>

      {/* Three Document Cards */}
      <div className="flex-1 grid grid-cols-3 gap-8">
        {/* Document 1 - Life Cycle Assessment EF3.1 */}
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
          <div className="flex-1 bg-gray-50 p-6 relative">
            {/* Header */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-800 mb-1">LIFE CYCLE ASSESSMENT – EF3.1</h2>
              <p className="text-sm text-gray-600">Downlight</p>
            </div>

            {/* Environmental Impact Indicators */}
            <div className="text-xs text-gray-700 mb-4 space-y-1">
              <p className="font-semibold">Environmental impact indicators:</p>
              <p className="leading-tight">Climate change (CC), Ozone depletion (OD), Ionising radiation (IR), Photochemical ozone formation (POF), Particulate matter (PM), Human toxicity, non-cancer (HTNC), Human toxicity, cancer (HTC), Acidification (A), Eutrophication, freshwater (EuF), Eutrophication, marine (EuM), Eutrophication, terrestrial (EuT), Ecotoxicity, freshwater (EcF), Land use (LU), Water use (WU), Resource use, fossils (RUF), Resource use, minerals and metals (RUMM). All indicators are combined into a Single Score (SS). They are modelled using datasets from Ecoinvent 3.8.</p>
            </div>

            {/* Modules Section */}
            <div className="mb-4">
              <p className="text-xs font-bold text-gray-800 mb-2">A: CONSTRUCTION & INSTALLATION &gt; B: MAINTENANCE &gt; C: DECONSTRUCTION & DISPOSAL</p>
            </div>

            {/* Simulated Table */}
            <div className="space-y-2">
              <div className="bg-gray-800 text-white p-2 rounded text-xs">
                <p className="font-bold">A1 - Material extraction</p>
              </div>
              <div className="bg-gray-100 p-2 rounded space-y-1">
                {['Aluminium', 'LED components', 'Electronic components', 'Optical components', 'Mounting components'].map((item, idx) => (
                  <div key={idx} className="flex text-xs">
                    <span className="flex-1 text-gray-700">{item}</span>
                    <div className="flex gap-2 text-gray-600">
                      {['1.23', '2.45', '0.89', '3.12', '1.56', '2.78', '0.45', '1.90'].map((val, i) => (
                        <span key={i} className="w-8 text-right">{val}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-800 text-white p-2 rounded text-xs">
                <p className="font-bold">A2 - Transport</p>
              </div>

              <div className="bg-gray-800 text-white p-2 rounded text-xs">
                <p className="font-bold">A3 - Manufacturing</p>
              </div>

              <div className="bg-gray-800 text-white p-2 rounded text-xs">
                <p className="font-bold">A4 - Product transport</p>
              </div>

              <div className="bg-gray-800 text-white p-2 rounded text-xs">
                <p className="font-bold">A5 - Installation</p>
              </div>
            </div>

            {/* Logo */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <div className="text-xs font-bold">LCA-CALC</div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="p-4 bg-white border-t-2 border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Available in LCA-CALC
            </Button>
          </div>
        </div>

        {/* Document 2 - Life Cycle Assessment Report */}
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
          <div className="flex-1 bg-white p-6">
            {/* Header */}
            <div className="mb-8 border-b-2 border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-800">Life Cycle</h2>
              <h2 className="text-3xl font-bold text-gray-800">Assessment report</h2>
            </div>

            {/* General Information Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">
                GENERAL INFORMATION
              </h3>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Identification of LCA report</span>
                  <span className="text-gray-800">Life Cycle Assessment for the Chalice 3 range</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Report date</span>
                  <span className="text-gray-800">20/05/2025</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Reporters names</span>
                  <span className="text-gray-800">Jean-François Menard</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Product name</span>
                  <span className="text-gray-800"></span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Product identification and products covered by the report/EPD</span>
                  <span className="text-gray-800"></span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Version of the PCR applied</span>
                  <span className="text-gray-800">PCR-4-ed4-EN-2021 09 06 - and AP0012 ed2</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="text-gray-600">Version of the PSR applied</span>
                  <span className="text-gray-800">PSR-0014-ed2-EN-2023 07 13 - LUMINAIRES</span>
                </div>
              </div>
            </div>

            {/* Purpose of Study */}
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">Prospective date of publication and validity period of EPD</span>
                <span className="text-gray-800">July 2025 - July 2030</span>
              </div>
              <div className="mt-3 text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold">Purpose of Study: </span>
                Performing the life cycle assessment of this downlight in support of the publication of an environmental product declaration (EPD) for that luminaire through the EPD program operated by PEP Ecopassport
              </div>
            </div>

            <p className="text-xs text-gray-600 italic mb-6">
              Report is in compliance with PEP Ecopassport and has been developed in collaboration with CIRAIG.
            </p>

            {/* Downlight Description */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-800 mb-2">Downlight</h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                A high efficient and sustainable LED downlight range with recessed height &lt;100mm and cut out of 100mm, 150mm or 200mm. High efficient thermal management from diecast aluminium with recycling content &gt;90%.
              </p>
            </div>

            {/* Imagery Section */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3 pb-2 border-b border-gray-300">
                IMAGERY <span className="text-xs font-normal text-gray-600">PHOTO & DRAWINGS</span>
              </h3>
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-600">No. LM89247</p>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="p-4 bg-white border-t-2 border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Available in LCA-CALC
            </Button>
          </div>
        </div>

        {/* Document 3 - Environmental Product Declaration */}
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col">
          <div className="flex-1 bg-white p-6">
            {/* EPD Header */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Environmental</h2>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Product Declaration</h2>
                <p className="text-xs text-gray-600">Based on PSR0014 ed2 and PCR-4 ed4</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg mb-1">LCA=CALC</div>
                <div className="text-xs text-gray-600">SMART ECO-LIGHTING METRICS</div>
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 leading-relaxed">
                Environmental product declaration (EPD) for the Chalice 3 plus luminaire manufactured by: Thorn
              </p>
            </div>

            {/* General Information Table */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-300">
                GENERAL INFORMATION
              </h3>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">registration number of the EPD</span>
                    <span className="text-gray-800"></span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">name and address of EPD program</span>
                    <span className="text-gray-800">17 Rue de l'Amiral Hamelin, 75016 Paris, FR</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">Version of the PCR applied</span>
                    <span className="text-gray-800">PCR-4-ed4-EN-2021 09 06 - and AP0012 ed2</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">Version of the PSR applied</span>
                    <span className="text-gray-800">PSR-0014-ed2-EN-2023 07 13 - LUMINAIRES</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">Compliant with ISO 14025 on environmental labels and declarations</span>
                    <span className="text-gray-800">pursuant to ISO 14025 or EN 15804</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">Independent verification of the environmental product declaration (EPD) and data according to ISO 14025</span>
                    <span className="text-gray-800">☐ internal or ☒ external</span>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <span className="text-gray-600">Verified accreditation number</span>
                    <span className="text-gray-800"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Statement */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-xs text-gray-700 leading-relaxed">
                Compliant with Product Environmental Profile Ecopassport and Contact based on another program.
              </p>
            </div>

            {/* Logo */}
            <div className="mt-6 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="text-xs font-semibold">Logo Company</div>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="p-4 bg-white border-t-2 border-gray-200">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Available in LCA-CALC
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
