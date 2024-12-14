import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteBook } from '../lib/actions';

export function CreateBook() {
  return (
    <Link
      href="/home/create"
      className="w-[200px] h-[50px] flex h-10 items-center justify-center rounded-lg bg-[#ddd8be] px-4 text-sm font-medium text-black transition-colors hover:bg-[#cccabe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

    >
      <span className="hidden md:block">Create Book</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateBook({ id }: { id: string }) {
  return (
    <Link
      href={`/home/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteBook({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteBook.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
      </form>
  );
}


