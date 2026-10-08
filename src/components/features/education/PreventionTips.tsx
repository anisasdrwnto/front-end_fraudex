import { EyeOff, ShieldCheck, CheckCircle2, Smartphone } from "lucide-react";
import { Quantico } from "next/font/google";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export function PreventionTips() {
  return (
    <section id="tips" className="py-24 px-6 md:px-12 bg-[#0C134F] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`${quantico.className} text-3xl md:text-4xl font-bold mb-4`}>Tips Menghindari Penipuan SMS</h2>
          <p className="text-gray-300">Langkah proaktif untuk melindungi diri Anda dan keluarga dari ancaman siber.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#F4F9FF] p-6 rounded-2xl border border-blue-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-rose-500 text-white rounded-xl flex items-center justify-center mb-5 shadow-md">
              <EyeOff size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#0B0A33]">Jaga Rahasia Data</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Jangan pernah memberikan kode OTP, PIN, atau kata sandi kepada siapapun yang memintanya lewat SMS.</p>
          </div>

          <div className="bg-[#F4F9FF] p-6 rounded-2xl border border-blue-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-5 shadow-md">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#0B0A33]">Verifikasi Pengirim</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Instansi resmi biasanya menggunakan nama perusahaan (Masking SMS), bukan nomor handphone reguler (+62 8xx).</p>
          </div>

          <div className="bg-[#F4F9FF] p-6 rounded-2xl border border-blue-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center mb-5 shadow-md">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#0B0A33]">Jangan Asal Klik</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Abaikan tautan (link) yang dipendekkan (seperti bit.ly) atau situs dengan nama domain yang aneh.</p>
          </div>

          <div className="bg-[#F4F9FF] p-6 rounded-2xl border border-blue-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-5 shadow-md">
              <Smartphone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#0B0A33]">Gunakan Fraudex</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Jika Anda ragu, langsung salin dan tempel SMS tersebut ke Fraudex untuk memastikan keamanannya.</p>
          </div>
        </div>
      </div>
    </section>
  );
}