/** In here you can find all the data queries and we
 * can import them into the components.
 */
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import {
    User,
    Book,
  } from './definitions';


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