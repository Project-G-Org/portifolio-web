import React from 'react'
import styles from '@/app/styles/aboutus.module.scss'

export default function AboutUs() {
  return (
    <section className={`px-32 pb-48 bg-redlight ${styles.aboutUsContainer}`}>
      <section className={`${styles.aboutUs}`}>
        <h2 className="text-5xl text-[#fff]">QUEM SOMOS?</h2>
        <p className="text-xl text-[#fff] max-w-128">
          Somos uma empresa especializada em{' '}
          <span className={styles.textSpan}>
            desenvolvimento de aplicativos mobile
          </span>{' '}
          e <span className={styles.textSpan}>desktop</span>, criação de{' '}
          <span className={styles.textSpan}>sites</span> e{' '}
          <span className={styles.textSpan}>sistemas</span>, além de oferecer{' '}
          <span className={styles.textSpan}>serviços de design</span>.
          Asseguramos que cada projeto reflita a individualidade de quem o
          solicita, com performance otimizada para suas necessidades.
        </p>
      </section>
    </section>
  )
}
