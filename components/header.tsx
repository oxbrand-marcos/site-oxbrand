'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navLinks: NavItem[] = [
  { label: 'Sobre', href: '/sobre' },
  {
    label: 'Soluções',
    href: '/solucoes',
    children: [
      { label: 'Assessoria em Marketing', href: '/solucoes/assessoria-em-marketing' },
      { label: 'Copywriting e Redação', href: '/solucoes/copywriting-e-redacao' },
      { label: 'Desenvolvimento de Sites', href: '/solucoes/desenvolvimento-de-sites' },
      { label: 'Gestão de Tráfego Pago', href: '/solucoes/gestao-de-trafego-pago' },
      { label: 'Inbound Marketing', href: '/solucoes/inbound-marketing' },
      { label: 'CRM Kommo', href: '/solucoes/crm-kommo' },
    ],
  },
  {
    label: 'Clientes',
    href: '/nossos-clientes',
    children: [
      { label: 'Nossos Clientes', href: '/nossos-clientes' },
      { label: 'Portfólio', href: '/portfolio' },
    ],
  },
  { label: 'Insights', href: '/blog' },
  { label: 'Materiais', href: '/materiais-gratuitos' },
  {
    label: 'Contato',
    href: '/contato',
    children: [
      { label: 'Fale Conosco', href: '/contato' },
      { label: 'Diagnóstico Gratuito', href: '/diagnostico' },
      { label: 'Carreiras', href: '/carreiras-em-marketing-digital' },
    ],
  },
]

function DropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuId = `dropdown-${item.href.replace(/\//g, '-')}`

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setOpen(false)
      // Devolve foco ao trigger
      containerRef.current?.querySelector<HTMLElement>('[data-trigger]')?.focus()
    }
    if (e.key === 'ArrowDown' && open) {
      e.preventDefault()
      const items = containerRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]')
      items?.[0]?.focus()
    }
  }

  // Fecha ao perder foco para fora do container
  function handleBlur(e: React.FocusEvent) {
    if (!containerRef.current?.contains(e.relatedTarget as Node)) {
      setOpen(false)
    }
  }

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="mono-tag text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {/* Trigger com suporte a teclado */}
      <Link
        href={item.href}
        data-trigger
        className="flex items-center gap-1 mono-tag text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
      >
        {item.label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </Link>

      {/* Dropdown */}
      <div
        id={menuId}
        role="menu"
        aria-label={`Submenu ${item.label}`}
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[200px] bg-background border border-border shadow-xl z-50
          transition-all duration-200 origin-top
          ${open ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}
      >
        {/* Ponteiro decorativo */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-background border-l border-t border-border rotate-45" aria-hidden="true" />

        <div className="relative">
          {item.children.map((child, i) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              onKeyDown={(e) => {
                const items = containerRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]')
                if (!items) return
                const idx = Array.from(items).indexOf(e.currentTarget)
                if (e.key === 'ArrowDown') { e.preventDefault(); items[idx + 1]?.focus() }
                if (e.key === 'ArrowUp')   { e.preventDefault(); idx > 0 ? items[idx - 1]?.focus() : containerRef.current?.querySelector<HTMLElement>('[data-trigger]')?.focus() }
                if (e.key === 'Home')      { e.preventDefault(); items[0]?.focus() }
                if (e.key === 'End')       { e.preventDefault(); items[items.length - 1]?.focus() }
              }}
              className={`flex items-center gap-2 px-5 py-3 mono-tag text-muted-foreground hover:text-foreground hover:bg-card transition-colors focus-visible:bg-card focus-visible:text-foreground focus-visible:outline-none
                ${i < item.children!.length - 1 ? 'border-b border-border' : ''}`}
            >
              <span className="w-1 h-1 rounded-full bg-primary/40 shrink-0" aria-hidden="true" />
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center">

        {/* Logo, esquerda */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/oxbrand-logo.webp"
            alt="OxBrand, Marketing de Performance"
            width={120}
            height={34}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav, centro */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <DropdownItem key={link.href} item={link} />
          ))}
        </nav>

        {/* Status pill + CTA, direita */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1 border border-border">
            <span className="status-dot" aria-hidden="true" />
            <span className="mono-tag">Aceitando novos clientes</span>
          </div>
          <Link
            href="/diagnostico"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/85 transition-colors"
          >
            Falar com especialistas
            <span aria-hidden>↗</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.href ? null : link.href)}
                      className="w-full flex items-center justify-between py-3 mono-tag text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <ChevronDown size={12} className={`transition-transform duration-200 ${mobileExpanded === link.href ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === link.href && (
                      <div className="flex flex-col pl-4 border-l border-border mb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 mono-tag text-muted-foreground/70 hover:text-foreground transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 mono-tag text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/diagnostico"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase"
            >
              Falar com especialistas ↗
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
