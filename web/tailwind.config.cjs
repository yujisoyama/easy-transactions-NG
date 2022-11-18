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
      backgroundLight: '#242629',
      headline: '#fffffe',
      highlightBlue: '#7f5af0',
      paragraph: '#94a1b2',
      buttonText: '#fffffe',
      buttonHover: '#5d2deb',
      buttonDisabled: '#a58bf4',
      main: '#fffffe',
      stroke: '#010101',
      secondary: '#72757e',
      highlightGreen: '#2cb67d',
      alertBackground: '#eb9393',
      alert: '#e16162'
    },
    screens: {
      'mobile': { 'max': '500px' },
      'dashboardResponsive': { 'max': '1200px' },
      'transferMobile': { 'max': '900px' }
    },
    fontFamily: {
      noto: ['Noto Sans', 'sans-serif'],
      open: ['Open Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        loginBackground: "url('/assets/loginBackground.svg')",
        loginBackgroundMobile: "url('/assets/loginBackground-mobile.svg')"
      },
    },
  },
  plugins: [

  ],
}

