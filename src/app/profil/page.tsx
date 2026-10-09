"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ProfileEditCard } from '@/components/features/auth/ProfileEditCard';

export default function EditProfilPage() {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string; email?: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        setCurrentUser({
          name: parsed.name || "Pengguna",
          role: parsed.role || "user",
          email: parsed.email || "",
        });
      } catch (e) {
        console.error("Gagal parsing data user dari localStorage");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner Header Biru Gelap yang Konsisten */}
      <div className="bg-[#0C134F] text-white pb-20 pt-4">
        <Navbar initialUser={currentUser} />
        
        <div className="max-w-4xl w-full mx-auto px-6 mt-24 text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Pengaturan Profil</h1>
          <p className="text-indigo-200 text-sm md:text-base">
            Perbarui informasi data diri dan preferensi akun Anda.
          </p>
        </div>
      </div>

      {/* Konten Utama Kartu Edit Profil (Efek Menimpa Banner) */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 -mt-10 pb-20 z-10">
        <ProfileEditCard user={currentUser} />
      </main>

      <Footer onOpenReview={() => {}} />
    </div>
  );
}