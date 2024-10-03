'use client'

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-graylight font-sans">
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

          <a href="#" className="text-reddark font-bold no-underline text-2xl">
            contatato
          </a>
        </nav>

        <h1 className="text-graydark text-8xl font-bold">
          FAZENDO <span className="text-reddark">SUA</span> IDEIA{' '}
          <span className="text-redlight">
            <br></br>REALIDADE
          </span>
        </h1>
      </header>

      <section className="flex flex-col items-center gap-14 w-full py-16">
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
                Desenvolvimento de aplicativos móveis
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
      </section>

      <footer className="w-full py-8 bg-graydark text-white text-center">
        <p>© 2024 Vigel </p>
      </footer>
    </div>
  )
}
