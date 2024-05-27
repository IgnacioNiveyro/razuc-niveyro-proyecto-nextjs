/** In here you can find all the data queries and we
 * can import them into the components.
 */
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
    User,
    Book,
  } from './definitions';
import axios from 'axios';

export async function fetchBooks(){
    noStore();
    try{
        console.log('Fetching books..');
        const data = await sql<Book>`SELECT * FROM library.books`;
        return data.rows;
    }catch (error){
        console.log('Database Error: ',error);
        throw new Error('Failed to fetch books data');
    }
}

export async function fetchBestSellers() {
  const options = {
    method: 'GET',
    url: 'https://all-books-api.p.rapidapi.com/getBooks',
    headers: {
      'X-RapidAPI-Key': 'b61bae5c69mshcc2148da90091cfp195af5jsn79546f00b6dd',
      'X-RapidAPI-Host': 'all-books-api.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const books = response.data.map(book => ({
      title: book.bookTitle,
      author: book.bookAuthor,
      image_src: book.bookImage,
      description: book.bookDescription,
      rank: book.bookRank
    }));
    return books;
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return []; // Retornar array vacío en caso de error
  }
}

  