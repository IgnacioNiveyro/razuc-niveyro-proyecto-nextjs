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
    price: number;
    image: string;
  };
  
  export type BookBS = {
    title: string;
    author: string;
    price: number; 
    image_src: string;
    description: string;
    review: number;
    ranking: number;
  };