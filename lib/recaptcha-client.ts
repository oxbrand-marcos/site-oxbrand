// Carrega o reCAPTCHA v3 sob demanda e devolve um token por ação.
// Se NEXT_PUBLIC_RECAPTCHA_SITE_KEY não estiver setado, retorna '' e o
// servidor simplesmente não verifica, formulários seguem funcionando.

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void
      execute: (siteKey: string, opts: { action: string }) => Promise<string>
    }
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
let loading: Promise<void> | null = null

function ensureLoaded(): Promise<void> {
  if (!SITE_KEY || typeof window === 'undefined') return Promise.resolve()
  if (!loading) {
    loading = new Promise<void>((resolve) => {
      if (window.grecaptcha) return resolve()
      const s = document.createElement('script')
      s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
      s.async = true
      s.onload = () => resolve()
      s.onerror = () => resolve()
      document.head.appendChild(s)
    })
  }
  return loading
}

export async function getRecaptchaToken(action: string): Promise<string> {
  if (!SITE_KEY || typeof window === 'undefined') return ''
  await ensureLoaded()
  const grecaptcha = window.grecaptcha
  if (!grecaptcha) return ''
  await new Promise<void>((r) => grecaptcha.ready(() => r()))
  try {
    return await grecaptcha.execute(SITE_KEY, { action })
  } catch {
    return ''
  }
}
