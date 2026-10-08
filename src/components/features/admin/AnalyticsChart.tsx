import React from 'react';

interface AnalyticsChartProps {
  normalCount: number;
  suspiciousCount: number;
  fraudCount: number;
  totalAll: number;
}

export function AnalyticsChart({ normalCount, suspiciousCount, fraudCount, totalAll }: AnalyticsChartProps) {
  return (
    <div className="bg-[#1D267D] text-white p-6 rounded-2xl shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Total Pendeteksi SMS</h3>
          <p className="text-xs text-indigo-200 font-medium">Total seluruh SMS teranalisis: {totalAll} pesan</p>
        </div>
        <div className="flex gap-2 text-xs font-semibold">
          <span className="bg-gray-800 text-white px-3 py-1.5 rounded-lg border border-gray-700 shadow-sm">2026</span>
          <span className="bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-sm">Live Data</span>
        </div>
      </div>

      {/* Simulasi Grafik Batang Dinamis */}
      <div className="h-64 flex items-end justify-between gap-6 pt-8 border-b border-indigo-900/50 px-4 pb-2">
        
        {/* Batang Normal */}
        <div className="w-1/3 flex flex-col items-center gap-2 h-full justify-end">
          <span className="text-xs font-bold text-green-400">{normalCount}</span>
          <div 
            className="w-full bg-green-500 rounded-t-lg transition-all duration-500 min-h-[24px]" 
            style={{ height: `${Math.max(normalCount * 12, 15)}%` }}
          ></div>
          <span className="text-xs text-indigo-100 font-semibold">Normal</span>
        </div>

        {/* Batang Waspada */}
        <div className="w-1/3 flex flex-col items-center gap-2 h-full justify-end">
          <span className="text-xs font-bold text-amber-400">{suspiciousCount}</span>
          <div 
            className="w-full bg-amber-500 rounded-t-lg transition-all duration-500 min-h-[24px]" 
            style={{ height: `${Math.max(suspiciousCount * 12, 15)}%` }}
          ></div>
          <span className="text-xs text-indigo-100 font-semibold">Waspada</span>
        </div>

        {/* Batang Penipuan */}
        <div className="w-1/3 flex flex-col items-center gap-2 h-full justify-end">
          <span className="text-xs font-bold text-red-400">{fraudCount}</span>
          <div 
            className="w-full bg-red-500 rounded-t-lg transition-all duration-500 min-h-[24px]" 
            style={{ height: `${Math.max(fraudCount * 12, 15)}%` }}
          ></div>
          <span className="text-xs text-indigo-100 font-semibold">Penipuan</span>
        </div>

      </div>
    </div>
  );
}