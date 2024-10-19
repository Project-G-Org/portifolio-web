import React from 'react'
import styles from '@/app/styles/header.module.scss'
import SmileyIcon from './SmileyIcons'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header
        className={`min-h-screen bg-office-work bg-bottom bg-no-repeat bg-cover px-32 py-16 ${styles.header}`}
        style={{ backgroundAttachment: 'fixed' }}
      >
        <section
          className={`flex flex-row gap-24 items-center ${styles.headerContent}`}
        >
          <SmileyIcon />
          <section className="flex-col gap-24 font-bold font-rokkitt">
            <nav className="flex flex-row gap-32 text-lightblue font-bold w-full justify-center text-2xl">
              <Link href={''}>PRODUTOS</Link>
              <Link href={''}>SOBRE</Link>
              <Link href={''}>CONTATO</Link>
            </nav>
            <h1
              className={`${styles.headerTitle} drop-shadow-lg text-[#fff] text-8xl text-center`}
            >
              FAZENDO <span className="text-redlight">SUA</span> IDEIA{' '}
              <span className="text-redlight">REALIDADE</span>
            </h1>
          </section>
          <SmileyIcon />
        </section>
        <div className={`${styles.overlay}`}></div>
      </header>
    </>
  )
}
