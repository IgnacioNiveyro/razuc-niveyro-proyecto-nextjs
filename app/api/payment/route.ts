import type { NextRequest } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN! });

const siteUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000'  // URL para entorno local
  : process.env.NEXT_PUBLIC_SITE_URL;  // URL para entorno de producción

export async function POST(request: NextRequest) {
  try {
    const { cartItems } = await request.json();

    const preference = await new Preference(client).create({
      body: {
        items: cartItems.map((item: any) => ({
          title: item.title,
          unit_price: Number(item.price),  // Asegurarse de que unit_price es un número
          quantity: item.quantity,
        })),
        back_urls: {
          success: `${siteUrl}/home`,  // Redirigir a esta URL cuando el pago tenga éxito
          failure: `${siteUrl}/home`,  // Redirigir a esta URL en caso de fallo
          pending: `${siteUrl}/home`,  // Redirigir a esta URL si el pago está pendiente
        },
        auto_return: 'approved',
      },
    });

    console.log('preference response:', preference);

    return new Response(JSON.stringify({ sandbox_init_point: preference.sandbox_init_point }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating preference:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
