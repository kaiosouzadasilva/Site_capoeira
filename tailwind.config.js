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
module.exports = {
  darkMode: 'class', // Isso avisa ao Tailwind para usar a classe CSS e não o sistema do Windows
  // ... restante da config
}