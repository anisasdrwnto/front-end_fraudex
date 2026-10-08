import Image from "next/image";
import { Quantico } from "next/font/google";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export function AboutSection() {
  return (
    <section 
      id="tentang" 
      className="py-24 px-6 md:px-12 text-white bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/background-4.png')" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Bagian Kiri: Gambar Ilustrasi Mengambang */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative animate-[bounce_4s_ease-in-out_infinite]">
            <Image 
              src="/3824032-Photoroom 1.png" 
              alt="Ilustrasi Keamanan Fraudex" 
              width={480} 
              height={480} 
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Bagian Kanan: Teks Penjelasan */}
        <div className="w-full md:w-1/2 relative z-10">
          <h2 className={`${quantico.className} text-3xl md:text-4xl font-bold mb-6`}>Tentang Fraudex</h2>
          <p className="text-gray-200 mb-4 leading-relaxed">
            Fraudex lahir dari keprihatinan atas tingginya angka kerugian masyarakat akibat kejahatan siber yang bermula dari sepotong pesan teks. 
          </p>
          <p className="text-gray-200 leading-relaxed">
            Misi kami adalah menyediakan alat pendeteksi yang cerdas, cepat, dan mudah diakses. Dengan menggabungkan teknologi pemrosesan bahasa dan basis data yang terus diperbarui, Fraudex bertindak sebagai tameng digital pertama Anda.
          </p>
        </div>

      </div>
    </section>
  );
}