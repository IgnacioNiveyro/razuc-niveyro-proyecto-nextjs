/** Here, we manually define the types that will be returned from the database. */
export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Book = {
    id: string;
    title: string;
    author: string;
    publication_year: number;
    genre: string;
  };
  