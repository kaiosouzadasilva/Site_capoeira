/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ESSA LINHA É A CHAVE
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