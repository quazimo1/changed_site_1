/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightGray:'hsl(0, 0%, 98%)',
        bgc: '#40514E',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
}
