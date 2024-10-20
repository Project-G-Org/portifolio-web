import React from 'react'
import Carousel from './Carousel'
import styles from '../styles/carousel.module.scss'

export default function Portfolio() {
  return (
    <section
      className={`px-32 pt-16 pb-48 flex flex-col gap-16 ${styles.carouselContainer}`}
    >
      <h1 className="text-5xl text-redlight text-center">
        ALGUNS PROJETOS NOSSOS:
      </h1>
      <Carousel />
    </section>
  )
}
