import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import { reactRouterHonoServer } from 'react-router-hono-server/dev'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  plugins: [
    cloudflareDevProxy(),
    reactRouterHonoServer({
      runtime: 'cloudflare'
    }),
    reactRouter(),
    tsconfigPaths()
  ]
})
