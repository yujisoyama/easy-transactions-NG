/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    colors: {
      background: '#16161a',
      headline: '#fffffe',
      highlight: '#7f5af0',
      paragraph: '#94a1b2',
      buttonText: '#fffffe',
      buttonHover: '',
      main: '#fffffe',
      secondary: '#72757e',
      tertiary: '#2cb67d'
    },
    screens: {
      'mobile': { 'max': '700px' },
    },
    fontFamily: {
      noto: ['Noto Sans', 'sans-serif'],
      open: ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        loginBackground: "url('/assets/loginBackground.svg')",
      },
    },
  },
  plugins: [

  ],
}

