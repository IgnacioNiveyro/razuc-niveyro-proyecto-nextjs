/** In here you can find all the data queries and we
 * can import them into the components.
 */
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
  User,
  Book,
  BookBS,
  premiereBook
} from './definitions';
import axios from 'axios';
const ITEMS_PER_PAGE = 6;
export async function fetchBooks(
  currentPage:number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Book>`
    SELECT
     * 
    FROM 
      library.books 
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    return data.rows;
  } catch (error) {
    console.log('Database Error: ', error);
    throw new Error('Failed to fetch books data');
  }
}

export async function fetchFilteredBooks(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await sql<Book> `
    SELECT
      * 
    FROM 
      library.books
    WHERE
      title ILIKE ${`%${query}%`} OR
      author ILIKE ${`%${query}%`} OR
      publication_year::text ILIKE ${`%${query}%`} OR
      genre::text ILIKE ${`%${query}%`} OR
      price::text ILIKE ${`%${query}%`}
    ORDER BY publication_year DESC
    LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    console.log('Tiempo hardcodeado para ver animación');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Fetching premiere books..');
    return data.rows;
  } catch (error) {
    console.log('Database Error: ', error);
    throw new Error('Failed to fetch filtered books data');
  }
}

export async function fetchBooksPage(query:string){
  noStore();
  try{
    const count = await sql`SELECT COUNT(*)
    FROM library.books
    WHERE
    title ILIKE ${`%${query}%`} OR
    author ILIKE ${`%${query}%`} OR
    publication_year::text ILIKE ${`%${query}%`} OR
    price::text ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;

  }catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of books.');
  }
}

export async function fetchPremiereBooks() {
  noStore();
  try {
    const data = await sql<premiereBook>`SELECT * FROM library.PremiereBooks`
    console.log('Tiempo hardcodeado para ver animación');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Fetching premiere books..');
    return data.rows;
  } catch (error) {
    console.log('Database Error: ', error);
    throw new Error('Failed to fetch books data');
  }
}

export async function fetchBestSellers(): Promise<BookBS[]> {
  const options = {
    method: 'GET',
    url: 'https://6633d986f7d50bbd9b4ae187.mockapi.io/api/book',
    headers: {
      'content-type': 'application/json'
    }
  };

  try {
    const response = await axios.request(options);
    const books: BookBS[] = response.data.map((bookData: any): BookBS => ({
      title: bookData.bookTitle,
      author: bookData.bookAuthor,
      image_src: bookData.bookImage,
      description: bookData.bookDescription,
      ranking: bookData.bookRank,
      price: bookData.price,
      review: bookData.review
    }));
    return books;
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return [];
  }
}