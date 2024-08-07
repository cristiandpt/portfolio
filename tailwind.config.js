/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary-light": "#f2f2f2",
        "primary-dark": "#333", 
      }
    }
  },
  plugins: []
}

