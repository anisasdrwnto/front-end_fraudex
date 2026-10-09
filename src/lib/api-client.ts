// API Client yang terhubung ke Backend FastAPI via LocalTunnel
const API_BASE_URL = "https://yellow-chefs-refuse.loca.lt";

export async function loginUser(credentials: { email: string; password: string }) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Bypass-Tunnel-Reminder": "true",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.detail || "Email atau kata sandi salah." };
        }

        const userData = { name: data.name, role: data.role, email: credentials.email };
        
        // Simpan token dan data user ke localStorage untuk sesi di browser
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(userData));

        return {
            success: true,
            data: {
                token: data.access_token,
                user: userData
            }
        };
    } catch (error) {
        return { success: false, message: "Terjadi kesalahan jaringan ke server." };
    }
}

export async function registerUser(userData: { fullName: string; email: string; password: string }) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Bypass-Tunnel-Reminder": "true",
            },
            body: JSON.stringify({
                name: userData.fullName,
                email: userData.email,
                password: userData.password,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.detail || "Gagal mendaftarkan akun." };
        }

        return {
            success: true,
            data: {
                message: "Registrasi berhasil! Silakan masuk."
            }
        };
    } catch (error) {
        return { success: false, message: "Terjadi kesalahan jaringan ke server." };
    }
}