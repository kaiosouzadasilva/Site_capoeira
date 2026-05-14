import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, GraduationCap, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// 1. LIDERANÇA PRINCIPAL
const leaders = [
  {
    id: 'l1',
    name: 'Dermilson Brasil',
    nickname: 'Mestre Canário',
    rank: 'Mestre',
    image: '/membros/Mestre_Canario.jpg',
    bio: 'Mestre Canário dedicou mais de 40 anos à Capoeira, treinado diretamente sob mestres lendários na Bahia. É o pilar técnico e filosófico da ECLL.',
    specialties: ['Angola', 'Regional', 'Música', 'Filosofia'],
    yearsTraining: 42
  },
  {
    id: 'l2',
    name: 'Jarline da Silva',
    nickname: 'Contramestra Peteca',
    rank: 'Contramestra',
    image: '/membros/Contramestra_Peteca.jpg',
    bio: 'Contramestra Peteca traz 25 anos de experiência e especializa-se em métodos pedagógicos e no fortalecimento da presença feminina na capoeira.',
    specialties: ['Treinamento Infantil', 'Regional'],
    yearsTraining: 25
  },
  {
    id: 'l3',
    name: 'Joel Brito',
    nickname: 'Monitor Jhoy',
    rank: 'Monitor',
    image: '/membros/Monitor_Jhoy.png',
    bio: 'Monitor dedicado ao auxílio das aulas e desenvolvimento das acrobacias e movimentação técnica.',
    specialties: ['Acrobacias', 'Benguela'],
    yearsTraining: 12
  },
  {
    id: 'l4',
    name: 'Nome do Prateado',
    nickname: 'Contramestre Prateado',
    rank: 'Contramestre',
    image: '/membros/Contramestre_Prateado.jpg',
    bio: 'Contramestre dedicado à preservação dos fundamentos e auxílio no crescimento técnico do grupo.',
    specialties: ['Acrobacias', 'Benguela'],
    yearsTraining: 20
  },
];

// 2. FORMADOS E GRADUADOS
const graduates = [
  {
    id: 'g1',
    name: 'Nome do Aluno',
    nickname: 'Formado Chocolate',
    rank: 'Formado',
    image: '/membros/placeholder.jpg',
    bio: 'Aluno formado que contribui para a manutenção dos fundamentos e auxílio nas rodas do grupo.',
    specialties: ['Movimentação', 'Ritmo'],
    yearsTraining: 8
  },
  {
    id: 'g2',
    name: 'Kaio Souza',
    nickname: 'Estagiário Invergado',
    rank: 'Estagiário',
    image: '/membros/Invergado.png',
    bio: 'Lidera o trabalho de desenvolvimento técnico focado em fundamentos de Angola e musicalidade.',
    specialties: ['Toque', 'Canto', 'São Bento Grande'],
    yearsTraining: 10
  },
  {
    id: 'g3',
    name: 'Talisson',
    nickname: 'Estagiário Colorau',
    rank: 'Estagiário',
    image: '/membros/Estagiario_Colorau.jpg',
    bio: 'Desenvolve um trabalho focado na musicalidade e fundamentos tradicionais.',
    specialties: ['Toque', 'Canto', 'São Bento Grande'],
    yearsTraining: 10
  },
  {
    id: 'g4',
    name: 'Relâmpago',
    nickname: 'Formado Relâmpago',
    rank: 'Formado',
    image: '/membros/Formado_Relampago.jpg',
    bio: 'Focado no desenvolvimento da agilidade e fundamentos da Regional.',
    specialties: ['Toque', 'Canto', 'São Bento Grande'],
    yearsTraining: 10
  },
];

export function LeadershipHierarchy() {
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);

  return (
    <section id="lideranca" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Marca d'água de fundo */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none text-gray-900 dark:text-white">
         <GraduationCap size={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* CABEÇALHO: LIDERANÇA PRINCIPAL */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">Nossa Liderança</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Mestres e Professores que mantêm viva a chama da nossa tradição e técnica.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {leaders.map((person, index) => (
            <LeaderCard key={person.id} person={person} index={index} onClick={() => setSelectedPerson(person)} />
          ))}
        </div>

        {/* CABEÇALHO: FORMADOS E GRADUADOS */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-800 dark:text-gray-200 mb-4 uppercase tracking-tighter">Corpo de Graduados</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400">A base técnica que preserva nossos fundamentos no dia a dia.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {graduates.map((person, index) => (
            <LeaderCard key={person.id} person={person} index={index} onClick={() => setSelectedPerson(person)} isSmall />
          ))}
        </div>

        {/* Modal de Biografia com Suporte a Dark Mode */}
        <Dialog.Root open={!!selectedPerson} onOpenChange={(open) => !open && setSelectedPerson(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm animate-in fade-in" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 focus:outline-none transition-colors duration-300 border border-gray-100 dark:border-gray-700">
              {selectedPerson && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                  </Dialog.Close>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-lg shrink-0">
                        <ImageWithFallback src={selectedPerson.image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">{selectedPerson.nickname}</h3>
                        <p className="text-yellow-600 dark:text-yellow-400 font-bold uppercase text-xs tracking-widest mt-1">{selectedPerson.rank}</p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{selectedPerson.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4 uppercase tracking-tighter">
                    <Clock className="w-4 h-4 text-yellow-500" /> {selectedPerson.yearsTraining} anos de capoeira
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-xs uppercase">Sobre a trajetória:</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic text-sm">"{selectedPerson.bio}"</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-xs uppercase tracking-wider">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPerson.specialties.map((spec: string) => (
                        <span key={spec} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-md text-[10px] font-black text-gray-700 dark:text-gray-300 uppercase border border-gray-200 dark:border-gray-600">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}

function LeaderCard({ person, index, onClick, isSmall = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700 group overflow-hidden ${isSmall ? 'scale-100' : 'scale-100'}`}
    >
      <div className={`${isSmall ? 'aspect-square' : 'aspect-[4/5]'} relative overflow-hidden bg-gray-200 dark:bg-gray-700`}>
        <ImageWithFallback 
            src={person.image} 
            alt={person.nickname} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
        />
        <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">
          {person.rank}
        </div>
      </div>
      
      <div className={`p-5 ${isSmall ? 'text-center' : 'text-left'}`}>
        <h3 className={`${isSmall ? 'text-base' : 'text-xl'} font-black text-gray-900 dark:text-white mb-1 uppercase tracking-tighter transition-colors`}>
          {person.nickname}
        </h3>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest truncate">{person.name}</p>
        
        {!isSmall && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-[10px] font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest">Ver Bio</span>
            <Award size={14} className="text-yellow-500" />
          </div>
        )}
      </div>
    </motion.div>
  );
}