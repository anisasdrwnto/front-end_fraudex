"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Quantico } from "next/font/google";
import { SMSResultAlert } from "./SMSResultAlert";
import { useSMSCheckMutation } from "@/store/queries/useSMSQueries";
import { SMSCheckResult } from "@/types";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export function SMSInputForm() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [smsText, setSmsText] = useState("");
  const [analysisResult, setAnalysisResult] = useState<SMSCheckResult | null>(null);

  const smsMutation = useSMSCheckMutation();

  const handleAnalyze = () => {
    if (!smsText.trim()) return;

    smsMutation.mutate(smsText, {
      onSuccess: (data) => {
        setAnalysisResult(data);
      },
      onError: (error) => {
        console.error("Gagal menganalisis SMS:", error);
      }
    });
  };

  return (
    <section id="cek-sms" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#93A5FF] to-[#ffffff] text-[#0B0A33]">
      <div className="max-w-4xl mx-auto">
        <h2 className={`${quantico.className} text-3xl md:text-4xl font-bold mb-2`}>Cek SMSmu Di sini!</h2>
        <p className="text-[#0B0A33] mb-8 font-medium">Ketik pesan SMS atau tempel pesannya di sini...</p>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out">
          <textarea 
            rows={isInputFocused || smsText.length > 0 ? 6 : 2} 
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            onChange={(e) => setSmsText(e.target.value)}
            value={smsText}
            placeholder="Ketik atau tempel SMS di sini..." 
            className="w-full p-6 focus:outline-none resize-none text-gray-800 placeholder:text-gray-400 transition-all duration-300"
          ></textarea>
          
          {(isInputFocused || smsText.length > 0) && (
            <div className="border-t border-gray-100 p-4 flex items-center justify-between bg-gray-50/50 animate-in fade-in duration-300">
              <span className="text-sm text-gray-400 font-medium">Tekan tombol di samping untuk memulai analisis.</span>
              <button 
                type="button"
                onClick={handleAnalyze}
                disabled={smsMutation.isPending}
                className="bg-[#1e1b4b] hover:bg-[#342e81] text-white p-3.5 rounded-full transition-colors shadow-md cursor-pointer disabled:opacity-50"
              >
                <Send size={20} className="ml-0.5" />
              </button>
            </div>
          )}
        </div>

        {/* Memunculkan hasil analisis tepat di bawah form input */}
        {analysisResult && <SMSResultAlert result={analysisResult} />}
      </div>
    </section>
  );
}