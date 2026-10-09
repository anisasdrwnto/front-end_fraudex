"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Camera, Save, X } from "lucide-react";
import Link from "next/link";

interface ProfileEditCardProps {
  user?: { name: string; role: string; email?: string } | null;
}

export function ProfileEditCard({ user }: ProfileEditCardProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("Mahasiswa Teknik Informatika UNS yang tertarik pada web development dan keamanan siber.");
  const [isSaved, setIsSaved] = useState(false);
  
  // State untuk menyimpan preview foto profil yang diunggah
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Ambil dan pecah nama dari props atau localStorage saat komponen dimuat
  useEffect(() => {
    let activeUser = user;
    if (!activeUser && typeof window !== "undefined") {
      const saved = localStorage.getItem("user");
      if (saved) {
        try {
          activeUser = JSON.parse(saved);
        } catch (e) {
          activeUser = null;
        }
      }
    }

    if (activeUser && activeUser.name) {
      const nameParts = activeUser.name.trim().split(" ");
      setFirstName(nameParts[0] || "");
      setLastName(nameParts.slice(1).join(" ") || "");
    } else {
      setFirstName("Pengguna");
      setLastName("");
    }
  }, [user]);

  // Fungsi untuk menangani pemilihan file gambar
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarPreview(imageUrl);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Perbarui juga data di localStorage jika nama diubah
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("user");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          parsed.name = `${firstName} ${lastName}`.trim();
          localStorage.setItem("user", JSON.stringify(parsed));
        } catch (e) {}
      }
    }

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 max-w-2xl w-full mx-auto transition-all">
      <div className="mb-6">
        <h2 className="text-xl font-extrabold text-[#0B0A33]">User Information</h2>
        <p className="text-xs text-gray-400 mt-0.5">Kelola informasi profil akun Anda di sini.</p>
      </div>

      {isSaved && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl font-medium animate-in fade-in">
          Profil berhasil diperbarui!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Input file tersembunyi untuk mengambil gambar dari perangkat */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          accept="image/png, image/jpeg, image/jpg" 
          className="hidden" 
        />

        {/* Bagian Foto Profil & Upload */}
        <div className="flex items-center gap-5">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="relative w-20 h-20 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl shadow-md overflow-hidden cursor-pointer group"
          >
            {avatarPreview ? (
              <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
            ) : (
              <span>{firstName ? firstName.charAt(0).toUpperCase() : "U"}</span>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={22} className="text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-[#0B0A33]">Foto Profil</p>
            <p className="text-xs text-gray-400 mb-2">JPG, GIF atau PNG maksimal 2MB.</p>
            <button 
              type="button" 
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-1.5 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Unggah Foto Baru
            </button>
          </div>
        </div>

        {/* Input Nama Depan & Belakang */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">First Name</label>
            <input 
              type="text" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Last Name</label>
            <input 
              type="text" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
            />
          </div>
        </div>

        {/* Input About You */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">About You</label>
          <textarea 
            rows={4} 
            value={about} 
            onChange={(e) => setAbout(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-none"
          ></textarea>
        </div>

        {/* Tombol Aksi (Cancel & Save) */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
          <Link 
            href="/riwayat" 
            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-semibold transition-colors flex items-center gap-1.5"
          >
            <X size={16} /> Batal
          </Link>
          <button 
            type="submit" 
            className="px-6 py-2.5 rounded-xl bg-[#0B0A33] hover:bg-[#1e1b4b] text-white text-sm font-semibold transition-colors shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Save size={16} /> Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}