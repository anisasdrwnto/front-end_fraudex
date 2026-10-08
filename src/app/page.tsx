"use client";

import { useState, useEffect } from "react";
import { User, Send, ChevronUp, ChevronDown, MessageSquarePlus } from "lucide-react";
import Image from "next/image";
import { Quantico } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// Import seluruh komponen modular
import { SMSInputForm } from "@/components/features/sms-checker/SMSInputForm";
import { ScamCharacteristics } from "@/components/features/education/ScamCharacteristics";
import { PreventionTips } from "@/components/features/education/PreventionTips";
import { AboutSection } from "@/components/features/education/AboutSection";
import { TestimonialSection } from "@/components/features/feedback/TestimonialSection";
import { ReviewModal } from "@/components/features/feedback/ReviewModal";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export default function Home() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  // Efek untuk memunculkan tombol scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <main className="min-h-screen bg-gradient-to-b from-[#0C134F] from-0% via-[#1D267D] via-40% to-[#93A5FF] to-100% text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className={`text-center lg:text-left z-10 ${quantico.className}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight mb-6 tracking-wide">
              Bingung SMS ini <br className="hidden md:block" />
              <span className="text-white font-bold">AMAN ATAU PENIPUAN?</span>
            </h1>
            <p className="text-white mb-8 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed font-sans">
              Cukup tempel atau ketik pesan yang Anda terima dan Fraudex
              akan memberi tahu apakah SMS itu aman, waspada, atau
              berbahaya. Gratis dan gampang digunakan!
            </p>
            <button 
              onClick={() => document.getElementById('cek-sms')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1e1b4b] hover:bg-[#342e81] hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/50 border border-indigo-800 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 ease-in-out w-full sm:w-auto shadow-lg tracking-wider cursor-pointer"
            >
              Cek Sekarang
            </button>
          </div>

          <div className="relative w-full max-w-md mx-auto mt-12 lg:mt-0 z-10">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <div className="bg-[#5C469C] text-white p-4 flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full border border-white/40"><User size={24} /></div>
                <span className="font-semibold text-lg font-sans">+62 812-3456-7890</span>
              </div>
              <div className="p-6 bg-gray-50 flex flex-col gap-4 min-h-[260px] font-sans">
                <div className="bg-white p-4 rounded-xl rounded-tl-sm shadow-sm text-gray-800 text-sm border border-gray-100 leading-relaxed">
                  Paket Anda tertahan di gudang karena data alamat kurang lengkap. Lengkapi data & bayar biaya admin Rp5.000 di: <br />
                  <a href="#" className="text-blue-600 underline">kurir-cepat-site/lacak</a>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full mt-1 flex items-center justify-center text-gray-400"><User size={16} /></div>
              </div>
              <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 font-sans">
                <input type="text" placeholder="Balasan pesan Anda..." className="flex-1 bg-gray-100 rounded-full px-5 py-2.5 text-sm outline-none text-gray-700" disabled />
                <button className="bg-[#5C469C] text-white p-2.5 rounded-full"><Send size={18} className="ml-1" /></button>
              </div>
            </div>
            <div className="absolute -top-12 -right-10 md:-top-20 md:-right-16 z-20 animate-[bounce_3s_ease-in-out_infinite]">
              <Image src="/bell-3d.png" width={160} height={160} alt="Notifikasi Lonceng" className="drop-shadow-2xl object-contain" />
            </div>
            <div className="absolute -bottom-16 -left-12 md:-bottom-24 md:-left-20 z-20">
              <Image src="/warning-3d.png" width={220} height={220} alt="Ikon Peringatan" className="drop-shadow-2xl object-contain" />
            </div>
          </div>
        </div>
      </main>

      {/* ================= SECTION CEK SMS ================= */}
      <SMSInputForm />

      {/* ================= SECTION CIRI-CIRI PENIPUAN ================= */}
      <ScamCharacteristics />

      {/* ================= SECTION TIPS PENCEGAHAN ================= */}
      <PreventionTips />

      {/* ================= SECTION TENTANG KAMI ================= */}
      <AboutSection />

      {/* ================= SECTION TESTIMONI (Modular) ================= */}
      <TestimonialSection />

      {/* ================= FLOATING BUTTONS ================= */}
      <div className={`fixed right-6 bottom-6 flex flex-col gap-3 z-50 transition-opacity duration-300 ${showScrollButtons ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button onClick={scrollToTop} className="w-12 h-12 bg-[#0C134F] hover:bg-[#1D267D] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 self-end cursor-pointer">
          <ChevronUp size={24} />
        </button>
        <button onClick={() => setIsReviewModalOpen(true)} className="bg-[#0C134F] hover:bg-[#1D267D] text-white py-3 px-5 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-1 font-semibold text-sm cursor-pointer">
          <MessageSquarePlus size={20} />
          <span className="hidden md:inline">Kirim Ulasan</span>
        </button>
        <button onClick={scrollToBottom} className="w-12 h-12 bg-[#0C134F] hover:bg-[#1D267D] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1 self-end cursor-pointer">
          <ChevronDown size={24} />
        </button>
      </div>

      {/* ================= MODAL KIRIM ULASAN ================= */}
      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
      />

      <Footer onOpenReview={() => setIsReviewModalOpen(true)} />
    </>
  );
}