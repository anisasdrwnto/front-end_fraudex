import Image from "next/image";
import { Jersey_15 } from "next/font/google";

const jersey = Jersey_15({ weight: "400", subsets: ["latin"], display: "swap" });

interface FooterProps {
  onOpenReview: () => void;
}

export default function Footer({ onOpenReview }: FooterProps) {
  return (
    <footer className="bg-[#93A5FF]/80 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-[#090E34] text-white rounded-[2rem] p-10 md:p-16 shadow-2xl relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          
            {/* Kolom Kiri Footer */}
            <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
                <Image 
                src="/logo.png" 
                alt="Logo Fraudex" 
                width={40} 
                height={40} 
                className="object-contain w-10 h-10" 
                />
                <span className={`${jersey.className} text-5xl tracking-wider pt-1.5`}>Fraudex</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
                Platform deteksi dan pencegahan penipuan online berbasis SMS secara real-time untuk melindungi masyarakat Indonesia.
            </p>
            <div className="flex gap-3">
                {['ig', 'fb', 'x', 'yt'].map((social) => (
                <a 
                    key={social} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs font-bold transition-colors"
                >
                    {social}
                </a>
                ))}
            </div>
            </div>
          {/* Kolom Tengah: Tautan Utama */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm tracking-widest mb-6 uppercase text-gray-100">Tautan Utama</h4>
            <ul className="flex flex-col gap-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#ciri-ciri" className="hover:text-white transition-colors">Ciri Penipuan</a></li>
              <li><a href="#tips" className="hover:text-white transition-colors">Tips Pencegahan</a></li>
              <li>
                <button onClick={onOpenReview} className="hover:text-white transition-colors text-left cursor-pointer">
                  Umpan Balik
                </button>
              </li>
            </ul>
          </div>

          {/* Kolom Kanan: Kontak */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-sm tracking-widest mb-6 uppercase text-gray-100">Kontak</h4>
            <div className="flex flex-col gap-4 text-gray-300 text-sm leading-relaxed">
              <p>Jalan Imam Bonjol, Sumbersoko, Pandean, Kecamatan Mejayan, Kabupaten Madiun, Jawa Timur 63153</p>
              <p><a href="mailto:support@fraudex.id" className="hover:text-white transition-colors">support@fraudex.id</a></p>
              <p><a href="tel:+6281219402940" className="hover:text-white transition-colors">(021)23456789</a></p>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center relative z-10">
          <p className="text-gray-400 text-sm">© 2026 Fraudex. Hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}