import { Link } from 'react-router'
import type { Route } from './+types/_courses'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Cursos | diurivj' },
    {
      name: 'description',
      content: `Coming soon.`
    }
  ]
}

export default function Courses() {
  return (
    <main className='container mx-auto min-h-[calc(100dvh-84px-96px)] px-4 lg:px-0'>
      <h1 className='font-borel mb-3 mt-7 scroll-m-20 text-3xl font-extrabold lg:text-5xl'>
        Cursos
      </h1>
      <ul className='px-4'>
        <li className='list-disc underline'>
          <Link to='wd2'>Introducción a programación web</Link>
        </li>
      </ul>
    </main>
  )
}
