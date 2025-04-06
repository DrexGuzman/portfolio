/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#2C3E50',
        'blue-2': '#3498DB',
        'grey-1': '#F1F1F1',
        'grey-2': '#737373',
      },
      fontSize: {
        'titulo': '3rem',
        'subtitulo': '1.854rem',
        'texto': '1.146rem', //18.34px
        'description': '0.75rem', //12px
      },
      fontFamily: {
        'main': 'Montserrat,sans-serif',
        'second': 'Open Sans, sans-serif',
        'third': 'Roboto, sans-serif',
      }
    },
  },
  plugins: [],
}

