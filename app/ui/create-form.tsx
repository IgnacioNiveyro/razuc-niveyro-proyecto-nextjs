'use client';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createBook } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import {
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { Book } from '@/app/lib/definitions';
export default function Form({books}:{books: Book[]}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBook, initialState);

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-[#F8F4E1] p-4 md:p-6">
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="title"
              name="title"
              placeholder="Enter Book title"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="title-error"
            />
          </div>
          <div id="title-error" aria-live="polite" aria-atomic="true">
            {state.errors?.title && state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="mb-4">
          <label htmlFor="author" className="mb-2 block text-sm font-medium">
            Author
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Enter Book author"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="author-error"
            />
          </div>
          <div id="author-error" aria-live="polite" aria-atomic="true">
            {state.errors?.author && state.errors.author.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Publication Year */}
        <div className="mb-4">
          <label htmlFor="publication_year" className="mb-2 block text-sm font-medium">
            Publication Year
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="publication_year"
              name="publication_year"
              type="number"
              placeholder="Enter Book publication year"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="publication_year-error"
            />
          </div>
          <div id="publication_year-error" aria-live="polite" aria-atomic="true">
            {state.errors?.publication_year && state.errors.publication_year.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Genre */}
        <div className="mb-4">
          <label htmlFor="genre" className="mb-2 block text-sm font-medium">
            Genre
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="genre"
              name="genre"
              type="text"
              placeholder="Enter Book genre"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="genre-error"
            />
          </div>
          <div id="genre-error" aria-live="polite" aria-atomic="true">
            {state.errors?.genre && state.errors.genre.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Image
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="image"
              name="image"
              type="text"
              placeholder="Enter Book image"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="image-error"
            />
          </div>
          <div id="image-error" aria-live="polite" aria-atomic="true">
            {state.errors?.image && state.errors.image.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            Price
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="price"
              name="price"
              type="number"
              step="0.01"
              placeholder="Enter USD amount"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="price-error"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
          <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price && state.errors.price.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Ranking */}
        <div className="mb-4">
          <label htmlFor="ranking" className="mb-2 block text-sm font-medium">
            Star rating
          </label>
          <div className="relative mt-2 rounded-md">
            <input
              id="ranking"
              name="ranking"
              type="number"
              step="0.01"
              placeholder="Enter Star rating"
              className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="ranking-error"
            />
          </div>
          <div id="ranking-error" aria-live="polite" aria-atomic="true">
            {state.errors?.ranking && state.errors.ranking.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
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
