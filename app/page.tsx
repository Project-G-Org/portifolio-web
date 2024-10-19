'use client'

import Image from 'next/image'
import './style.css'
import SmileyIcon from './components/SmileyIcons'
import { useEffect, useRef } from 'react'
import CarouselController from './components/CarouselController'

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
    <div className="flex flex-col min-h-screen bg-graylight font-sans">
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
              <CarouselController />
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
                src={'/assets/senai.png'}
                alt={''}
                width={402}
                height={402}
              />
            </article>

            <div className="flex justify-center mt-30">
              <h2 className="text-6xl font-extrabold">SEJA VOCÊ MAIS UM</h2>
            </div>
          </section>
        </section>

        <section
          className="flex flex-col gap-14 w-full py-16 mt-16"
          ref={faqsRef}
        >
          <h2 className="text-3xl font-extrabold text-gray-800">FAQS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                You can return any item within 30 days of purchase. Simply
                contact our support team to start the process.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                How can I track my order?
              </h3>
              <p className="text-gray-600">
                After your order is shipped, we will send you an email with a
                tracking number. You can also check your order status in your
                account.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Do you offer international shipping?
              </h3>
              <p className="text-gray-600">
                Yes, we ship internationally. Shipping times and costs vary
                based on your location.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Can I change my order after it has been placed?
              </h3>
              <p className="text-gray-600">
                Unfortunately, once an order has been placed, it cannot be
                modified. Please double-check your order details before
                completing the purchase.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept Visa, MasterCard, PayPal, and Apple Pay for your
                convenience.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                How do I contact customer service?
              </h3>
              <p className="text-gray-600">
                You can reach our customer service team via email at
                support@example.com or call us at (123) 456-7890.
              </p>
            </div>
          </div>
        </section>
      </main>

      <div className="section-hidden w-full" ref={footerRef}>
        <Footer />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center gap-32 w-full py-12 bg-black text-white text-center justify-center"
    >
      {/* LINK - https://www.octaveagency.com/ */}
      {/* LINK - https://www.jamm.co/#pricing */}
      {/* TODO - Add cool animation here */}
      <article className="flex flex-col w-full gap-12">
        <h1 className="text-8xl font-bold text-redlight">
          Vamos construir algo juntos?
        </h1>
        <p className="text-graylight text-2xl">
          Contrate uma equipe de especialistas oferecendo soluções completas de
          software <br /> para impulsionar seu negócio com agilidade e
          eficiência.
        </p>

        <div className="flex flex-row gap-8 align-middle justify-center">
          <button
            className="w-[16vw] h-[5.5vh] shadow-lg rounded-lg shadow-reddark bg-redlight border-graylight hover:ease-in transition-all duration-100 ease-in-out hover:bg-graylight hover:border hover:border-graylight hover:text-redlight"
            onClick={() => {}}
          >
            Marque uma call
          </button>
          <button
            className="w-[16vw] h-[5.5vh] shadow-lg shadow-reddark rounded-lg  border-redlight  border hover:text-redlight transition-all duration-150"
            onClick={() => {}}
          >
            Nos mande um email
          </button>
        </div>

        {/* REVIEW - Check if looks good */}
        {/* <div className="w-full justify-center text-center">
            <button className="text-graylight bg-blue w-[18vw] h-[8vh] rounded-xl">
              Veja nossos trabalhos aqui
            </button>
          </div> */}
      </article>

      <article className="flex flex-row gap-36 text-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-graylight font-bold text-2xl">Vigel</h2>
          <span>From Brasil</span>
          <span className="text-base">Tel 1: +55 (31) 9 7300-8566</span>
          <span className="text-base">Tel 2: +55 (31) 9 8865-4602</span>
          <span className="text-base">
            Email:{' '}
            <a href="mailto:vigelcontato@gmail.com">vigelcontato@gmail.com</a>
          </span>

          {/* TODO -  Social medias */}
          <div className="flex flex-row gap-6">
            <a href="">
              <span>Icon here</span>
            </a>
            <a href="">
              <span>Icon here</span>
            </a>
            <a href="">
              <span>Icon here</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl">Links</h2>
          <a href="#">Nossos serviços</a>
          <a href="#">Sobre nós</a>
          <a href="#">Nossos trabalhos</a>
          <a href="#">Contato</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Serviços</h2>
          <a href="#">Desenvolvimeto de aplicativos móveis</a>
          <a href="#">Desenvolvimento de aplicações SAAS</a>
          <a href="#">Desenvolvimento de APIs e servidores</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Contato</h2>
          <span>
            <b>Email:</b>{' '}
            <a href="mailto:vigelcontato@gmail.com">vigelcontato@gmail.com</a>
          </span>
          <span>
            <b>Tel:</b> <a href="#">+55 (31) 9 8865-4602</a>
          </span>

          <div className="">
            <span>
              <b>Address</b>{' '}
            </span>

            <h4>Horas de funcionamento:</h4>
            <span>Segunda - Sexta: 9:00 até 5pm</span>
          </div>
        </div>
      </article>

      <hr />

      <div>
        <p>
          <a href="#">Termos de condições</a>
        </p>
        <p>© 2024 Vigel </p>
      </div>
    </footer>
  )
}
