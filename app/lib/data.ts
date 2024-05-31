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

export async function fetchBooks() {
  noStore();
  try {
    console.log('Tiempo hardcodeado para ver animación');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Fetching books..');
    const data = await sql<Book>`SELECT * FROM library.books`;
    return data.rows;
  } catch (error) {
    console.log('Database Error: ', error);
    throw new Error('Failed to fetch books data');
  }
}

export async function fetchPremiereBooks() {
  noStore();
  try {
    
    console.log('Tiempo hardcodeado para ver animación');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Fetching premiere books..');

    const data = await sql<premiereBook>`SELECT * FROM library.PremiereBooks`
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


