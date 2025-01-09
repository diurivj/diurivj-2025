import { Link } from 'react-router'

export function Navbar() {
  return (
    <header className='flex h-14 items-center px-4 lg:px-6'>
      <Link
        to='/'
        className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'
      >
        diurivj
      </Link>
      <nav className='ml-auto hidden gap-4 lg:flex lg:gap-6'>
        <Link
          to='#curso'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          Curso
        </Link>
        <Link
          to='#instructor'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          Instructor
        </Link>
        <Link
          to='#testimonios'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          Testimonios
        </Link>
        <Link
          to='#contenido'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          Contenido
        </Link>
        <Link
          to='#horario'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          Horario
        </Link>
        <Link
          to='#costos'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          Costos
        </Link>
        <Link
          to='#faq'
          className='text-sm font-medium underline-offset-4 hover:underline'
        >
          FAQ
        </Link>
      </nav>
    </header>
  )
}
