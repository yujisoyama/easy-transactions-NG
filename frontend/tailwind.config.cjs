/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    colors: {
      background: '#0f0e17',
      backgroundLight: '#262339',
      highlight: '#ff8906',
      disabled: '#FFDF9A',
      paragraph: '#a7a9be',
      buttonText: '#fffffe',
      buttonHover: '',
      main: '#fffffe',
      secondary: '#f25f4c',
      attention: '#e53170'
    },
    screens: {
      'mobile': { 'max': '700px' },
      'modalResponsive': { 'max': '1100px' }
    },
    fontFamily: {
      noto: ['Noto Sans', 'sans-serif'],
      open: ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        background: "url('/assets/background.svg')",
        backgroundMobile: "url('/assets/background-mobile.svg')"
      },
    },
  },
  plugins: [

  ],
}

