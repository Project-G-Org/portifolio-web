import React from 'react'
import styles from '@/app/styles/header.module.scss'
import SmileyIcon from './SmileyIcons'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="flex flex-row gap-24 px-32 py-16 items-center">
        <SmileyIcon />
        <section className="flex-col gap-24 font-bold font-rokkitt">
          <nav className="flex flex-row gap-32 text-reddark font-bold w-full justify-center text-2xl">
            <Link href={''}>PRODUTOS</Link>
            <Link href={''}>SOBRE</Link>
            <Link href={''}>CONTATO</Link>
          </nav>
          <h1
            className={`${styles.headerTitle} text-graydark text-8xl text-center`}
          >
            FAZENDO <span className="text-reddark">SUA</span> IDEIA{' '}
            <span className="text-redlight">REALIDADE</span>
          </h1>
        </section>
        <SmileyIcon />
      </header>
    </>
  )
}
