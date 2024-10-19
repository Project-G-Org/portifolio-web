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
      <div className="relative flex justify-center">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex
          const isPrevious =
            index === (activeIndex - 1 + slides.length) % slides.length
          const isNext = index === (activeIndex + 1) % slides.length

          let positionClass =
            'absolute transition-all duration-300 h-[590px] w-[590px] rounded-xl overflow-hidden'
          if (isActive) {
            positionClass += ' z-10' // A imagem ativa é a maior
          } else if (isPrevious) {
            positionClass += ' transform translate-x-[-50%] scale-90' // Imagem anterior, deslocada e menor
          } else if (isNext) {
            positionClass += ' transform translate-x-[50%] scale-90' // Imagem seguinte, deslocada e menor
          } else {
            positionClass += ' hidden' // Imagens não ativas estão ocultas
          }

          return (
            <div key={index} className={positionClass}>
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
