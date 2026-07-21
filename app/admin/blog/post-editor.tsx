'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createPost, updatePost } from '@/app/actions/blog'
import type { BlogPost } from '@/lib/db/schema'

const TAGS = ['Tráfego & Aquisição', 'Conversão', 'CRM & Comercial', 'Dados & Mensuração', 'Bastidores Ox']

interface PostEditorProps {
  mode: 'create' | 'edit'
  post?: BlogPost
}

export function PostEditor({ mode, post }: PostEditorProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [content, setContent] = useState(post?.content ?? '')
  const [tag, setTag] = useState(post?.tag ?? 'Tráfego & Aquisição')
  const [author, setAuthor] = useState(post?.author ?? 'OxBrand')
  const [coverUrl, setCoverUrl] = useState(post?.coverUrl ?? '')
  const [coverAlt, setCoverAlt] = useState(post?.coverAlt ?? '')
  const [uploading, setUploading] = useState(false)
  const [published, setPublished] = useState(post?.published ?? false)

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
  }

  function handleTitleChange(value: string) {
    setTitle(value)
    if (mode === 'create') setSlug(generateSlug(value))
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) setCoverUrl(data.url)
      else setError('Falha no upload da imagem.')
    } catch {
      setError('Falha no upload da imagem.')
    } finally {
      setUploading(false)
    }
  }

  async function handleSave(publishNow?: boolean) {
    setError('')
    setSaving(true)
    const shouldPublish = publishNow ?? published
    try {
      const data = { slug, title, excerpt, content, tag, author, coverUrl: coverUrl || undefined, coverAlt: coverAlt || undefined, published: shouldPublish }
      if (mode === 'create') {
        await createPost(data)
      } else if (post) {
        await updatePost(post.id, data)
      }
      router.push('/admin/blog')
      router.refresh()
    } catch {
      setError('Erro ao salvar. Verifique os campos e tente novamente.')
      setSaving(false)
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    handleSave()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <header className="border-b border-zinc-800 bg-zinc-950 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href="/admin/blog" className="text-zinc-500 hover:text-white transition-colors font-mono text-xs">
            ← Voltar
          </Link>
          <span className="text-zinc-700 font-mono text-xs">/</span>
          <span className="text-white font-mono text-xs">
            {mode === 'create' ? 'Nova Matéria' : 'Editar Matéria'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {published && (
            <span className="text-[10px] font-mono text-primary border border-primary/30 px-2 py-1">
              PUBLICADO
            </span>
          )}
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSave(false)}
            className="text-zinc-400 border border-zinc-700 text-xs font-bold tracking-widest uppercase px-4 py-2 hover:border-zinc-500 hover:text-white transition-colors disabled:opacity-50"
          >
            {saving && !published ? 'Salvando...' : 'Salvar Rascunho'}
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSave(true)}
            className="bg-primary text-white text-xs font-bold tracking-widest uppercase px-5 py-2 hover:bg-primary/85 transition-colors disabled:opacity-50"
          >
            {saving && published ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </header>

      {/* Form */}
      <form id="post-form" onSubmit={handleFormSubmit} className="flex-1 max-w-4xl mx-auto w-full px-6 py-10 flex flex-col gap-6">
        {error && (
          <div className="border border-red-900/50 bg-red-950/30 px-4 py-3 text-xs text-red-400 font-mono">
            {error}
          </div>
        )}

        {/* Título */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Título *</label>
          <input
            required
            value={title}
            onChange={e => handleTitleChange(e.target.value)}
            placeholder="Ex: Como o marketing de conteúdo gera resultados reais"
            className="bg-zinc-900 border border-zinc-800 text-white text-lg font-bold px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Slug */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Slug (URL) *</label>
          <div className="flex items-center border border-zinc-800 bg-zinc-900 focus-within:border-primary transition-colors">
            <span className="text-zinc-600 text-xs font-mono px-3 py-3 border-r border-zinc-800 shrink-0">/blog/</span>
            <input
              required
              value={slug}
              onChange={e => setSlug(e.target.value)}
              placeholder="meu-artigo"
              className="bg-transparent text-white text-sm px-3 py-3 flex-1 focus:outline-none font-mono"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Tag */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Categoria *</label>
            <select
              value={tag}
              onChange={e => setTag(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            >
              {TAGS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {/* Autor */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Autor *</label>
            <input
              required
              value={author}
              onChange={e => setAuthor(e.target.value)}
              placeholder="Ex: João Silva"
              className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Cover Image Upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Imagem de Capa</label>
            <label className={`relative flex flex-col items-center justify-center border-2 border-dashed transition-colors cursor-pointer h-32 overflow-hidden
              ${uploading ? 'border-primary/50 bg-primary/5' : 'border-zinc-700 hover:border-primary/60 bg-zinc-900'}`}>
              {coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={coverUrl} alt="Capa" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              ) : null}
              <div className="relative z-10 flex flex-col items-center gap-1.5 pointer-events-none">
                {uploading ? (
                  <span className="text-xs font-mono text-primary animate-pulse">Enviando...</span>
                ) : (
                  <>
                    <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-mono text-zinc-500">
                      {coverUrl ? 'Clique para trocar a imagem' : 'Clique para fazer upload'}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-700">JPG, PNG, WEBP · máx. 4MB</span>
                  </>
                )}
              </div>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageUpload}
                disabled={uploading}
              />
            </label>
            {coverUrl && (
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-zinc-600 truncate">{coverUrl}</span>
                <button type="button" onClick={() => setCoverUrl('')} className="text-[10px] font-mono text-red-500 hover:text-red-400 shrink-0">remover</button>
              </div>
            )}
          </div>
        </div>

        {/* Cover Alt */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Texto alternativo da imagem</label>
          <input
            value={coverAlt}
            onChange={e => setCoverAlt(e.target.value)}
            placeholder="Descrição da imagem para acessibilidade"
            className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Resumo */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Resumo (excerpt) *</label>
          <textarea
            required
            rows={3}
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
            placeholder="Breve descrição que aparece no card da matéria..."
            className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-primary transition-colors resize-none leading-relaxed"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono tracking-widest uppercase text-zinc-500">Conteúdo *</label>
            <span className="text-xs font-mono text-zinc-600">Markdown suportado</span>
          </div>
          <textarea
            required
            rows={24}
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder={`## Introdução\n\nEscreva aqui o conteúdo completo da matéria...\n\n## Seção 1\n\nParágrafo aqui.`}
            className="bg-zinc-900 border border-zinc-800 text-white text-sm px-4 py-4 placeholder:text-zinc-700 focus:outline-none focus:border-primary transition-colors resize-y leading-relaxed font-mono"
          />
        </div>

        <div className="pb-10" />
      </form>
    </div>
  )
}
