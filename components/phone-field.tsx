'use client'

import dynamic from 'next/dynamic'

// isValidPhoneNumber é uma função leve — mantida em import estático p/ validação nos forms
export { isValidPhoneNumber } from 'react-phone-number-input'

// O PhoneInput carrega bandeiras (245 países) + <select> pesado.
// Lazy-load (ssr:false) tira isso do HTML inicial e reduz DOM/JS não usado.
const LazyPhoneInput = dynamic(() => import('./phone-input-inner'), {
  ssr: false,
  loading: () => (
    <input
      type="tel"
      inputMode="tel"
      placeholder="(11) 98995-4992"
      className="w-full bg-transparent outline-none"
      aria-label="Telefone"
    />
  ),
})

type Props = {
  id?: string
  value: string
  onChange: (v: string) => void
  wrapperClassName?: string
  placeholder?: string
}

/**
 * Campo de telefone com seletor de país (bandeira) e DDI.
 * Retorna o valor em formato E.164, ex: +5511989954992.
 */
export function PhoneField({ id, value, onChange, wrapperClassName, placeholder }: Props) {
  return (
    <div className={`oxphone ${wrapperClassName ?? ''}`}>
      <LazyPhoneInput id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}
