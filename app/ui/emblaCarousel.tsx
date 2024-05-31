'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Image from 'next/image';
import { premiereBook } from '../lib/definitions'
const { premiereBooks } = require('@/app/lib/book-data');
type PropType = {
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType & { slides: premiereBook[] }> = (props) => {
  const { options, slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop = true;

      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  key={index}
                  src={slide.image}
                  alt={`Premiere Book ${index}`}
                  width={160}
                  height={220}
                  style={{ border: '1px solid black' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default EmblaCarousel