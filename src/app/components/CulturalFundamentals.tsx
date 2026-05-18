import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, BookOpen, HeartHandshake, Shield, Zap, Eye, Disc } from 'lucide-react';

export function CulturalFundamentals() {
  const [activeTab, setActiveTab] = useState<'angola' | 'regional'>('angola');

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 py-24 transition-colors duration-300">
      
      {/* 1. TOPO DA PÁGINA: O MANIFESTO FILOSÓFICO */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <span className="text-yellow-600 dark:text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">A Roda da Vida</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            O Sentido da Roda
          </h1>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-4" />
        </div>

        {/* CITAÇÃO SUAVE E ELEGANTE (SUBSTITUIU O CARD DE OURO EXAGERADO) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto text-center my-16 px-8 border-y border-stone-200/80 dark:border-gray-800 py-10"
        >
          <Quote className="absolute top-4 left-4 text-stone-200 dark:text-gray-900 -z-10" size={64} />
          <p className="text-xl md:text-2xl font-medium italic text-stone-800 dark:text-gray-200 tracking-tight leading-relaxed">
            "Ninguém é tão alguém que nunca vá precisar de alguém."
          </p>
          <p className="font-black text-yellow-600 dark:text-yellow-500 text-[10px] uppercase tracking-[0.3em] mt-4">
            — Monitor Jhoy
          </p>
        </motion.div>

        {/* Texto de Integração do Manifesto */}
        <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-stone-100 dark:border-gray-800 space-y-8">
          <p className="text-stone-700 dark:text-gray-300 text-base leading-relaxed">
            Para quem vê de fora, a capoeira pode parecer apenas um movimento coreografado ou uma acrobacia visual. Mas quem desce ao pé do berimbau sabe que a roda é um espelho amplificado da própria existência. Na <strong className="text-yellow-600 dark:text-yellow-500 font-bold">Escola Luta de Libertação</strong>, nós cruzamos saberes ancestrais, unindo três pilares fundamentais:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-4 border-t border-stone-100 dark:border-gray-800">
            {/* Pilar 1 */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-[11px] flex items-center gap-2">
                <Star className="text-blue-500" size={14} fill="currentColor" /> O Instante
              </h3>
              <span className="text-[9px] font-bold text-blue-500 block uppercase tracking-wider">Ichi-go Ichi-e</span>
              <p className="text-xs text-stone-600 dark:text-gray-400 leading-relaxed">
                Cada jogo é sagrado e irrepetível. O momento que passa nunca mais voltará. A roda exige presença absoluta no "aqui e agora", valorizando o encontro.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-[11px] flex items-center gap-2">
                <BookOpen className="text-yellow-500" size={14} fill="currentColor" /> O Indivíduo
              </h3>
              <span className="text-[9px] font-bold text-yellow-600 dark:text-yellow-500 block uppercase tracking-wider">"Tudo que a boca come"</span>
              <p className="text-xs text-stone-600 dark:text-gray-400 leading-relaxed">
                Como ensinava Mestre Pastinha, a capoeira absorve nossa existência. A resposta do corpo reflete tudo o que você digeriu na vida: o suor e a resiliência.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-[11px] flex items-center gap-2">
                <HeartHandshake className="text-green-500" size={14} fill="currentColor" /> O Coletivo
              </h3>
              <span className="text-[9px] font-bold text-green-500 block uppercase tracking-wider">Filosofia Ubuntu</span>
              <p className="text-xs text-stone-600 dark:text-gray-400 leading-relaxed">
                Ninguém joga sozinho. O outro é o espelho que permite a sua existência. A corda serve para nos ligar em comunidade, pois <strong>nós somos porque nós somos juntos</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO INTERMEDIÁRIA: PRIMEIROS PASSOS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-black uppercase text-gray-900 dark:text-white tracking-tighter">Primeiros Passos: O Despertar</h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Card da Ginga */}
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-xl border border-stone-100 dark:border-gray-800">
            <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-4 flex items-center gap-3">
              <Disc className="text-yellow-500" size={20} /> O Coração do Movimento
            </h3>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
              O início da jornada é um processo de alfabetização corporal. A <strong className="text-gray-900 dark:text-gray-200">Ginga</strong> é a base de tudo. Não é uma postura estática, mas um balanço contínuo que mantém o corpo em constante estado de prontidão, ritmo e fluidez. É o pulso da roda.
            </p>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed text-sm">
              Através da ginga, o capoeirista esconde suas intenções, protege seu centro, flerta com o perigo e encontra o tempo certo para agir de acordo com o toque do berimbau.
            </p>
          </div>

          {/* Card das Esquivas Básicas */}
          <div className="bg-stone-100 dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-inner">
            <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase mb-6 flex items-center gap-3">
              <Shield className="text-blue-500" size={20} /> A Nobreza da Defesa
            </h3>
            <p className="text-stone-600 dark:text-gray-300 leading-relaxed mb-6 text-xs uppercase tracking-wider font-bold">
              As 4 esquivas iniciais de segurança são:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-xs text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-[10px] tracking-wider block">Cocorinha</strong> O abaixar defensivo rente ao chão, agrupando o corpo e protegendo a cabeça com as mãos.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-xs text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-[10px] tracking-wider block">Esquiva Lateral</strong> O deslocamento sutil do tronco e da cabeça para a lateral, deixando o golpe passar no vazio.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-xs text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-[10px] tracking-wider block">Esquiva de Frente</strong> O recuo controlado do tronco protegendo o rosto, mantendo o olhar fixo e firme no parceiro.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-xs text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-[10px] tracking-wider block">Esquiva na Cadeira</strong> A descida da base simulando uma cadeira invisível, mantendo a guarda totalmente alta.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PARTE INFERIOR: SEPARANDO OS EXTREMOS EM ABAS (TABS) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <span className="text-yellow-600 dark:text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Os Extremos da Arte</span>
          <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 dark:text-white tracking-tighter">A Dualidade Sagrada</h2>
          <div className="w-12 h-0.5 bg-yellow-500 mx-auto mt-4" />
        </div>

        {/* Botões seletores das Abas */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('angola')}
            className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
              activeTab === 'angola' 
              ? 'bg-gray-900 text-white dark:bg-yellow-500 dark:text-black shadow-lg scale-102' 
              : 'bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-stone-200 dark:border-gray-800 hover:bg-stone-100 dark:hover:bg-gray-800'
            }`}
          >
            Capoeira Angola
          </button>
          <button
            onClick={() => setActiveTab('regional')}
            className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all duration-300 ${
              activeTab === 'regional' 
              ? 'bg-gray-900 text-white dark:bg-yellow-500 dark:text-black shadow-lg scale-102' 
              : 'bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-stone-200 dark:border-gray-800 hover:bg-stone-100 dark:hover:bg-gray-800'
            }`}
          >
            Capoeira Regional
          </button>
        </div>

        {/* Painel de Conteúdo */}
        <div className="bg-white dark:bg-gray-900 min-h-[500px] rounded-[3rem] shadow-xl border border-stone-100 dark:border-gray-800 overflow-hidden relative">
          <AnimatePresence mode="wait">
            
            {/* CONTEÚDO: ANGOLA */}
            {activeTab === 'angola' && (
              <motion.div
                key="angola"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-stone-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <Eye className="text-stone-600 dark:text-gray-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">A Raiz, a Manha e o Chão</h3>
                    <p className="text-stone-500 dark:text-gray-400 font-bold text-[10px] uppercase tracking-widest">O Universo Tradicional de Mestre Pastinha</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-stone-600 dark:text-gray-300 text-sm leading-relaxed">
                    <p>
                      Preservada pelo mestre dos mestres, Vicente Ferreira Pastinha, a Capoeira Angola é a manutenção viva das raízes rituais, rítmicas e ancestrais de matriz africana. O estilo de jogo é marcado por ser mais lento, cadenciado, altamente estratégico e jogado muito próximo ao solo.
                    </p>
                    <div className="bg-stone-50 dark:bg-gray-800/50 p-6 rounded-xl border-l-2 border-stone-400 dark:border-gray-600">
                      <strong className="block text-gray-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">A Ginga Angoleira</strong>
                      É uma ginga maliciosa, expressiva e teatral. O corpo se contorce e desenha o espaço de forma imprevisível. O angoleiro joga com o olhar, simula vulnerabilidade ou cansaço.
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white uppercase mb-4 flex items-center gap-2 tracking-wider text-xs">
                      <Zap size={14} className="text-yellow-500" /> Movimentação de Solo e Mandinga
                    </h4>
                    <ul className="space-y-3">
                      <li className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white block text-sm mb-1">Negativa Angoleira & Rolê</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 block">Manobras táticas para sumir do campo de visão do parceiro e se deslocar rente ao chão.</span>
                      </li>
                      <li className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white block text-sm mb-1">Queda de Quatro & Cabeçada</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 block">Posições de transição e defesas baixas preparadas para aplicar contragolpes na linha de cintura.</span>
                      </li>
                      <li className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white block text-sm mb-1">Rasteira de Chão & Rabo de Arraia</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 block">A paciência pura transformando a força do ataque alheio no motivo de sua própria queda.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CONTEÚDO: REGIONAL */}
            {activeTab === 'regional' && (
              <motion.div
                key="regional"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 md:p-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                    <Shield className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">A Disciplina e a Evolução</h3>
                    <p className="text-blue-500 font-bold text-[10px] uppercase tracking-widest">O Método Marcial de Mestre Bimba</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-stone-600 dark:text-gray-300 text-sm leading-relaxed">
                    <p>
                      Criada pelo lendário Mestre Bimba, a Luta Regional Baiana (Capoeira Regional) trouxe um método pedagógico rigoroso, disciplina marcial e imensa eficiência de combate para a arte, tirando a arte da ilegalidade.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-xl border-l-2 border-blue-500">
                      <strong className="block text-gray-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">A Ginga da Regional</strong>
                      É uma ginga de postura mais alta, atlética, veloz e precisa. Mantém o capoeirista em constante estado de prontidão combativa para explosões de velocidade.
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-black text-gray-900 dark:text-white uppercase mb-4 flex items-center gap-2 tracking-wider text-xs">
                      <Zap size={14} className="text-blue-500" /> O Arsenal Estrutural dos 53 Movimentos
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white text-xs block mb-1">Ataques Traumáticos</strong>
                        <span className="text-[11px] text-stone-500 dark:text-gray-400">Bênção, Ponteira e Martelo. Focados em precisão e impacto.</span>
                      </div>
                      <div className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white text-xs block mb-1">Golpes Circulares</strong>
                        <span className="text-[11px] text-stone-500 dark:text-gray-400">Armada, Queixada e Meia-Lua de Compasso.</span>
                      </div>
                      <div className="col-span-2 p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white text-xs block mb-1">Defesa Pessoal & Desequilíbrios</strong>
                        <span className="text-[11px] text-stone-500 dark:text-gray-400">Galopante, Godeme, Arrastão e a letal Vingativa, neutralizando a base do oponente.</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}