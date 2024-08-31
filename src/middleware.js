import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token');
  const baseUrl = req.nextUrl.origin;

  if (req.nextUrl.pathname.startsWith('/_next/') ||
    req.nextUrl.pathname.startsWith('/images/') ||
    req.nextUrl.pathname.startsWith('/favicon.ico') ||
    req.nextUrl.pathname.startsWith('/robots.txt')) {
    return NextResponse.next();
  }
  
  // Если токен отсутствует и запрос не на страницу логина
  if (token && req.nextUrl.pathname !== '/auth/login') {
    return NextResponse.redirect(`${baseUrl}/auth/login`);
  }

  // Если токен есть и пользователь пытается зайти на страницу логина
  if (token && req.nextUrl.pathname === '/auth/login') {
    return NextResponse.redirect(`${baseUrl}/products`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!auth/login).*)'],
};
