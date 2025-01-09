export function Contents() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32' id='contenido'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='bg-muted inline-block rounded-lg px-3 py-1 text-sm'>
              Módulos
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Contenido del curso
            </h2>
            <p className='text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Nuestro curso se divide en 3 módulos
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
          <div className='grid gap-1'>
            <h3 className='text-xl font-bold'>Intro a la web</h3>
            <p className='text-muted-foreground text-pretty'>
              En este módulo aprenderemos cómo es que funciona la web, así cómo
              los estándares y términos técnicos sobre la misma.
            </p>
            <p className='text-muted-foreground text-pretty'>
              Aprenderemos cuál es el ciclo de vida común de una aplicación web.
            </p>
          </div>
          <div className='grid gap-1'>
            <h3 className='text-xl font-bold'>HTML, CSS, Javascript</h3>
            <p className='text-muted-foreground text-pretty'>
              En este módulo aprenderemos la sintáxis básica de HTML, CSS y
              Javascript.
            </p>
            <p className='text-muted-foreground text-pretty'>
              Aprenderemos los fundamentos de cada lenguaje y como utilizarlos
              para crear una página web.
            </p>
          </div>
          <div className='grid gap-1'>
            <h3 className='text-xl font-bold'>React & React router</h3>
            <p className='text-muted-foreground text-pretty'>
              React hoy en día es la librería por excelencia para crear UI
              dinámicas
            </p>
            <p className='text-muted-foreground text-pretty'>
              Aprenderemos todas las herramientas necesarias para crear junto
              con React experiencias de usuario accesibles, dinámicas y
              elegantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
