import { fetchBestSellers } from '@/app/lib/data'
import { robotoSlab } from '@/app/ui/fonts';
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import CounterButton from '@/app/ui/counterButton'
import StarRating from '@/scripts/StarRating'

export default async function CardWrapperBestSellers() {
  const books = await fetchBestSellers();
  return (
    <div className="flex pt-4 justify-center">
    <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {books.map(BookBS => (
        <CardsBestSellers title={BookBS.title} author={BookBS.author} image_src={BookBS.image_src} description = {BookBS.description} rank = {BookBS.ranking} price = {BookBS.price} review = {BookBS.review}/>
      ))}
    </div>
    </div>
  );
}

export function CardsBestSellers({
  title,
  author,
  image_src,
  description,
  rank,
  price,
  review
}: {
  title: string;
  author: string;
  image_src: string;
  description : string;
  rank : number;
  price : number;
  review : number;
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
        <StarRating rating={review} />
        <span className="ml-2 text-sm font-medium text-black-500">{review.toFixed(1)}</span>
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80">{price}</p>
        <CounterButton initialValue={0}/>
      </CardFooter>
    </Card>
  );
}
