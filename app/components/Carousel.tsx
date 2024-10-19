import React from 'react'
import CarouselImage from './CarouselImage'

interface Slide {
  imageUrl: string
  imageAlt: string
}

const slides: Slide[] = [
  { imageUrl: '/assets/harpya.png', imageAlt: 'Harpya' },
  { imageUrl: '/img/slide1.png', imageAlt: 'Builder Buddy' },
  { imageUrl: '/img/slide2.png', imageAlt: 'Vittoree' },
]

export default function Carousel() {
  return (
    <>
      <div className="w-full max-h-[590px]">
        {slides.map((slide, index) => (
          <div key={index} className="max-h-[590px] max-w-[590px]">
            <CarouselImage
              imageUrl={slide.imageUrl}
              imageAlt={slide.imageAlt}
            />
          </div>
        ))}
      </div>
    </>
  )
}
