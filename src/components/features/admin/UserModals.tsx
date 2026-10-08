"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// --- MODAL TAMBAH USER ---
export function TambahUserModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
        + Tambah Pengguna
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          {/* Tambahkan text-left dan text-gray-900 agar tulisan di dalam modal jadi hitam */}
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative text-left text-gray-900">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Tambah Pengguna Baru</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <Input type="text" placeholder="Masukkan nama..." className="text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" placeholder="email@contoh.com" className="text-gray-900" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role (Hak Akses)</label>
                <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="user">User</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Terdaftar</label>
                <Input type="date" defaultValue={new Date().toISOString().slice(0, 10)} className="text-gray-900" />
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Batal</Button>
                <Button type="submit">Simpan Data</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// --- MODAL EDIT USER ---
export function EditUserModal({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setIsOpen(true)} 
        className="text-indigo-600 hover:text-indigo-800 px-2"
        aria-label={`Edit pengguna ${user.nama}`}
      >
        {/* Ikon Pencil (Edit) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm text-left">
          {/* Tambahkan text-gray-900 */}
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative text-left text-gray-900">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Edit Pengguna</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <Input type="text" defaultValue={user.nama} className="text-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input type="email" defaultValue={user.email} className="text-gray-900" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role (Hak Akses)</label>
                <select 
                  defaultValue={user.role}
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="user">User</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Terdaftar</label>
                <Input type="date" defaultValue={user.tanggal ? new Date(user.tanggal).toISOString().slice(0, 10) : ''} className="text-gray-900" />
              </div>

              <div className="flex justify-end space-x-2 mt-6">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Batal</Button>
                <Button type="submit">Perbarui Data</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

// --- MODAL HAPUS USER ---
export function HapusUserModal({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        variant="destructive" 
        size="sm" 
        onClick={() => setIsOpen(true)} 
        className="px-2"
        aria-label={`Hapus pengguna ${user.nama}`}
      >
        {/* Ikon Trash (Hapus) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm text-left">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative text-left text-gray-900">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Konfirmasi Hapus</h2>
            <p className="text-sm text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus akun <strong>{user.nama}</strong>? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>Batal</Button>
              <Button type="button" variant="destructive">Ya, Hapus Akun</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}