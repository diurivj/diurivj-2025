import { Link } from 'react-router'
import type { Route } from './+types/_index'

export const headers: Route.HeadersFunction = () => {
  return {
    'Cache-Control': 'public, max-age=86400, must-revalidate',
    'Last-Modified': 'Mon, 06 Jan 2025 12:00:00 GMT',
    Expires: new Date(Date.now() + 3600 * 1000 * 24).toUTCString(),
    ETag: '"diurivj-index-01"'
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Diurivj' },
    {
      name: 'description',
      content: `Diego Vazquez. I'm a developer living in Mexico City.`
    }
  ]
}

export default function Home() {
  return (
    <main className='container mx-auto flex h-dvh flex-col items-center justify-center gap-y-2 px-4 lg:px-0'>
      <h1 className='font-borel animate-bounce scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl'>
        Diurivj.
      </h1>
      <Link
        to='/home'
        viewTransition
        style={{ viewTransitionName: 'logo' }}
        className='px-4 py-2 text-gray-700 outline-black hover:underline hover:underline-offset-2'
      >
        Entrar
      </Link>
    </main>
  )
}
