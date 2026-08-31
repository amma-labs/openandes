import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const symbol = url.searchParams.get('symbol');
  if (!symbol) {
    return new Response(JSON.stringify({ error: 'Symbol required' }), { status: 400 });
  }

  try {
    const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
    const response = await fetch(yahooUrl);
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
  }
};
