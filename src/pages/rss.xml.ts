import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: URL }) {
  const posts = await getCollection('post');
  const siteUrl = 'https://openandes.org';
  
  return rss({
    title: 'Open Andes — Inteligencia Estratégica',
    description: 'Análisis geopolítico, geoeconómico y prospectiva desde América Latina para el mundo.',
    site: siteUrl,
    items: posts.map((post) => {
      // Extraer el slug del id del post (ej: "politica-exterior-chile-asia-pacifico")
      const slug = post.id.replace(/\.(md|mdx)$/, '');
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description || post.data.description || '',
        link: `${siteUrl}/analisis/${slug}/`,
      };
    }),
    customData: `<language>es</language>`,
  });
}
