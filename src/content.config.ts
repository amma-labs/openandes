import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { feedLoader } from '@ascorbic/feed-loader';

// Función segura para convertir a Date
function safeDate(value: unknown): Date {
  try {
    if (value instanceof Date) return value;
    if (typeof value === 'string') return new Date(value);
    if (typeof value === 'number') return new Date(value);
    if (value && typeof value === 'object') {
      // Intentar extraer de propiedades comunes
      const obj = value as Record<string, unknown>;
      const candidate = obj.pubDate || obj.published || obj.date || obj['#text'] || obj._text;
      if (candidate) return safeDate(candidate);
      // Último intento: convertir a string
      return new Date(String(value));
    }
    return new Date();
  } catch {
    return new Date();
  }
}

// Colección de blogs locales (vacía por ahora)
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

// Feed de Fun Politik con validación flexible
const funPolitik = defineCollection({
  loader: feedLoader({
    url: 'https://funpolitik.substack.com/feed',
  }),
  schema: z.object({
    title: z.string(),
    // Aceptamos cualquier cosa y la transformamos a Date
    pubDate: z.any().transform(safeDate),
    link: z.string().optional().default(''),
    guid: z.string().optional().default(''),
    description: z.string().optional().default(''),
    content: z.string().optional().default(''),
    categories: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blog: blog,
  'fun-politik': funPolitik,
};
