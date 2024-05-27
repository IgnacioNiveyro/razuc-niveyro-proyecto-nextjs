import { fetchBestSellers } from '@/app/lib/data'
import { robotoSlab } from '@/app/ui/fonts';
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import CounterButton from '@/app/ui/counterButton'
import StarRating from '@/scripts/StarRating'
export default async function CardWrapper() {
  const books = await fetchBestSellers();
  return (
    <div className="flex pt-4 justify-center">
    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {books.map(book => (
        <Cards title={book.title} author={book.author} image_src={book.image_src} description = {book.description} rank = {book.rank} />
      ))}
    </div>
    </div>
  );
}

export function Cards({
  title,
  author,
  image_src,
  description,
  rank
}: {
  title: string;
  author: string;
  image_src: string;
  description : string;
  rank : number;
}) {

  return (
    <Card className={`${robotoSlab.className}py-4 custom-div`}>
      <CardHeader className="flex flex-col items-center justify-center text-center py-2 px-4">
        <h4 className="text-medium uppercase font-bold">{title}</h4>
        <small className="text-default-500">{author}</small>
      </CardHeader>
      <CardBody className="overflow-visible items-center">
        <Image
          alt={"image of " + title}
          className="object-contain rounded-x"
          src={image_src}
          width={160}
          height={220}
          style={{ width: '160px', height: '220px', objectFit: 'contain' }}
        />
        <StarRating rating={4.5} />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80">{rank}</p>
        <CounterButton initialValue={0}/>
      </CardFooter>
    </Card>
  );
}
