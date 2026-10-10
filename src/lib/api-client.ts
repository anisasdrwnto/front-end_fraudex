import { type AuthUser, saveSession } from "./auth-storage";

// URL backend dibaca dari environment variable, jangan di-hardcode lagi.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
const API_PREFIX = `${API_BASE_URL}/api/v1`;

type Result<T> =
  | { success: true; data: T }
  | { success: false; message: string };

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  name: string;
  role: "admin" | "user";
  email: string;
}

// Pesan error FastAPI: string untuk error biasa, array untuk error validasi (422).
function extractMessage(data: unknown, fallback: string): string {
  const detail = (data as { detail?: unknown } | null)?.detail;
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) {
    const first = detail[0] as { msg?: string } | undefined;
    if (first?.msg) return first.msg;
  }
  return fallback;
}

async function postJson(path: string, body: unknown) {
  const res = await fetch(`${API_PREFIX}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let data: unknown = null;
  try {
    data = await res.json();
  } catch {
    // respons bukan JSON
  }
  return { res, data };
}

function isTokenResponse(data: unknown): data is TokenResponse {
  const d = data as Partial<TokenResponse> | null;
  return Boolean(d?.access_token && d?.refresh_token && d?.role);
}

export async function loginUser(credentials: {
  email: string;
  password: string;
}): Promise<Result<{ token: string; user: AuthUser }>> {
  try {
    const { res, data } = await postJson("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    if (!res.ok) {
      return {
        success: false,
        message: extractMessage(data, "Email atau kata sandi salah."),
      };
    }
    if (!isTokenResponse(data)) {
      return { success: false, message: "Respons server tidak valid." };
    }

    const user: AuthUser = { name: data.name, role: data.role, email: data.email };
    saveSession({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      user,
    });

    return { success: true, data: { token: data.access_token, user } };
  } catch {
    return { success: false, message: "Tidak bisa terhubung ke server." };
  }
}

export async function registerUser(userData: {
  fullName: string;
  email: string;
  password: string;
}): Promise<Result<{ message: string }>> {
  try {
    const { res, data } = await postJson("/auth/register", {
      name: userData.fullName,
      email: userData.email,
      password: userData.password,
    });

    if (!res.ok) {
      return {
        success: false,
        message: extractMessage(data, "Gagal mendaftarkan akun."),
      };
    }
    return {
      success: true,
      data: { message: "Registrasi berhasil! Silakan masuk." },
    };
  } catch {
    return { success: false, message: "Tidak bisa terhubung ke server." };
  }
}