import CardWrapper from '@/app/ui/cards';
import Carrusel from '@/app/ui/carrusel';

import EmblaCarousel  from '../ui/emblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Page() {
    return (
        <div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <CardWrapper />
        </div>
    );
}