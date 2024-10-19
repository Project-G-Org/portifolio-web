'use client'

import './style.css'
import styles from '@/app/styles/main.module.scss'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={`flex-1 relative px-32 pb-16 bg-white min-h-screen w-full ${styles.main}`}>
        <section className={`${styles.section1} flex flex-col gap-16 w-full`}>
          <h2 className={`${styles.section1Title} text-5xl text-gray`}>NOSSOS SERVIÇOS</h2>
          <ul className='text-reddark flex flex-col gap-8 text-xl w-full'>
            <li className='w-full flex justify-between'>
              <div className='flex'>
                <span className="material-symbols-outlined">
                  phone_iphone
                </span>
                <h3>Desenvolvimento de aplicativos móveis</h3>
              </div>
              <p className='max-w-[768px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex suscipit necessitatibus! Optio distinctio excepturi est ducimus molestias doloribus culpa enim eos voluptatum consequuntur quibusdam non, atque error labore veniam.</p>
            </li>
          </ul>
        </section>
        {/* <Carousel /> */}
      </main>
      <Footer />
    </>
  )
}
