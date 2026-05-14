import { useState } from 'react';
import { Heart, Brain, Users, ChevronDown, Calendar, User, Award, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BackgroundTexture } from './BackgroundTexture';

// Importação das imagens utilizando caminhos relativos para evitar erros de alias (@)
// IMPORTANTE: Renomeie os seus arquivos na pasta 'src/imports/' para retirar acentos e espaços
import fotoCamisa from '../../imports/Mestre_Camisa_furada.jpg';
import fotoCanario from '../../imports/Mestre_Canario.jpg'; // Arquivo sem acento

// 1. Pilares da Metodologia
const methodologyPillars = [
  { 
    icon: Heart, 
    title: 'Corpo', 
    description: 'Condicionamento físico, acrobacias e a arte do movimento através de sequências tradicionais e treinamento moderno.' 
  },
  { 
    icon: Brain, 
    title: 'Mente', 
    description: 'Pensamento estratégico, conhecimento musical e a filosofia por trás de cada movimento.' 
  },
  { 
    icon: Users, 
    title: 'Comunidade', 
    description: 'Respeito, camaradagem e o espírito coletivo que define nossa roda e nossa família de capoeiristas.' 
  }
];

// 2. Dados da Linhagem (Fichas Técnicas para os Popups)
const lineageData = {
  camisa: {
    name: 'Mestre Camisa Furada',
    rank: 'Patriarca',
    birth: 'Dados em breve',
    startedAt: '1965',
    startedWith: 'Mestre Pastinha / Mestre Bimba',
    promotedBy: 'Tradição',
    history: 'Fundador do grupo "Escola de capoeira Berimbau dos Palmares". Referência histórica na preservação dos fundamentos.',
    color: 'bg-orange-800'
  },
  canario: {
    name: 'Mestre Canário',
    rank: 'Mestre',
    birth: 'Dados em breve',
    startedAt: '1982',
    startedWith: 'Mestre Camisa Furada',
    promotedBy: 'Mestre Camisa Furada',
    history: 'Fundador da "Escola de Capoeira Luta de Libertação" (ECLL) em 2007. Focado na pedagogia social através da capoeira.',
    color: 'bg-yellow-500'
  },
  ely: {
    name: 'Contramestre Ely',
    rank: 'Contramestre',
    startedAt: '1985',
    startedWith: 'Mestre Camisa Furada',
    promotedBy: 'Mestre Camisa Furada',
    history: 'Grande mestre da linhagem Berimbau dos Palmares, peça fundamental na formação de novos capoeiristas.',
    color: 'bg-white'
  },
  jhoy: {
    name: 'Monitor Jhoy',
    rank: 'Monitor',
    startedAt: '1996',
    startedWith: 'Mestre Camisa Furada',
    promotedBy: 'Mestre Canário',
    history: 'Iniciou sua jornada em 1996 com Mestre Camisa Furada. Após um intervalo (2004-2016), retornou sob a tutela do Mestre Canário.',
    dates: '1996 (Início) • 2004 (Pausa) • 2016 (Retorno)',
    color: 'bg-orange-50'
  }
};

