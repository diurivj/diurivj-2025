import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '~/components/ui/collapsible'

export function Faq() {
  return (
    <section className='bg-muted w-full py-12 md:py-24 lg:py-32' id='faq'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='bg-muted inline-block rounded-lg px-3 py-1 text-sm'>
              FAQ
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Preguntas frecuentes
            </h2>
            <p className='text-muted-foreground max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Obtén respuestas a las preguntas hechas más frecuentemente
            </p>
          </div>
        </div>
        <div className='my-8 space-y-4'>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>
                ¿Cuáles son los requisitos?
              </h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  Tener una computadora, conexión a internet y actitud de ser
                  retado y aprender.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>¿Se puede pagar a MSI?</h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  Si; para pagar con tarjeta de crédito y/o a MSI puedes
                  encontrar más informacion en la sección de pagos.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>
                ¿Qué formato tienen las clases?
              </h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  Las clases son en línea en tiempo real, las sesiónes quedan
                  grabadas y publicadas para tener acceso de por vida.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>
                ¿Cuál es la dinámica del curso?
              </h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  La dinámica del curso consiste en estar en comunicación casi
                  diaria a través del grupo de alumnos. Las clases en línea son
                  los días sábados y domingos. Cada semana hay ejercicios y
                  tareas que se deben de realizar para la clase siguiente.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>
                ¿Qué pasa si falto a clases?
              </h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  Faltar a clases puede privarte de preguntar en tiempo real,
                  sin embargo tendrás acceso a la clase grabada después de ser
                  procesada por Youtube.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>
                ¿Cuál es el proceso de reembolso?
              </h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  Los reembolsos serán posibles solamente antes de comenzar el
                  curso.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className='bg-background rounded-lg border shadow-sm'>
            <CollapsibleTrigger className='flex w-full items-center justify-between gap-4 px-6 py-4'>
              <h3 className='text-lg font-semibold'>Tengo otra duda</h3>
              <ChevronDownIcon className='h-4 w-4' />
            </CollapsibleTrigger>
            <CollapsibleContent className='px-6 pb-4'>
              <div className='text-muted-foreground space-y-2'>
                <p>
                  Si tienes otra duda puedes mandar correo a diego@diurivj.com
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  )
}
