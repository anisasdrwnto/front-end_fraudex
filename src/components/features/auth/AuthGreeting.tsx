import Image from "next/image";
import Link from "next/link";
import { Quantico, Jersey_15 } from "next/font/google";

const quantico = Quantico({ 
  weight: ["400", "700"], 
  style: ["normal", "italic"], 
  subsets: ["latin"], 
  display: "swap" 
});
const jersey = Jersey_15({ weight: "400", subsets: ["latin"], display: "swap" });

export function AuthGreeting() {
  return (
    <div className="lg:col-span-5 text-[#0B0A33] flex flex-col justify-center py-6">
      <div className="w-fit mb-6">
        <h1 className={`${quantico.className} text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.5rem] font-normal italic mb-1 tracking-wide leading-tight whitespace-nowrap`}>
          Selamat datang di
        </h1>
        
        <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity w-full cursor-pointer">
          <Image src="/logo.png" alt="Logo Fraudex" width={56} height={56} className="object-contain w-10 h-10 md:w-12 md:h-12" />
          <span className={`${jersey.className} text-6xl md:text-7xl tracking-wider text-[#0C134F] pt-2 md:pt-3`}>
            Fraudex
          </span>
        </Link>
      </div>
      
      <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed">
        Cegah SMS penipuan dan deteksi dengan satu <span className="font-bold underline text-[#0C134F]">klik</span>
      </p>
    </div>
  );
}