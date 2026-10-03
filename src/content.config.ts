import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts longos. Arquivos em src/content/blog/<en|pt>/<slug>.md
// O mesmo nome de arquivo nos dois idiomas = tradução do mesmo post.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Notas rápidas: só data/hora + texto solto, sem título.
// Arquivos em src/content/notes/<qualquer-nome>.md
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    date: z.coerce.date(),
  }),
});

// Páginas de texto corrido (about, uses). src/content/pages/<en|pt>/<página>.md
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, notes, pages };
