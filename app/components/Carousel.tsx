import { useState } from 'react'

interface Slide {
  id: number
  imageUrl: string
}

const slides: Slide[] = [
  { id: 1, imageUrl: './img/slide1.png' },
  { id: 2, imageUrl: './img/slide2.png' },
  { id: 3, imageUrl: './img/slide3.png' },
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

  const getPreviousIndex = () =>
    currentIndex === 0 ? slides.length - 1 : currentIndex - 1

  const getNextIndex = () =>
    currentIndex === slides.length - 1 ? 0 : currentIndex + 1

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden flex justify-center items-center relative">
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
            transform: 'translateX(25%)',
            zIndex: 5,
          }}
        >
          <img
            src={slides[getPreviousIndex()].imageUrl}
            alt={`Slide ${slides[getPreviousIndex()].id}`}
            style={{ width: '650px', height: '350px' }}
            className="opacity-50 blur-sm"
          />
        </div>

        {/* Imagem Central */}
        <div className="relative z-10 mx-4">
          <img
            src={slides[currentIndex].imageUrl}
            alt={`Slide ${slides[currentIndex].id}`}
            style={{ width: '1050px', height: '500px' }} 
          />
        </div>

        {/* Imagem à direita */}
        <div
          className="relative cursor-pointer hidden lg:block"
          onClick={nextSlide}
          style={{
            transform: 'translateX(-25%)',
            zIndex: 5,
          }}
        >
          <img
            src={slides[getNextIndex()].imageUrl}
            alt={`Slide ${slides[getNextIndex()].id}`}
            style={{ width: '650px', height: '350px' }}
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
