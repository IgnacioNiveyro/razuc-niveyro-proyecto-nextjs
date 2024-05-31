import { fetchPremiereBooks } from '@/app/lib/data';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from './emblaCarousel';
const OPTIONS: EmblaOptionsType = { loop: true }
export default async function EmblaCarouselWrap() {
    const slides = await fetchPremiereBooks();
    return (
        <EmblaCarousel options={OPTIONS} slides={slides} />
    );
}