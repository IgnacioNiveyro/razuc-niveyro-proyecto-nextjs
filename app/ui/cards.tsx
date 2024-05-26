import { fetchBooks } from '@/app/lib/data'
import { robotoSlab } from '@/app/ui/fonts';
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";

export default async function CardWrapper() {
  const books = await fetchBooks();
  return (
    <div className="flex justify-center">
    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {books.map(book => (
        <Cards title={book.title} author={book.author} publication_year={book.publication_year} price={book.price} image_src={book.image} />
      ))}
    </div>
    </div>
  );
}

export function Cards({
  title,
  author,
  publication_year,
  price,
  image_src,
}: {
  title: string;
  author: string;
  publication_year: number;
  price: number;
  image_src: string;
}) {
  return (
    <Card className="py-4 custom-div">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="text-medium uppercase font-bold">{title}</h4>
        <small className="text-default-500">{publication_year}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 justify-center items-center">
        <Image
          alt={"image of " + title}
          className="object-cover rounded-xl"
          src={image_src}
          width={160}
          height={220}
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80">{price}</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          +
        </Button>
      </CardFooter>
    </Card>
  );
}
