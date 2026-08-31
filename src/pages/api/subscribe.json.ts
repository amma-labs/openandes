import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email es requerido' }), { status: 400 });
    }

    if (!email.includes('@') || !email.includes('.')) {
      return new Response(JSON.stringify({ error: 'Email inválido' }), { status: 400 });
    }

    // Obtener variables de entorno
    const MAILCHIMP_API_KEY = import.meta.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = import.meta.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_DATACENTER = import.meta.env.MAILCHIMP_DATACENTER;

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_DATACENTER) {
      console.error('Faltan variables de entorno de Mailchimp');
      return new Response(JSON.stringify({ error: 'Error de configuración del servidor' }), { status: 500 });
    }

    const response = await fetch(
      `https://${MAILCHIMP_DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'pending', // Envía un email de confirmación
        }),
      }
    );

    if (response.status === 400) {
      const data = await response.json();
      if (data.title === 'Member Exists') {
        return new Response(JSON.stringify({ 
          error: 'Este email ya está suscrito',
          exists: true 
        }), { status: 400 });
      }
    }

    if (!response.ok) {
      console.error('Error de Mailchimp:', await response.text());
      return new Response(JSON.stringify({ error: 'Error al suscribir' }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error en el endpoint:', error);
    return new Response(JSON.stringify({ error: 'Error al suscribir' }), { status: 500 });
  }
};
