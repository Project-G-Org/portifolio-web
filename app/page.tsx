'use client'

import Image from 'next/image'
import './style.css'
import Carousel from './components/Carousel'
import SmileyIcon from './components/SmileyIcons'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-graylight font-sans">
      <main className="flex flex-col">
        <header className="w-full py-6 bg-opacity-0 text-white text-center flex gap-20">
          <SmileyIcon />

          <div className="w-full py-6 bg-opacity-0 text-white text-center flex gap-16 flex-col">
            <nav className="flex justify-center gap-6">
              <a
                href="#"
                className="text-reddark font-bold no-underline text-2xl mr-28"
              >
                produtos
              </a>
              <a
                href="#"
                className="text-reddark font-bold no-underline text-2xl mr-28"
              >
                sobre
              </a>

              <a
                href="#"
                className="text-reddark font-bold no-underline text-2xl"
              >
                contatato
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

        {/* Services */}
        <section className="flex flex-col gap-14 w-full py-16">
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

        <section className="flex flex-col gap-14 w-full py-16">
          <h2 className="text-3xl font-extrabold text-graydark">
            SOBRE A EQUIPE
          </h2>

          <article className="flex flex-col w-full gap-5">
            <div className="flex flex-col w-[527px] justify-end h-[523px] rounded-lg bg-placeholder p-3 pb-4 pl-4">
              <h3 className="text-blue text-3xl font-bold">Lorem Ipsum</h3>
              <p className="text-lg text-graydark">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </article>
        </section>

        {/* ANCHOR - Testimonials */}
        <section
          id="testimonials"
          className="flex flex-col gap-14 py-16 px-12 bg-black v-[100vw] h-[102vh]"
        >
          <h2 className="text-3xl font-extrabold">NOSSOS CLIENTES</h2>

          <article className="flex flex-row w-full gap-28 align-middle justify-center">
            <Image
              className="rounded-lg shadow-graylight"
              src={'/assets/vitto.png'}
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

            <Image
              className="rounded-lg shadow-graylight"
              src={'/assets/senai.png'}
              alt={''}
              width={402}
              height={402}
            />
          </article>
        </section>

        <section className="flex flex-col gap-14 w-full py-16">
          <h2 className="text-3xl font-extrabold text-graydark">FAQS</h2>

          <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-center gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6">
                    Leslie Alexander
                  </p>
                  <p className="mt-1 truncate text-xs leading-5">
                    leslie.alexander@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Co-Founder / CEO
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
            </li>

            <li className="flex justify-center gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6">
                    Michael Foster
                  </p>
                  <p className="mt-1 truncate text-xs leading-5">
                    michael.foster@example.com
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Co-Founder / CTO
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
                </p>
              </div>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-32 w-full py-12 bg-black text-white text-center justify-center">
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
