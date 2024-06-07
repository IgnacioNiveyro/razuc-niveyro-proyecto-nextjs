import { NextResponse } from 'next/server';
import { books } from '../lib/book-data'; // Asegúrate de que la ruta sea correcta

export async function GET() {
    const firstTenBooks = books.slice(0, 10);
    return NextResponse.json(firstTenBooks);
}
