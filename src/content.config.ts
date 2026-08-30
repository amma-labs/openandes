import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { feedLoader } from '@ascorbic/feed-loader';

// Función auxiliar para normalizar fecha
function normalizeDate(value: unknown): Date {
  if (value instanceof Date) return value;
  if (typeof value === 'string') return new Date(value);
  if (typeof value === 'number') return new Date(value);
  if (value && typeof value === 'object') {
    // Intentar convertir objeto a string
    try {
      return new Date(value.toString());
    } catch {
      return new Date();
    }
  }
  return new Date();
}

// Colección de blogs locales
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/post' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Feed de Fun Politik (con esquema flexible)
const funPolitik = defineCollection({
  loader: feedLoader({
    url: 'https://funpolitik.substack.com/feed',
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z
      .union([z.string(), z.date(), z.object({}).passthrough()])
      .transform((val) => normalizeDate(val)),
    link: z.string().optional().default(''),
    guid: z.string().optional().default(''),
    description: z.string().optional(),
    content: z.string().optional(),
    categories: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blog,
  'fun-politik': funPolitik,
};
