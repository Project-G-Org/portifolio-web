import React, { useState } from 'react'
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
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center w-full max-w-[800px] h-[590px] relative">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={index}
              className={`transition-transform duration-300 ease-in-out flex justify-center items-center h-[590px] w-[590px]
                ${isActive ? 'scale-100 z-10' : 'scale-90 opacity-50'}
              `}
              style={{
                transform: isActive
                  ? 'translateX(0)'
                  : index < activeIndex
                    ? 'translateX(-50%)'
                    : 'translateX(50%)',
              }}
            >
              <CarouselImage
                imageUrl={slide.imageUrl}
                imageAlt={slide.imageAlt}
                status={isActive}
              />
            </div>
          )
        })}
      </div>
      <div className="flex justify-between w-full mt-4">
        <button onClick={handlePrev} className="p-2 bg-gray-300 rounded">
          Prev
        </button>
        <button onClick={handleNext} className="p-2 bg-gray-300 rounded">
          Next
        </button>
      </div>
    </div>
  )
}
