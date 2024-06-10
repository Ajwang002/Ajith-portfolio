/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    screens:{
      xs: '300px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        primary:'#219ca7',
        secondary:'#b5e056',
        error:'#F05252',
        success:'#0E9F6E',
        warning:'#FF5A1F',
        info:'#3F83F8',
        background:'var(--background)',
        surface:'var(--surface)',
        text:'var(--text)',
      }
    },
  },
  plugins: [
    // Text & Backgrond color changed based on theme mode
    plugin(({ addBase }) =>  {
      addBase({
      html: {
        '--background':'#0e1111',
        '--surface':'#232b2b',
        '--text':'#f4f6f5',
      },
      '.dark' : {
        '--background':'#1A2130',
        '--surface':'#161817',
        '--text':'#219ca7',
      }
    }),

      // Flowbite plugin register
      require('flowbite/plugin')
    }),
  ]
}
