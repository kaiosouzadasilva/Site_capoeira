import { useEffect, useState } from 'react';

export function useDarkMode() {
  // Pega o tema salvo ou usa o do sistema
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement; // Pega a tag <html>
    root.classList.remove(colorTheme); // Remove o tema antigo
    root.classList.add(theme);         // Adiciona o novo ('dark' ou 'light')
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}