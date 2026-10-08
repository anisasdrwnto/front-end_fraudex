import React from 'react';
import { FeedbackTable } from '@/components/features/admin/FeedbackTable';
import { mockFeedbacks } from '@/data/usersFeedback'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manajemen Laporan Pengguna | Fraudex Admin',
  description: 'Kelola umpan balik pengguna terkait akurasi deteksi Fraudex.',
};

export default function LaporanPenggunaPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">
        Manajemen Laporan Pengguna
      </h1>
      
      {/* Memanggil komponen tabel modular */}
      <FeedbackTable feedbacks={mockFeedbacks} />
    </div>
  );
}