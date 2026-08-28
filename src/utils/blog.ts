import { getCollection } from 'astro:content';
import { BLOG_BASE, POST_PERMALINK_PATTERN } from './permalinks';

export const fetchPosts = async () => {
  const posts = await getCollection('post');
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    image: post.data.image,
    categories: post.data.categories || [],
    tags: post.data.tags || [],
  }));
};

export const getBlogEntries = async () => {
  const posts = await fetchPosts();
  return posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
};

export const getBlogEntryBySlug = async (slug: string) => {
  const posts = await fetchPosts();
  return posts.find(post => post.slug === slug);
};

export const getStaticPathsBlogList = async () => {
  const posts = await getBlogEntries();
  const totalPages = Math.ceil(posts.length / 10);
  const paths = [];
  for (let i = 1; i <= totalPages; i++) {
    paths.push({ params: { page: i } });
  }
  return paths;
};

export const getStaticPathsBlogCategory = async () => {
  const posts = await getBlogEntries();
  const categories = new Set();
  posts.forEach(post => {
    if (post.categories) {
      post.categories.forEach(cat => categories.add(cat));
    }
  });
  return Array.from(categories).map(category => ({
    params: { category },
  }));
};

export const getStaticPathsBlogTag = async () => {
  const posts = await getBlogEntries();
  const tags = new Set();
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).map(tag => ({
    params: { tag },
  }));
};

export const getStaticPathsBlogPost = async () => {
  const posts = await getBlogEntries();
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
};

export const blogListRobots = () => 'index, follow';
export const blogCategoryRobots = () => 'index, follow';
export const blogTagRobots = () => 'index, follow';
export const blogPostRobots = () => 'index, follow';
