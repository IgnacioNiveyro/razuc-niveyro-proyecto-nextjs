import Form from '@/app/ui/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchAllBooks } from '@/app/lib/data';
export default async function Page() {

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
            href: '/home/pick-book',
            
          },
        ]}
      />
      <Form books={books}/>
    </main>
  );
}