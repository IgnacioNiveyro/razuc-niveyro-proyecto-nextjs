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
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138748/book0_cisumi.webp',
    ranking: 3
  },
  {
    id: 'e8a52f2d-b084-431e-bb6b-bc89cb30282a',
    title: '1984',
    author: 'George Orwell',
    publication_year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138747/book1_gscufb.jpg',
    ranking: 4
  },
  {
    id: '3a3991d8-106a-489d-ba42-44e0ff31b5e0',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publication_year: 1925,
    genre: 'Classic',
    price: 12.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138750/book2_hnb5tk.jpg',
    ranking: 4.5
  },
  {
    id: 'e0634aae-6340-4b1b-9b43-f4848e5dc35c',
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    publication_year: 1967,
    genre: 'Magical Realism',
    price: 9.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138755/book3_ir8o46.jpg',
    ranking: 5
  },
  {
    id: '4595128a-3ac8-4343-b24d-25b04ac16a84',
    title: 'The Time Machine',
    author: 'H. G. Wells',
    publication_year: 1895,
    genre: 'Science fiction',
    price: 15.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138756/book4_unzqzd.jpg',
    ranking: 3.5
  },
  {
    id: '1722058a-5fcb-4c45-8878-bf0535e22f8b',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publication_year: 1813,
    genre: 'Romance',
    price: 10.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138758/book5_hauv8p.jpg',
    ranking: 3.1
  },
  {
    id: 'b3b00db7-e41c-4935-9783-9da83ec00416',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    publication_year: 1932,
    genre: 'Dystopian',
    price: 14.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138761/book6_qiovkh.jpg',
    ranking: 3
  },
  {
    id: '3eab2264-28ab-4338-86e3-e32ea699c97c',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publication_year: 1951,
    genre: 'Fiction',
    price: 13.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138765/book7_fnepvq.png',
    ranking: 4.9
  },
  {
    id: '05bf6f68-db4f-46d5-93f1-f93a4e15d891',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publication_year: 1937,
    genre: 'Fantasy',
    price: 11.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138766/book8_n0cmha.jpg',
    ranking: 4.5
  },
  {
    id: 'c3b7b911-1550-4937-a796-bbcc20bbd3aa',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    publication_year: 1953,
    genre: 'Dystopian',
    price: 12.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138769/book9_e2qe5b.jpg',
    ranking: 4.2
  },
  {
    id: '348c2e8d-96f0-433c-b40f-310b764f7184',
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    publication_year: 1869,
    genre: 'Historical Fiction',
    price: 19.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138770/book10_zefj7u.jpg',
    ranking: 5
  },
  {
    id: '07b618bc-c85c-40e3-8ce2-d80da308f334',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    publication_year: 1866,
    genre: 'Philosophical Fiction',
    price: 16.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138773/book11_vecsox.jpg',
    ranking: 2.8
  },
  {
    id: '90380b10-281c-4b1e-b35a-d6a8ed189659',
    title: 'The Odyssey',
    author: 'Homer',
    publication_year: 1614,
    genre: 'Epic',
    price: 14.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138774/book12_e25nzd.jpg',
    ranking: 2
  },
  {
    id: '54ce4383-80f0-436e-84e9-5cb692555a3b',
    title: 'Madame Bovary',
    author: 'Gustave Flaubert',
    publication_year: 1856,
    genre: 'Literary Realism',
    price: 13.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138778/book13_vm9beb.jpg',
    ranking: 3
  },
  {
    id: 'db7515a9-8e7f-49c9-959f-92ad61dbecfd',
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    publication_year: 1320,
    genre: 'Epic Poetry',
    price: 18.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718138778/book14_g4ohqr.jpg',
    ranking: 1.5
  },
  {
    id: '27be8a88-2177-4bab-8096-0bb5c0fc9991',
    title: 'Cuentos Clásicos Para Conocerte Mejor',
    author: 'Jorge Bucay',
    publication_year: 2017,
    genre: 'autoayuda',
    price: 10.00,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718139000/book20_ntcgw5.jpg',
    ranking: 4
  },
  {
    id: 'efd2b1c4-ea02-48d8-825b-9ba42d0be9c7',
    title: 'El juego del Ángel',
    author: 'Carlos Ruiz Záfon',
    publication_year: 2008,
    genre: 'Novela',
    price: 12.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718139002/book15_b5u6hk.jpg',
    ranking: 5
  },
  {
    id: 'a235a7bd-dbb2-4ca3-8a3d-b48c8c729c28',
    title: 'El prisionero del cielo',
    author: 'Carlos Ruiz Záfon',
    publication_year: 2010,
    genre: 'Novela',
    price: 13.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718139004/book16_trlfcq.jpg',
    ranking: 5
  },
  {
    id: '2afa3546-2b40-41b3-aca6-9486a795e47b',
    title: 'La Sombra Del Viento',
    author: 'Carlos Ruiz Záfon',
    publication_year: 2012,
    genre: 'Novela',
    price: 15.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718139006/book17_au7oyc.jpg',
    ranking: 5
  },
  {
    id: 'dc8d84d6-9f57-4679-bb70-7fca634597b3',
    title: 'El Duelo',
    author: 'Gabriel Rolón',
    publication_year: 2015,
    genre: 'autoayuda',
    price: 12.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718139009/book18_rs9o6k.webp',
    ranking: 4
  },
  {
    id: '7c7d1aaa-65e1-4f20-a36e-11e7bafd88e9',
    title: 'La Felicidad',
    author: 'Gabriel Rolón',
    publication_year: 2018,
    genre: 'autoayuda',
    price: 18.99,
    image: 'https://res.cloudinary.com/drgrglui9/image/upload/v1718139012/book19_fokaqt.jpg',
    ranking: 3.5
  }

];

module.exports = {
  users,
  books,
};
