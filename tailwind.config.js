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
        primary:'#FE6192',
        error:'#F05252',
        success:'#0E9F6E',
        warning:'#FF5A1F',
        info:'#3F83F8',
        background:'var(--background)',
        surface:'var(--surface)',
        onSurface:"var(--onSurface)",
        mainText:'var(--mainText)',
        subText:'var(--subText)',
        contentMainText:'var(--contentMainText)',
        contentSubText:'var(--contentSubText)'
      }
    },
  },
  plugins: [
    // Text & Backgrond color changed based on theme mode
    plugin(({ addBase }) =>  {
      addBase({
      html: {
        '--background':'#3E3483',
        '--surface':'#ffffff',
        '--onSurface':'rgb(243 244 246)',
        '--mainText':'#ffffff',
        '--subText':'rgb(209 213 219)',
        '--contentMainText':'rgb(31 41 55)',
        '--contentSubText':'rgb(75 85 99)',
      },
      '.dark' : {
        '--background':'#3E3483',
        '--surface':'rgb(31 41 55)',
        '--onSurface':'rgb(55 65 81)',
        '--mainText':'#ffffff',
        '--subText':'rgb(209 213 219)',
        '--contentMainText':'#ffffff',
        '--contentSubText':'rgb(209 213 219)',
      }
    }),

      // Flowbite plugin register
      require('flowbite/plugin')
    }),
  ]
}
