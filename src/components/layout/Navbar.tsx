"use client";



import { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { Jersey_15, Quantico } from "next/font/google";

import { ChevronDown, Menu, X, History, Settings, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

import {

  DropdownMenu,

  DropdownMenuContent,

  DropdownMenuItem,

  DropdownMenuTrigger,

  DropdownMenuSeparator,

} from "@/components/ui/dropdown-menu";

import { LogoutModal } from "@/components/features/auth/LogoutModal";



const jersey = Jersey_15({ weight: "400", subsets: ["latin"], display: "swap" });

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });



interface NavbarProps {

  initialUser?: { name: string; role: string } | null;

  onLogout?: () => void; // Tambahan props callback logout opsional

}



export default function Navbar({ initialUser = null, onLogout }: NavbarProps) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isTentangOpen, setIsTentangOpen] = useState(false);

  const [isUmpanOpen, setIsUmpanOpen] = useState(false);



  // State lokal untuk simulasi status login interaktif

  const [currentUser, setCurrentUser] = useState(initialUser);



  // State untuk mengontrol visibilitas modal konfirmasi log out

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);



  // Fungsi konfirmasi logout (ubah state menjadi null tanpa pindah ke halaman /login)

  const handleLogoutConfirm = () => {

    setIsLogoutModalOpen(false);

    setCurrentUser(null); // Mengosongkan data user agar Navbar langsung berubah jadi tombol Masuk

    if (onLogout) {

      onLogout(); // Jalankan fungsi callback eksternal jika ada

    }

  };



  return (

    <>

      <nav className="w-full py-4 px-6 md:px-8 flex items-center justify-between text-white z-50 absolute top-0">

        {/* Bagian Kiri: Logo Gambar + Teks Fraudex */}

        <div className="flex items-center gap-2 z-50">

          <Link href="/" className="flex items-center gap-2.5">

            <Image

              src="/logo.png"

              alt="Logo Fraudex"

              width={36}

              height={36}

              className="object-contain w-9 h-9"

            />

            <span className={`${jersey.className} text-4xl tracking-wider pt-1`}>Fraudex</span>

          </Link>

        </div>



        {/* Bagian Tengah: Navigasi Desktop (Disembunyikan di Mobile) */}

        <div className={`${quantico.className} hidden md:flex items-center gap-6 text-[15px] tracking-wide`}>

          <Link href="/" className="border-b-2 border-white pb-1">Beranda</Link>

          <Link href="/#cek-sms" className="hover:text-gray-300 transition-colors">Cek SMS</Link>



          <DropdownMenu>

            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors outline-none cursor-pointer">

              Tentang Kami <ChevronDown className="h-4 w-4" />

            </DropdownMenuTrigger>

            <DropdownMenuContent

              align="end"

              sideOffset={8}

              className={`${quantico.className} bg-white text-black mt-2 w-52 rounded-xl shadow-xl border-0 py-2`}

            >

              <DropdownMenuItem asChild><Link href="/#tentang">Tentang Kami</Link></DropdownMenuItem>

              <DropdownMenuItem asChild><Link href="/#ciri-ciri">Ciri-Ciri Penipuan</Link></DropdownMenuItem>

              <DropdownMenuItem asChild><Link href="/#tips">Tips Pencegahan</Link></DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>



          <DropdownMenu>

            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-300 transition-colors outline-none cursor-pointer">

              Umpan Balik <ChevronDown className="h-4 w-4" />

            </DropdownMenuTrigger>

            <DropdownMenuContent className={`${quantico.className} bg-white text-black mt-2 w-40 rounded-md shadow-lg border-0`}>

              <DropdownMenuItem asChild><Link href="/umpan-balik/kirim">Kirim Ulasan</Link></DropdownMenuItem>

              <DropdownMenuItem asChild><Link href="/umpan-balik/testimoni">Lihat Testimoni</Link></DropdownMenuItem>

            </DropdownMenuContent>

          </DropdownMenu>

        </div>



        {/* Bagian Kanan: Tombol Desktop / Profil Dinamis */}

        <div className={`hidden md:block ${quantico.className}`}>

          {currentUser ? (

            /* KONDISI A: SUDAH LOGIN (Tampilkan Dropdown Profil) */

            <DropdownMenu>

              <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors border border-white/20">

                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">

                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}

                </div>

                <span className="text-sm font-semibold pr-1">{currentUser.name}</span>

                <ChevronDown className="h-4 w-4 text-gray-300" />

              </DropdownMenuTrigger>

              <DropdownMenuContent

                align="end"

                sideOffset={8}

                className={`${quantico.className} bg-white text-black mt-2 w-52 rounded-xl shadow-xl border-0 py-2`}

              >

                <DropdownMenuItem asChild className="cursor-pointer">

                  <Link href="/riwayat" className="flex items-center gap-2 py-2 font-medium">

                    <History size={16} className="text-blue-600" /> Cek Riwayat SMS

                  </Link>

                </DropdownMenuItem>

                <DropdownMenuItem asChild className="cursor-pointer">

                  <Link href="/profil" className="flex items-center gap-2 py-2 font-medium">

                    <Settings size={16} className="text-indigo-600" /> Edit Profil

                  </Link>

                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem

                  onClick={() => setIsLogoutModalOpen(true)}

                  className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 flex items-center gap-2 py-2 font-semibold"

                >

                  <LogOut size={16} /> Keluar (Logout)

                </DropdownMenuItem>

              </DropdownMenuContent>

            </DropdownMenu>

          ) : (

            /* KONDISI B: BELUM LOGIN (Setelah Logout) */

            <Button asChild className="bg-white text-blue-950 hover:bg-gray-100 font-semibold rounded-md">

              <Link href="/login">Masuk/Daftar Akun</Link>

            </Button>

          )}

        </div>



        {/* Tombol Hamburger (Hanya Muncul di Mobile) */}

        <div className="md:hidden flex items-center gap-4 z-50">

          <button

            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

            className="text-white hover:text-gray-300 focus:outline-none cursor-pointer"

          >

            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}

          </button>

        </div>



        {/* Dropdown Menu Mobile */}

        {isMobileMenuOpen && (

          <div className={`fixed top-0 left-0 w-full h-screen bg-[#060b19] flex flex-col items-center justify-center gap-6 ${quantico.className} md:hidden z-40 overflow-y-auto py-10`}>

            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">Beranda</Link>

            <Link href="/#cek-sms" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl">Cek SMS</Link>



            {/* Menu Accordion: Tentang Kami */}

            <div className="flex flex-col items-center w-full px-6">

              <button

                onClick={() => setIsTentangOpen(!isTentangOpen)}

                className="text-2xl flex items-center gap-2 focus:outline-none cursor-pointer"

              >

                Tentang Kami <ChevronDown className={`transition-transform duration-200 ${isTentangOpen ? "rotate-180" : ""}`} size={24} />

              </button>

              {isTentangOpen && (

                <div className="flex flex-col items-center gap-4 mt-4 bg-white/5 w-full py-4 rounded-lg">

                  <Link href="/#tentang" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300">Tentang Kami</Link>

                  <Link href="/#ciri-ciri" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300">Ciri-Ciri Penipuan</Link>

                  <Link href="/#tips" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300">Tips Pencegahan</Link>

                </div>

              )}

            </div>



            {/* Menu Accordion: Umpan Balik */}

            <div className="flex flex-col items-center w-full px-6">

              <button

                onClick={() => setIsUmpanOpen(!isUmpanOpen)}

                className="text-2xl flex items-center gap-2 focus:outline-none cursor-pointer"

              >

                Umpan Balik <ChevronDown className={`transition-transform duration-200 ${isUmpanOpen ? "rotate-180" : ""}`} size={24} />

              </button>

              {isUmpanOpen && (

                <div className="flex flex-col items-center gap-4 mt-4 bg-white/5 w-full py-4 rounded-lg">

                  <Link href="/umpan-balik/kirim" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300">Kirim Ulasan</Link>

                  <Link href="/umpan-balik/testimoni" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-300">Lihat Testimoni</Link>

                </div>

              )}

            </div>



            {/* Tombol Mobile Berdasarkan Status Login */}

            {currentUser ? (

              <div className="flex flex-col items-center gap-3 mt-4 w-3/4">

                <span className="text-sm text-gray-400">Masuk sebagai: <strong className="text-white">{currentUser.name}</strong></span>

                <Link href="/riwayat" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center bg-white/10 py-3 rounded-lg text-lg font-medium">Cek Riwayat SMS</Link>

                <Link href="/profil" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center bg-white/10 py-3 rounded-lg text-lg font-medium">Edit Profil</Link>

                <button

                  onClick={() => {

                    setIsMobileMenuOpen(false);

                    setIsLogoutModalOpen(true);

                  }}

                  className="w-full text-center bg-red-600/80 hover:bg-red-600 py-3 rounded-lg text-lg font-semibold mt-2 cursor-pointer"

                >

                  Keluar (Logout)

                </button>

              </div>

            ) : (

              <Button asChild className="bg-white text-blue-950 hover:bg-gray-100 font-bold rounded-md h-14 px-8 text-lg mt-4">

                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Masuk/Daftar Akun</Link>

              </Button>

            )}

          </div>

        )}

      </nav>



      {/* Render Modal Konfirmasi Log Out */}

      <LogoutModal

        isOpen={isLogoutModalOpen}

        onClose={() => setIsLogoutModalOpen(false)}

        onConfirm={handleLogoutConfirm}

      />

    </>

  );

} 