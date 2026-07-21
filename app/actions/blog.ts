'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { blogPosts } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

export async function getPosts() {
  const userId = await getUserId()
  return db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.userId, userId))
    .orderBy(desc(blogPosts.createdAt))
}

// Mapeamento de tags legadas → novas (executa uma única migração inline)
const TAG_MIGRATIONS: Record<string, string> = {
  'Performance':       'Tráfego & Aquisição',
  'Conteúdo':          'Conversão',
  'Trafego':           'Tráfego & Aquisição',
  'Tráfego':           'Tráfego & Aquisição',
  'CRM':               'CRM & Comercial',
  'Dados':             'Dados & Mensuração',
  'Bastidores':        'Bastidores Ox',
}

export async function getAllPublishedPosts() {
  const posts = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.published, true))
    .orderBy(desc(blogPosts.createdAt))

  // Migra silenciosamente tags legadas para as categorias canônicas
  await Promise.all(
    posts
      .filter((p) => TAG_MIGRATIONS[p.tag])
      .map((p) =>
        db
          .update(blogPosts)
          .set({ tag: TAG_MIGRATIONS[p.tag], updatedAt: new Date() })
          .where(eq(blogPosts.id, p.id))
      )
  )

  // Retorna com as tags já corrigidas
  return posts.map((p) => ({
    ...p,
    tag: TAG_MIGRATIONS[p.tag] ?? p.tag,
  }))
}

export async function getPostBySlug(slug: string) {
  const result = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.slug, slug))
    .limit(1)
  return result[0] ?? null
}

export async function createPost(data: {
  slug: string
  title: string
  excerpt: string
  content: string
  tag: string
  author: string
  coverUrl?: string
  coverAlt?: string
  published: boolean
}) {
  const userId = await getUserId()
  await db.insert(blogPosts).values({ ...data, userId })
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
}

export async function updatePost(
  id: number,
  data: {
    slug: string
    title: string
    excerpt: string
    content: string
    tag: string
    author: string
    coverUrl?: string
    coverAlt?: string
    published: boolean
  }
) {
  const userId = await getUserId()
  await db
    .update(blogPosts)
    .set({ ...data, updatedAt: new Date() })
    .where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
}

export async function deletePost(id: number) {
  const userId = await getUserId()
  await db
    .delete(blogPosts)
    .where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
}

export async function togglePublish(id: number, published: boolean) {
  const userId = await getUserId()
  await db
    .update(blogPosts)
    .set({ published, updatedAt: new Date() })
    .where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))
  revalidatePath('/admin/blog')
  revalidatePath('/blog')
}
