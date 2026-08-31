import type { APIRoute } from 'astro';

const API_KEY = 'dc14585ecedf420d8b6cb22aa12f3a34';

export const GET: APIRoute = async ({ url }) => {
  const symbolsParam = url.searchParams.get('symbols');
  if (!symbolsParam) {
    return new Response(JSON.stringify({ error: 'Symbols required' }), { status: 400 });
  }

  const symbols = symbolsParam.split(',').map(s => s.trim());
  if (symbols.length === 0) {
    return new Response(JSON.stringify({ error: 'At least one symbol required' }), { status: 400 });
  }

  try {
    const symbolsString = symbols.join(',');
    const priceUrl = `https://api.twelvedata.com/price?symbol=${symbolsString}&apikey=${API_KEY}`;
    const quoteUrl = `https://api.twelvedata.com/quote?symbol=${symbolsString}&apikey=${API_KEY}`;

    const [priceRes, quoteRes] = await Promise.all([
      fetch(priceUrl),
      fetch(quoteUrl)
    ]);

    const priceData = await priceRes.json();
    const quoteData = await quoteRes.json();

    const result: { [key: string]: any } = {};
    for (const symbol of symbols) {
        const cleanSymbol = symbol.replace('/USD', '');
        const price = priceData[cleanSymbol] || priceData[symbol] || 0;
        const quote = quoteData[cleanSymbol] || quoteData[symbol] || {};
        result[symbol] = {
            price: typeof price === 'object' ? price.price || 0 : price || 0,
            change: quote.percent_change || 0,
            change_direction: quote.change_direction || 'flat'
        };
    }

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error fetching commodity data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
  }
};
