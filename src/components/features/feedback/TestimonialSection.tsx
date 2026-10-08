"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Quantico } from "next/font/google";
import { testimonials } from "./testimonialsData";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxVisibleSlides = 3;
  const totalSlides = testimonials.length - maxVisibleSlides + 1;

  // Efek untuk auto-slide Testimoni (Setiap 4 detik)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(slideInterval);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  return (
    <section id="testimoni" className="py-24 px-6 md:px-12 bg-gradient-to-br from-[#3A61C6] to-[#4C7EFB] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className={`${quantico.className} text-3xl md:text-4xl font-bold mb-3`}>
              Apa Kata Mereka Mengenai <span className="text-orange-400">Fraudex?</span>
            </h2>
            <p className="text-blue-50 font-medium">Dengarkan langsung ulasan dari para pengguna yang telah terlindungi.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-white transition-colors z-10 cursor-pointer">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 bg-white text-[#3A61C6] hover:bg-gray-50 rounded-full flex items-center justify-center shadow-md transition-colors z-10 cursor-pointer">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${currentSlide * (100 / maxVisibleSlides)}% - ${currentSlide * (2 / maxVisibleSlides)}rem))` }}
          >
            {testimonials.map((item, idx) => (
              <div key={idx} className="min-w-[calc(100%-2rem)] md:min-w-[calc(33.333%-1.33rem)] bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#3A61C6] flex flex-col justify-between h-auto min-h-[280px] text-left">
                <div>
                  <div className="text-[#3A61C6] opacity-20 mb-2">
                    <span className="text-6xl font-serif leading-none">“</span>
                  </div>
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    <Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-8 font-medium">{item.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden flex-shrink-0">
                    <div className={`w-full h-full flex items-center justify-center font-bold ${item.textClass} ${item.bgClass}`}>
                      {item.initials}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B0A33]">{item.name}</h4>
                    <span className="text-xs text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setCurrentSlide(idx)} 
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}