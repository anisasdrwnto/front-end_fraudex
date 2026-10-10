import { z } from "zod";

// Skema Validasi Form Login
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Format email tidak valid" }),
  password: z
    .string()
    .min(1, { message: "Kata sandi wajib diisi" }),
});

// Skema Validasi Form Register (Pendaftaran Akun)
export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Nama lengkap minimal harus 3 karakter" }),
  email: z
    .string()
    .min(1, { message: "Email wajib diisi" })
    .email({ message: "Format email tidak valid" }),
  password: z
    .string()
    .min(8, { message: "Kata sandi minimal harus 8 karakter" })
    .max(64, { message: "Kata sandi maksimal 64 karakter" }),
});

// Skema Validasi Input Pengecekan SMS
export const smsCheckSchema = z.object({
  message: z
    .string()
    .min(10, { message: "Pesan SMS terlalu pendek, minimal 10 karakter untuk dianalisis" }),
});

// Ekspor tipe data TypeScript (Inferred Types) untuk digunakan pada komponen React
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type SMSCheckFormData = z.infer<typeof smsCheckSchema>;