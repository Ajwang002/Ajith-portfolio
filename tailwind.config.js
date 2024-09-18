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
        primary:'#67fa05',
        secondary:'#D3D3D3',
        error:'#F05252',
        success:'#0E9F6E',
        warning:'#FF5A1F',
        info:'#3F83F8',
        important:'#0bf70b',
        invite:'#00FF85',
        background:'var(--background)',
        surface:'var(--surface)',
        text:'var(--text)',
        secText:'var(--sec-text)',
        btnText:'var(--btn-text)'
      },
      animation:{
        'back_anime': 'back_anime 10s linear infinite',
      }
    },
  },
  plugins: [
    // Text & Backgrond color changed based on theme mode
    plugin(({ addBase }) =>  {
      addBase({
      html: {
        '--background':'#F7F7FF',
        '--surface':'#232b2b',
        '--text':'#f4f6f5',
        '--sec-text':'#D3D3D3',
        '--btn-text':'#B0C4DE'
      },
      '.dark' : {
        '--background':'#1A2130',
        '--surface':'#161817',
        '--text':'#FFFFFF',
        '--sec-text':'#D3D3D3',
        '--btn-text':'#B0C4DE'
      }
    }),

      // Flowbite plugin register
      require('flowbite/plugin')
    }),
  ],
}
