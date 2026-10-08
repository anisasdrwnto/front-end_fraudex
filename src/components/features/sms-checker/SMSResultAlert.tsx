import React from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';
import { HighlightedSMSText } from './HighlightedSMSText';

interface SMSResultProps {
  result: {
    status: 'Normal' | 'Waspada' | 'Penipuan';
    confidence: number;
    message: string;
    keywords: string[];
  };
}

export function SMSResultAlert({ result }: SMSResultProps) {
  const config = {
    Normal: {
      bg: 'bg-[#E6F4EA]',
      border: 'border-green-300',
      text: 'text-green-800',
      badgeBg: 'bg-green-600',
      icon: <ShieldCheck className="w-6 h-6 text-green-700" />,
      title: 'Aman (Normal)',
      desc: 'Pesan ini tidak menunjukkan indikasi penipuan atau ancaman siber.'
    },
    Waspada: {
      bg: 'bg-[#FEF7E0]',
      border: 'border-amber-300',
      text: 'text-amber-800',
      badgeBg: 'bg-amber-600',
      icon: <AlertTriangle className="w-6 h-6 text-amber-700" />,
      title: 'Waspada (Mencurigakan)',
      desc: 'Pesan mengandung pola yang kurang lazim. Harap berhati-hati!'
    },
    Penipuan: {
      bg: 'bg-[#FCE8E6]',
      border: 'border-red-300',
      text: 'text-red-800',
      badgeBg: 'bg-red-600',
      icon: <ShieldAlert className="w-6 h-6 text-red-700" />,
      title: 'Bahaya (Penipuan / Phishing)',
      desc: 'Terdeteksi sebagai indikator penipuan siber. Jangan klik tautan atau ikuti instruksi!'
    }
  }[result.status];

  return (
    <div className={`mt-6 rounded-2xl border ${config.border} ${config.bg} p-6 shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 text-left`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100">
            {config.icon}
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Hasil Klasifikasi Risiko</span>
            <h3 className={`text-lg font-extrabold ${config.text}`}>{config.title}</h3>
          </div>
        </div>
        <span className={`${config.badgeBg} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
          {result.status}
        </span>
      </div>

      <p className="text-sm text-gray-700 mb-5">{config.desc}</p>

      {/* Confidence Score */}
      <div className="bg-white/80 border border-white rounded-xl p-4 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Skor Kepercayaan (Confidence Score)</span>
          <span className="text-sm font-black text-[#0B0A33]">{result.confidence}%</span>
        </div>
        <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${
              result.status === 'Normal' ? 'bg-green-500' : result.status === 'Waspada' ? 'bg-amber-500' : 'bg-red-500'
            }`}
            style={{ width: `${result.confidence}%` }}
          ></div>
        </div>
      </div>

      <HighlightedSMSText text={result.message} keywords={result.keywords} />
    </div>
  );
}