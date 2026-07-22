'use client'

import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import 'react-phone-number-input/style.css'

type InnerProps = {
  id?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}

export default function PhoneInputInner({ id, value, onChange, placeholder }: InnerProps) {
  return (
    <PhoneInput
      id={id}
      international
      defaultCountry="BR"
      countryCallingCodeEditable={false}
      flags={flags}
      value={value}
      onChange={(v) => onChange(v ?? '')}
      placeholder={placeholder ?? '(11) 98995-4992'}
    />
  )
}
