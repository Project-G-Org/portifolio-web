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

      <main className="flex flex-col items-center gap-16 w-full py-16"></main>

      <footer className="w-full py-8 bg-graydark text-white text-center">
        <p>© 2024 Vigel </p>
      </footer>
    </div>
  )
}
