import React from 'react';
import { TambahUserModal } from '@/components/features/admin/UserModals';
import { UserTable } from '@/components/features/admin/UserTable'; // <-- Komponen tabel terpisah
import { mockUsers } from '@/data/usersData'; // <-- Data dipisah
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manajemen Data Pengguna | Fraudex Admin',
};

export default function DataPenggunaPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">
          Manajemen Data Pengguna
        </h1>
        <TambahUserModal />
      </div>
      
      {/* Memanggil komponen tabel modular */}
      <UserTable users={mockUsers} />
    </div>
  );
}