export function MethodologySection() {
  return (
    // z-20 para os popups ficarem por cima da próxima seção; sem overflow-hidden
<section id="metodologia" className="py-24 px-6 bg-white dark:bg-gray-900 relative z-20 transition-colors duration-300">      <BackgroundTexture />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BLOCO 1: PILARES */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {methodologyPillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="text-center"
            >
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <pillar.icon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* BLOCO 2: TÍTULO DA LINHAGEM */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nossas Raízes e Legado</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Abaixo, conheça a árvore genealógica que sustenta o fundamento da <strong>ECLL</strong>. 
            Interaja com os nomes para ver a trajetória de cada um.
          </p>
        </motion.div>

        {/* BLOCO 3: ÁRVORE GENEALÓGICA COM IMAGENS ESTILO RETRATO LATERAIS */}
        <div className="relative flex flex-col items-center gap-8 py-10 mb-20">
          
          {/* Mestre Camisa (Esquerda) - Estilo Retrato */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.15 }}
            whileHover={{ opacity: 0.95 }}
            // Ajustado para proporção retrato (w-64 h-80) e posição mais lateral
            className="hidden lg:block absolute left-[-260px] top-0 w-80 h-200 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
          >
            {/* rounded-xl substitui rounded-full para formato retangular */}
            <img src={fotoCamisa} alt="Mestre Camisa" className="w-full h-full object-cover rounded-xl border-4 border-orange-800 shadow-2xl" />
            <p className="text-center mt-4 font-bold text-orange-900 uppercase tracking-widest text-xs">Mestre Camisa Furada</p>
          </motion.div>

          {/* Mestre Canário (Direita) - Estilo Retrato */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.15 }}
            whileHover={{ opacity: 0.95 }}
            // Ajustado para proporção retrato (w-64 h-80) e posição mais lateral na parte inferior
            className="hidden lg:block absolute right-[-260px] bottom-0 w-80 h-210 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto"
          >
            {/* rounded-xl substitui rounded-full para formato retangular */}
            <img src={fotoCanario} alt="Mestre Canário" className="w-full h-full object-cover rounded-xl border-4 border-yellow-500 shadow-2xl" />
            <p className="text-center mt-4 font-bold text-yellow-700 uppercase tracking-widest text-xs">Mestre Canário</p>
          </motion.div>

          {/* NÍVEL 1 */}
          <LineageNode data={lineageData.camisa} />
          <Connector />

          {/* NÍVEL 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative">
            {/* Linha horizontal conectora Desktop */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gray-100 -z-10" />
            <LineageNode data={lineageData.ely} />
            <LineageNode data={lineageData.canario} highlight />
          </div>
          <div className="flex justify-center md:justify-end w-full md:max-w-xl">
             <Connector />
          </div>

          {/* NÍVEL 3 */}
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

// COMPONENTE AUXILIAR: NÓ DA ÁRVORE (Com Lógica de Popup/Ficha Técnica)
function LineageNode({ data, highlight = false, isSpecial = false }: any) {
  const [isOpen, setIsOpen] = useState(false);

  // Lógica de cores extraída para variáveis para evitar erros de sintaxe no template string
  const bgColor = data.color || 'bg-white';
  const textColor = data.color === 'bg-orange-800' ? 'text-white' : 'text-gray-900';
  const borderColor = highlight ? 'border-yellow-500 ring-4 ring-yellow-100' : 'border-gray-100';
  const specialBorder = isSpecial ? 'border-2 border-dashed border-orange-300' : '';

  return (
    <div className="relative">
      <motion.div 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        className={`${bgColor} ${textColor} ${borderColor} ${specialBorder} p-6 rounded-2xl shadow-md border cursor-help transition-all relative min-w-[240px] text-center`}
      >
        <h4 className="text-xl font-bold">{data.name}</h4>
        <p className="text-sm opacity-80">{data.rank}</p>
        <div className="mt-2 text-[10px] uppercase tracking-tighter opacity-50 flex items-center justify-center gap-1">
          <Info size={10} /> {isOpen ? 'Fechar' : 'Ver Ficha'}
        </div>
      </motion.div>

      {/* Janela Flutuante (Popup) de Detalhes - z-50 para sobrepor tudo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 top-full mt-4 left-1/2 -translate-x-1/2 w-72 bg-white rounded-xl shadow-2xl p-5 border border-gray-100 text-left pointer-events-auto"
          >
            {/* Setinha do popup */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />
            
            <h5 className="font-bold text-gray-900 mb-3 border-b pb-2 flex justify-between items-center text-[10px] uppercase tracking-widest relative z-10">
              Trajetória Histórica <X size={14} className="cursor-pointer" onClick={() => setIsOpen(false)}/>
            </h5>
            <div className="space-y-3 text-sm relative z-10">
              {/* Informações da Ficha Técnica */}
              {data.birth && (
                 <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={14} className="text-gray-400" />
                    <span><strong>Nasc.:</strong> {data.birth}</span>
                 </div>
              )}
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={14} className="text-orange-600" />
                <span><strong>Início:</strong> {data.startedAt}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User size={14} className="text-blue-600" />
                <span><strong>Com:</strong> {data.startedWith}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Award size={14} className="text-yellow-600" />
                <span><strong>Corda por:</strong> {data.promotedBy}</span>
              </div>
              {/* História e Datas Especiais */}
              <div className="pt-2 border-t mt-2">
                <p className="text-xs text-gray-500 italic leading-tight">{data.history}</p>
                {data.dates && (
                  <p className="mt-2 text-[10px] font-bold text-orange-700 uppercase tracking-tight bg-orange-50 p-1 rounded inline-block">{data.dates}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// COMPONENTE AUXILIAR: CONECTOR VERTICAL (Seta)
function Connector() {
  return (
    <div className="flex flex-col items-center">
      {/* Linha vertical */}
      <div className="w-[2px] h-12 bg-gray-200" />
      {/* Ícone de seta apontando para baixo */}
      <ChevronDown className="text-gray-300 -mt-2" size={20} />
    </div>
  );
}