"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { HistoryItemCard } from '@/components/features/sms-checker/HistoryItemCard';

const mockHistory = [
  {
    id: 'H001',
    date: '07 Oktober 2026, 14:20 WIB',
    status: 'Penipuan' as const,
    confidence: 96,
    message: 'Paket Anda tertahan di gudang karena data alamat kurang lengkap. Lengkapi data & bayar biaya admin Rp5.000 di: kurir-cepat-site/lacak',
    keywords: ['rp', 'bayar', 'lacak', 'tertahan', 'admin']
  },
  {
    id: 'H002',
    date: '06 Oktober 2026, 09:15 WIB',
    status: 'Waspada' as const,
    confidence: 82,
    message: 'Jangan berikan kode otp verifikasi akun Anda kepada siapa pun termasuk pihak bank.',
    keywords: ['kode', 'otp', 'verifikasi']
  },
  {
    id: 'H003',
    date: '05 Oktober 2026, 19:40 WIB',
    status: 'Normal' as const,
    confidence: 99,
    message: 'Halo, pengingat tagihan listrik bulanan Anda telah berhasil dibayar. Terima kasih.',
    keywords: []
  }
];

export default function RiwayatPage() {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string } | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner Header Biru Gelap yang Diperpanjang ke Bawah */}
      <div className="bg-[#0C134F] text-white pb-20 pt-4">
        <Navbar initialUser={currentUser} />
        
        {/* Judul Halaman di dalam Banner Biru */}
        <div className="max-w-4xl w-full mx-auto px-6 mt-28">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Riwayat Pengecekan SMS</h1>
          <p className="text-indigo-200 text-sm md:text-base">
            Berikut adalah daftar pesan SMS yang pernah Anda analisis beserta hasil klasifikasi risikonya.
          </p>
        </div>
      </div>

      {/* Konten Daftar Riwayat (Ditarik sedikit ke atas agar menimpa banner dengan rapi) */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 -mt-8 pb-20 z-10">
        <div className="space-y-4">
          {mockHistory.map((item) => (
            <HistoryItemCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <Footer onOpenReview={() => {}} />
    </div>
  );
}