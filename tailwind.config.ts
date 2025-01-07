import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'serif'],
        borel: ['Borel', 'serif']
      }
    }
  },
  plugins: []
} satisfies Config
