import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Better Auth のセッション Cookie が存在するかチェック
  // 実際のセッション検証は各 Server Component / API ルートで auth.api.getSession により実施
  const sessionCookie =
    request.cookies.get('better-auth.session_token') ??
    request.cookies.get('__Secure-better-auth.session_token');

  if (!sessionCookie) {
    if (request.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/study',
    '/review',
    '/api/answers',
    '/api/feedback',
    '/api/dashboard',
    '/api/review',
  ],
};
