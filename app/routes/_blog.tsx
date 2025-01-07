import type { Route } from './+types/_blog'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Blog | Diurivj' },
    {
      name: 'description',
      content: `Coming soon.`
    }
  ]
}

export default function Blog() {
  return (
    <main className='container mx-auto flex h-[calc(100dvh-84px-96px)] flex-col items-center justify-center px-4 lg:px-0'>
      <h1 className='font-borel mt-7 mb-3 scroll-m-20 text-4xl font-extrabold lg:text-5xl'>
        Próximamente.
      </h1>
    </main>
  )
}
