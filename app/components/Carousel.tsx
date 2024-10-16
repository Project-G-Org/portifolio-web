import { useState } from 'react'
import Image from 'next/image'

interface Slide {
  id: number
  imageUrl: string
}

const slides: Slide[] = [
  { id: 1, imageUrl: '/img/slide1.png' },
  { id: 2, imageUrl: '/img/slide2.png' },
  { id: 3, imageUrl: '/img/slide3.png' },
]

const imageDistancePercent = 10
const focusedImageSize = { width: 1050, height: 500 }
const unfocusedImagesSize = { width: 650, height: 450 }

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

  const getPreviousIndex = () =>
    currentIndex === 0 ? slides.length - 1 : currentIndex - 1

  const getNextIndex = () =>
    currentIndex === slides.length - 1 ? 0 : currentIndex + 1

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden flex justify-center items-center relative carousel-container">
        {/* Área clicável à esquerda */}
        <div
          className="absolute left-0 top-0 h-full w-1/4 cursor-pointer z-20 hidden lg:block"
          onClick={prevSlide}
        ></div>

        {/* Imagem à esquerda */}
        <div
          className="relative cursor-pointer hidden lg:block"
          onClick={prevSlide}
          style={{
            transform: `translateX(${imageDistancePercent}%)`,
            zIndex: 5,
            width: `${unfocusedImagesSize.width}px`, // Set width on the div
            height: `${unfocusedImagesSize.height}px`, // Set height on the div
          }}
        >
          <Image
            src={slides[getPreviousIndex()].imageUrl}
            alt={`Slide ${slides[getPreviousIndex()].id}`}
            fill // Make the image fill its container
            style={{ objectFit: 'cover' }} // Ensure consistent sizing
            className="opacity-50 blur-sm"
          />
        </div>

        {/* Imagem Central */}
        <div
          className="relative z-10 mx-4"
          style={{
            width: `${focusedImageSize.width}px`, // Set width on the div
            height: `${focusedImageSize.height}px`, // Set height on the div
          }}
        >
          <Image
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${slides[currentIndex].id}`}
            fill // Make the image fill its container
          />
        </div>

        {/* Imagem à direita */}
        <div
          className="relative cursor-pointer hidden lg:block"
          onClick={nextSlide}
          style={{
            transform: `translateX(-${imageDistancePercent}%)`,
            zIndex: 5,
            width: `${unfocusedImagesSize.width}px`, // Set width on the div
            height: `${unfocusedImagesSize.height}px`, // Set height on the div
          }}
        >
          <Image
            src={slides[getNextIndex()].imageUrl}
            alt={`Slide ${slides[getNextIndex()].id}`}
            fill // Make the image fill its container
            style={{ objectFit: 'cover' }} // Ensure consistent sizing
            className="opacity-50 blur-sm"
          />
        </div>

        {/* Área clicável à direita */}
        <div
          className="absolute right-0 top-0 h-full w-1/4 cursor-pointer z-20 hidden lg:block"
          onClick={nextSlide}
        ></div>
      </div>

      {/* Estilizar a responsividade */}
      <style jsx>{`
        @media (max-width: 900px) {
          .lg\\:block {
            display: none; /* Esconder as imagens laterais em telas pequenas */
          }

          img {
            width: 100%; /* Ajustar a imagem central para ocupar toda a largura */
            height: auto;
          }

          .relative {
            position: relative;
            cursor: pointer; /* Área central também clicável em telas pequenas */
          }

          .relative::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            z-index: 10;
          }

          .relative::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            z-index: 10;
          }

          .relative::before {
            cursor: pointer;
          }

          .relative::after {
            cursor: pointer;
          }
        }
      `}</style>
    </div>
  )
}

export default Carousel
