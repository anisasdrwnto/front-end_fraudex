"use client";

import { X } from "lucide-react";
import { Quantico } from "next/font/google";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 relative my-8 shadow-2xl animate-in fade-in zoom-in duration-200 text-gray-900 text-left">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 cursor-pointer"
        >
          <X size={24} />
        </button>
        
        <h3 className={`${quantico.className} text-2xl font-bold text-[#0B0A33] mb-1`}>Berikan Ulasan</h3>
        <p className="text-gray-600 text-sm mb-6">Bagaimana pendapat Anda mengenai pengalaman pengecekan SMS di Fraudex?</p>
        
        <div className="flex justify-between gap-2 md:gap-3 mb-6">
          {[
            { emoji: '😫', label: 'Sangat Buruk' },
            { emoji: '😟', label: 'Buruk' },
            { emoji: '😐', label: 'Biasa Saja' },
            { emoji: '😊', label: 'Baik' },
            { emoji: '😍', label: 'Luar Biasa' }
          ].map((item, idx) => (
            <button key={idx} type="button" className="flex-1 flex flex-col items-center justify-center gap-2 p-2 md:p-3 border border-gray-200 rounded-xl hover:bg-gray-50 focus:border-[#93A5FF] focus:bg-blue-50/50 focus:ring-2 focus:ring-[#93A5FF] transition-all cursor-pointer">
              <span className="text-2xl md:text-3xl">{item.emoji}</span>
              <span className="text-[9px] md:text-[10px] text-gray-500 text-center whitespace-nowrap">{item.label}</span>
            </button>
          ))}
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs font-bold text-gray-500 tracking-wider block mb-2 uppercase">
              Pilih SMS yang ingin Anda beri masukan <span className="text-gray-400 font-normal lowercase">(opsional)</span>
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#93A5FF] bg-white cursor-pointer">
              <option value="">-- Pilih SMS terkait (Opsional) --</option>
              <option value="1">Paket Anda tertahan di gudang...</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 tracking-wider block mb-2 uppercase">Apa alasan utama di balik penilaian Anda?</label>
            <textarea 
              rows={4} 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#93A5FF] resize-none text-sm placeholder:text-gray-400" 
              placeholder="Tuliskan ulasan atau alasan kamu di sini..."
            ></textarea>
          </div>
          
          <div className="flex flex-col gap-3 mt-1">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 text-[#007BFF] rounded border-gray-300 focus:ring-[#007BFF]" />
              <span className="text-sm text-gray-700 leading-tight">Saya mungkin dihubungi terkait ulasan ini. <a href="#" className="text-[#007BFF] hover:underline">Kebijakan Privasi</a></span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-0.5 w-4 h-4 text-[#007BFF] rounded border-gray-300 focus:ring-[#007BFF]" />
              <span className="text-sm text-gray-700 leading-tight">Saya ingin membantu peningkatan dengan bergabung dalam Grup Riset.</span>
            </label>
          </div>

          <div className="flex justify-end mt-4">
            <button type="button" onClick={onClose} className="bg-[#0B0A33] hover:bg-[#1a1854] text-white font-bold py-3 px-8 rounded-lg transition-colors text-sm cursor-pointer">
              Kirim Ulasan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}