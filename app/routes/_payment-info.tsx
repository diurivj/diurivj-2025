import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '~/components/ui/card'

export function meta() {
  return [{ title: 'Información de pago | diurivj' }]
}

export default function PaymentInfo() {
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
              <dt className='font-medium text-gray-500'>Monto</dt>
              <dd className='mt-1 text-gray-900'>$4,000.00 MXN</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card className='mb-8'>
        <CardHeader>
          <CardTitle>Aviso sobre Pagos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-700'>
            Una vez hecho el pago, favor de mandar comprobante de pago y nombre
            del estudiante a diurivj@gmail.com.
          </p>
          <p className='mb-4 text-gray-700'>
            Por favor, tenga en cuenta que los reembolsos se procesan de acuerdo
            con la política del curso seleccionado. Si desea realizar un pago en
            línea o tiene alguna pregunta sobre los reembolsos, póngase en
            contacto mediante mensaje directo o al correo diurivj@gmail.com.
          </p>
          <p className='mb-4 text-gray-700'>
            Por razones de seguridad, no procesamos pagos en línea directamente
            a través de este portal. Nuestro equipo le proporcionará opciones de
            pago seguras bajo petición.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
