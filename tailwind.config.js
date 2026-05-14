/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // <-- O SEGREDO ESTÁ AQUI (tem que ter as aspas simples e a vírgula)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}