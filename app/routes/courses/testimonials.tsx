export function Testimonials() {
  return (
    <section
      className='bg-muted w-full py-12 md:py-24 lg:py-32'
      id='testimonios'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='bg-muted inline-block rounded-lg px-3 py-1 text-sm'>
              Testimonios
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Que dicen nuestros estudiantes
            </h2>
            <p className='text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Escucha de nuestros alumnos hablar de sus experiencias con nuestro
              método de enseñanza.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='grid gap-4'>
              <div className='bg-background rounded-lg border p-4 shadow-sm'>
                <p className='text-muted-foreground'>
                  Diego es un gran maestro y persona con bastante conocimiento
                  en lo que enseña, muy profesional en su trabajo, siempre
                  preocupandose por la gente que trabaja con él y siempre
                  ayudándolos.
                </p>
                <div className='mt-4 flex items-center gap-2'>
                  <img
                    src='/img/charly.jpeg'
                    width='40'
                    height='40'
                    alt='Student'
                    className='rounded-full'
                  />
                  <div>
                    <h4 className='text-sm font-semibold'>Carlos González</h4>
                    <p className='text-muted-foreground text-xs'>
                      Digital Engineering Lead Enginer
                    </p>
                  </div>
                </div>
              </div>
              <div className='bg-background rounded-lg border p-4 shadow-sm'>
                <p className='text-muted-foreground'>
                  Diego es un maestro poco convencional, lo que lo convierte en
                  una excelente elección para una escuela poco convencional.
                  Tiene un estilo de enseñanza fresco y divertido, es un
                  excelente maestro y siempre está dispuesto a ir varios pasos
                  más allá de lo que contempla el programa.
                </p>
                <div className='mt-4 flex items-center gap-2'>
                  <img
                    src='/img/ricardo.jpeg'
                    width='40'
                    height='40'
                    alt='Student'
                    className='rounded-full'
                  />
                  <div>
                    <h4 className='text-sm font-semibold'>Ricardo Martínez</h4>
                    <p className='text-muted-foreground text-xs'>
                      Front End Developer & Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src='/img/group.jpg'
            width='550'
            height='310'
            alt='Testimonials'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
          />
        </div>
      </div>
    </section>
  )
}
