'use client'

import './style.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-graylight font-sans">
      <main className="flex flex-col p-12">
        <header className="w-full py-6 bg-opacity-0 text-white text-center flex gap-20 flex-col">
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
        </header>

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
                a We have vast experience developing SaaS products from scratch
                and improving existing solutions. Our intuitive and tailored
                designs convert and keep your users engaged.
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
                a We have vast experience developing SaaS products from scratch
                and improving existing solutions. Our intuitive and tailored
                designs convert and keep your users engaged.
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

        <section className="flex flex-col gap-14 w-full py-16">
          <h2 className="text-3xl font-extrabold text-graydark">FAQS</h2>
        </section>
      </main>

      {/* LINK - https://www.octaveagency.com/ */}
      {/* LINK - https://www.jamm.co/#pricing */}
      <footer className="flex flex-col items-center gap-28 w-full py-12 bg-black text-white text-center justify-center">
        {/* TODO - Add cool animation here */}
        <article className="flex flex-col w-full gap-12">
          <h1 className="text-8xl font-bold text-redlight">
            Vamos construir algo juntos?
          </h1>
          <p className="text-graylight text-2xl">
            Hire a team of top level professionals for less money than hiring a
            single designer. Stupid simple design
            <br /> subscription service to level-up your business!
          </p>

          <div className="flex flex-row gap-8 align-middle justify-center">
            <button
              className="w-[16vw] h-[5.5vh] rounded-lg bg-redlight border-graylight hover:ease-in transition-all duration-100 ease-in-out hover:bg-graylight hover:border hover:border-graylight hover:text-redlight"
              onClick={() => {}}
            >
              Marque uma call
            </button>
            <button
              className="w-[16vw] h-[5.5vh] rounded-lg  border-redlight border hover:text-redlight transition-all duration-150"
              onClick={() => {}}
            >
              Nos mande um email
            </button>
          </div>

          <div></div>

          {/* REVIEW - Check if looks good */}
          {/* <div className="w-full justify-center text-center">
            <button className="text-graylight bg-blue w-[18vw] h-[8vh] rounded-xl">
              Veja nossos trabalhos aqui
            </button>
          </div> */}
        </article>

        <article className="flex flex-row gap-20 text-start">
          <div className="flex flex-col gap-4">
            <h2 className="text-graylight font-bold text-2xl">Vigel</h2>
            <span>Creative people</span>
            <span>From Brasil</span>
            <span>Tel: +XX (XX) XXXXX-XXXX</span>

            {/* Social medias */}
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
              <b>Email:</b> <a href="#">email@exemplo.com</a>
            </span>
            <span>
              Tel: <a href="#">Desenvolvimento de aplicações SAAS</a>
            </span>

            <span>Address </span>

            <h4>Horas de funcionamento:</h4>
            <span>Segunda - Sexta: 9:00 até 5pm</span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Serviços</h2>
            <a href="#">Nossos serviços</a>
            <a href="#">Sobre nós</a>
            <a href="#">Nossos trabalhos</a>
            <a href="#">Contato</a>
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
    </div>
  )
}
