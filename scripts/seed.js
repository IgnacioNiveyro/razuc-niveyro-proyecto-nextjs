const { db } = require('@vercel/postgres');
const {
    users,
    books,
    premiereBooks,
} = require('../app/lib/book-data');
const bcrypt = require('bcrypt');

async function createSchema(client) {
    try {
      await client.sql`CREATE SCHEMA IF NOT EXISTS library;`;
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
      console.log(`Created schema "library" and enabled "uuid-ossp" extension`);
    } catch (error) {
      console.error('Error creating schema or enabling extension:', error);
      throw error;
    }
  }

  async function seedUsers(client) {
    try {
      // Create the "users" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS library.users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
  
      console.log(`Created "users" table`);
  
      // Insert data into the "users" table
      const insertedUsers = await Promise.all(
        users.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          return client.sql`
          INSERT INTO library.users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedUsers.length} users`);
  
      return {
        createTable,
        users: insertedUsers,
      };
    } catch (error) {
      console.error('Error seeding users:', error);
      throw error;
    }
  }
  async function seedBooks(client) {
    try {
      // Crear la tabla "books" en el esquema "library"
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS library.books (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          author VARCHAR(255) NOT NULL,
          publication_year INT NOT NULL,
          genre VARCHAR(255) NOT NULL,
          price DECIMAL(10, 2) NOT NULL,
          image VARCHAR(255) NOT NULL,
          ranking FLOAT NOT NULL
        );
      `;
  
      console.log(`Created "books" table in library schema`);
  
      // Insertar datos en la tabla "books"
      const insertedBooks = await Promise.all(
        books.map((book) =>
          client.sql`
            INSERT INTO library.books (id, title, author, publication_year, genre, price, image, ranking)
            VALUES (${book.id}, ${book.title}, ${book.author}, ${book.publication_year}, ${book.genre}, ${book.price}, ${book.image}, ${book.ranking})
            ON CONFLICT (id) DO NOTHING;
          `
        )
      );
  
      console.log(`Seeded ${insertedBooks.length} books`);
  
      return {
        createTable,
        books: insertedBooks,
      };
    } catch (error) {
      console.error('Error seeding books:', error);
      throw error;
    }
  }
  async function seedPremiereBooks(client) {
    try {
      // Crear la tabla "books" en el esquema "library"
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS library.PremiereBooks (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          image VARCHAR(255) NOT NULL
        );
      `;
  
      console.log(`Created "Premiere books" table in library schema`);
  
      // Insertar datos en la tabla "books"
      const insertedBooks = await Promise.all(
        premiereBooks.map((book) =>
          client.sql`
            INSERT INTO library.PremiereBooks (id, image)
            VALUES (${book.id},${book.image})
            ON CONFLICT (id) DO NOTHING;
          `
        )
      );
  
      console.log(`Seeded ${insertedBooks.length} books`);
  
      return {
        createTable,
        premiereBooks: insertedBooks,
      };
    } catch (error) {
      console.error('Error seeding books:', error);
      throw error;
    }
  }
async function main() {
    const client = await db.connect();
    
    await createSchema(client);
    await seedUsers(client);
    await seedBooks(client);

    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });