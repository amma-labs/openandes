import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Open Andes — Inteligencia Estratégica',
    description: 'Análisis geopolítico, geoeconómico y prospectiva desde América Latina para el mundo.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.excerpt || post.data.description || '',
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>es</language>`,
  });
}
