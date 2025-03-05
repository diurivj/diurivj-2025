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

type OgMeta = 'og:title' | 'og:description' | 'og:image' | 'og:site_name'
type XMeta =
  | 'twitter:card'
  | 'twitter:title'
  | 'twitter:description'
  | 'twitter:image'

type GetOgMeta = Record<OgMeta | XMeta, string>
export function getMeta(meta: GetOgMeta) {
  return Object.entries(meta).map(([key, value]) => ({
    name: key,
    content: value
  }))
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Intro a programación web | diurivj' },
    {
      name: 'description',
      content: 'Aprende los fundamentos de programación orientado a la web.'
    },
    ...getMeta({
      'og:description':
        'Aprende los fundamentos de programación orientado a la web.',
      'og:image': 'https://diurivj.com/img/wd2.jpg',
      'og:site_name': 'Intro a programación web',
      'og:title': 'Intro a la Web',
      'twitter:card': 'summary_large_image',
      'twitter:image': 'https://diurivj.com/img/wd2.jpg',
      'twitter:title': 'Intro a programación web',
      'twitter:description':
        'Aprende los fundamentos de programación orientado a la web.'
    })
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
