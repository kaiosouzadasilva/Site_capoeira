import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// import logoGrupo from './membros/Imagem_do_grupo.png';
import { 
  Menu, 
  X, 
  User, 
  ShieldCheck, 
  ChevronRight,
  LayoutDashboard
} from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Nossa História', href: '/historia' },
    { name: 'Liderança', href: '/lideranca' },
    { name: 'Polos', href: '/polos' },
    { name: 'Fundamentos', href: '/fundamentos' },
    { name: 'Oficinas', href: '/oficinas' },
    { name: 'Galeria', href: '/galeria' },
  ];

  // Links que só aparecem/destacam para membros
  const memberLinks = [
    { name: 'Meu Progresso', href: '/meu-progresso', icon: <User size={18} />, color: 'text-blue-500' },
    { name: 'Área do Mestre', href: '/admin', icon: <ShieldCheck size={18} />, color: 'text-yellow-500' },
  ];

return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      
      {/* MUDANÇA AQUI: 
        Trocamos 'max-w-7xl' por 'w-full' e aumentamos o padding lateral (px-8 lg:px-16).
        Isso empurra o Logo para a extrema esquerda e o Menu para a extrema direita.
      */}
      <div className="w-full mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        
        {/* LOGO - ALTERADO PARA USAR IMAGEM */}
        {/* Mantemos 'shrink-0' e o Link para a home */}
        {/* LOGO */}
      {/* LOGO - ALTERADO PARA CIRCULAR */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          
          {/* CONTAINER DA IMAGEM (Moldura Circular) */}
          {/* h-12 w-12: Garante que seja um quadrado perfeito.
              rounded-full: Transforma em círculo.
              overflow-hidden: Corta qualquer parte da imagem que sair do círculo.
              border-2 border-yellow-500: Adiciona uma bordinha amarela sutil.
              shadow-lg: Dá um leve efeito de profundidade.
          */}
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105 shrink-0">
            {/* A IMAGEM EM SI */}
            {/* object-cover: O segredo para a imagem preencher o círculo 
                             sem esticar nem achatar, cortando o que sobrar.
            */}
            <img 
              src="/Imagem_do_grupo.png" 
              alt="Logo ECLL" 
              className="h-full w-full object-cover"
            />
          </div>

          <span className="font-black text-xl tracking-tighter uppercase dark:text-white transition-colors group-hover:text-yellow-500">
            Escola de Capoeira <span className="text-yellow-500">Luta de Libertação.</span>
          </span>
        </Link>
        

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
// ... (o restante do código continua exatamente igual a partir daqui)
            <Link
              key={link.name}
              to={link.href}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${
                location.pathname === link.href 
                ? 'text-yellow-500' 
                : 'text-gray-500 hover:text-yellow-500'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* DIVISOR VISUAL */}
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />

          {/* ACESSOS RESTRITOS (Botões de Destaque) */}
          <div className="flex items-center gap-4">
             {memberLinks.map((link) => (
               <Link
                key={link.name}
                to={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${
                  location.pathname === link.href ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`}
               >
                <span className={link.color}>{link.icon}</span>
                <span className="dark:text-white">{link.name}</span>
               </Link>
             ))}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between group"
                >
                  <span className="text-sm font-black uppercase tracking-widest text-gray-500 group-hover:text-yellow-500 transition-colors">
                    {link.name}
                  </span>
                  <ChevronRight size={16} className="text-gray-300" />
                </Link>
              ))}

              <div className="h-px bg-gray-100 dark:bg-gray-800 my-4" />
              
              {/* LINKS DE MEMBROS NO MOBILE */}
              <div className="grid grid-cols-1 gap-3">
                {memberLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl"
                  >
                    <div className={`${link.color}`}>{link.icon}</div>
                    <span className="text-xs font-black uppercase tracking-widest dark:text-white">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}