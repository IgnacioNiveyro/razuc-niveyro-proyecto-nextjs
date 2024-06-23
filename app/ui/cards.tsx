// app/ui/cards.tsx

import { fetchBooks, fetchFilteredBooks } from '@/app/lib/data'
import { robotoSlab } from '@/app/ui/fonts';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from 'next/link';
import { Book } from '../lib/definitions';
import { auth } from "@/auth"
import { CardComponent } from '@/app/ui/CardComponent';

export default async function CardWrapper({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  var books;
  if (query == '') {
    books = await fetchBooks(currentPage);
  } else {
    books = await fetchFilteredBooks(query, currentPage);
  }

  const adminBook: Book = {
    id: 'admin-1',
    title: 'Admin Card',
    author: '',
    publication_year: 0,
    genre: '',
    price: 0,
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlV2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGNsYXNzTmFtZT0ic2l6ZS02Ij4KICA8cGF0aCBzdHJva2VMaW5lY2FwPSJyb3VuZCIgc3Ryb2tlTGluZWpvaW49InJvdW5kIiBkPSJNMTIgOXY2bTMtM0g5bTEyIDBhOSA5IDAgMSAxLTE4IDAgOSA5IDAgMCAxIDE4IDBaIiAvPgo8L3N2Zz4=', 
    ranking: 0
  };

  const session = await auth()
  const isLoggedIn = !!session?.user;
  var esAdmin: boolean = false;
  
  if(isLoggedIn){
    books.unshift(adminBook);
    esAdmin = true;
  }
  else{
    esAdmin = false;
  }
    
  
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
      
      {
        books.map((book, index) => (
          index === 0 && esAdmin ? (
            <AdminCard
              key={book.id}
              title={book.title}
              image_src={book.image}
            />
          ) : (
            <CardComponent
              key={book.id}
              title={book.title}
              author={book.author}
              publication_year={book.publication_year}
              price={book.price}
              image_src={book.image}
              ranking={book.ranking}
            />
          )
        ))
      }
      </div>
    </div>
  );
}

export function AdminCard({
  title,
  image_src,
}: {
  title: string;
  image_src: string;
}) {
  return (
    <Card className={`${robotoSlab.className}py-4 custom-div`}>
      <CardHeader className="flex flex-col items-center justify-center text-center py-2 px-4">
        <h4 className="text-medium uppercase font-bold">{title}</h4>
        <small className="text-default-500">create/edit</small>
      </CardHeader>
      <CardBody className="overflow-visible flex justify-center items-center">
  <Link href="/home/create">
    <Image
      alt={"admin card"}
      className="object-contain rounded-x"
      src={image_src}
      width={160}
      height={220}
      style={{ width: '80px', height: '80px', objectFit: 'contain' }}
    />
  </Link>
</CardBody>

    </Card>
  );
}
