import Form from '@/app/ui/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchBookById, fetchAllBooks } from '@/app/lib/data';
import { Book,  BookForm } from '@/app/lib/definitions'
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [form, books]: [BookForm, Book[]] = await Promise.all([
        fetchBookById(id),
        fetchAllBooks(),
      ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Books', href: '/home' },
          {
            label: 'Edit Book',
            href: `/home/${id}/edit`,
          
          },
        ]}
      />
      <Form books={books} form={form} />
    </main>
  );
}