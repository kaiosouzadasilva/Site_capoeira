import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, MapPin, Star, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// --- DADOS ORGANIZADOS PELOS NOVOS GRUPOS ---
const mestreTopo = [
  { id: 'm1', nickname: 'Mestre Canário', rank: 'Mestre', image: '/membros/Mestre_Canario.jpg', colors: ['#FFFFFF', '#e5e7eb'], polo: 'Canto do Canário' }
];

const liderancaTecnica = [
  // { id: 'l1', nickname: 'Contramestre Ely', rank: 'Contramestre', image: '/membros/Contramestre_Ely.jpg', colors: ['#FFFFFF', '#3b82f6'] },
  { id: 'l2', nickname: 'Contramestre Prateado', rank: 'Contramestre', image: '/membros/Contramestre_Prateado.jpg', colors: ['#FFFFFF', '#3b82f6'], polo: 'Polo Comunitário' },
  { id: 'l3', nickname: 'Contramestra Peteca', rank: 'Contramestra', image: '/membros/Contramestra_Peteca.jpg', colors: ['#FFFFFF', '#3b82f6'], polo: 'Canto do Canário' },
  { id: 'l4', nickname: 'Monitor Jhoy', rank: 'Monitor', image: '/membros/Monitor_Jhoy.png', colors: ['#FFFFFF', '#22c55e'], polo: 'Novo Aleixo' },
];

const formadosEstagiarios = [
  { id: 'l5', nickname: 'Formado Relâmpago', rank: 'Formado', image: '/membros/Formado_Relampago.png', colors: ['#eab308', '#22c55e', '#3b82f6']},
  { id: 'l6', nickname: 'Formado Chocolate', rank: 'Formado', image: '/membros/Formado_Chocolate.png', colors: ['#eab308', '#22c55e', '#3b82f6']},
  { id: 'b5', nickname: 'Est. Invergado', rank: 'Estagiário', image: '/membros/Invergado.png', colors: ['#3b82f6', '#eab308'], polo: 'Novo Aleixo' },
  { id: 'b6', nickname: 'Est. Colorau', rank: 'Estagiário', image: '/membros/Estagiario_Colorau.jpg', colors: ['#3b82f6', '#eab308'], polo: 'Canto do Canário' },
];

const graduadosAlunos = [
  { id: 'b1', nickname: 'Graduado Francês', rank: 'Graduado', image: '/membros/foto_frances.jpeg', colors: ['#22c55e', '#3b82f6'], polo: 'Novo Aleixo' },
  { id: 'b2', nickname: 'Graduado Zumbi', rank: 'Graduado', image: '/membros/foto_zumbi.jpeg', colors: ['#22c55e', '#eab308'], polo: 'Novo Aleixo' },
  { id: 'a1', nickname: 'Aluno Ventania', rank: 'Aluno', image: '/membros/placeholder.jpg', colors: ['#22c55e'], polo: 'Novo Aleixo' },
  { id: 'a2', nickname: 'Aluna Sereia', rank: 'Aluno', image: '/membros/placeholder.jpg', colors: ['#22c55e'], polo: 'Polo Comunitário' },
];

export function LeadershipHierarchy() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-transparent dark:bg-gray-950 transition-colors duration-300 relative">   

    <div className="max-w-7xl mx-auto relative">
        
        {/* TIMELINE */}
        <div className="absolute left-4 md:left-1/2 top-40 bottom-0 w-1 hidden md:block bg-gradient-to-b from-white via-blue-500 via-green-500 via-yellow-500 to-gray-300 opacity-20" />

        {/* HEADER */}
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Hieraquia do grupo</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4" />
        </div>

        {/* MESTRADO */}
        <div className="mb-32 flex flex-col items-center relative z-10">
          <div className="flex items-center gap-3 mb-10 text-yellow-600 font-black uppercase text-[10px] tracking-widest">
            <Star size={14} /> Mestre
          </div>
          <div className="max-w-sm w-full">
            {mestreTopo.map(person => (
              <LeaderCard key={person.id} person={person} isLarge onClick={() => navigate(`/lideranca/${person.id}`)} />
            ))}
          </div>
        </div>

        {/* LIDERANÇA TÉCNICA */}
        <div className="mb-32 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-yellow-500" />
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Monitor a Contra-Mestres</h3>
            <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {liderancaTecnica.map(person => (
              <LeaderCard key={person.id} person={person} onClick={() => navigate(`/lideranca/${person.id}`)} />
            ))}
          </div>
        </div>

        {/* ÁREA 1: FORMADOS E ESTAGIÁRIOS */}
        <div className="mb-32 relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="text-blue-500" />
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Formados e Estagiários</h3>
            <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {formadosEstagiarios.map(person => (
              <LeaderCard key={person.id} person={person} onClick={() => navigate(`/lideranca/${person.id}`)} />
            ))}
          </div>
        </div>

        {/* ÁREA 2: GRADUADOS E ALUNOS */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Users className="text-green-500" />
            <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Graduados e Alunos</h3>
            <div className="h-px flex-1 bg-gray-100 dark:bg-gray-800" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {graduadosAlunos.map(person => (
              <LeaderCard key={person.id} person={person} isSmall onClick={() => navigate(`/lideranca/${person.id}`)} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// CARD COM BORDA DE CORDEL E CORES NATURAIS
function LeaderCard({ person, onClick, isLarge, isSmall }: any) {
  const borderGradient = person.colors.length > 1 
    ? `linear-gradient(135deg, ${person.colors.join(', ')})`
    : person.colors[0];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="relative group cursor-pointer"
    >
      {/* Efeito Glow */}
      <div className="absolute -inset-1 rounded-[2.5rem] opacity-0 group-hover:opacity-30 blur-xl transition-all" style={{ background: borderGradient }} />
      
      <div className="relative p-[3px] rounded-[2rem] overflow-hidden shadow-2xl" style={{ background: borderGradient }}>
        <div className="bg-white dark:bg-gray-900 rounded-[1.85rem] overflow-hidden">
          
          <div className={`relative ${isSmall ? 'aspect-square' : 'aspect-[4/5]'} overflow-hidden`}>
            {/* Imagem Natural */}
            <ImageWithFallback 
              src={person.image} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Tag de Rank */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[8px] font-black uppercase border border-white/10">
              {person.rank}
            </div>
          </div>
          
          <div className={`${isSmall ? 'p-3' : 'p-5'} text-center`}>
            <h4 className={`font-black text-gray-900 dark:text-white uppercase tracking-tighter ${isLarge ? 'text-2xl' : isSmall ? 'text-[10px]' : 'text-lg'}`}>
              {person.nickname}
            </h4>
            {!isSmall && (
              <div className="mt-2 flex items-center justify-center gap-1 text-gray-400 text-[9px] font-bold uppercase">
                <MapPin size={10} className="text-yellow-500" /> {person.polo}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}