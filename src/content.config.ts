import { defineCollection } from 'astro:content';
import { feedLoader } from '@ascorbic/feed-loader';

const funPolitik = defineCollection({
  loader: feedLoader({
    url: 'https://funpolitik.substack.com/feed',
    // El feed de Substack suele estar en /feed
  }),
});

const futuresLab = defineCollection({
  loader: feedLoader({
    url: 'https://2050lab.org/rss.xml',
    // Asumiendo que 2050lab.org tiene RSS en /rss.xml
  }),
});

export const collections = { funPolitik, futuresLab };
