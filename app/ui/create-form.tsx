import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createBook } from '@/app/lib/actions';
import {
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export default function Form() {
  return (
    <form action={createBook}>
      <div className="rounded-md bg-[#F8F4E1] p-4 md:p-6">
        {/* title */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="string"
                step="0.01"
                placeholder="Enter Book title"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* author */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Author
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="author"
                name="author"
                type="string"
                placeholder="Enter Book author"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* publication_year */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Publication Year
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="publication_year"
                name="publication_year"
                type="number"
                placeholder="Enter Book publication year"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* genre */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          Genre
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="genre"
                name="genre"
                type="string"
                placeholder="Enter Book publication year"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* image */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
          image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="image"
                type="string"
                placeholder="Enter Book image"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        {/* price */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* ranking */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Star rating
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="ranking"
                name="ranking"
                type="number"
                placeholder="Enter Star rating"
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/home"
          className="flex h-10 items-center rounded-lg bg-[#e1dab9] px-4 text-sm font-medium text-black transition-colors hover:bg-red-500"
        >
          Cancel
        </Link>
        <Button type="submit">Create Book</Button>
      </div>
    </form>
  );
}
