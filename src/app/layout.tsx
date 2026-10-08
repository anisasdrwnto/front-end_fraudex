import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import { QueryProvider } from "@/providers/QueryProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fraudex - Deteksi SMS Penipuan",
  description: "Sistem Pendeteksi Penipuan Online Berbasis SMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen bg-[#0f172a]`}>
        <QueryProvider>
          {/* Navbar dihapus dari sini agar tidak muncul di halaman login/register */}
          <main>{children}</main>
        </QueryProvider>
      </body>
    </html>
  );
}