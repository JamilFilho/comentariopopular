import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Redirect only the docs index to a default page.
  if (req.nextUrl.pathname === '/pages') {
    return NextResponse.redirect(new URL('/pages/sobre-o-projeto', req.url));
  }

  if (req.nextUrl.pathname === '/comments') {
    return NextResponse.redirect(new URL('/pages/introducao', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/pages'],
};
