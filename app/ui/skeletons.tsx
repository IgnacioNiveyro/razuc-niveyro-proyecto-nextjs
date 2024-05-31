import { fetchBooks } from '@/app/lib/data'
import { robotoSlab } from '@/app/ui/fonts';
import { Card, CardHeader, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import CounterButton from '@/app/ui/counterButton'
import StarRating from '@/scripts/StarRating'
import { SYMBOL_CLEARED_COOKIES } from 'next/dist/server/api-utils';

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

export function EmblaSkeleton() {
    return (
        <div className={`${shimmer} embla`}>
          <div className="embla__viewport">
            <div className="embla__container">
              
            </div>
          </div>
        </div>
    );
}


