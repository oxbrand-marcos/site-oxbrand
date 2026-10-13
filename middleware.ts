import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PRODUCTION_HOSTS = ['oxbrand.com.br', 'www.oxbrand.com.br']

/**
 * Padrões de URL descontinuadas do WordPress — devem retornar 410 Gone.
 * Next.js redirects só suportam 301/302/307/308, então o 410 é emitido aqui.
 */
const GONE_PATTERNS = [
  /^\/elementor-/,
  /^\/politica-de-privacidade-flux(\/|$)/,
  /^\/wp-admin(\/|$)/,
  /^\/wp-login\.php$/,
  /^\/xmlrpc\.php$/,
  /^\/wp-json(\/|$)/,
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') ?? ''
  // Remove porta se presente (ex: localhost:3000)
  const hostname = host.split(':')[0]

  // 410 Gone — URLs descontinuadas do WordPress
  if (GONE_PATTERNS.some(re => re.test(pathname))) {
    return new NextResponse(null, { status: 410 })
  }

  const response = NextResponse.next()

  if (!PRODUCTION_HOSTS.includes(hostname)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  return response
}

export const config = {
  // Aplica a todas as rotas exceto assets estáticos e internos do Next.js
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
