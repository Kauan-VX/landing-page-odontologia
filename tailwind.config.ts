import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'service-bg': "url('/landing-page/service/bg.png')",
      },
      height: {
        heightLessNav: 'h-[calc(100vh-96px)]',
      },
      screens: {
        smphoneMax: { max: '320px' },
        bigphoneMax: { max: '500px' },
        smMax: { max: '640px' },
        mdMax: { max: '768px' },
        lgMax: { max: '1024px' },
      },
      maxWidth: {
        '8xl': '1440px',
      },
      colors: {
        'main-color': '#2977D5',
        'primary-bg': '#fff',
        'light-blue': '#44C6E9',
        'navy-blue': '#00296D',
        'secondary-bg': '#e9e9e9',
        dark: {
          background: '#000',
          text: '#ffffff',
          'bg-banner': '#112132',
          'shadow-feedback': '#44c6e92b',
        },
        light: {
          background: '#fff',
          text: '#252525',
          'bg-banner': '#D4E4F4',
          'shadow-feedback': '#44c6e92b',
        },
      },
    },
  },
  plugins: [nextui()],
}
export default config
