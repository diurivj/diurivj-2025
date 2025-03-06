import { buttonVariants } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '~/components/ui/card'
import { CreditCard } from 'lucide-react'

export function meta() {
  return [{ title: 'Información de pago | diurivj' }]
}

export default function PaymentInfo() {
  const payments = [
    {
      title: (
        <h3 className='font-semibold leading-none tracking-tight'>
          Pago en una solo exhibición{' '}
          <span className='font-normal text-muted-foreground'>
            (3.6% + $3.00 MXN de comisión)
          </span>
        </h3>
      ),
      items: [
        {
          link: 'https://buy.stripe.com/00g8wxdp5ajubTifZ9',
          price: 'Público en general ($7,290 MXN)'
        },
        {
          link: 'https://buy.stripe.com/6oEdQRdp53V60aA14g',
          price: 'Mujeres tech ($4,360 MXN)'
        }
      ]
    },
    {
      title: (
        <h3 className='font-semibold leading-none tracking-tight'>
          Pago 3 MSI{' '}
          <span className='font-normal text-muted-foreground'>
            (8.6% + $3.00 MXN de comisión)
          </span>
        </h3>
      ),
      items: [
        {
          link: 'https://buy.stripe.com/28o4gh1GndvG5uU14h',
          price: 'Público en general ($7, 690 MXN)'
        }
      ]
    },
    {
      title: (
        <h3 className='font-semibold leading-none tracking-tight'>
          Pago 6 MSI{' '}
          <span className='font-normal text-muted-foreground'>
            (11.6% + $3.00 MXN de comisión)
          </span>
        </h3>
      ),
      items: [
        {
          link: 'https://buy.stripe.com/dR6eUVgBhdvG2iIaET',
          price: 'Público en general ($7,890 MXN)'
        }
      ]
    },
    {
      title: (
        <h3 className='font-semibold leading-none tracking-tight'>
          Pago 9 MSI{' '}
          <span className='font-normal text-muted-foreground'>
            (13.6% + $3.00 MXN de comisión)
          </span>
        </h3>
      ),
      items: [
        {
          link: 'https://buy.stripe.com/6oE5kl4Sz63e1eE9AO',
          price: 'Público en general ($8,149 MXN)'
        }
      ]
    }
  ]

  return (
    <main className='container mx-auto px-4 py-8 lg:px-0'>
      <h1 className='mb-6 text-3xl font-bold'>Detalles de Pago</h1>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Información de la Cuenta</CardTitle>
          <CardDescription>Banco BBVA</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <dt className='font-medium text-gray-500'>CLABE</dt>
              <dd className='mt-1 text-gray-900'>012 180 00467369204 7</dd>
            </div>
            <div>
              <dt className='font-medium text-gray-500'>Número de Cuenta</dt>
              <dd className='mt-1 text-gray-900'>046 736 9204</dd>
            </div>
            <div>
              <dt className='font-medium text-gray-500'>
                Titular de la Cuenta
              </dt>
              <dd className='mt-1 text-gray-900'>
                Diego Uriel Vázquez Jaramillo
              </dd>
            </div>
            <div>
              <dt className='font-medium text-gray-500'>Montos</dt>
              <dd className='mt-1 text-gray-900'>
                <strong>$7,000 MXN</strong> (Público en general)
              </dd>
              <dd>
                <strong>$4,200.00 MXN</strong> (Mujeres tech)
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card className='my-8'>
        <CardHeader>
          <CardTitle>Pago con tarjetas de crédito y/o MSI</CardTitle>
          <CardDescription>
            Si quieres hacer un pago con tarjeta de crédito y/o pagar con meses
            sin intereses puedes usar los siguientes links:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className='space-y-10'>
            {payments.map((payment, idx) => (
              <div key={`${payment}-${idx}`} className='flex flex-col gap-y-2'>
                {payment.title}
                <div className='flex gap-2 flex-wrap'>
                  {payment.items.map(item => (
                    <a
                      key={item.link}
                      href={item.link}
                      target='_blank'
                      rel='noreferrer noopener'
                      className={buttonVariants({
                        size: 'lg',
                        variant: 'outline',
                        className: 'flex items-center gap-x-2'
                      })}
                    >
                      <CreditCard /> {item.price}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Aviso sobre Pagos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700'>
            Una vez hecho el pago, favor de mandar comprobante de pago y nombre
            del estudiante a diurivj@gmail.com.
          </p>
          <p className='mb-4 text-gray-700'>
            Por favor, ten en cuenta que los reembolsos se procesan de acuerdo
            con la política del curso seleccionado. Si deseas realizar un pago
            en línea o tienes alguna pregunta sobre los reembolsos, ponerse en
            contacto mediante mensaje directo o al correo diurivj@gmail.com.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
