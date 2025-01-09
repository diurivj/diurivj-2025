import { Details } from './details'
import { Instructor } from './instructor'
import { Testimonials } from './testimonials'
import { Contents } from './contents'
import { Schedule } from './schedule'
import { Pricing } from './pricing'
import { Faq } from './faq'
import { Navbar } from './navbar'
import { Hero } from './hero'
import type { Route } from './+types/_wd2'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Curso de programación | diurivj' },
    { name: 'description', content: 'Aprende a programar fácilmente' }
  ]
}

export default function Index() {
  return (
    <div className='flex min-h-[100dvh] flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Hero />
        <Details />
        <Instructor />
        <Testimonials />
        <Contents />
        <Schedule />
        <Pricing />
        <Faq />
      </main>
    </div>
  )
}
