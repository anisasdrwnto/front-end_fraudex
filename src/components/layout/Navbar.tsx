"use client";

import { useState, useEffect } from "react";
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
  onLogout?: () => void;
}

export default function Navbar({ initialUser = null, onLogout }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTentangOpen, setIsTentangOpen] = useState(false);
  const [isUmpanOpen, setIsUmpanOpen] = useState(false);

  // State lokal untuk status login, dibaca otomatis dari localStorage
  const [currentUser, setCurrentUser] = useState<{ name: string; role: string } | null>(initialUser);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Gagal membaca data sesi user");
      }
    }
  }, []);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogoutConfirm = () => {
    setIsLogoutModalOpen(false);
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <>
      <nav className="w-full py-4 px-6 md:px-8 flex items-center justify-between text-white z-50 absolute top-0">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Logo Fraudex" width={36} height={36} className="object-contain w-9 h-9" />
            <span className={`${jersey.className} text-4xl tracking-wider pt-1`}>Fraudex</span>
          </Link>
        </div>

        {/* Menu Tengah */}
        <div className={`${quantico.className} hidden md:flex items-center gap-6 text-[15px] tracking-wide`}>
          <Link href="/" className="border-b-2 border-white pb-1">Beranda</Link>
          <Link href="/#cek-sms" className="hover:text-gray-300 transition-colors">Cek SMS</Link>
          {/* Dropdown lainnya tetap... */}
        </div>

        {/* Bagian Kanan: Tombol / Profil Dinamis */}
        <div className={`hidden md:block ${quantico.className}`}>
          {currentUser ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none cursor-pointer bg-white/15 hover:bg-white/25 px-3.5 py-2 rounded-full transition-colors border border-white/30 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  {currentUser.name ? currentUser.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="text-sm font-semibold pr-1">{currentUser.name}</span>
                <ChevronDown className="h-4 w-4 text-gray-300" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={8} className={`${quantico.className} bg-white text-black mt-2 w-52 rounded-xl shadow-xl border-0 py-2`}>
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
                <DropdownMenuItem onClick={() => setIsLogoutModalOpen(true)} className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 flex items-center gap-2 py-2 font-semibold">
                  <LogOut size={16} /> Keluar (Logout)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="bg-white text-blue-950 hover:bg-gray-100 font-semibold rounded-md">
              <Link href="/login">Masuk/Daftar Akun</Link>
            </Button>
          )}
        </div>

        {/* Menu Mobile (Opsional jika diperlukan) */}
      </nav>

      <LogoutModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
}