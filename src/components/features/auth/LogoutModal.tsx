"use client";

import { LogOut, AlertTriangle } from "lucide-react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 p-4">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-md w-full p-6 md:p-8 text-center animate-in zoom-in-95 duration-200">
        {/* Ikon Peringatan */}
        <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-red-100">
          <AlertTriangle size={28} />
        </div>

        {/* Teks Konfirmasi */}
        <h3 className="text-xl font-extrabold text-[#0B0A33] mb-2">Konfirmasi Keluar</h3>
        <p className="text-sm text-gray-500 mb-8 leading-relaxed">
          Apakah kamu yakin ingin keluar dari akun ini? Kamu harus masuk kembali untuk mengakses riwayat dan profilmu.
        </p>

        {/* Tombol Aksi */}
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-semibold transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button 
            type="button"
            onClick={onConfirm}
            className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut size={16} /> Ya, Keluar
          </button>
        </div>
      </div>
    </div>
  );
}