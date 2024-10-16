'use client'

import Image from 'next/image'
import './style.css'
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-graylight font-sans">
      <main className="flex flex-col">
        <header className="w-full py-6 bg-opacity-0 text-white text-center flex gap-20">
          <svg
            width="124"
            height="160"
            viewBox="0 0 124 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80.0833 59.5833C82.2361 59.5833 84.066 58.7934 85.5729 57.2135C87.0799 55.6337 87.8333 53.7153 87.8333 51.4583C87.8333 49.2014 87.0799 47.283 85.5729 45.7031C84.066 44.1233 82.2361 43.3333 80.0833 43.3333C77.9305 43.3333 76.1007 44.1233 74.5937 45.7031C73.0868 47.283 72.3333 49.2014 72.3333 51.4583C72.3333 53.7153 73.0868 55.6337 74.5937 57.2135C76.1007 58.7934 77.9305 59.5833 80.0833 59.5833ZM43.9167 59.5833C46.0694 59.5833 47.8993 58.7934 49.4062 57.2135C50.9132 55.6337 51.6667 53.7153 51.6667 51.4583C51.6667 49.2014 50.9132 47.283 49.4062 45.7031C47.8993 44.1233 46.0694 43.3333 43.9167 43.3333C41.7639 43.3333 39.934 44.1233 38.4271 45.7031C36.9201 47.283 36.1667 49.2014 36.1667 51.4583C36.1667 53.7153 36.9201 55.6337 38.4271 57.2135C39.934 58.7934 41.7639 59.5833 43.9167 59.5833ZM62 94.7917C67.8555 94.7917 73.1729 93.0538 77.9521 89.5781C82.7312 86.1024 86.1972 81.5208 88.35 75.8333H35.65C37.8028 81.5208 41.2687 86.1024 46.0479 89.5781C50.8271 93.0538 56.1444 94.7917 62 94.7917ZM62 119.167C54.8528 119.167 48.1361 117.745 41.85 114.901C35.5639 112.057 30.0958 108.198 25.4458 103.323C20.7958 98.4479 17.1146 92.7153 14.4021 86.125C11.6896 79.5347 10.3333 72.4931 10.3333 65C10.3333 57.5069 11.6896 50.4653 14.4021 43.875C17.1146 37.2847 20.7958 31.5521 25.4458 26.6771C30.0958 21.8021 35.5639 17.9427 41.85 15.099C48.1361 12.2552 54.8528 10.8333 62 10.8333C69.1472 10.8333 75.8639 12.2552 82.15 15.099C88.4361 17.9427 93.9042 21.8021 98.5542 26.6771C103.204 31.5521 106.885 37.2847 109.598 43.875C112.31 50.4653 113.667 57.5069 113.667 65C113.667 72.4931 112.31 79.5347 109.598 86.125C106.885 92.7153 103.204 98.4479 98.5542 103.323C93.9042 108.198 88.4361 112.057 82.15 114.901C75.8639 117.745 69.1472 119.167 62 119.167ZM62 108.333C73.5389 108.333 83.3125 104.135 91.3208 95.7396C99.3292 87.3438 103.333 77.0972 103.333 65C103.333 52.9028 99.3292 42.6562 91.3208 34.2604C83.3125 25.8646 73.5389 21.6667 62 21.6667C50.4611 21.6667 40.6875 25.8646 32.6792 34.2604C24.6708 42.6562 20.6667 52.9028 20.6667 65C20.6667 77.0972 24.6708 87.3438 32.6792 95.7396C40.6875 104.135 50.4611 108.333 62 108.333Z"
              fill="#4E93BC"
              fill-opacity="0.5"
            />
            <path
              d="M80.0833 89.5833C82.2361 89.5833 84.066 88.7934 85.5729 87.2135C87.0799 85.6337 87.8333 83.7153 87.8333 81.4583C87.8333 79.2014 87.0799 77.283 85.5729 75.7031C84.066 74.1233 82.2361 73.3333 80.0833 73.3333C77.9305 73.3333 76.1007 74.1233 74.5937 75.7031C73.0868 77.283 72.3333 79.2014 72.3333 81.4583C72.3333 83.7153 73.0868 85.6337 74.5937 87.2135C76.1007 88.7934 77.9305 89.5833 80.0833 89.5833ZM43.9167 89.5833C46.0694 89.5833 47.8993 88.7934 49.4062 87.2135C50.9132 85.6337 51.6667 83.7153 51.6667 81.4583C51.6667 79.2014 50.9132 77.283 49.4062 75.7031C47.8993 74.1233 46.0694 73.3333 43.9167 73.3333C41.7639 73.3333 39.934 74.1233 38.4271 75.7031C36.9201 77.283 36.1667 79.2014 36.1667 81.4583C36.1667 83.7153 36.9201 85.6337 38.4271 87.2135C39.934 88.7934 41.7639 89.5833 43.9167 89.5833ZM62 124.792C67.8555 124.792 73.1729 123.054 77.9521 119.578C82.7312 116.102 86.1972 111.521 88.35 105.833H35.65C37.8028 111.521 41.2687 116.102 46.0479 119.578C50.8271 123.054 56.1444 124.792 62 124.792ZM62 149.167C54.8528 149.167 48.1361 147.745 41.85 144.901C35.5639 142.057 30.0958 138.198 25.4458 133.323C20.7958 128.448 17.1146 122.715 14.4021 116.125C11.6896 109.535 10.3333 102.493 10.3333 95C10.3333 87.5069 11.6896 80.4653 14.4021 73.875C17.1146 67.2847 20.7958 61.5521 25.4458 56.6771C30.0958 51.8021 35.5639 47.9427 41.85 45.099C48.1361 42.2552 54.8528 40.8333 62 40.8333C69.1472 40.8333 75.8639 42.2552 82.15 45.099C88.4361 47.9427 93.9042 51.8021 98.5542 56.6771C103.204 61.5521 106.885 67.2847 109.598 73.875C112.31 80.4653 113.667 87.5069 113.667 95C113.667 102.493 112.31 109.535 109.598 116.125C106.885 122.715 103.204 128.448 98.5542 133.323C93.9042 138.198 88.4361 142.057 82.15 144.901C75.8639 147.745 69.1472 149.167 62 149.167ZM62 138.333C73.5389 138.333 83.3125 134.135 91.3208 125.74C99.3292 117.344 103.333 107.097 103.333 95C103.333 82.9028 99.3292 72.6562 91.3208 64.2604C83.3125 55.8646 73.5389 51.6667 62 51.6667C50.4611 51.6667 40.6875 55.8646 32.6792 64.2604C24.6708 72.6562 20.6667 82.9028 20.6667 95C20.6667 107.097 24.6708 117.344 32.6792 125.74C40.6875 134.135 50.4611 138.333 62 138.333Z"
              fill="#DA6666"
            />
          </svg>

          <div className="w-full py-6 bg-opacity-0 text-white text-center flex gap-20 flex-col">
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

            <div className="min-h-screen flex flex-col items-center justify-center">
              <Carousel />
            </div>
          </div>
          <svg
            width="124"
            height="160"
            viewBox="0 0 124 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80.0833 59.5833C82.2361 59.5833 84.066 58.7934 85.5729 57.2135C87.0799 55.6337 87.8333 53.7153 87.8333 51.4583C87.8333 49.2014 87.0799 47.283 85.5729 45.7031C84.066 44.1233 82.2361 43.3333 80.0833 43.3333C77.9305 43.3333 76.1007 44.1233 74.5937 45.7031C73.0868 47.283 72.3333 49.2014 72.3333 51.4583C72.3333 53.7153 73.0868 55.6337 74.5937 57.2135C76.1007 58.7934 77.9305 59.5833 80.0833 59.5833ZM43.9167 59.5833C46.0694 59.5833 47.8993 58.7934 49.4062 57.2135C50.9132 55.6337 51.6667 53.7153 51.6667 51.4583C51.6667 49.2014 50.9132 47.283 49.4062 45.7031C47.8993 44.1233 46.0694 43.3333 43.9167 43.3333C41.7639 43.3333 39.934 44.1233 38.4271 45.7031C36.9201 47.283 36.1667 49.2014 36.1667 51.4583C36.1667 53.7153 36.9201 55.6337 38.4271 57.2135C39.934 58.7934 41.7639 59.5833 43.9167 59.5833ZM62 94.7917C67.8555 94.7917 73.1729 93.0538 77.9521 89.5781C82.7312 86.1024 86.1972 81.5208 88.35 75.8333H35.65C37.8028 81.5208 41.2687 86.1024 46.0479 89.5781C50.8271 93.0538 56.1444 94.7917 62 94.7917ZM62 119.167C54.8528 119.167 48.1361 117.745 41.85 114.901C35.5639 112.057 30.0958 108.198 25.4458 103.323C20.7958 98.4479 17.1146 92.7153 14.4021 86.125C11.6896 79.5347 10.3333 72.4931 10.3333 65C10.3333 57.5069 11.6896 50.4653 14.4021 43.875C17.1146 37.2847 20.7958 31.5521 25.4458 26.6771C30.0958 21.8021 35.5639 17.9427 41.85 15.099C48.1361 12.2552 54.8528 10.8333 62 10.8333C69.1472 10.8333 75.8639 12.2552 82.15 15.099C88.4361 17.9427 93.9042 21.8021 98.5542 26.6771C103.204 31.5521 106.885 37.2847 109.598 43.875C112.31 50.4653 113.667 57.5069 113.667 65C113.667 72.4931 112.31 79.5347 109.598 86.125C106.885 92.7153 103.204 98.4479 98.5542 103.323C93.9042 108.198 88.4361 112.057 82.15 114.901C75.8639 117.745 69.1472 119.167 62 119.167ZM62 108.333C73.5389 108.333 83.3125 104.135 91.3208 95.7396C99.3292 87.3438 103.333 77.0972 103.333 65C103.333 52.9028 99.3292 42.6562 91.3208 34.2604C83.3125 25.8646 73.5389 21.6667 62 21.6667C50.4611 21.6667 40.6875 25.8646 32.6792 34.2604C24.6708 42.6562 20.6667 52.9028 20.6667 65C20.6667 77.0972 24.6708 87.3438 32.6792 95.7396C40.6875 104.135 50.4611 108.333 62 108.333Z"
              fill="#4E93BC"
              fill-opacity="0.5"
            />
            <path
              d="M80.0833 89.5833C82.2361 89.5833 84.066 88.7934 85.5729 87.2135C87.0799 85.6337 87.8333 83.7153 87.8333 81.4583C87.8333 79.2014 87.0799 77.283 85.5729 75.7031C84.066 74.1233 82.2361 73.3333 80.0833 73.3333C77.9305 73.3333 76.1007 74.1233 74.5937 75.7031C73.0868 77.283 72.3333 79.2014 72.3333 81.4583C72.3333 83.7153 73.0868 85.6337 74.5937 87.2135C76.1007 88.7934 77.9305 89.5833 80.0833 89.5833ZM43.9167 89.5833C46.0694 89.5833 47.8993 88.7934 49.4062 87.2135C50.9132 85.6337 51.6667 83.7153 51.6667 81.4583C51.6667 79.2014 50.9132 77.283 49.4062 75.7031C47.8993 74.1233 46.0694 73.3333 43.9167 73.3333C41.7639 73.3333 39.934 74.1233 38.4271 75.7031C36.9201 77.283 36.1667 79.2014 36.1667 81.4583C36.1667 83.7153 36.9201 85.6337 38.4271 87.2135C39.934 88.7934 41.7639 89.5833 43.9167 89.5833ZM62 124.792C67.8555 124.792 73.1729 123.054 77.9521 119.578C82.7312 116.102 86.1972 111.521 88.35 105.833H35.65C37.8028 111.521 41.2687 116.102 46.0479 119.578C50.8271 123.054 56.1444 124.792 62 124.792ZM62 149.167C54.8528 149.167 48.1361 147.745 41.85 144.901C35.5639 142.057 30.0958 138.198 25.4458 133.323C20.7958 128.448 17.1146 122.715 14.4021 116.125C11.6896 109.535 10.3333 102.493 10.3333 95C10.3333 87.5069 11.6896 80.4653 14.4021 73.875C17.1146 67.2847 20.7958 61.5521 25.4458 56.6771C30.0958 51.8021 35.5639 47.9427 41.85 45.099C48.1361 42.2552 54.8528 40.8333 62 40.8333C69.1472 40.8333 75.8639 42.2552 82.15 45.099C88.4361 47.9427 93.9042 51.8021 98.5542 56.6771C103.204 61.5521 106.885 67.2847 109.598 73.875C112.31 80.4653 113.667 87.5069 113.667 95C113.667 102.493 112.31 109.535 109.598 116.125C106.885 122.715 103.204 128.448 98.5542 133.323C93.9042 138.198 88.4361 142.057 82.15 144.901C75.8639 147.745 69.1472 149.167 62 149.167ZM62 138.333C73.5389 138.333 83.3125 134.135 91.3208 125.74C99.3292 117.344 103.333 107.097 103.333 95C103.333 82.9028 99.3292 72.6562 91.3208 64.2604C83.3125 55.8646 73.5389 51.6667 62 51.6667C50.4611 51.6667 40.6875 55.8646 32.6792 64.2604C24.6708 72.6562 20.6667 82.9028 20.6667 95C20.6667 107.097 24.6708 117.344 32.6792 125.74C40.6875 134.135 50.4611 138.333 62 138.333Z"
              fill="#DA6666"
            />
          </svg>
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
