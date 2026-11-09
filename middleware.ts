import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Serve the approved Artiosis website at the canonical homepage URL.
export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname.toLowerCase() === 'www.artiosis.com') {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.hostname = 'artiosis.com';
    canonicalUrl.protocol = 'https:';
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/artiosis-final.html', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/:path*'] };
