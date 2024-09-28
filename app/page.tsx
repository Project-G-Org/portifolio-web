'use client'
import { useRef } from 'react'

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)
  const section4Ref = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-graylight font-sans">
      <header className="w-full py-6 bg-blue text-white text-center shadow-lg">
        <nav className="flex justify-center gap-6">
          <button
            onClick={() => scrollToSection(section1Ref)}
            className="bg-purple text-white py-2 px-4 rounded hover:bg-purple-dark transition"
          >
            Seção 1
          </button>
          <button
            onClick={() => scrollToSection(section2Ref)}
            className="bg-pink text-white py-2 px-4 rounded hover:bg-pink-dark transition"
          >
            Seção 2
          </button>
          <button
            onClick={() => scrollToSection(section3Ref)}
            className="bg-orange text-white py-2 px-4 rounded hover:bg-orange-dark transition"
          >
            Seção 3
          </button>
          <button
            onClick={() => scrollToSection(section4Ref)}
            className="bg-green text-white py-2 px-4 rounded hover:bg-green-dark transition"
          >
            Seção 4
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center gap-16 w-full py-16"></main>

      <div
        ref={section1Ref}
        className="w-full py-24 bg-white text-center shadow-md"
      >
        <h2 className="text-3xl font-bold text-graydark">Seção 1</h2>
        <p className="mt-4 text-gray"> Seção 1.</p>
      </div>

      <div
        ref={section2Ref}
        className="w-full py-24 bg-gray-100 text-center shadow-md"
      >
        <h2 className="text-3xl font-bold text-graydark">Seção 2</h2>
        <p className="mt-4 text-gray"> Seção 2.</p>
      </div>

      <div
        ref={section3Ref}
        className="w-full py-24 bg-gray-200 text-center shadow-md"
      >
        <h2 className="text-3xl font-bold text-graydark">Seção 3</h2>
        <p className="mt-4 text-gray"> Seção 3.</p>
      </div>

      <div
        ref={section4Ref}
        className="w-full py-24 bg-gray-300 text-center shadow-md"
      >
        <h2 className="text-3xl font-bold text-graydark">Seção 4</h2>
        <p className="mt-4 text-gray"> Seção 4.</p>
      </div>

      <footer className="w-full py-8 bg-graydark text-white text-center">
        <p>© 2024 HARPYA </p>
      </footer>
    </div>
  )
}
