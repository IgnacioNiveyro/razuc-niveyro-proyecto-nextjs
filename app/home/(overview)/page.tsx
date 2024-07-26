import CardWrapper from '@/app/ui/cards';
import { Suspense } from 'react';
import { CardsSkeleton, EmblaSkeleton } from '@/app/ui/skeletons';
import EmblaCarouselWrap from '@/app/ui/CarouselWrapper';
import { fetchBooksPage } from '@/app/lib/data';
import Pagination from '@/app/ui/pagination';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchBooksPage(query);

    return (
        <div className='bg-[#F8F4E1]'>
            <Suspense fallback={<EmblaSkeleton />}>
                <h2 className="text-center text-2xl font-Roboto_Slab underline-custom">Books arriving next week</h2>
                <EmblaCarouselWrap />
            </Suspense>
            <Suspense fallback={<CardsSkeleton />}>
                <h2 className="text-center text-2xl font-Roboto_Slab pb-8 underline-custom">Books in Stock</h2>
                <CardWrapper query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {<Pagination totalPages={totalPages} />}
            </div>
        </div>
    );
}