import Image from 'next/image';
import { UpdateBook, DeleteBook } from '@/app/ui/buttons';
import { fetchFilteredBooks } from '@/app/lib/data';
import { formatCurrency }   from '@/app/lib/utils';

export default async function BooksTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const books = await fetchFilteredBooks(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-[#ddd8be] p-2 md:pt-0">
          <div className="md:hidden">
            {books?.map((book) => (
              <div
                key={book.id}
                className="mb-2 w-full rounded-md bg-[#F8F4E1] p-4"
              >
                <div className="flex items-center justify-between border-black border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={book.image}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${book.title}'s profile picture`}
                      />
                      <p>{book.title}</p>
                    </div>
                    {/** <p className="text-sm text-gray-500">{invoice.email}</p> */}
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateBook id={book.id} />
                    <DeleteBook id={book.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-black md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Book
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F8F4E1] ">
              {books?.map((book) => (
                <tr
                  key={book.id}
                  className="w-full border-b border-black py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3 ">
                    <div className="flex items-center gap-3">
                      <Image
                        src={book.image}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${book.title}'s profile picture`}
                      />
                      <p>{book.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {book.price}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateBook id={book.id} />
                      <DeleteBook id={book.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
