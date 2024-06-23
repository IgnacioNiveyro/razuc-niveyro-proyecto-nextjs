import Form from '@/app/ui/edit-form';
import { fetchBookById, fetchAllBooks } from '@/app/lib/data';
import { Book,  BookForm } from '@/app/lib/definitions'
import { notFound} from 'next/navigation';
export default async function Page({ params }: { params: { id: string } }) {
    
    const id = params.id;
    const [form, books]: [BookForm, Book[]] = await Promise.all([
        fetchBookById(id),
        fetchAllBooks(),
      ]);

    if(!form){
      notFound();
    }

  return (
    <main>
      <Form books={books} form={form} />
    </main>
  );
}
