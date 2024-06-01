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
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
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
          <div className="embla__slide">
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





