import type { Config } from '@react-router/dev/config'

export default {
  ssr: true,
  prerender: ['/', '/home', '/blog', '/courses', '/courses/wd2']
} satisfies Config
