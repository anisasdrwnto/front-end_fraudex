// Simulasi API Client untuk kebutuhan Front-End (Mock API)

export async function loginUser(credentials: { email: string; password: string }) {
    // Simulasi jeda jaringan (loading) selama 1 detik
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulasi pengecekan sederhana untuk testing front-end
    if (credentials.email && credentials.password) {
        return { 
            success: true, 
            data: { 
                token: "mock-jwt-token-12345", 
                user: { name: "Anisa", email: credentials.email, role: "user" } 
            } 
        };
    }

    return { success: false, message: "Email atau kata sandi salah." };
}

export async function registerUser(userData: { fullName: string; email: string; password: string }) {
    // Simulasi jeda jaringan (loading) selama 1 detik
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