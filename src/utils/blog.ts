import { getCollection } from 'astro:content';

export const getBlogEntries = async () => {
  const posts = await getCollection('post');
  return posts
    .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
};

export const getBlogEntryBySlug = async (slug: string) => {
  const posts = await getCollection('post');
  return posts.find(post => post.slug === slug);
};
