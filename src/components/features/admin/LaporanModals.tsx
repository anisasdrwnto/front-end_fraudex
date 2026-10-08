"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

// --- MODAL TINJAU LAPORAN ---
export function TinjauLaporanModal({ laporan }: { laporan: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => setIsOpen(true)}
        className="text-slate-900 dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:hover:bg-slate-700"
      >
        Tinjau
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm text-left">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative text-gray-900">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Tinjau Laporan</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pelapor</label>
                <div className="p-2 bg-gray-50 rounded-md text-sm text-gray-700 border border-gray-200">
                  {laporan.user}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div 
                  className="p-2 bg-gray-50 rounded-md text-sm border border-gray-200 tracking-widest"
                  aria-label={`Rating ${laporan.rating} bintang`}
                >
                  {'⭐'.repeat(laporan.rating)}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Catatan Feedback</label>
                <div className="p-3 bg-gray-50 rounded-md text-sm text-gray-700 border border-gray-200 min-h-[80px]">
                  {laporan.catatan}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ubah Status</label>
                <select 
                  defaultValue={laporan.status}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="Menunggu">Menunggu</option>
                  <option value="Ditinjau">Ditinjau</option>
                  <option value="Ditindaklanjuti">Ditindaklanjuti</option>
                </select>
              </div>

              {/* Tambahan Input Tanggapan Admin */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggapan Admin</label>
                <textarea 
                  defaultValue={laporan.tanggapan || ''}
                  placeholder="Ketik tanggapan atau tindak lanjut di sini..."
                  className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Batal</Button>
                <Button type="submit">Simpan Perubahan</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// --- MODAL HAPUS LAPORAN ---
export function HapusLaporanModal({ laporan }: { laporan: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        variant="destructive" 
        size="sm" 
        onClick={() => setIsOpen(true)} 
        className="px-2" 
        aria-label={`Hapus laporan ${laporan.id}`}
      >
        {/* Ikon Trash (Tempat Sampah) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm text-left">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative text-gray-900">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Konfirmasi Hapus</h2>
            <p className="text-sm text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus laporan dari <strong>{laporan.user}</strong>? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Batal</Button>
              <Button type="button" variant="destructive">Ya, Hapus</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}