import { robotoSlab } from '@/app/ui/fonts';
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import CounterButton from '@/app/ui/counterButton'
import StarRating from '@/scripts/StarRating'

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <Card className={`${robotoSlab.className} py-4 custom-div ${shimmer}`}>
      <CardHeader className="flex flex-col items-center justify-center text-center py-2 px-4">
        <h4 className="text-medium uppercase font-bold">{""}</h4>
        <small className="text-default-500">{""}</small>
      </CardHeader>
      <CardBody className="overflow-visible items-center">
        <Image
          alt={""}
          className="object-contain rounded-x"
          src={""}
          width={160}
          height={220}
          style={{ width: '160px', height: '220px', objectFit: 'contain' }}
        />
        <StarRating rating={0} />
      </CardBody>
      <CardFooter className="justify-between bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80">{"0"}</p>
        <CounterButton initialValue={0} />
      </CardFooter>
    </Card>
  );
}
export function CardsSkeleton() {
  return (
    <div className="flex justify-center grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {[...Array(6)].map((_, index) => (
        <CardSkeleton key={index} /> // Añadir prop key aquí
      ))}
    </div>
  )
}

export function ImageEmbla() {
  return (

    <div className="w-[160px] animate-pulse rounded shadow-xl border-[1px] flex flex-col gap-4">
      <div className="bg-gray-800/20 rounded w-full h-[220px]">
        <div className="p-4 flex flex-col gap-4">
        </div>
      </div>
    </div>

  );
}

export function EmblaSkeleton() {
  var slides: number[] = [0, 1, 2, 3, 4, 5, 6]
  return (
    <div className="embla">
      <div className="embla__viewport">
        <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__number">
              <ImageEmbla/>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-[#F8F4E1] p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-[#F8F4E1]"></div>
          <div className="h-6 w-16 rounded bg-[#F8F4E1]"></div>
        </div>
        <div className="h-6 w-16 rounded bg-[#F8F4E1]"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-[#F8F4E1]"></div>
          <div className="mt-2 h-6 w-24 rounded bg-[#F8F4E1]"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-[#F8F4E1]"></div>
          <div className="h-10 w-10 rounded bg-[#F8F4E1]"></div>
        </div>
      </div>
    </div>
  );
}
export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-[#F8F4E1]"></div>
          <div className="h-6 w-24 rounded bg-[#F8F4E1]"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-[#F8F4E1]"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-[#F8F4E1]"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-[#F8F4E1]"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-[#F8F4E1]"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-[#F8F4E1]"></div>
          <div className="h-[38px] w-[38px] rounded bg-[#F8F4E1]"></div>
        </div>
      </td>
    </tr>
  );
}
export function BooksTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-[#F8F4E1] p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Book
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#ddd8be]">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}





