'use client'

import './style.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Carousel />
      </main>
      <Footer />
    </>
  )
}
