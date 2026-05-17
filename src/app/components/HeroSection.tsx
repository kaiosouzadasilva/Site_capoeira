import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Calendar, Zap, ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="w-full bg-transparent transition-colors duration-300">
      
      {/* 1. BANNER PRINCIPAL: O GRUPO */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/Imagem_do_grupo.png" 
            alt="Grupo ECLL" 
            className="w-full h-full object-cover opacity-40 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Fundada em Manaus</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              Escola de Capoeira <br/><span className="text-yellow-500">Luta de Libertação</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium">
              A Escola que guarda os segredos da ancestralidade e a força da capoeira regional e angola. Prepare-se para conhecer uma linhagem de verdadeiros guerreiros.
            </p>
            <div className="flex gap-4">
               <Link to="/historia" className="px-6 py-3 bg-yellow-500 text-black font-black uppercase text-[10px] rounded-lg hover:scale-105 transition-all">Ver Legado</Link>
               <Link to="/polos" className="px-6 py-3 bg-white/10 text-white font-black uppercase text-[10px] rounded-lg backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">Nossos Polos</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. A SEMENTE E O LEGADO: UNIÃO DOS MESTRES (DUAS FOTOS) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 border border-stone-200/60 dark:border-gray-800 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-colors">
          
          {/* Lado das Imagens Separadas */}
          <div className="w-full lg:w-1/2 flex gap-4 sm:gap-6 relative">
            
            {/* Foto 1: Mestre Camisa Furada */}
            <div className="w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-stone-200 dark:border-gray-800 mt-8 relative group">
              <img 
                src="./membros/Mestre_Camisa_furada.jpg" 
                alt="Mestre Camisa Furada" 
                className="w-full h-full object-cover object-[center_35%] grayscale transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[9px] text-white font-black uppercase tracking-wider shadow-lg">
                  Mestre Camisa
                </div>
              </div>
            </div>

            {/* Foto 2: Mestre Canário */}
            <div className="w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-yellow-500/40 mb-8 relative group">
              <img 
                src="./membros/Mestre_Canario.jpg" 
                alt="Mestre Canário" 
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-yellow-500/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-600/20 text-[9px] text-black font-black uppercase tracking-wider shadow-lg">
                  Mestre Canário
                </div>
              </div>
            </div>

          </div>

          {/* Lado do Texto Narrativo */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="text-yellow-600 dark:text-yellow-500 font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-2">
                <Star size={12} fill="currentColor" /> Raiz & Continuidade
              </span>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight">
                A Semente <br />e o <span className="text-yellow-500">Legado</span>
              </h2>
            </div>

            <p className="text-stone-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
              A Escola Luta de Libertação é fruto da semente plantada com verdade pelo saudoso Mestre Camisa Furada e que hoje continua viva, forte e em plena expansão sob a liderança técnica e o rigor do Mestre Canário. Uma linhagem inquebrável de respeito aos fundamentos tradicionais da capoeira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/historia" 
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-stone-50 dark:bg-gray-800 text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-2xl border border-stone-200 dark:border-gray-700 shadow-sm hover:border-yellow-500 dark:hover:border-yellow-500 transition-all hover:scale-105"
              >
                Memorial do Patriarca <ArrowRight size={14} />
              </Link>
              <Link 
                to="/lideranca/m1" 
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-lg shadow-yellow-500/10 hover:bg-yellow-400 transition-all hover:scale-105"
              >
                Biografia do Mestre <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ELEMENTOS DE CURIOSIDADE */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black uppercase text-gray-900 dark:text-white tracking-tighter">Explore a Jornada</h3>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/fundamentos" className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all border border-stone-100 dark:border-gray-700 group">
            <Zap className="text-yellow-500 mb-6 group-hover:scale-125 transition-transform" size={40} />
            <h4 className="text-xl font-black uppercase dark:text-white mb-2">Fundamentos</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase font-bold">O que faz um capoeirista da ECLL ser diferente? Descubra nossos instrumentos e estilos.</p>
          </Link>

          <Link to="/graduacao" className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all border border-stone-100 dark:border-gray-700 group">
            <Award className="text-blue-500 mb-6 group-hover:scale-125 transition-transform" size={40} />
            <h4 className="text-xl font-black uppercase dark:text-white mb-2">Graduação</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase font-bold">Entenda a hierarquia, das cordas cruas ao branco total. Onde você quer chegar?</p>
          </Link>

          <Link to="/galeria" className="p-10 bg-white dark:bg-gray-800 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-all border border-stone-100 dark:border-gray-700 group">
            <Calendar className="text-green-500 mb-6 group-hover:scale-125 transition-transform" size={40} />
            <h4 className="text-xl font-black uppercase dark:text-white mb-2">Acervo Vivo</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase font-bold">Veja as rodas históricas e os batizados. A prova visual da nossa resistência.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}