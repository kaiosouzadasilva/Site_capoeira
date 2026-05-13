import { useState } from 'react';
import { Heart, Brain, Users, ChevronDown, Calendar, User, Award, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundTexture } from './BackgroundTexture';

const methodologyPillars = [
  { icon: Heart, title: 'Corpo', description: 'Condicionamento físico, acrobacias e a arte do movimento através de sequências tradicionais e treinamento moderno.' },
  { icon: Brain, title: 'Mente', description: 'Pensamento estratégico, conhecimento musical e a filosofia por trás de cada movimento.' },
  { icon: Users, title: 'Comunidade', description: 'Respeito, camaradagem e o espírito coletivo que define nossa roda e nossa família de capoeiristas.' }
];

// 1. Dados detalhados da Linhagem
const lineageData = {
  camisa: {
    name: 'Mestre Camisa Furada',
    rank: 'Patriarca',
    birth: '01/01/1950', // Exemplo
    startedAt: '1965',
    startedWith: 'Mestre Exemplo',
    promotedBy: 'Mestre Exemplo',
    history: 'Fundador do grupo "Escola de capoeira Berimbau dos Palmares". Uma lenda viva que deu origem à nossa semente.',
    color: 'bg-orange-800'
  },
  canario: {
    name: 'Mestre Canário',
    rank: 'Mestre',
    birth: '15/05/1970',
    startedAt: '1982',
    startedWith: 'Mestre Camisa Furada',
    promotedBy: 'Mestre Camisa Furada',
    history: 'Fundador da "Escola de Capoeira Luta de Libertação" (ECLL) em 2007. Um mestre dedicado à preservação da Angola e Regional.',
    color: 'bg-yellow-500'
  },
  ely: {
    name: 'Contramestre Ely',
    rank: 'Contramestre',
    startedAt: '1985',
    startedWith: 'Mestre Camisa Furada',
    promotedBy: 'Mestre Camisa Furada',
    history: 'Um dos grandes formados pelo Mestre Camisa, peça chave na história da nossa linhagem.',
    color: 'bg-white'
  },
  jhoy: {
    name: 'Monitor Jhoy',
    rank: 'Monitor',
    startedAt: '1996',
    startedWith: 'Mestre Camisa Furada',
    promotedBy: 'Mestre Canário',
    history: 'Iniciou em 1996. Após um intervalo entre 2004 e 2016, retornou com força total aos fundamentos do grupo.',
    dates: 'Início: 1996 | Pausa: 2004 | Retorno: 2016',
    color: 'bg-orange-50'
  }
};

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 px-6 bg-white relative overflow-hidden">
      <BackgroundTexture />
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Pilares da Metodologia (Mantidos) */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {/* ... (mesmo código anterior dos methodologyPillars) */}
        </div>

        {/* Raízes e Legado */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossas Raízes e Legado</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600">
            Clique ou passe o mouse sobre os nomes para conhecer a história de nossa linhagem.
          </p>
        </div>

        {/* ÁRVORE INTERATIVA */}
        <div className="relative flex flex-col items-center gap-8 py-10">
          
          <LineageNode data={lineageData.camisa} />

          <Connector />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative">
            <LineageNode data={lineageData.ely} />
            <LineageNode data={lineageData.canario} highlight />
          </div>

          <div className="flex justify-center md:justify-end w-full md:max-w-xl">
             <Connector />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <LineageNode data={{...lineageData.canario, name: 'C.Mestre Prateado', rank: 'Formado por Canário'}} />
            <LineageNode data={{...lineageData.canario, name: 'C.Mestra Peteca', rank: 'Formada por Canário'}} />
            <LineageNode data={lineageData.jhoy} isSpecial />
          </div>

        </div>
      </div>
    </section>
  );
}

// COMPONENTE DE NÓ INTERATIVO
function LineageNode({ data, highlight = false, isSpecial = false }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.div 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        className={`
          ${data.color || 'bg-white'} 
          ${data.color === 'bg-orange-800' ? 'text-white' : 'text-gray-900'}
          p-6 rounded-2xl shadow-md border cursor-help transition-all relative
          ${highlight ? 'border-yellow-500 ring-4 ring-yellow-100' : 'border-gray-100'}
          ${isSpecial ? 'border-2 border-dashed border-orange-300' : ''}
          min-w-[240px] text-center
        `}
      >
        <h4 className="text-xl font-bold">{data.name}</h4>
        <p className="text-sm opacity-80">{data.rank}</p>
        <div className="mt-2 text-[10px] uppercase tracking-tighter opacity-50 flex items-center justify-center gap-1">
          <Info size={10} /> {isOpen ? 'Fechar' : 'Ver Detalhes'}
        </div>
      </motion.div>

      {/* POPUP DE DETALHES */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 top-full mt-4 left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-2xl p-5 border border-gray-100 text-left"
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />
            
            <h5 className="font-bold text-gray-900 mb-3 border-b pb-2 flex justify-between items-center">
              Ficha Técnica <X size={14} className="cursor-pointer" onClick={() => setIsOpen(false)}/>
            </h5>

            <div className="space-y-3 text-sm">
              {data.birth && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar size={14} className="text-orange-600" />
                  <span><strong>Nasc.:</strong> {data.birth}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={14} className="text-green-600" />
                <span><strong>Início:</strong> {data.startedAt}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User size={14} className="text-blue-600" />
                <span><strong>Mestre Inicial:</strong> {data.startedWith}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award size={14} className="text-yellow-600" />
                <span><strong>Corda atual por:</strong> {data.promotedBy}</span>
              </div>
              
              <div className="pt-2 border-t mt-2">
                <p className="text-xs text-gray-500 italic leading-tight">
                  {data.history}
                </p>
                {data.dates && (
                  <p className="mt-2 text-[10px] font-bold text-orange-700 uppercase">
                    {data.dates}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[2px] h-12 bg-gray-200" />
      <ChevronDown className="text-gray-300 -mt-2" size={20} />
    </div>
  );
}