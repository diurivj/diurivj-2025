export function Schedule() {
  return (
    <section className='bg-muted w-full py-12 md:py-24 lg:py-32' id='horario'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='bg-muted inline-block rounded-lg px-3 py-1 text-sm'>
              Horario
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Duración del curso
            </h2>
            <p className='pretty text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Las clases son online vía zoom. Todos los fines de semana de
              7:00am a 10:00am (Ciudad de México). Sin embargo la comunicación
              será casi diaria mediante el grupo de alumnos.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col justify-center space-y-4'>
            <ul className='grid gap-6'>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>
                    Módulo 1 y 2: Intro a web & HTML, CSS, Javascript
                  </h3>
                  <p className='text-muted-foreground text-pretty'>
                    Duración: 3 meses apróx.
                  </p>
                </div>
              </li>
              <li>
                <div className='grid gap-1'>
                  <h3 className='text-xl font-bold'>
                    Módulo 3: React & React router
                  </h3>
                  <p className='text-muted-foreground text-pretty'>
                    Duración: 2 meses apróx.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-end gap-1'>
            <h3 className='text-xl font-bold tracking-tighter sm:text-3xl'>
              Fecha de inicio
            </h3>
            <p className='text-xl font-bold tracking-tighter underline sm:text-3xl'>
              7 de Febrero del 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
