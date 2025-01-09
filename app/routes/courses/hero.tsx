import { Link } from 'react-router'

export function Hero() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Aprender a programar:
                <br />
                De principiante a experto
              </h1>
              <p className='text-muted-foreground max-w-[600px] md:text-xl'>
                Desbloquea tu potencial con este curso intensivo. Sumérgete en
                la programación web, comenzando por aprender los conceptos
                fundamentales, masteriza el crear páginas web y finaliza creando
                una aplicación web real.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link
                to='#costos'
                className='bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50'
              >
                Inscribirse ahora
              </Link>
            </div>
          </div>
          <img
            src='/img/hero.jpg'
            width='550'
            height='550'
            alt='Grupo de personas trabajando juntos'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
          />
        </div>
      </div>
    </section>
  )
}
