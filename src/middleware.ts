import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let role: string | null = null;
  const raw = request.cookies.get('fraudex_session')?.value;
  if (raw) {
    try {
      role = JSON.parse(raw).role ?? null;
    } catch {
      role = null;
    }
  }

  const isAdminArea = pathname.startsWith('/admin');

  // Area admin: harus login dan harus admin
  if (isAdminArea) {
    if (!role) return NextResponse.redirect(new URL('/login', request.url));
    if (role !== 'admin') return NextResponse.redirect(new URL('/', request.url));
  }

  // Admin yang sedang login hanya boleh berada di /admin
  if (role === 'admin' && !isAdminArea) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // semua halaman, kecuali file statis, aset Next.js, dan /api
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};