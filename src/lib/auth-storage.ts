export interface AuthUser {
  name: string;
  role: "admin" | "user";
  email: string;
}

interface Session {
  accessToken: string;
  refreshToken: string;
  user: AuthUser;
}

const SESSION_DAYS = 7;

function setCookie(name: string, value: string, days: number) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=; Path=/; Max-Age=0`;
}

export function saveSession(session: Session) {
  localStorage.setItem("token", session.accessToken);
  localStorage.setItem("refresh_token", session.refreshToken);
  localStorage.setItem("user", JSON.stringify(session.user));
  // Cookie yang dibaca middleware.ts. Nama dan bentuknya sama persis
  // dengan yang middleware kamu harapkan: JSON berisi role.
  setCookie("fraudex_session", JSON.stringify({ role: session.user.role }), SESSION_DAYS);
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
  deleteCookie("fraudex_session");
}

export function logout(redirectTo = "/") {
  clearSession(); // hapus localStorage + cookie fraudex_session
  // reload penuh: Navbar, cache React Query, dan middleware mulai dari nol
  window.location.replace(redirectTo);
}