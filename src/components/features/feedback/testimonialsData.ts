export interface Testimonial {
  text: string;
  name: string;
  role: string;
  initials: string;
  bgClass: string;
  textClass: string;
}

export const testimonials: Testimonial[] = [
  {
    text: "Aplikasi Fraudex sangat membantu diriku untuk mengenali dan mendeteksi modus penipuan secara real-time. Thank you, Fraudex!",
    name: "Adelia Sudarman",
    role: "Mahasiswa",
    initials: "AS",
    bgClass: "bg-pink-100",
    textClass: "text-pink-600"
  },
  {
    text: "Berkat Fraudex, saya jadi bisa lebih aware dan mengetahui berbagai modus penipuan online berbasis SMS. Terima kasih Fraudex!",
    name: "Nayara",
    role: "Masyarakat",
    initials: "NY",
    bgClass: "bg-blue-100",
    textClass: "text-blue-600"
  },
  {
    text: "Sangat rekomendasikan platform ini untuk keluarga di rumah agar terhindar dari SMS phishing.",
    name: "Rian Pratama",
    role: "Pegawai Swasta",
    initials: "RP",
    bgClass: "bg-green-100",
    textClass: "text-green-600"
  },
  {
    text: "Sistemnya cepat dan akurat. Saya tidak perlu ragu lagi saat menerima pesan aneh dari nomor tak dikenal.",
    name: "Budi Santoso",
    role: "Wirausaha",
    initials: "BS",
    bgClass: "bg-yellow-100",
    textClass: "text-yellow-600"
  }
];