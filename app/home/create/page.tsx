import Form from '@/app/ui/create-form';
import { fetchAllBooks } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/breadcrumbs';
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
            href: '/home/edit',
            
          },
        ]}
      />
      <Form books={books} />
    </main>
  );
}