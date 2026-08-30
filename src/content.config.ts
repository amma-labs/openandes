import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { feedLoader } from '@ascorbic/feed-loader';

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
    pubDate: z.coerce.date(),
    link: z.string(),
    description: z.string().optional(),
    content: z.string().optional(),
    categories: z.array(z.string()).default([]),
  }),
});

// Deshabilitado temporalmente por problemas SSL
// El feed de 2050lab.org tiene certificado inválido
/*
const futureLab = defineCollection({
  loader: feedLoader({
    url: 'https://2050lab.org/rss.xml',
  }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    link: z.string(),
    description: z.string().optional(),
    content: z.string().optional(),
    categories: z.array(z.string()).default([]),
  }),
});
*/

export const collections = {
  blog: blog,
  'fun-politik': funPolitik,
  // 'future-lab': futureLab,
};
