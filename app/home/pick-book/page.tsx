import Pagination from '@/app/ui/pagination';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { Suspense } from 'react';
import { fetchBooksPage, fetchFilteredBooks } from '@/app/lib/data';
import Table from '@/app/ui/table';
import { BooksTableSkeleton } from '@/app/ui/skeletons';
import { notFound} from 'next/navigation';
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const totalPages = await fetchBooksPage(query);
  /** 
  const books = await fetchFilteredBooks(query, currentPage);

  books.map((book, index) => {
    // Verifica si la URL de la imagen comienza con "http" o "https"
    if (!book.image.startsWith('http://') && !book.image.startsWith('https://')) {
        notFound();
        
    }
});
*/
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Books', href: '/home' },
          {
            label: 'Create Book',
            href: '/home/create',
            
          },
          {
            label: 'Edit Book',
            href: '/home/pick-book',
            
          },
        ]}
      />
      {  <Suspense key={query + currentPage} fallback={<BooksTableSkeleton/>}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> }
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </main>
  );
}