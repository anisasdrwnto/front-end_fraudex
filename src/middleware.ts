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

  if (pathname.startsWith('/admin')) {
    if (!role) return NextResponse.redirect(new URL('/login', request.url));
    if (role !== 'admin') return NextResponse.redirect(new URL('/', request.url));
  }

  if ((pathname.startsWith('/login') || pathname.startsWith('/register')) && role === 'admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/register'],
};