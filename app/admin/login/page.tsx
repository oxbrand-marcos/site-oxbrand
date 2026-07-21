'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error: authError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: '/admin/blog',
    })
    if (authError) {
      setError('E-mail ou senha incorretos.')
      setLoading(false)
    } else {
      router.push('/admin/blog')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm flex flex-col gap-8">

        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-white font-black text-lg">Ox</span>
          </div>
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 font-mono">OxBrand</p>
            <h1 className="text-white font-bold text-xl mt-1">Área dos Redatores</h1>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-zinc-400">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="redator@oxbrand.com.br"
              className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 placeholder:text-zinc-600 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-mono tracking-widest uppercase text-zinc-400">
              Senha
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 placeholder:text-zinc-600 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 font-mono border border-red-900/50 bg-red-950/30 px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white text-xs font-bold tracking-widest uppercase py-3 hover:bg-primary/85 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-xs text-zinc-600 font-mono">
          Acesso restrito a colaboradores OxBrand
        </p>
      </div>
    </div>
  )
}
