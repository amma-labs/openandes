export const prerender = false;
import type { APIRoute } from 'astro';
import { fetchInstagramPosts } from '@saketsawrav/instagram-feed';

export const GET: APIRoute = async () => {
  try {
    const posts = await fetchInstagramPosts({
      username: 'openandes_org',
      limit: 6,
      proxyImages: false,
    });
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al cargar Instagram' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
