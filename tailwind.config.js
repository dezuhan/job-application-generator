
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#121212',
          'bg-secondary': '#1f1f1f',
          text: '#f5f5f5',
          'text-secondary': '#a3a3a3',
          border: '#333333',
          accent: '#525252',
          'accent-hover': '#404040'
        },
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f5f5f5',
          text: '#171717',
          'text-secondary': '#525252',
          border: '#d4d4d4',
          accent: '#262626',
          'accent-hover': '#171717'
        }
      }
    }
  },
  plugins: [],
}
