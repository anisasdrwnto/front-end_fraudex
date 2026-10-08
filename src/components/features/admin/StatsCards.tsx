import React from 'react';

interface StatsCardsProps {
  normalCount: number;
  suspiciousCount: number;
  fraudCount: number;
}

export function StatsCards({ normalCount, suspiciousCount, fraudCount }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Normal (Soft Green) */}
      <div className="bg-[#E6F4EA] border border-green-300/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-green-800">Total Pesan SMS</span>
        <div className="mt-3">
          <h2 className="text-xl font-extrabold text-green-800 mb-1">Normal</h2>
          <span className="text-4xl font-black text-green-900">{normalCount}</span>
        </div>
      </div>

      {/* Card 2: Waspada (Soft Yellow/Amber) */}
      <div className="bg-[#FEF7E0] border border-amber-300/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Total Pesan SMS</span>
        <div className="mt-3">
          <h2 className="text-xl font-extrabold text-amber-800 mb-1">Waspada</h2>
          <span className="text-4xl font-black text-amber-900">{suspiciousCount}</span>
        </div>
      </div>

      {/* Card 3: Penipuan (Soft Red) */}
      <div className="bg-[#FCE8E6] border border-red-300/60 p-6 rounded-2xl shadow-sm flex flex-col justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-red-800">Total Pesan SMS</span>
        <div className="mt-3">
          <h2 className="text-xl font-extrabold text-red-800 mb-1">Penipuan</h2>
          <span className="text-4xl font-black text-red-900">{fraudCount}</span>
        </div>
      </div>
    </div>
  );
}