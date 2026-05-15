import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// --- DADOS ORGANIZADOS POR NÍVEL ---

const mestreTopo = [
  {
    id: 'm1',
    name: 'Dermilson Brasil',
    nickname: 'Mestre Canário',
    rank: 'Mestre',
    image: '/membros/Mestre_Canario.jpg',
    bio: 'Mestre Canário dedicou mais de 40 anos à Capoeira, sendo o pilar técnico e filosófico da ECLL.',
    specialties: ['Angola', 'Regional', 'Música'],
    yearsTraining: 42
  }
];

const liderancaIntermediaria = [
  { id: 'l1', name: 'Nome do Ely', nickname: 'Contramestre Ely', rank: 'Contramestre', image: '/membros/Contramestre_Ely.jpg', bio: 'Experiência e dedicação ao fundamento.', specialties: ['Técnica', 'Jogo'], yearsTraining: 28 },
  { id: 'l2', name: 'Nome do Prateado', nickname: 'Contramestre Prateado', rank: 'Contramestre', image: '/membros/Contramestre_Prateado.jpg', bio: 'Referência em fundamentos e acrobacias.', specialties: ['Benguela', 'Acrobacias'], yearsTraining: 20 },
  { id: 'l3', name: 'Jarline da Silva', nickname: 'Contramestra Peteca', rank: 'Contramestra', image: '/membros/Contramestra_Peteca.jpg', bio: 'Pedagogia e força feminina na capoeira.', specialties: ['Infantil', 'Regional'], yearsTraining: 25 },
  { id: 'l4', name: 'Joel Brito', nickname: 'Monitor Jhoy', rank: 'Monitor', image: '/membros/Monitor_Jhoy.png', bio: 'Dedicação total ao ensino e técnica.', specialties: ['Movimentação'], yearsTraining: 12 },
  { id: 'l5', name: 'Relâmpago', nickname: 'Formado Relâmpago', rank: 'Formado', image: '/membros/Formado_Relâmpago.png', bio: 'Dedicação total ao ensino e técnica.', specialties: ['Movimentação'], yearsTraining: 12 },
  { id: 'l6', name: 'Chocolate', nickname: 'Formado Chocolate', rank: 'Formado', image: '/membros/Formado_Chocolate.png', bio: 'Dedicação total ao ensino e técnica.', specialties: ['Movimentação'], yearsTraining: 12 },
];

const baseGraduados = [
  { id: 'b1', nickname: 'Graduado Francês', rank: 'Graduado', image: '/membros/foto_frances.jpeg'},
  { id: 'b2', nickname: 'Graduado Zumbi', rank: 'Graduado', image: '/membros/foto_zumbi.jpeg' },
  { id: 'b3', nickname: 'Graduado Shrek', rank: 'Graduado', image: '/membros/placeholder.jpg' },
  { id: 'b4', nickname: 'Graduado Calanguinho', rank: 'Graduado', image: '/membros/placeholder.jpg' },
  { id: 'b5', nickname: 'Estagiário Invergado', rank: 'Estagiário', image: '/membros/Invergado.png' },
  { id: 'b6', nickname: 'Estagiário Colorau', rank: 'Estagiário', image: '/membros/Estagiario_Colorau.jpg' },
];

const baseAlunos = [
  { id: 'a1', nickname: 'Aluno do João Carlos', rank: 'Aluno', image: '/membros/placeholder.jpg' },
  { id: 'a2', nickname: 'Aluno do Mariana Silva', rank: 'Aluno', image: '/membros/placeholder.jpg' },
  { id: 'c1', nickname: 'Aluno do Pedro Henrique', rank: 'Aluno', image: '/membros/placeholder.jpg' },
  { id: 'c2', nickname: 'Aluno do Adriana', rank: 'Aluno', image: '/membros/placeholder.jpg' },
  { id: 'd1', nickname: 'Aluno do Lucas Mendes', rank: 'Aluno', image: '/membros/placeholder.jpg' },
  { id: 'd2', nickname: 'Aluno do Beatriz Costa', rank: 'Aluno', image: '/membros/placeholder.jpg' },
];

// --- COMPONENTE PRINCIPAL ---

export function LeadershipHierarchy() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Corpo de Graduados</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4" />
        </div>

        {/* --- NÍVEL 1: O MESTRE (ISOLADO) --- */}
        <div className="flex justify-center mb-24">
          <div className="max-w-sm w-full">
            <p className="text-center text-xs font-black text-yellow-600 dark:text-yellow-400 uppercase tracking-widest mb-4">
              Grão-Mestre
            </p>
            {mestreTopo.map(person => (
              <LeaderCard 
                key={person.id} 
                person={person} 
                onClick={() => navigate(`/lideranca/${person.id}`)} 
                isLarge={true} 
              />
            ))}
          </div>
        </div>

        {/* --- NÍVEL 2: CONTRAMESTRES E MONITORES --- */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Award className="text-yellow-500" />
            <h3 className="text-xl font-bold dark:text-white uppercase tracking-tight">Liderança Técnica</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {liderancaIntermediaria.map(person => (
               <LeaderCard 
                key={person.id} 
                person={person} 
                onClick={() => navigate(`/lideranca/${person.id}`)} 
                
              />
            ))}
          </div>
        </div>

        {/* --- NÍVEL 3: GRADUADOS E ESTAGIÁRIOS --- */}
        <div>
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Users className="text-yellow-500" />
            <h3 className="text-xl font-bold dark:text-white uppercase tracking-tight">Graduados e Estagiários</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {baseGraduados.map(person => (
               <LeaderCard 
                key={person.id} 
                person={person} 
                onClick={() => navigate(`/lideranca/${person.id}`)} 
                isSmall={true}
              />
            ))} 
          </div>
        </div>

        {/* --- NÍVEL 4: ALUNOS --- */}
        < div className="mt-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Users className="text-yellow-500" />
            <h3 className="text-xl font-bold dark:text-white uppercase tracking-tight">Alunos</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {baseAlunos.map(person => (
               <LeaderCard 
                key={person.id} 
                person={person} 
                onClick={() => navigate(`/lideranca/${person.id}`)} 
                isSmall={true}
              />
            ))} 
          </div>
         <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              {/* Adicione aqui qualquer informação adicional sobre os alunos */}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- CARD COMPONENTIZADO ---

function LeaderCard({ person, onClick, isLarge, isSmall }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      className={`
        bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-4 border-gray-100 dark:border-gray-700 
        hover:border-yellow-500 transition-all duration-300 shadow-md group
        ${onClick ? 'cursor-pointer' : ''}
      `}
    >
      <div className={`relative overflow-hidden ${isSmall ? 'aspect-square' : 'aspect-[4/5]'}`}>
        <ImageWithFallback 
          src={person.image} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {!isSmall && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded text-[10px] font-black uppercase">
            {person.rank}
          </div>
        )}
      </div>
      <div className={`${isSmall ? 'p-3' : 'p-5'} text-center`}>
        <h4 className={`font-black text-gray-900 dark:text-white uppercase tracking-tighter ${isLarge ? 'text-2xl' : isSmall ? 'text-sm' : 'text-lg'}`}>
          {person.nickname}
        </h4>
        {!isSmall && <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">{person.name}</p>}
      </div>
    </motion.div>
  );
}