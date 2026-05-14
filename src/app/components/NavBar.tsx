import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        
        <Link to="/" className="font-black text-2xl tracking-tighter text-gray-900 dark:text-white">
          <span className="text-yellow-500">Escola de Capoeira Luta de Libertação</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-700 dark:text-gray-200">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="hover:text-yellow-500 transition-colors">
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-500 transition-all"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-800 dark:text-yellow-500">
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-900 dark:text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex flex-col p-6 gap-6 font-black text-gray-800 dark:text-white shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xl">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}