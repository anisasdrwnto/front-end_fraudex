// API Client yang dinamis untuk integrasi autentikasi

export async function loginUser(credentials: { email: string; password: string }) {
    // Simulasi jeda jaringan (loading) selama 1 detik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (credentials.email && credentials.password) {
        // Ambil nama dari bagian depan email sebagai representasi nama pengguna yang login
        const extractedName = credentials.email.split("@")[0];
        const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

        return { 
            success: true, 
            data: { 
                token: "mock-jwt-token-12345", 
                user: { name: formattedName, email: credentials.email, role: "user" } 
            } 
        };
    }

    return { success: false, message: "Email atau kata sandi salah." };
}

export async function registerUser(userData: { fullName: string; email: string; password: string }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (userData.email && userData.password) {
        return { 
            success: true, 
            data: { 
                message: "Registrasi berhasil! Silakan masuk." 
            } 
        };
    }

    return { success: false, message: "Gagal mendaftarkan akun." };
}