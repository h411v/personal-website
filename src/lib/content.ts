import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

/** 'en/hello-world' -> 'hello-world' */
export function postSlug(post: CollectionEntry<'blog'>): string {
  return post.id.split('/').slice(1).join('/');
}

/** 'en/hello-world' -> 'en' */
export function postLang(post: CollectionEntry<'blog'>): Lang {
  return post.id.split('/')[0] as Lang;
}

export async function getPosts(lang: Lang) {
  const posts = await getCollection(
    'blog',
    (post) => post.id.startsWith(`${lang}/`) && !post.data.draft,
  );
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Posts para a listagem de um idioma: os do próprio idioma + os que só
 * existem em outro idioma (sem tradução), para nada ficar escondido.
 */
export async function getPostsForListing(lang: Lang) {
  const own = await getPosts(lang);
  const ownSlugs = new Set(own.map(postSlug));
  const others = (Object.keys(languages) as Lang[]).filter((l) => l !== lang);
  const untranslated = (await Promise.all(others.map(getPosts)))
    .flat()
    .filter((post) => !ownSlugs.has(postSlug(post)));
  return [...own, ...untranslated].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Tempo de leitura estimado em minutos */
export function readingTime(text = ''): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export async function getNotes() {
  const notes = await getCollection('notes');
  return notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPage(lang: Lang, name: 'about' | 'uses') {
  const page = await getEntry('pages', `${lang}/${name}`);
  if (!page) throw new Error(`Página "${lang}/${name}" não encontrada em src/content/pages`);
  return page;
}
