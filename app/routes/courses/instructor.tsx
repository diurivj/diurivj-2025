export function Instructor() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32' id='instructor'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='bg-muted inline-block rounded-lg px-3 py-1 text-sm'>
              Conoce al instructor
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Enseñanza dirigida por la experiencia
            </h2>
            <p className='text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              El curso es impartido por un instructor con más de 8 años de
              experiencia en el desarrollo de software. Aprende de las mejores
              prácticas y estándares de la industria.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='grid gap-4'>
              <div className='grid grid-cols-[80px_1fr] items-center gap-4'>
                <img
                  src='/img/teacher.jpg'
                  width='80'
                  height='80'
                  alt='Instructor'
                  className='rounded-full'
                />
                <div>
                  <h3 className='text-xl font-bold'>Diego Vázquez</h3>
                  <p className='text-muted-foreground'>
                    Lead Instructor, 8+ años de experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src='/img/teaching.jpg'
            width='550'
            height='310'
            alt='Instructors'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
          />
        </div>
      </div>
    </section>
  )
}
