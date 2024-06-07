import Form from '@/app/ui/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { fetchBookById, fetchAllBooks } from '@/app/lib/data';
import { Book,  BookForm } from '@/app/lib/definitions'

export default async function Page({ params }: { params: { id: string } }) {
    const id = "db7515a9-8e7f-49c9-959f-92ad61dbecfd";

    const [form, books]: [BookForm, Book[]] = await Promise.all([
        fetchBookById(id),
        fetchAllBooks(),
      ]);
      console.log(form);
  return (
    <main>
      <Form books={books} form={form} />
    </main>
  );
}
