import { useDarkMode } from '../hooks/useDarkMode';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Sun, Moon, Award } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [colorTheme, setTheme] = useDarkMode();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Nossa História', href: '/historia' },
    { name: 'Liderança', href: '/lideranca' },
    { name: 'Polos', href: '/polos' },
    { name: 'Fundamentos', href: '/fundamentos' },
    { name: 'Graduação', href: '/graduacao' }, // <-- ADICIONADO AQUI NO MENU
    { name: 'Oficinas', href: '/oficinas' },
    { name: 'Galeria', href: '/galeria' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="w-full mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105 shrink-0">
            <img src="/Imagem_do_grupo.png" alt="Logo ECLL" className="h-full w-full object-cover" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase dark:text-white transition-colors group-hover:text-yellow-500">
            E.C. <span className="text-yellow-500">Luta de Libertação.</span>
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                location.pathname === link.href 
                ? 'text-yellow-500' 
                : 'text-gray-500 hover:text-yellow-500'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />

          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-yellow-500 hover:scale-110 transition-all"
            title="Alternar Tema"
          >
            {colorTheme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Link
            to="/batizados"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest shadow-lg shadow-yellow-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Award size={16} /> Acervo de Graduações
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={() => setTheme(colorTheme)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-yellow-500">
            {colorTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="p-2 text-gray-500 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between group"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-yellow-500 transition-colors">
                    {link.name}
                  </span>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              ))}

              <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />
              
              <Link
                to="/batizados"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 p-4 bg-yellow-500 rounded-2xl"
              >
                <Award className="text-black" size={18} />
                <span className="text-xs font-black uppercase tracking-widest text-black">
                  Acervo de Graduações
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}