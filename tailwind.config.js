/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#123597',
        secondary: '#454868'
      },

      fontFamily: {
      body: ['Poppins', 'sans-serif']
      },

      boxShadow: {
        'xl': '0 6px 5px 2px rgb(245 245 245 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
}

