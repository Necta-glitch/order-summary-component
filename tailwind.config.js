/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'shadow-bottom': '0 11px 11px rgba(0, 13, 246, 0.3)',
        '3xl': '',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        'dark-blue': 'hsl(223, 47%, 23%)',
        'Desaturated-blue': 'hsl(224, 23%, 55%)',
        'Very-pale-blue': 'hsl(225, 100%, 98%)',
        'Bright-blue': 'hsl(245, 75%, 52%)',
        'bottom-hover': 'rgba(165, 167, 246, 1)',

      },
      backgroundImage: {
        'hero-desktop': "url('./src/images/pattern-background-desktop.svg')",
        'hero-mobile': "url('./src/images/pattern-background-mobile.svg')",
      }
    },
  },
  plugins: [],
}

