'use client'

import Image from 'next/image'
import './style.css'
import Carousel from './components/Carousel'
import SmileyIcon from './components/SmileyIcons'
import { useEffect, useRef } from 'react'

export default function Home() {
  const servicesRef = useRef(null)
  const teamRef = useRef(null)
  const testimonialsRef = useRef(null)
  const faqsRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the section is visible
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          // Optional: Remove animation when section is out of view
          entry.target.classList.remove('show')
        }
      })
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    )

    observer.observe(servicesRef.current!)
    observer.observe(teamRef.current!)
    observer.observe(testimonialsRef.current!)
    observer.observe(faqsRef.current!)
    observer.observe(footerRef.current!)

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-graylight font-serif">
      {' '}
      {/* Alterado de font-sans para font-serif */}
      <main className="flex flex-col">
        <header className="w-full py-6 bg-opacity-0 text-white text-center flex gap-20">
          <SmileyIcon />

          <div className="w-full py-6 bg-opacity-0 text-white text-center flex gap-16 flex-col">
            <nav className="flex justify-center gap-6">
              <a
                href="#services"
                className="text-reddark font-bold no-underline text-2xl mr-28"
              >
                produtos
              </a>
              <a
                href="#about"
                className="text-reddark font-bold no-underline text-2xl mr-28"
              >
                sobre
              </a>
              <a
                href="#contact"
                className="text-reddark font-bold no-underline text-2xl"
              >
                contato
              </a>
            </nav>

            <h1 className="text-graydark text-8xl font-extrabold">
              FAZENDO <span className="text-reddark">SUA</span> IDEIA{' '}
              <span className="text-redlight">
                <br></br>REALIDADE
              </span>
            </h1>

            <div className="min-h-40 min-w-max flex flex-col items-center justify-center">
              <Carousel />
            </div>
          </div>

          <SmileyIcon />
        </header>

        {/* ANCHOR - Services */}
        <section
          id="services"
          ref={servicesRef}
          className="flex flex-col gap-14 w-full py-16 section-hidden"
        >
          <h2 className="text-3xl font-extrabold text-graydark">
            NOSSOS SERVIÇOS
          </h2>

          <article className="flex flex-col w-full gap-5">
            <div className="flex flex-row space justify-between w-full">
              <div className="flex flex-row gap-4 align-middle items-center">
                <span className="material-symbols-outlined text-reddark text-3xl">
                  smartphone
                </span>
                <h3 className="text-lg font-bold text-reddark">
                  Desenvolvimento de aplicativos móveis
                </h3>
              </div>
              <p className="text-lg max-w-2xl text-gray">
                Criamos aplicativos mobile personalizados que ajudam sua empresa
                a se conectar melhor com clientes, melhorar processos internos e
                explorar novas oportunidades de mercado.
              </p>
            </div>
            <hr className="opacity-40" />
          </article>

          <article className="flex flex-col w-full gap-5">
            <div className="flex flex-row space justify-between w-full">
              <div className="flex flex-row gap-4 align-middle items-center">
                <span className="material-symbols-outlined text-reddark text-3xl">
                  smartphone
                </span>
                <h3 className="text-lg font-bold text-reddark">
                  Desenvolvimento WEB e SAAS
                </h3>
              </div>
              <p className="text-lg max-w-2xl text-gray">
                Criamos websites personalizados e soluções SaaS que permitem às
                empresas expandir sua presença digital e oferecer serviços
                inovadores online.
              </p>
            </div>
            <hr className=" opacity-40" />
          </article>

          <article className="flex flex-col w-full gap-5">
            <div className="flex flex-row space justify-between w-full">
              <div className="flex flex-row gap-4 align-middle items-center">
                <span className="material-symbols-outlined text-reddark text-3xl">
                  smartphone
                </span>
                <h3 className="text-lg font-bold text-reddark">
                  Desenvolvimento de Servidores e APIs
                </h3>
              </div>
              <p className="text-lg max-w-2xl text-gray">
                a We have vast experience developing SaaS products from scratch
                and improving existing solutions. Our intuitive and tailored
                designs convert and keep your users engaged.
              </p>
            </div>
            <hr className=" opacity-40" />
          </article>

          <article className="flex flex-col w-full gap-5">
            <div className="flex flex-row space justify-between w-full">
              <div className="flex flex-row gap-4 align-middle items-center">
                <span className="material-symbols-outlined text-reddark text-3xl">
                  smartphone
                </span>
                <h3 className="text-lg font-bold text-reddark">
                  Desenvolvimento de Aplicações Desktop
                </h3>
              </div>
              <p className="text-lg max-w-2xl text-gray">
                Oferecemos desenvolvimento de sistemas personalizados, criados
                sob medida para resolver desafios específicos e otimizar o
                funcionamento do seu negócio.
              </p>
            </div>
            <hr className="opacity-40" />
          </article>
        </section>

        <section
          id="about"
          className="flex flex-col gap-14 w-full py-16 section-hidden"
          ref={teamRef}
        >
          <h2 className="text-3xl font-extrabold text-graydark">
            SOBRE A EQUIPE
          </h2>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <article className="flex flex-col w-full md:w-[527px] justify-end h-[523px] rounded-lg bg-placeholder p-3 pb-4 pl-4">
              <h3 className="text-blue text-3xl font-bold">Lucas Vinicios</h3>
              <p className="text-lg text-graydark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </article>

            <article className="flex flex-col w-full md:w-[527px] justify-end h-[523px] rounded-lg bg-placeholder p-3 pb-4 pl-4">
              <h3 className="text-blue text-3xl font-bold">Victor Luiz</h3>
              <p className="text-lg text-graydark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </article>

            <article className="flex flex-col w-full md:w-[527px] justify-end h-[523px] rounded-lg bg-placeholder p-3 pb-4 pl-4">
              <h3 className="text-blue text-3xl font-bold">Gabriel Spinola</h3>
              <p className="text-lg text-graydark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </article>
          </div>
        </section>
        {/* ANCHOR - Testimonials */}
        <section id="testimonials" className="bg-black v-[100vw] h-auto">
          <section
            className="flex flex-col gap-14 py-16 px-12 section-hidden"
            ref={testimonialsRef}
          >
            <div className="flex space-x-4">
              <h2 className="text-4xl font-extrabold">NOSSOS</h2>
              <h2 className="text-4xl font-extrabold text-reddark">CLIENTES</h2>
            </div>

            <article className="flex flex-col md:flex-row w-full gap-8 md:gap-18 align-middle justify-center">
              <Image
                className="rounded-lg shadow-graylight"
                src={'/assets/vitto.png'}
                alt={''}
                width={402}
                height={402}
              />
              <Image
                className="rounded-lg shadow-graylight"
                src={'/assets/harpya2.png'}
                alt={''}
                width={402}
                height={402}
              />
              <Image
                className="rounded-lg shadow-graylight"
                src={'/assets/hivemind.png'}
                alt={''}
                width={402}
                height={402}
              />
            </article>
          </section>
        </section>

        {/* ANCHOR - FAQs */}
        <section
          id="faqs"
          className="flex flex-col gap-14 w-full py-16 section-hidden"
          ref={faqsRef}
        >
          <h2 className="text-3xl font-extrabold text-graydark">
            DÚVIDAS FREQUENTES
          </h2>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between w-full">
              <h3 className="text-lg font-bold text-reddark">
                Como faço para entrar em contato?
              </h3>
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-gray">
              Você pode entrar em contato conosco através do e-mail
              contato@mydomain.com ou pelas nossas redes sociais.
            </p>
            <hr className="opacity-40" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between w-full">
              <h3 className="text-lg font-bold text-reddark">
                Quais serviços vocês oferecem?
              </h3>
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-gray">
              Oferecemos desenvolvimento de aplicativos, websites, sistemas e
              soluções personalizadas.
            </p>
            <hr className="opacity-40" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between w-full">
              <h3 className="text-lg font-bold text-reddark">
                Como é o processo de desenvolvimento?
              </h3>
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-gray">
              O processo envolve a coleta de requisitos, design,
              desenvolvimento, testes e lançamento.
            </p>
            <hr className="opacity-40" />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between w-full">
              <h3 className="text-lg font-bold text-reddark">
                Vocês oferecem suporte pós-lançamento?
              </h3>
              <span className="material-symbols-outlined">add</span>
            </div>
            <p className="text-gray">
              Sim, oferecemos suporte contínuo e manutenção após o lançamento.
            </p>
            <hr className="opacity-40" />
          </div>
        </section>

        {/* ANCHOR - Footer */}
        <footer className="flex flex-col py-6 text-center" ref={footerRef}>
          <h2 className="text-graydark text-3xl font-extrabold">CONTATO</h2>
          <p className="text-gray">Entre em contato conosco:</p>
          <p className="text-gray">contato@mydomain.com</p>
        </footer>
      </main>
    </div>
  )
}
