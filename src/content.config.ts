import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { feedLoader } from '@ascorbic/feed-loader';

function safeDate(value: unknown): Date {
  if (value instanceof Date) return value;
  if (typeof value === 'string') {
    const d = new Date(value);
    if (!isNaN(d.getTime())) return d;
  }
  if (typeof value === 'number') {
    const d = new Date(value);
    if (!isNaN(d.getTime())) return d;
  }
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const candidate = obj.pubDate || obj.published || obj.date || obj['#text'] || obj._text;
    if (candidate) return safeDate(candidate);
    try {
      const d = new Date(String(value));
      if (!isNaN(d.getTime())) return d;
    } catch {}
  }
  return new Date();
}

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

const funPolitik = defineCollection({
  loader: feedLoader({
    url: 'https://funpolitik.substack.com/feed',
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.any().optional().transform(safeDate),
    link: z.string().optional().default(''),
    guid: z.string().optional().default(''),
    description: z.string().optional().default(''),
    content: z.string().optional().default(''),
    categories: z.array(z.string()).default([]),
  }),
});

const reports = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    type: z.string().optional(),
    program: z.string().optional(),
    author: z.string().optional(),
    researchLeaders: z.array(z.string()).default([]),
    associateResearchers: z.array(z.string()).default([]),
    pdfUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    toc: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blog,
  'fun-politik': funPolitik,
  reports: reports,
};
