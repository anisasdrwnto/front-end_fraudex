import { AuthGreeting } from "@/components/features/auth/AuthGreeting";
import { LoginForm } from "@/components/features/auth/LoginForm";

export default function LoginPage() {
  return (
    <main 
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-6 md:p-12 overflow-x-hidden"
      style={{ backgroundImage: "url('/background_5.png')" }}
    >
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Kolom Kiri menggunakan komponen */}
        <AuthGreeting />

        {/* Kolom Kanan menggunakan komponen */}
        <div className="lg:col-span-7">
          <LoginForm />
        </div>

      </div>
    </main>
  );
}