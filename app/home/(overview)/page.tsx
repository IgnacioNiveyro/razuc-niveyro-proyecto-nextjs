import CardWrapper from '@/app/ui/cards';
import { Suspense } from 'react';
import { CardsSkeleton,EmblaSkeleton } from '@/app/ui/skeletons';
import  EmblaCarouselWrap from '@/app/ui/CarouselWrapper'

export default function Page() {
    return (
        <div>
            <Suspense fallback = {<EmblaSkeleton/>}>
            <EmblaCarouselWrap />
            </Suspense>
            <Suspense fallback ={<CardsSkeleton/>}>
                <CardWrapper />
            </Suspense>
        </div>
    );
}