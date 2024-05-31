import CardWrapper from '@/app/ui/cards';
import { Suspense } from 'react';
import { CardsSkeleton,EmblaSkeleton } from '@/app/ui/skeletons';
import EmblaCarousel  from '../../ui/emblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Page() {
    return (
        <div>
            <Suspense fallback = {<EmblaSkeleton/>}>
                <EmblaCarousel options={OPTIONS} />
            </Suspense>
            <Suspense fallback ={<CardsSkeleton/>}>
                <CardWrapper />
            </Suspense>
        </div>
    );
}