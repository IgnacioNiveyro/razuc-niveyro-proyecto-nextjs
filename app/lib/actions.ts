'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const FormSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: 'Ingresá un título.',
  })
  .min(1 ,{message: 'Ingresá un título.'}),
  author: z.string({
    invalid_type_error: 'Ingresá un autor.',
  })
  .min(1 ,{message: 'Ingresá un autor.'}),
  publication_year: z.coerce
    .number()
    .gt(0, { message: 'Ingresá un año de publicación.' }),
  genre: z.string({
    invalid_type_error: 'Ingresá un género.',
  })
  .min(1 ,{message: 'Ingresá un género.'}),
  price: z.coerce
    .number()
    .gt(0, { message: 'Ingresá un precio mayor que $0.' }),
  image: z.string({
    invalid_type_error: 'Ingresá una URL para la imagen.',
  })
  .min(1 ,{message: 'Ingresá una URL para la imagen.'}),
  ranking: z.coerce
    .number()
    .gt(0, { message: 'Ingresá un ranking.' }),
});

const CreateBook = FormSchema.omit({ id: true });

export type State = {
  errors?: {
    title?: string[];
    author?: string[];
    publication_year?: string[];
    genre?: string[];
    price?: string[];
    image?: string[];
    ranking?: string[];
  };
  message?: string | null;
};

export async function createBook(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = CreateBook.safeParse({
    title: formData.get('title'),
    author: formData.get('author'),
    publication_year: formData.get('publication_year'),
    genre: formData.get('genre'),
    price: formData.get('price'),
    image: formData.get('image'),
    ranking: formData.get('ranking'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Book.',
    };
  }

  const { title, author, publication_year, genre, price, image, ranking } = validatedFields.data;
  let myuuid = uuidv4();
  try {
    await sql`
              INSERT INTO library.books (id, title, author, publication_year, genre, price, image, ranking)
              VALUES (${myuuid}, ${title}, ${author}, ${publication_year}, ${genre}, ${price}, ${image}, ${ranking})
              ON CONFLICT (id) DO NOTHING;
        `;
  } catch (error) {
    return {
      errors: {}, // Agregar un campo de errores vacÃo para mantener la consistencia
      message: ' Database Error: Failed to Create a new Book.',
    };
  }
  revalidatePath('/home');
  redirect('/home');

  return {
    errors: {},
    message: 'Book created successfully!',
  };
}

const UpdateBook = FormSchema.omit({ id: true, author: true, title: true, publication_year: true, genre: true, ranking: true });

export async function updateBook(id: string, formData: FormData) {

  const { price, image } = UpdateBook.parse({
    price: formData.get('price'),
    image: formData.get('image'),
  });
  try {
    await sql`
      UPDATE library.books
      SET price = ${price}, image = ${image}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Book.' };
  }
  revalidatePath('/home');
  redirect('/home');

}

export async function deleteBook(id: string) {
  try {
    await sql`DELETE FROM library.books WHERE id = ${id}`;
    revalidatePath('/home');
    return { message: 'Deleted Book.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Book.' };
  }
}