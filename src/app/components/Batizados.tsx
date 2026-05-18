import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, MapPin, CalendarDays, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

// --- BANCO DE DADOS HISTÓRICO DE BATIZADOS ---
// Aqui você organiza os eventos por Ano e depois por Categoria de Graduação
const historicoBatizados: Record<string, any[]> = {
  "2026": [
    {
      categoria: "Contramestria e Monitoria",
      membros: [
        { id: 'l4', nickname: 'Monitor Jhoy', rank: 'Monitor', image: '/membros/Monitor_Jhoy.webp', colors: ['#FFFFFF', '#22c55e'], polo: 'Novo Aleixo' },
      ]
    },
    {
      categoria: "Formados e Estagiários",
      membros: [
        { id: 'b5', nickname: 'Est. Invergado', rank: 'Estagiário', image: '/membros/Invergado.webp', colors: ['#3b82f6', '#eab308'], polo: 'Novo Aleixo' },
      ]
    }
  ],
  "2025": [
    {
      categoria: "Formados e Estagiários",
      membros: [
        { id: 'b6', nickname: 'Est. Colorau', rank: 'Estagiário', image: '/membros/Invergado.webp', colors: ['#3b82f6', '#eab308'], polo: 'Canto do Canário' },
        { id: 'l5', nickname: 'Formado Relâmpago', rank: 'Formado', image: '/membros/Invergado.webp', colors: ['#eab308', '#22c55e', '#3b82f6'], polo: 'Polo Centro' },
      ]
    },
    {
      categoria: "Graduados",
      membros: [
        { id: 'b1', nickname: 'Graduado Francês', rank: 'Graduado', image: '/membros/foto_frances.webp', colors: ['#22c55e', '#3b82f6'], polo: 'Novo Aleixo' },
        { id: 'b2', nickname: 'Graduado Zumbi', rank: 'Graduado', image: '/membros/foto_zumbi.webp', colors: ['#22c55e', '#eab308'], polo: 'Novo Aleixo' },
      ]
    },
    {
      categoria: "Batizados (1ª Corda)",
      membros: [
        { id: 'a1', nickname: 'Aluno Ventania', rank: 'Aluno', image: '/membros/batizado2025.webp', colors: ['#22c55e'], polo: 'Novo Aleixo' },
      ]
    }
  ],
  "2024": [
    {
      categoria: "Contramestria",
      membros: [
        { id: 'l2', nickname: 'Contramestre Prateado', rank: 'Contramestre', image: '/membros/Mestre_Canario_e_Mestre_Camisa.webp', colors: ['#FFFFFF', '#3b82f6'], polo: 'Polo Comunitário' },
      ]
    }
  ],
  "2023": [],
  "2022": [],
  "2021": []
};

export function Batizados() {
  const navigate = useNavigate();
  // Pega todos os anos disponíveis no objeto e define o primeiro como selecionado
  const anosDisponiveis = Object.keys(historicoBatizados).sort((a, b) => Number(b) - Number(a));
  const [anoSelecionado, setAnoSelecionado] = useState(anosDisponiveis[0]);

  const dadosDoAno = historicoBatizados[anoSelecionado];

  return (
    <section className="min-h-screen bg-transparent dark:bg-gray-950 pt-32 pb-24 px-6 transition-colors duration-300">      
    <div className="max-w-7xl mx-auto">
        
        {/* TÍTULO FIXO DA PÁGINA */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Batizado e Troca de Graduação
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            O registro histórico da evolução dos nossos capoeiristas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* BARRA LATERAL (MENU DE ANOS) */}
          <aside className="w-full lg:w-1/4 shrink-0">
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-6 shadow-xl border border-gray-100 dark:border-gray-800 sticky top-32">
              <h3 className="font-black uppercase text-gray-400 text-[10px] tracking-widest mb-6 flex items-center gap-2">
                <CalendarDays size={14} className="text-yellow-500" /> Linha do Tempo
              </h3>
              
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {anosDisponiveis.map((ano) => (
                  <button
                    key={ano}
                    onClick={() => setAnoSelecionado(ano)}
                    className={`flex items-center justify-between px-6 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink ${
                      anoSelecionado === ano 
                      ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 translate-x-0 lg:translate-x-2' 
                      : 'bg-gray-50 dark:bg-gray-800 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>Batizado {ano}</span>
                    {anoSelecionado === ano && <ChevronRight size={18} className="hidden lg:block" />}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* ÁREA PRINCIPAL (CONTEÚDO DO ANO) */}
          <div className="flex-1 min-h-[50vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={anoSelecionado}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 flex items-center gap-4">
                  <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                    Turma de {anoSelecionado}
                  </h2>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>

                {dadosDoAno && dadosDoAno.length > 0 ? (
                  <div className="space-y-16">
                    {dadosDoAno.map((grupo, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-black text-yellow-600 dark:text-yellow-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                          <Award size={18} /> {grupo.categoria}
                        </h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                          {grupo.membros.map((person: any) => (
                            <LeaderCard 
                              key={person.id} 
                              person={person} 
                              onClick={() => navigate(`/lideranca/${person.id}`)} 
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-16 text-center border border-dashed border-gray-200 dark:border-gray-800">
                    <p className="text-gray-400 font-black uppercase tracking-widest">
                      Registros do evento de {anoSelecionado} em processo de catalogação digital.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

// O MESMO CARD USADO NA LIDERANÇA
function LeaderCard({ person, onClick }: any) {
  const borderGradient = person.colors.length > 1 
    ? `linear-gradient(135deg, ${person.colors.join(', ')})`
    : person.colors[0];

  return (
    <motion.div whileHover={{ y: -10 }} onClick={onClick} className="relative group cursor-pointer w-full">
      <div className="absolute -inset-1 rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-xl transition-all" style={{ background: borderGradient }} />
      <div className="relative p-[3px] rounded-[2rem] overflow-hidden shadow-xl" style={{ background: borderGradient }}>
        <div className="bg-white dark:bg-gray-900 rounded-[1.85rem] overflow-hidden">
          <div className="relative aspect-[4/5] overflow-hidden">
            <ImageWithFallback src={person.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] font-black uppercase border border-white/10">
              {person.rank}
            </div>
          </div>
          <div className="p-4 text-center">
            <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-tighter text-sm leading-tight">
              {person.nickname}
            </h4>
            <div className="mt-2 flex items-center justify-center gap-1 text-gray-400 text-[8px] font-bold uppercase">
              <MapPin size={10} className="text-yellow-500 shrink-0" /> <span className="truncate">{person.polo}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}