import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, BookOpen, HeartHandshake, Shield, Zap, Eye, Disc } from 'lucide-react';

export function CulturalFundamentals() {
  const [activeTab, setActiveTab] = useState<'angola' | 'regional'>('angola');

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 py-24 transition-colors duration-300">
      
      {/* 1. TOPO DA PÁGINA: O MANIFESTO FILOSÓFICO */}
      <section className="max-w-5xl mx-auto px-6 lg:px-16 mb-24">
        <div className="text-center mb-16">
          <span className="text-yellow-600 dark:text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">A Roda da Vida</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            O Sentido da Roda
          </h1>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-6" />
        </div>

        {/* Card de Ouro - Frase do Monitor Jhoy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-[2.5rem] p-10 md:p-14 shadow-2xl flex flex-col items-center text-center mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <Quote className="text-black/20 mb-6" size={48} />
          <h2 className="text-2xl md:text-4xl font-black text-black uppercase tracking-tighter leading-tight mb-6 relative z-10">
            "Ninguém é tão alguém que nunca vá precisar de alguém."
          </h2>
          <p className="font-black text-black/70 text-[10px] uppercase tracking-[0.3em] relative z-10">
            — Monitor Jhoy
          </p>
        </motion.div>

        {/* Texto de Integração do Manifesto */}
        <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-xl border border-stone-100 dark:border-gray-800 space-y-8">
          <p className="text-stone-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
            Para quem vê de fora, a capoeira pode parecer apenas um movimento coreografado ou uma acrobacia visual. Mas quem desce ao pé do berimbau sabe que a roda é um espelho amplificado da própria existência. Na <strong className="text-yellow-600 dark:text-yellow-500">Escola Luta de Libertação</strong>, nós cruzamos saberes ancestrais, unindo três pilares fundamentais:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            {/* Pilar 1 */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <Star className="text-blue-500" size={16} fill="currentColor" /> O Instante
              </h3>
              <span className="text-[10px] font-bold text-blue-500 block uppercase tracking-wider">Ichi-go Ichi-e</span>
              <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                Cada jogo é sagrado e irrepetível. O momento que passa nunca mais voltará. A roda exige presença absoluta no "aqui e agora", valorizando o encontro e respeitando o camarada.
              </p>
            </div>

            {/* Pilar 2 */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <BookOpen className="text-yellow-500" size={16} fill="currentColor" /> O Indivíduo
              </h3>
              <span className="text-[10px] font-bold text-yellow-600 dark:text-yellow-500 block uppercase tracking-wider">"Tudo que a boca come"</span>
              <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                Como ensinava Mestre Pastinha, a capoeira absorve nossa existência. A resposta do seu corpo é o reflexo de tudo que você digeriu na vida: o suor nos treinos e a resiliência nas quedas.
              </p>
            </div>

            {/* Pilar 3 */}
            <div className="space-y-2">
              <h3 className="text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs flex items-center gap-2">
                <HeartHandshake className="text-green-500" size={16} fill="currentColor" /> O Coletivo
              </h3>
              <span className="text-[10px] font-bold text-green-500 block uppercase tracking-wider">Filosofia Ubuntu</span>
              <p className="text-sm text-stone-600 dark:text-gray-400 leading-relaxed">
                Ninguém joga sozinho. O outro não é seu inimigo, mas o espelho que permite a sua existência. A corda serve para nos ligar em comunidade, pois <strong className="text-stone-800 dark:text-stone-200">nós somos porque nós somos juntos</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO INTERMEDIÁRIA: PRIMEIROS PASSOS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black uppercase text-gray-900 dark:text-white tracking-tighter">Primeiros Passos: O Despertar</h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Card da Ginga */}
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] shadow-xl border border-stone-100 dark:border-gray-800">
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-4 flex items-center gap-3">
              <Disc className="text-yellow-500 animate-spin-slow" /> O Coração do Movimento
            </h3>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
              O início da jornada é um processo de alfabetização corporal. A <strong className="text-gray-900 dark:text-gray-200">Ginga</strong> é a base de tudo. Não é uma postura estática, mas um balanço contínuo que mantém o corpo em constante estado de prontidão, ritmo e fluidez. É o pulso da roda.
            </p>
            <p className="text-stone-600 dark:text-gray-400 leading-relaxed font-medium">
              Através da ginga, o capoeirista esconde suas intenções, protege seu centro, flerta com o perigo e encontra o tempo certo para agir de acordo com o toque do berimbau.
            </p>
          </div>

          {/* Card das Esquivas Básicas */}
          <div className="bg-stone-100 dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-inner">
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-6 flex items-center gap-3">
              <Shield className="text-blue-500" /> A Nobreza da Defesa
            </h3>
            <p className="text-stone-600 dark:text-gray-300 leading-relaxed mb-6 text-sm font-medium">
              Na capoeira, a primeira grande lição é a esquiva. Em vez de bloquear o impacto com força ou violência, cedemos espaço e fluímos com a energia do ataque. As 4 esquivas iniciais de segurança são:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-sm text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">Cocorinha:</strong> O abaixar defensivo rente ao chão, agrupando o corpo e protegendo a cabeça com as mãos.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-sm text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">Esquiva Lateral:</strong> O deslocamento sutil do tronco e da cabeça para a lateral, deixando o golpe passar no vazio.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-sm text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">Esquiva de Frente:</strong> O recuo controlado do tronco protegendo o rosto, mantendo o olhar fixo e firme no parceiro.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500 shrink-0" />
                <p className="text-sm text-stone-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white uppercase text-xs tracking-wider">Esquiva na Cadeira:</strong> A descida da base simulando uma cadeira invisível, mantendo a guarda totalmente alta.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PARTE INFERIOR: SEPARANDO OS EXTREMOS EM ABAS (TABS) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <span className="text-yellow-600 dark:text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">Os Extremos da Arte</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900 dark:text-white tracking-tighter">A Dualidade Sagrada</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
        </div>

        {/* Botões seletores das Abas */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('angola')}
            className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
              activeTab === 'angola' 
              ? 'bg-gray-900 text-white dark:bg-yellow-500 dark:text-black shadow-xl scale-105' 
              : 'bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-stone-200 dark:border-gray-800 hover:bg-stone-100 dark:hover:bg-gray-800'
            }`}
          >
            Capoeira Angola
          </button>
          <button
            onClick={() => setActiveTab('regional')}
            className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all duration-300 ${
              activeTab === 'regional' 
              ? 'bg-gray-900 text-white dark:bg-yellow-500 dark:text-black shadow-xl scale-105' 
              : 'bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-stone-200 dark:border-gray-800 hover:bg-stone-100 dark:hover:bg-gray-800'
            }`}
          >
            Capoeira Regional
          </button>
        </div>

        {/* Painel de Conteúdo com transição suave */}
        <div className="bg-white dark:bg-gray-900 min-h-[520px] rounded-[3rem] shadow-2xl border border-stone-100 dark:border-gray-800 overflow-hidden relative">
          <AnimatePresence mode="wait">
            
            {/* CONTEÚDO DA ABA: ANGOLA */}
            {activeTab === 'angola' && (
              <motion.div
                key="angola"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-stone-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                    <Eye className="text-stone-600 dark:text-gray-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">A Raiz, a Manha e o Chão</h3>
                    <p className="text-stone-500 dark:text-gray-400 font-bold text-xs uppercase tracking-widest">O Universo Tradicional de Mestre Pastinha</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-stone-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
                    <p>
                      Preservada pelo mestre dos mestres, Vicente Ferreira Pastinha, a Capoeira Angola é a manutenção viva das raízes rituais, rítmicas e ancestrais de matriz africana. O estilo de jogo é marcado por ser mais lento, cadenciado, altamente estratégico e jogado muito próximo ao solo.
                    </p>
                    <div className="bg-stone-50 dark:bg-gray-800/50 p-6 rounded-2xl border-l-4 border-stone-400 dark:border-gray-600">
                      <strong className="block text-gray-900 dark:text-white mb-2 uppercase text-xs tracking-widest">A Ginga Angoleira</strong>
                      É uma ginga maliciosa, expressiva e teatral. O corpo se contorce e desenha o espaço de forma imprevisível. O angoleiro joga com o olhar, simula vulnerabilidade ou cansaço, ocultando o perigo real em uma postura relaxada.
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white uppercase mb-4 flex items-center gap-2 tracking-wider text-sm">
                      <Zap size={16} className="text-yellow-500" /> Movimentação de Solo e Mandinga
                    </h4>
                    <ul className="space-y-4">
                      <li className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white block mb-1">Negativa Angoleira & Rolê</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 block font-medium">Manobras táticas para sumir do campo de visão do parceiro e se deslocar de forma fluida rente ao chão.</span>
                      </li>
                      <li className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white block mb-1">Queda de Quatro & Cabeçada</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 block font-medium">Posições de transição e defesas baixas preparadas para aplicar contragolpes cirúrgicos na linha de cintura.</span>
                      </li>
                      <li className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white block mb-1">Rasteira de Chão & Rabo de Arraia</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 block font-medium">A paciência pura e o tempo de roda transformando a força do ataque alheio no motivo de sua própria queda.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CONTEÚDO DA ABA: REGIONAL */}
            {activeTab === 'regional' && (
              <motion.div
                key="regional"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <Shield className="text-blue-500" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">A Disciplina e a Evolução</h3>
                    <p className="text-blue-500 font-bold text-xs uppercase tracking-widest">O Método Marcial de Mestre Bimba</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6 text-stone-600 dark:text-gray-300 text-sm leading-relaxed font-medium">
                    <p>
                      Criada pelo lendário Mestre Bimba, a Luta Regional Baiana (Capoeira Regional) trouxe um método pedagógico rigoroso, disciplina marcial e imensa eficiência de combate para a arte, sendo a grande responsável histórica por retirar a capoeira da ilegalidade e do código penal.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border-l-4 border-blue-500">
                      <strong className="block text-gray-900 dark:text-white mb-2 uppercase text-xs tracking-widest">A Ginga da Regional</strong>
                      É uma ginga de postura mais alta, atlética, veloz e precisa. Mantém o capoeirista em constante estado de prontidão combativa e alinhamento biomecânico para explosões de velocidade.
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-black text-gray-900 dark:text-white uppercase mb-4 flex items-center gap-2 tracking-wider text-sm">
                      <Zap size={16} className="text-blue-500" /> O Arsenal Estrutural dos 53 Movimentos
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white text-sm block mb-1">Ataques Traumáticos</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 font-medium">Bênção, Ponteira e Martelo. Ataques frontais e diretos focados em precisão e impacto.</span>
                      </div>
                      <div className="p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white text-sm block mb-1">Golpes Circulares</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 font-medium">Armada, Queixada e a tradicional Meia-Lua de Compasso, gerando forte energia centrípeta.</span>
                      </div>
                      <div className="col-span-2 p-4 bg-stone-50 dark:bg-gray-800/50 rounded-xl border border-stone-100 dark:border-gray-800">
                        <strong className="text-gray-900 dark:text-white text-sm block mb-1">Defesa Pessoal & Técnicas de Desequilíbrio</strong>
                        <span className="text-xs text-stone-500 dark:text-gray-400 font-medium">Galopante, Godeme, Arrastão e a letal Vingativa. Técnicas de projeção direta herdadas do método original para neutralizar completamente a base de apoio do oponente.</span>
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