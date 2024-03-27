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
        primary_2:'#17848a',
        primary_3:'#0a6c75',
        dark_primary:'#0c4f54',
        secondary:'#b5e056',
        sub_secondary:'#1d2519',
        error:'#F05252',
        success:'#0E9F6E',
        warning:'#FF5A1F',
        info:'#3F83F8',
        background:'var(--background)',
        surface:'var(--surface)',
        mainText:'var(--mainText)',
        subText:'var(--subText)',
        mainText_2:'var(--mainText_2)',
        subText_2:'var(--subText_2)'
      }
    },
  },
  plugins: [
    // Text & Backgrond color changed based on theme mode
    plugin(({ addBase }) =>  {
      addBase({
      html: {
        '--background':'#fafafb',
        '--surface':'#161817',
        '--mainText':'#219ca7',
        '--subText':'#161817',
        '--mainText_2':'#ffffff',
        '--subText_2':'#b5e056',
      },
      '.dark' : {
        '--background':'#fafafb',
        '--surface':'#161817',
        '--mainText':'#219ca7',
        '--subText':'#161817',
        '--mainText_2':'#ffffff',
        '--subText_2':'#b5e056',
      }
    }),

      // Flowbite plugin register
      require('flowbite/plugin')
    }),
  ]
}
