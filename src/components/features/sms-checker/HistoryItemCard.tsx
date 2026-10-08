"use client";

import { useState } from "react";
import { ChevronDown, ShieldAlert, ShieldCheck, AlertTriangle } from "lucide-react";
import { HighlightedSMSText } from "./HighlightedSMSText";

interface HistoryItemProps {
  item: {
    id: string;
    date: string;
    status: "Normal" | "Waspada" | "Penipuan";
    confidence: number;
    message: string;
    keywords: string[];
  };
}

export function HistoryItemCard({ item }: HistoryItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Konfigurasi warna badge status
  const badgeConfig = {
    Normal: "bg-green-100 text-green-800 border-green-300",
    Waspada: "bg-amber-100 text-amber-800 border-amber-300",
    Penipuan: "bg-red-100 text-red-800 border-red-300",
  }[item.status];

  const iconConfig = {
    Normal: <ShieldCheck className="w-5 h-5 text-green-600" />,
    Waspada: <AlertTriangle className="w-5 h-5 text-amber-600" />,
    Penipuan: <ShieldAlert className="w-5 h-5 text-red-600" />,
  }[item.status];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300">
      {/* Header Baris Utama (Bisa diklik untuk Dropdown) */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-5 flex items-center justify-between cursor-pointer hover:bg-gray-50/80 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="p-2.5 bg-gray-100 rounded-xl">
            {iconConfig}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeConfig}`}>
                {item.status}
              </span>
              <span className="text-xs text-gray-400 font-medium">{item.date}</span>
            </div>
            <p className="text-sm text-gray-800 font-medium line-clamp-1 max-w-md md:max-w-xl">
              {item.message}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-gray-500 hidden sm:inline">
            Skor: {item.confidence}%
          </span>
          <div className={`p-2 rounded-full bg-gray-100 text-gray-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* Bagian Detail Dropdown (Muncul saat diklik) */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-gray-50/50 p-6 space-y-4 animate-in fade-in duration-200">
          {/* Skor Kepercayaan (Confidence Score) */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Skor Kepercayaan (Confidence Score)</span>
              <span className="text-sm font-black text-[#0B0A33]">{item.confidence}%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${
                  item.status === 'Normal' ? 'bg-green-500' : item.status === 'Waspada' ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${item.confidence}%` }}
              ></div>
            </div>
          </div>

          {/* Highlight Kata Kunci pada Isi SMS */}
          <HighlightedSMSText text={item.message} keywords={item.keywords} />
        </div>
      )}
    </div>
  );
}