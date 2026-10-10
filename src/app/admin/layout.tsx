"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Jersey_15, Quantico } from "next/font/google";
import { 
  LayoutDashboard, 
  MessageSquareWarning, 
  Users, 
  KeyRound, 
  LogOut, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Search
} from "lucide-react";
import { LogoutModal } from "@/components/features/auth/LogoutModal"; 
import { logout } from "@/lib/auth-storage";

const jersey = Jersey_15({ weight: "400", subsets: ["latin"], display: "swap" });
const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // <-- State untuk modal logout
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Manajemen Laporan Pengguna", href: "/admin/laporan-pengguna", icon: MessageSquareWarning},
    { name: "Manajemen Data Pengguna", href: "/admin/data-pengguna", icon: Users },
  ];

  const filteredMenu = menuItems.filter((item) => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fungsi saat tombol "Ya, Keluar" di modal diklik
  const handleConfirmLogout = () => {
    logout("/"); // hapus localStorage + cookie, lalu reload ke landing page
  };

  return (
    <div className={`min-h-screen flex relative ${isDarkMode ? "bg-[#0b0f19] text-gray-100" : "bg-gray-50 text-gray-900"} ${quantico.className}`}>
      
      {/* Tombol Hamburger Mobile */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-[#0C134F] text-white w-full fixed top-0 z-30 shadow-md">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={28} height={28} className="w-7 h-7 object-contain" />
          <span className={`${jersey.className} text-3xl tracking-wider pt-1`}>Fraudex</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop Overlay Mobile */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 
        w-72 bg-[#0C134F] text-white flex flex-col justify-between 
        transition-transform duration-300 ease-in-out shadow-2xl
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div>
          {/* Logo & Judul Fraudex */}
          <div className="p-5 flex items-center gap-2.5 border-b border-white/10">
            <Image src="/logo.png" alt="Logo Fraudex" width={32} height={32} className="object-contain w-8 h-8" />
            <span className={`${jersey.className} text-4xl tracking-wider pt-1`}>
              Fraudex
            </span>
          </div>

          {/* Kotak Input Search di Sidebar */}
          <div className="px-4 pt-4 pb-2">
            <div className="relative flex items-center">
              <Search size={16} className="absolute left-3 text-gray-400" />
              <input 
                type="text"
                placeholder="Cari menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-gray-400 text-xs rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/5 transition-all"
              />
            </div>
          </div>

          {/* Menu Navigasi Samping */}
          <nav className="p-4 flex flex-col gap-2">
            {filteredMenu.length > 0 ? (
              filteredMenu.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                      isActive 
                        ? "bg-white/20 text-white shadow-md font-bold" 
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <Icon size={18} className="shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="text-xs text-gray-400 text-center py-4">Menu tidak ditemukan</p>
            )}
          </nav>
        </div>

        {/* Bagian Bawah Sidebar (Light/Dark Mode & Logout) */}
        <div className="p-4 border-t border-white/10 flex flex-col gap-4">
          
          {/* Toggle Mode (Light / Dark) */}
          <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
            </div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${isDarkMode ? "bg-blue-600" : "bg-gray-400"}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? "translate-x-6" : "translate-x-0"}`} />
            </button>
          </div>

          {/* Tombol Logout (Diubah menjadi button yang memicu modal) */}
          <button 
            type="button"
            onClick={() => setIsLogoutModalOpen(true)}
            className="flex items-center justify-center gap-3 bg-[#C92A2A] hover:bg-red-700 text-white p-3.5 rounded-xl transition-colors font-bold text-sm shadow-md cursor-pointer"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* KONTEN UTAMA DASHBOARD */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto mt-16 lg:mt-0">
        {children}
      </main>

      {/* Modal Konfirmasi Logout */}
      <LogoutModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
}