'use client'

import './style.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-graylight font-sans">
      <Header />
      <main>{/* <Carousel /> */}</main>
      <Footer />
    </div>
  )
}
