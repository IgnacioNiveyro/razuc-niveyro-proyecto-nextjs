/** Capitulo 1: Each JavaScript object in the file represents a table in your database. */
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
  },
];

const books = [
  {
    id: 'dbff4320-39cc-40e3-8481-12f2e80a7235',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publication_year: 1960,
    genre: 'Fiction',
    price: 10.99,
    image: '/books/book0.jpg'
  },
  {
    id: 'e8a52f2d-b084-431e-bb6b-bc89cb30282a',
    title: '1984',
    author: 'George Orwell',
    publication_year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    image: '/books/book1.jpg'
  },
  {
    id: '3a3991d8-106a-489d-ba42-44e0ff31b5e0',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publication_year: 1925,
    genre: 'Classic',
    price: 12.99,
    image: '/books/book2.jpg'
  },
  {
    id: 'e0634aae-6340-4b1b-9b43-f4848e5dc35c',
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    publication_year: 1967,
    genre: 'Magical Realism',
    price: 9.99,
    image: '/books/book3.jpg'
  },
  {
    id: '4595128a-3ac8-4343-b24d-25b04ac16a84',
    title: 'The Time Machine',
    author: 'H. G. Wells',
    publication_year: 1895,
    genre: 'Science fiction',
    price: 15.99,
    image: '/books/book4.jpg'
  },
  {
    id: '1722058a-5fcb-4c45-8878-bf0535e22f8b',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publication_year: 1813,
    genre: 'Romance',
    price: 10.99,
    image: '/books/book5.jpg'
  },
  {
    id: 'b3b00db7-e41c-4935-9783-9da83ec00416',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publication_year: 1932,
    genre: 'Dystopian',
    price: 14.99,
    image: '/books/book6.jpg'
  },
  {
    id: '3eab2264-28ab-4338-86e3-e32ea699c97c',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publication_year: 1951,
    genre: 'Fiction',
    price: 13.99,
    image: '/books/book7.jpg'
  },
  {
    id: '05bf6f68-db4f-46d5-93f1-f93a4e15d891',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publication_year: 1937,
    genre: 'Fantasy',
    price: 11.99,
    image: '/books/book8.jpg'
  },
  {
    id: 'c3b7b911-1550-4937-a796-bbcc20bbd3aa',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    publication_year: 1953,
    genre: 'Dystopian',
    price: 12.99,
    image: '/books/book9.jpg'
  },
  {
    id: '348c2e8d-96f0-433c-b40f-310b764f7184',
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    publication_year: 1869,
    genre: 'Historical Fiction',
    price: 19.99,
    image: '/books/book10.jpg'
  },
  {
    id: '07b618bc-c85c-40e3-8ce2-d80da308f334',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    publication_year: 1866,
    genre: 'Philosophical Fiction',
    price: 16.99,
    image: '/books/book11.jpg'
  },
  {
    id: '90380b10-281c-4b1e-b35a-d6a8ed189659',
    title: 'The Odyssey',
    author: 'Homer',
    publication_year: 1614,
    genre: 'Epic',
    price: 14.99,
    image: '/books/book12.jpg'
  },
  {
    id: '54ce4383-80f0-436e-84e9-5cb692555a3b',
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    publication_year: 1856,
    genre: 'Literary Realism',
    price: 13.99,
    image: '/books/book13.jpg'
  },
  {
    id: 'db7515a9-8e7f-49c9-959f-92ad61dbecfd',
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    publication_year: 1320,
    genre: 'Epic Poetry',
    price: 18.99,
    image: '/books/book14.jpg'
  }
];

const premiereBooks = [
  {
    image: '/premiere_books/premiere0.jpg'
  },
  {
    image: '/premiere_books/premiere1.jpg'
  },
  {
    image: '/premiere_books/premiere2.jpg'
  },
  {
    image: '/premiere_books/premiere3.jpg'
  },
  {
    image: '/premiere_books/premiere4.jpg'
  },
  {
    image: '/premiere_books/premiere5.jpg'
  },
  {
    image: '/premiere_books/premiere6.jpg'
  },
  {
    image: '/premiere_books/premiere7.jpg'
  },

]


module.exports = {
  users,
  books,
  premiereBooks,
};
