import { Link } from 'react-router'
import { buttonVariants } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '~/components/ui/card'
import { cn } from '~/lib/utils'

export function Pricing() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32' id='costos'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
              Precios
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Precios para todos
            </h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Nuestro curso de programación ofrece precios flexibles que se
              adaptan a nuestro mercado.
            </p>
          </div>
        </div>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <Card>
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <CardDescription>Precio al público en general.</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4'>
              <div className='flex items-center gap-2'>
                <span className='text-4xl font-bold text-primary'>$7,000</span>
                <span className='text-sm text-muted-foreground'>mxn</span>
              </div>
              <ul className='grid gap-2 text-sm text-muted-foreground'>
                <li className='flex items-center gap-2'>
                  <CheckIcon className='size-5' />
                  Acceso a todo el contenido
                </li>
                <li className='flex items-center gap-2'>
                  <CheckIcon className='size-5' />
                  Acceso de por vida
                </li>
                <li className='flex items-center gap-2'>
                  <CheckIcon className='size-5' />
                  Acceso a grupo de alumnos
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                to='/payment-info'
                className={cn(
                  'w-full',
                  buttonVariants({ variant: 'default', size: 'lg' })
                )}
              >
                Inscribirse
              </Link>
            </CardFooter>
          </Card>
          <Card className='relative overflow-hidden'>
            <div className='absolute right-0 top-0 bg-primary px-4 py-2 text-primary-foreground'>
              <span className='text-sm font-medium'>Ahorra 40%</span>
            </div>
            <CardHeader>
              <CardTitle>Básico para mujeres tech</CardTitle>
              <CardDescription>
                Precio especial para mujeres tech.
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4'>
              <div className='flex items-center gap-2'>
                <span className='text-4xl font-bold text-muted-foreground line-through'>
                  $7K
                </span>
                <span className='text-4xl font-bold text-primary'>$4,200</span>
                <span className='text-sm text-muted-foreground'>mxn</span>
              </div>
              <ul className='grid gap-2 text-sm text-muted-foreground'>
                <li className='flex items-center gap-2'>
                  <CheckIcon className='size-5' />
                  Acceso a todo el contenido
                </li>
                <li className='flex items-center gap-2'>
                  <CheckIcon className='size-5' />
                  Acceso de por vida
                </li>
                <li className='flex items-center gap-2'>
                  <CheckIcon className='size-5' />
                  Acceso a grupo de alumnos
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link
                to='/payment-info'
                className={cn(
                  'w-full',
                  buttonVariants({ variant: 'default', size: 'lg' })
                )}
              >
                Inscribirse
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M20 6 9 17l-5-5' />
    </svg>
  )
}

function XMarkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M6 18 18 6M6 6l12 12' />
    </svg>
  )
}
