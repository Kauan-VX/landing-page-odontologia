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
        'service-light': "url('/landing-page/service/bg-light.svg')",
        'service-dark': "url('/landing-page/service/bg-dark.svg')",
        'clinic-bg': "url('/landing-page/clinic/details-clinic.svg')",
        'diagonal-gradient': 'linear-gradient(60deg, #25252512, #00c9ff2e);',
        'bg-contact':
          'linear-gradient(6deg, #2977d5, #5893de, #81aee6, #a9c9ed, #d4e4f4);',
        'bg-dark-contact':
          'linear-gradient(19deg, #001de25e, #020911, #11355c, #074b90, #183f66);',
        'bg-question':
          'linear-gradient(187deg, #ffffff, #ffffff, #ffffff, #d4e4f4, #bbd8f5);',
        'bg-dark-question':
          'linear-gradient(187deg, #112132, #112132, #112132, #183f66, #074b90);',
      },
      height: {
        heightLessNav: 'h-[calc(100vh-80px)]',
      },
      screens: {
        smphoneMax: { max: '320px' },
        bigphoneMax: { max: '500px' },
        smMax: { max: '640px' },
        mdMax: { max: '768px' },
        lgMax: { max: '1060px' },
        ultrawideMax: { max: '1650px' },
        lgMin: { min: '1060px' },
      },
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        'main-color': '#2977D5',
        'primary-bg': '#fff',
        'light-blue': '#44C6E9',
        'navy-blue': '#00296D',
        'secondary-bg': '#e9e9e9',
        'nextui-content1': '#f00',
        dark: {
          background: '#143362',
          text: '#ffffff',
          'bg-banner': '#112132',
          'shadow-feedback': '#ffffff14',
          'bg-card': '#334155',
        },
        light: {
          background: '#fff',
          text: '#252525',
          'bg-banner': '#D4E4F4',
          'shadow-feedback': '#44c6e92b',
          'bg-card': '#FFF9FD',
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#0b2745',
            content1: '#fff',
          },
        },

        dark: {
          colors: {
            content1: '#0b2745',
          },
        },
      },
    }),
  ],
}
export default config
