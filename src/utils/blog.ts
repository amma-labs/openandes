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

export const getStaticPathsBlogPost = async () => {
  const posts = await getBlogEntries();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
};

export const blogPostRobots = () => {
  return 'index, follow';
};
