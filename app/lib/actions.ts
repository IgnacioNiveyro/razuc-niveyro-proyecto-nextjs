'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
const FormSchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    publication_year: z.coerce.number(),
    genre: z.string(),
    price: z.coerce.number(),
    image: z.string(),
    ranking: z.coerce.number(),
  });

  const CreateBook = FormSchema.omit({ id: true });

export async function printear(){
  console.log("printeo.");
}
export async function createBook(formData: FormData) {
  const { title, author, publication_year, genre, price, image, ranking } = CreateBook.parse({
        title: formData.get('title'),
        author: formData.get('author'),
        publication_year: formData.get('publication_year'),
        genre: formData.get('genre'),
        price: formData.get('price'),
        image: formData.get('image'),
        ranking: formData.get('ranking'),
      });
      let myuuid = uuidv4();
      await sql`
            INSERT INTO library.books (id, title, author, publication_year, genre, price, image, ranking)
            VALUES (${myuuid}, ${title}, ${author}, ${publication_year}, ${genre}, ${price}, ${image}, ${ranking})
            ON CONFLICT (id) DO NOTHING;
          `
    revalidatePath('/home');
    redirect('/home'); 
    
}

const UpdateBook = FormSchema.omit({ id: true, author: true, title: true, publication_year: true, genre: true, ranking: true  });

export async function updateBook(id: string, formData: FormData) {
  

  const { price, image } = UpdateBook.parse({
    price: formData.get('price'),
    image: formData.get('image'),
  });
 
  await sql`
    UPDATE library.books
    SET price = ${price}, image = ${image}
    WHERE id = ${id}
  `;
 
  revalidatePath('/home');
  redirect('/home');
  
  }

export async function deleteBook(id: string) {
    await sql`DELETE FROM library.books WHERE id = ${id}`;
    revalidatePath('/home');
  }