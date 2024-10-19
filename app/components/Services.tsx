import React from 'react'
import styles from '@/app/styles/services.module.scss'

interface Props {
  title: string
  text: string
  icon: string
}

const services: Props[] = [
  {
    title: 'Desenvolvimento de aplicativos móveis',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex suscipit necessitatibus! Optio distinctio excepturi est ducimus molestias doloribus culpa enim eos voluptatum consequuntur quibusdam non, atque error labore veniam.',
    icon: 'phone_iphone',
  },
  {
    title: 'Desenvolvimento WEB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex suscipit necessitatibus! Optio distinctio excepturi est ducimus molestias doloribus culpa enim eos voluptatum consequuntur quibusdam non, atque error labore veniam.',
    icon: 'travel_explore',
  },
  {
    title: 'Desenvolvimento de Servidores e APIs',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex suscipit necessitatibus! Optio distinctio excepturi est ducimus molestias doloribus culpa enim eos voluptatum consequuntur quibusdam non, atque error labore veniam.',
    icon: 'nearby',
  },
  {
    title: 'Desenvolvimento de Sistemas',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ex suscipit necessitatibus! Optio distinctio excepturi est ducimus molestias doloribus culpa enim eos voluptatum consequuntur quibusdam non, atque error labore veniam.',
    icon: 'desktop_windows',
  },
]

export default function Services() {
  return (
    <>
      <section
        className={`${styles.section1} px-32 pb-32 flex flex-col gap-16 w-full items-center`}
      >
        <h2
          className={`${styles.section1Title} text-5xl text-gray text-left w-full`}
        >
          NOSSOS SERVIÇOS
        </h2>
        <ul className="text-reddark flex flex-col gap-8 text-xl w-full">
          {services.map((service, index) => (
            <li key={index} className="w-full flex justify-between pb-2">
              <div className="flex gap-4">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
              </div>
              <p className="max-w-[768px]">{service.text}</p>
            </li>
          ))}
        </ul>
        <button className="max-w-128 text-2xl border-2 text-[#fff] px-16 py-4 rounded-xl bg-redlight hover:bg-[#fff] hover:border-2 border-redlight hover:text-redlight">
          CONTATE-NOS
        </button>
      </section>
    </>
  )
}
