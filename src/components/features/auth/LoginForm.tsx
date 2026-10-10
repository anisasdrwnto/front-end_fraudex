"use client";

import { useState } from "react";
import Link from "next/link";
import { Quantico } from "next/font/google";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/schemas";
import { useLoginMutation } from "@/store/queries/useAuthQueries";

const quantico = Quantico({ 
  weight: ["400", "700"], 
  style: ["normal", "italic"], 
  subsets: ["latin"], 
  display: "swap" 
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const loginMutation = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    setErrorMessage("");
    loginMutation.mutate(data, {
      onSuccess: (result) => {
        // Role diambil langsung dari respons backend, bukan dari localStorage
        const target = result.user.role === "admin" ? "/admin/dashboard" : "/";
        window.location.replace(target);
      },
      onError: (err: Error) => {
        setErrorMessage(err.message || "Gagal masuk");
      },
    });
  };

  return (
    <div className="bg-white/50 backdrop-blur-md border border-white/80 rounded-3xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className={`${quantico.className} text-3xl md:text-4xl font-bold text-[#0B0A33] mb-3`}>
          Masuk
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Sebelum akses sistem ini, silahkan isi form login berikut ya!
        </p>
      </div>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl font-medium text-center">
          {errorMessage}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Email Anda
          </label>
          <input 
            type="email" 
            placeholder="Ketik email Anda di sini..." 
            {...register("email")}
            className="w-full bg-white/80 border border-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5C7BEF] shadow-sm"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
            Kata Sandi
          </label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Ketik kata sandi Anda di sini..." 
              {...register("password")}
              className="w-full bg-white/80 border border-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5C7BEF] shadow-sm pr-10"
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1 font-medium">{errors.password.message}</p>}
        </div>

        <button 
          type="submit" 
          disabled={loginMutation.isPending}
          className="mt-3 w-full bg-[#0C134F] hover:bg-[#1D267D] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all duration-300 tracking-wider text-sm cursor-pointer disabled:opacity-50"
        >
          {loginMutation.isPending ? "Memproses..." : "Masuk Sekarang"}
        </button>

        <div className="relative flex items-center justify-center my-2">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-400/40"></div></div>
          <span className="relative bg-white/60 px-4 text-xs font-semibold text-gray-500 uppercase rounded-full">Atau</span>
        </div>

        <button 
          type="button" 
          className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center gap-3 transition-colors text-sm cursor-pointer"
        >
          {/* Logo Google SVG tetap sama */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.36 7.23 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 11.73s.43 3.61 1.19 5.15l4.09-2.61z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.64 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          Lanjutkan dengan Google
        </button>

        <p className="text-center text-sm text-gray-700 mt-2">
          Belum punya akun? <Link href="/register" className="font-bold text-[#0C134F] hover:underline">Daftar</Link>
        </p>
      </form>
    </div>
  );
}