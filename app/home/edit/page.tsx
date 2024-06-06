import Form from '@/app/ui/create-form';
import Pagination from '@/app/ui/pagination';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchAllBooks } from '@/app/lib/data';
import { Suspense } from 'react';
import { fetchBooksPage } from '@/app/lib/data';
import Table from '@/app/ui/table';
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
  const books = await fetchAllBooks();

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
            href: '/home/edit',
            
          },
        ]}
      />
      {  <Suspense key={query + currentPage}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> }
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </main>
  );
}