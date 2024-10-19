import React from 'react'
import styles from '@/app/styles/header.module.scss'

export default function Header() {
  return (
    <>
      <header className="flex-row gap-24 px-32 py-16">
        <div></div>
        <section className="flex-col gap-24 font-bold font-rokkitt">
          <nav className="text-reddark font-bold">
            <a>PRODUTOS</a>
            <a>SOBRE</a>
            <a>CONTATO</a>
          </nav>
          <h1 className={`${styles.headerTitle} text-graydark text-8xl`}>
            FAZENDO <span className="text-reddark">SUA</span> IDEIA{' '}
            <span className="text-redlight">REALIDADE</span>
          </h1>
        </section>
        <div></div>
      </header>
    </>
  )
}
