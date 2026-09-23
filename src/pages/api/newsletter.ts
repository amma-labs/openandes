import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = (body?.email || '').trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      return new Response(
        JSON.stringify({ error: 'Email inválido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      console.error('[newsletter] BUTTONDOWN_API_KEY no configurada');
      return new Response(
        JSON.stringify({ error: 'Error de configuración del servidor.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({ email_address: email }),
    });

    if (response.status === 409) {
      return new Response(
        JSON.stringify({ error: 'Este email ya está suscrito.' }),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!response.ok) {
      const text = await response.text();
      console.error('[newsletter] Buttondown error:', response.status, text);
      return new Response(
        JSON.stringify({ error: 'Error al suscribir. Intenta de nuevo.' }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: '¡Suscripción exitosa! Revisa tu email.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('[newsletter] Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error de conexión. Intenta de nuevo.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
