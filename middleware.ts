import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the route is an admin route
  if (request.nextUrl.pathname.startsWith('/api/admin')) {
    const secretKey = request.headers.get('x-admin-secret');
    const expectedSecret = process.env.ADMIN_SECRET_KEY;

    if (!secretKey || secretKey !== expectedSecret) {
      return NextResponse.json(
        { error: 'Unauthorized. Invalid or missing x-admin-secret header.' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/admin/:path*',
};
