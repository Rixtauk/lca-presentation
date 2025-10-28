'use client';

import React from 'react';

const Slide8: React.FC = () => {
  const tableData = [
    {
      type: 'Primary aluminium',
      color: 'bg-green-100',
      data: {
        CC: '194.6810',
        OD: '0.0000',
        IR: '19.3202',
        POF: '1.0254',
        PM: '0.0000',
        HTNC: '0.0000',
        HTC: '0.0000',
        A: '1.2412',
        EuF: '0.1276',
        EuM: '0.2530',
        EuT: '2.5411',
        EcF: '2318.5303',
        LU: '1061.7273',
        WU: '49.0715',
        RUF: '2439.5299',
        RUMM: '0.0403',
        SC: '0.0668'
      }
    },
    {
      type: 'Recycled aluminium',
      color: 'bg-green-50',
      data: {
        CC: '182.2538',
        OD: '0.0000',
        IR: '18.1544',
        POF: '0.9789',
        PM: '1.0E-5',
        HTNC: '0.0000',
        HTC: '0.0000',
        A: '1.1458',
        EuF: '0.1237',
        EuM: '0.2406',
        EuT: '2.4134',
        EcF: '2288.0130',
        LU: '1044.6564',
        WU: '46.1246',
        RUF: '2320.8117',
        RUMM: '0.0402',
        SC: '0.0657'
      }
    },
    {
      type: 'Re-used aluminium',
      color: 'bg-blue-50',
      data: {
        CC: '85.75662',
        OD: '1.00E-06',
        IR: '8.036377',
        POF: '0.460038',
        PM: '0.000006',
        HTNC: '0.000003',
        HTC: '8.729E-07',
        A: '0.73578',
        EuF: '0.087669',
        EuM: '0.130288',
        EuT: '1.573553',
        EcF: '1698.163',
        LU: '838.6215',
        WU: '24.28086',
        RUF: '1029.274',
        RUMM: '0.0401',
        SC: '0.05794'
      }
    }
  ];

  const headers = [
    { key: 'CC', label: 'CC', unit: 'kg CO₂ eq' },
    { key: 'OD', label: 'OD', unit: 'kg CFC11 eq' },
    { key: 'IR', label: 'IR', unit: 'kBq U-235 eq' },
    { key: 'POF', label: 'POF', unit: 'kg NMVOC eq' },
    { key: 'PM', label: 'PM', unit: 'disease inc.' },
    { key: 'HTNC', label: 'HTNC', unit: 'CTUh' },
    { key: 'HTC', label: 'HTC', unit: 'CTUh' },
    { key: 'A', label: 'A', unit: 'mol H+ eq' },
    { key: 'EuF', label: 'EuF', unit: 'kg P eq' },
    { key: 'EuM', label: 'EuM', unit: 'kg N eq' },
    { key: 'EuT', label: 'EuT', unit: 'mol N eq' },
    { key: 'EcF', label: 'EcF', unit: 'CTUe' },
    { key: 'LU', label: 'LU', unit: 'Pt' },
    { key: 'WU', label: 'WU', unit: 'm³ depriv.' },
    { key: 'RUF', label: 'RUF', unit: 'MJ' },
    { key: 'RUMM', label: 'RUMM', unit: 'kg Sb eq' },
    { key: 'SC', label: 'SC', unit: 'pt' }
  ];

  const savings = [
    {
      title: 'Primary → Recycled',
      amount: '12.4272 kg CO₂',
      subtitle: 'Savings per unit'
    },
    {
      title: 'Primary → Re-used',
      amount: '108.9244 kg CO₂',
      subtitle: 'Savings per unit'
    },
    {
      title: 'Recycled → Re-used',
      amount: '96.4972 kg CO₂',
      subtitle: 'Savings per unit'
    }
  ];

  return (
    <div className="h-full w-full bg-white p-12 flex flex-col">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Step 1: Identifying hotspots - <span className="bg-green-200 px-2">case study</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Heading and Subheading */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <span className="border-b-4 border-green-500">
              Aluminium premium versus recycled versus re-used component
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            A1 Module - Complete Environmental Impact Assessment
          </p>
        </div>

        {/* Table Container with Horizontal Scroll */}
        <div className="flex-1 overflow-x-auto mb-6 shadow-lg rounded-lg">
          <div className="inline-block min-w-full">
            <table className="min-w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold sticky left-0 bg-gray-800 z-10 min-w-[180px]">
                    A1 module
                  </th>
                  {headers.map((header) => (
                    <th key={header.key} className="px-3 py-3 text-center text-xs font-semibold min-w-[100px]">
                      <div>{header.label}</div>
                      <div className="text-xs font-normal text-gray-300 mt-1">{header.unit}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${row.color} hover:opacity-80 transition-opacity duration-200 border-b border-gray-200`}
                  >
                    <td className={`px-4 py-4 text-sm font-semibold text-gray-800 sticky left-0 ${row.color} z-10`}>
                      {row.type}
                    </td>
                    {headers.map((header) => (
                      <td key={header.key} className="px-3 py-4 text-center text-sm text-gray-700">
                        {row.data[header.key as keyof typeof row.data]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Savings Comparison Boxes */}
        <div className="grid grid-cols-3 gap-6">
          {savings.map((saving, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-2">{saving.title}</h3>
              <p className="text-3xl font-bold text-green-700 mb-1">{saving.amount}</p>
              <p className="text-sm text-gray-600">{saving.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide8;
