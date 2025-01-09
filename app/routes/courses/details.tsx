export function Details() {
  return (
    <section className='bg-muted w-full py-12 md:py-24 lg:py-32' id='curso'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='bg-muted inline-block rounded-lg px-3 py-1 text-sm'>
              Detalles del curso
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Que aprenderás
            </h2>
            <p className='text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              El curso de programación abarca una amplia gama de temas, desde
              los fundamentos de programación hasta técnicas avanzadas y
              desarrollo de proyectos reales.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col justify-center space-y-4'>
            <ul className='grid gap-6'>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>
                    Fundamentos de programación
                  </h3>
                  <p className='text-muted-foreground text-pretty'>
                    Domina los conceptos básicos de programación, incluidas
                    variables, tipos de datos, estructuras de datos y comandos
                    básicos de programación.
                  </p>
                </div>
              </li>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>HTML / CSS / Javascript</h3>
                  <p className='text-muted-foreground text-pretty'>
                    Aprende como es que HTML, CSS y Javascript interactuan entre
                    si, para poder crear increíbles experiencias de usuario en
                    la web.
                  </p>
                </div>
              </li>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>
                    Aspectos esenciales de la web
                  </h3>
                  <p className='text-muted-foreground text-pretty'>
                    Aprende a construir sitios web dinámicos y responsivos
                    usando las tecnologías de vanguardia usadas en el mundo
                    real.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <img
            src='/img/coding.jpg'
            width='550'
            height='310'
            alt='Captura de pantalla de código de programación'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
          />
        </div>
      </div>
    </section>
  )
}
