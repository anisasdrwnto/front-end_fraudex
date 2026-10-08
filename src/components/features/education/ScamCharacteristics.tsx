import { ShieldAlert, Link as LinkIcon, Clock } from "lucide-react";
import { Quantico } from "next/font/google";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export function ScamCharacteristics() {
  return (
    <section id="ciri-ciri" className="py-24 px-6 md:px-12 bg-[#1D267D] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${quantico.className} text-3xl md:text-4xl font-bold mb-4`}>Kenali Ciri-Ciri Penipuan SMS</h2>
          <p className="text-gray-200">Jangan mudah percaya. Berikut adalah taktik yang paling sering digunakan oleh penipu.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div tabIndex={0} className="bg-white p-8 rounded-2xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0B0A33]">Menciptakan Kepanikan</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pesan seringkali menyatakan bahwa akun Anda diblokir, ada transaksi mencurigakan, atau paket Anda tertahan untuk memicu respons emosional.
            </p>
          </div>

          <div tabIndex={0} className="bg-white p-8 rounded-2xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <LinkIcon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0B0A33]">Tautan Berbahaya (Phishing)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Menyertakan tautan situs web yang terlihat resmi namun palsu untuk mencuri data.
            </p>
          </div>

          <div tabIndex={0} className="bg-white p-8 rounded-2xl border border-gray-100 cursor-pointer transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#0B0A33]">Desakan Waktu</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Memaksa Anda untuk segera bertindak dalam hitungan jam atau menit agar Anda panik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}