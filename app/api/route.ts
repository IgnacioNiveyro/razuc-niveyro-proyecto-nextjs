import { NextResponse } from 'next/server';
import { books } from '../lib/book-data';

export async function GET() {
    const firstTenBooks = books.slice(0, 10);
    return NextResponse.json(firstTenBooks);
}
