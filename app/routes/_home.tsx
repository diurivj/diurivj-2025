import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Inicio | diurivj' },
    {
      name: 'description',
      content: `Diego Vazquez. I'm a software developer living in Mexico City.`
    }
  ]
}

export default function Home() {
  return (
    <main className='container mx-auto flex min-h-[calc(100dvh-84px-96px)] flex-col items-center justify-center px-4 lg:px-0'>
      <section className='mt-10 flex flex-col items-center justify-center text-center lg:mt-0'>
        <p className='lg:text-md text-sm'>Hola, mi nombre es</p>
        <h1 className='font-borel mb-3 mt-7 scroll-m-20 text-3xl font-extrabold lg:text-5xl'>
          Diego Uriel Vázquez Jaramillo
        </h1>
        <p>Actualmente trabajo como Senior Software Engineer en Capital One</p>
      </section>

      <section className='my-20 max-w-lg text-center lg:my-40'>
        <h2 className='font-borel text-2xl font-extrabold lg:text-3xl'>
          Acerca de mí
        </h2>
        <div className='mt-4 space-y-4'>
          <p>
            Soy software developer viviendo en México. Actualmente trabajo en{' '}
            <a
              target='_blank'
              href='https://capitalone.com'
              className='font-medium underline underline-offset-2'
            >
              Capital One
            </a>
            , soy organizador del Meetup oficial de{' '}
            <a
              target='_blank'
              href='https://www.meetup.com/remix-mexico'
              className='font-medium underline underline-offset-2'
            >
              Remix México
            </a>{' '}
            y últimamente también hago contribuciones a proyectos open source.
          </p>
          <p>
            Mi carrera me ha llevado por proyectos emocionantes, desde ser
            maestro en{' '}
            <a
              target='_blank'
              href='https://www.ironhack.com'
              className='font-medium underline underline-offset-2'
            >
              Ironhack
            </a>{' '}
            hasta la creación de software para empresas como SuperRare y Conduit
            Health.
          </p>
          <p>
            Fuera del trabajo, soy papá de dos niños que hacen que cada día sea
            una nueva aventura. También disfruto dedicar mi tiempo en proyectos
            personales y compartir mi pasión por la tecnología con otros.
          </p>
          <p>
            Si no me encuentras en la web, me puedes encontar en el gym, en el
            boliche, jugando videojuegos o descubriendo nuevos restaurantes y
            cafeterías junto a mi familia.
          </p>
        </div>
      </section>
    </main>
  )
}
