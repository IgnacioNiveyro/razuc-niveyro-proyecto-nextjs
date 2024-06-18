import type { NextRequest } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN! });

export async function POST(request: NextRequest) {
  const { cartItems } = await request.json();

  const preference = await new Preference(client).create({
    body: {
      items: cartItems.map((item: any) => ({
        title: item.title,
        unit_price: Number(item.price),  // Asegurarse de que unit_price es un número
        quantity: item.quantity,
      })),
    },
  });

  console.log('preference response:', preference);

  return new Response(JSON.stringify({ sandbox_init_point: preference.sandbox_init_point }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
