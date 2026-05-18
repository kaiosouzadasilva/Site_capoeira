import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Calendar, Zap, ArrowRight, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="w-full bg-transparent transition-colors duration-300">
      
      {/* 1. BANNER PRINCIPAL: O GRUPO */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0">
          <img 
            src="/Imagem_do_grupo.webp" 
            alt="Grupo ECLL" 
            className="w-full h-full object-cover opacity-50 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent dark:from-gray-950" />
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
            <div className="flex flex-wrap gap-4">
               <Link to="/historia" className="px-8 py-4 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-widest rounded-xl hover:scale-105 transition-all shadow-lg shadow-yellow-500/20">
                 Ver Legado
               </Link>
               <Link to="/polos" className="px-8 py-4 bg-white/10 text-white font-black uppercase text-[10px] tracking-widest rounded-xl backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
                 Nossos Polos
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DESTAQUE: CHAMADA PARA NOSSOS FUNDAMENTOS (CALL TO ACTION DE ALTA USABILIDADE) */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-16 -mt-16 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-black dark:from-gray-900 dark:to-gray-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
        >
          <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="space-y-4 relative z-10 md:w-2/3">
            <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] flex items-center gap-2">
              <Zap size={14} /> Filosofia de Vida
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Nossos Fundamentos</h2>
            <p className="text-gray-400 font-medium leading-relaxed max-w-xl text-sm">
              Do <strong>Ichi-go Ichi-e</strong> à filosofia <strong>Ubuntu</strong>, entenda como unimos a tradição da Angola e a disciplina da Regional. Descubra por que a roda é o nosso espelho da vida e leia a mensagem dos nossos líderes.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto">
            <Link 
              to="/fundamentos" 
              className="inline-flex w-full md:w-auto items-center justify-center gap-3 px-8 py-5 bg-yellow-500 text-black font-black uppercase tracking-widest text-xs rounded-2xl shadow-[0_0_40px_rgba(234,179,8,0.2)] hover:bg-yellow-400 transition-all hover:scale-105"
            >
              Conhecer Fundamentos <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 3. A SEMENTE E O LEGADO: UNIÃO DOS MESTRES */}
      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-16 border border-stone-200/60 dark:border-gray-800 shadow-2xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-colors">
          
          <div className="w-full lg:w-1/2 flex gap-4 sm:gap-6 relative">
            <div className="w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-stone-200 dark:border-gray-800 mt-8 relative group">
              <img 
                src="./membros/Mestre_Camisa_furada.webp" 
                alt="Mestre Camisa Furada" 
                className="w-full h-full object-cover object-[center_35%] grayscale transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[9px] text-white font-black uppercase tracking-wider shadow-lg">
                  Mestre Camisa
                </div>
              </div>
            </div>

            <div className="w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-yellow-500/40 mb-8 relative group">
              <img 
                src="./membros/Mestre_Canario.webp" 
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

      {/* 4. ELEMENTOS DE EXPLORAÇÃO COM CARD COMPACTO DE NAVEGAÇÃO INTERNA */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-16 border-t border-stone-100 dark:border-gray-800">
        <div className="text-center mb-16">
          <span className="text-yellow-600 dark:text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Guia de Navegação</span>
          <h3 className="text-3xl font-black uppercase text-gray-900 dark:text-white tracking-tighter">O que procura encontrar?</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm font-medium">Explore as outras áreas fundamentais do ecossistema da nossa escola.</p>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Link Rápido 1: Fundamentos (Caso o utilizador passe direto pelo banner do topo) */}
          <Link to="/fundamentos" className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all border border-stone-100 dark:border-gray-800 group flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="text-yellow-500" size={24} />
              </div>
              <h4 className="text-xl font-black uppercase text-gray-900 dark:text-white mb-2">Filosofia & Golpes</h4>
              <p className="text-xs text-stone-500 dark:text-gray-400 leading-relaxed font-semibold uppercase">
                A frase do Monitor Jhoy, o espírito Ubuntu e o catálogo técnico separando a Angola da Regional.
              </p>
            </div>
            <div className="text-yellow-600 dark:text-yellow-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 pt-6">
              Acessar Fundamentos <ArrowRight size={12} />
            </div>
          </Link>

          {/* Link Rápido 2: Graduação */}
          <Link to="/graduacao" className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all border border-stone-100 dark:border-gray-800 group flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="text-blue-500" size={24} />
              </div>
              <h4 className="text-xl font-black uppercase text-gray-900 dark:text-white mb-2">Sistema de Cordas</h4>
              <p className="text-xs text-stone-500 dark:text-gray-400 leading-relaxed font-semibold uppercase">
                Entenda a nossa hierarquia técnica, o significado das cores e a caminhada do aluno até à formatura.
              </p>
            </div>
            <div className="text-blue-600 dark:text-blue-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 pt-6">
              Ver Graduações <ArrowRight size={12} />
            </div>
          </Link>

          {/* Link Rápido 3: Galeria */}
          <Link to="/galeria" className="p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all border border-stone-100 dark:border-gray-800 group flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="text-green-500" size={24} />
              </div>
              <h4 className="text-xl font-black uppercase text-gray-900 dark:text-white mb-2">Acervo Vivo</h4>
              <p className="text-xs text-stone-500 dark:text-gray-400 leading-relaxed font-semibold uppercase">
                O registo fotográfico dos nossos batizados, rodas históricas e momentos marcantes na comunidade.
              </p>
            </div>
            <div className="text-green-600 dark:text-green-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 pt-6">
              Abrir Galeria <ArrowRight size={12} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}