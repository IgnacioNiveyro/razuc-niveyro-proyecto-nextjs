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

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop = true;

      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return


  }, [emblaApi])

  const slides: JSX.Element[] = premiereBooks.map((book: premiereBook, index: number) => (
    <Image
      key={index}
      src={book.image}
      alt={`Premiere Book ${index}`}
      width={160}
      height={220}
      style={{ border: '1px solid black' }}
    />
  ));

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                {slide}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel