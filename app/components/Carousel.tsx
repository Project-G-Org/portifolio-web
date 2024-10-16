import { useState } from 'react'

interface Slide {
  id: number
  imageUrl: string
}

const slides: Slide[] = [
  { id: 1, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+1' },
  { id: 2, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+2' },
  { id: 3, imageUrl: 'https://via.placeholder.com/800x400?text=Slide+3' },
]

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <image
                src={slide.imageUrl}
                alt={`Slide ${slide.id}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white"
      >
        &#10095;
      </button>
    </div>
  )
}

export default Carousel
