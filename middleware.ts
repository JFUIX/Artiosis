import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Serve the approved Artiosis website at the canonical homepage URL.
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/artiosis-final.html', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/'] };
