import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // ADICIONADO: Importação do Link

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lógica para aplicar o modo escuro no HTML
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Nossa História', href: '/historia' },
    { name: 'Fundamentos', href: '/fundamentos' },
    { name: 'Liderança', href: '/lideranca' },
    { name: 'Oficinas', href: '/oficinas' },
    { name: 'Polos', href: '/polos' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="font-black text-2xl tracking-tighter text-gray-900 dark:text-white flex items-center gap-2">
          <span className="text-yellow-500">Escola de Capoeira Luta de Libertação</span>
        </Link>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm text-gray-700 dark:text-gray-200">
          
          {/* AQUI ESTÁ A MUDANÇA (Desktop) */}
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-yellow-500 transition-colors">
              {link.name}
            </Link>
          ))}
          
          {/* Botão Tema */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-500 hover:scale-110 transition-all"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 text-gray-800 dark:text-yellow-500">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex flex-col p-6 gap-4 font-bold text-gray-800 dark:text-white shadow-xl transition-colors duration-300">
          
          {/* AQUI ESTÁ A MUDANÇA (Mobile) */}
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="hover:text-yellow-500"
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}