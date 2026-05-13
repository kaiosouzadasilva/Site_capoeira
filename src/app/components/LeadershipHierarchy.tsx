import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'motion/react';
import { X, Award, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// 1. LIDERANÇA (Mestres e Professores com projetos)
const leaders = [
  {
    id: '1',
    name: 'Dermilson Brasil',
    nickname: 'Mestre Canário',
    rank: 'Mestre',
    image: '@/imports/Mestre_Canário.jpg',
    bio: 'Mestre Canário dedicou mais de 40 anos à Capoeira, treinado diretamente sob mestres lendários na Bahia...',
    specialties: ['Angola', 'Regional', 'Música', 'Filosofia'],
    yearsTraining: 42
  },
  {
    id: '2',
    name: 'Jarline da Silva',
    nickname: 'Contramestra Peteca',
    rank: 'Contramestra',
    image: '@/imports/Contramestra_Peteca.jpg',
    bio: 'Contramestra Peteca traz 25 anos de experiência e especializa-se em métodos pedagógicos...',
    specialties: ['Treinamento Infantil', 'Regional'],
    yearsTraining: 25
  },
  {
    id: 'g2',
    name: 'Joel Brito',
    nickname: 'Monitor Jhoy',
    rank: 'Monitor',
    image: '@/imports/Monitor_Jhoy.jpg',
    bio: 'Monitor dedicado ao auxílio das aulas e desenvolvimento das acrobacias.',
    specialties: ['Acrobacias', 'Benguela'],
    yearsTraining: 12
},
  {
    id: 'g2',
    name: 'Nome do Prateado',
    nickname: 'Contramestre Prateado',
    rank: 'Contramestre',
    image: '@/imports/Monitor_Jhoy.jpg',
    bio: 'Contramestre dedicado ao auxílio das aulas e desenvolvimento das acrobacias.',
    specialties: ['Acrobacias', 'Benguela'],
    yearsTraining: 12
},
];

// 2. FORMADOS E GRADUADOS (A base técnica do grupo)
const graduates = [
  {
    id: 'g1',
    name: 'Nome do Aluno',
    nickname: 'Graduado Exemplo',
    rank: 'Graduado',
    image: '@/imports/placeholder.jpg',
    bio: 'Aluno formado que contribui para a manutenção dos fundamentos e auxílio nas rodas do grupo.',
    specialties: ['Movimentação', 'Ritmo'],
    yearsTraining: 8
  },
  {
    id: '5',
    name: 'Kaio Souza',
    nickname: 'Estagiário Invergado',
    rank: 'Estagiário',
    image: '@/imports/Estagiário_Invergado.jpg',
    bio: 'Lidera o trabalho de desenvolvimento técnico focado em fundamentos de Angola.',
    specialties: ['Toque', 'Canto','São Bento Grande'],
    yearsTraining: 10
  },
  {
    id: '5',
    name: 'Kaio Souza',
    nickname: 'Estagiário Invergado',
    rank: 'Estagiário',
    image: '@/imports/Estagiário_Invergado.jpg',
    bio: 'Lidera o trabalho de desenvolvimento técnico focado em fundamentos de Angola.',
    specialties: ['Toque', 'Canto','São Bento Grande'],
    yearsTraining: 10
  },
  {
    id: '5',
    name: 'Kaio Souza',
    nickname: 'Estagiário Invergado',
    rank: 'Estagiário',
    image: '@/imports/Estagiário_Invergado.jpg',
    bio: 'Lidera o trabalho de desenvolvimento técnico focado em fundamentos de Angola.',
    specialties: ['Toque', 'Canto','São Bento Grande'],
    yearsTraining: 10
  },

];

export function LeadershipHierarchy() {
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);

  return (
    <section id="lideranca" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Marca d'água de fundo (opcional) */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
         <GraduationCap size={400} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SEÇÃO: LIDERANÇA PRINCIPAL */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Liderança</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600">Mestres e Professores à frente dos trabalhos da ECLL</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {leaders.map((person, index) => (
            <LeaderCard key={person.id} person={person} index={index} onClick={() => setSelectedPerson(person)} />
          ))}
        </div>

        {/* SEÇÃO: FORMADOS E GRADUADOS */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Corpo de Formados</h2>
          <div className="w-16 h-1 bg-yellow-300 mx-auto mb-6" />
          <p className="text-gray-600">Alunos graduados que preservam nossa técnica e tradição</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {graduates.map((person, index) => (
            <LeaderCard key={person.id} person={person} index={index} onClick={() => setSelectedPerson(person)} isSmall />
          ))}
        </div>

        {/* Modal Único para Biografias */}
        <Dialog.Root open={!!selectedPerson} onOpenChange={(open) => !open && setSelectedPerson(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50 animate-in fade-in" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-8 focus:outline-none">
              {selectedPerson && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <Dialog.Close className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors">
                    <X className="w-6 h-6" />
                  </Dialog.Close>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-500">
                        <ImageWithFallback src={selectedPerson.image} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedPerson.nickname}</h3>
                        <p className="text-yellow-600 font-semibold">{selectedPerson.rank}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 border-b pb-4">
                    <Award className="w-4 h-4 text-yellow-500" /> {selectedPerson.yearsTraining} anos de trajetória
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{selectedPerson.bio}"</p>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPerson.specialties.map((spec: string) => (
                        <span key={spec} className="bg-yellow-50 px-3 py-1 rounded-full text-xs font-medium text-yellow-800 border border-yellow-100">
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

// Sub-componente para os Cards (evita repetição de código)
function LeaderCard({ person, index, onClick, isSmall = false }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer border border-gray-100 group overflow-hidden ${isSmall ? 'scale-95' : 'scale-100'}`}
    >
      <div className={`${isSmall ? 'aspect-square' : 'aspect-[3/4]'} relative overflow-hidden`}>
        <ImageWithFallback 
            src={person.image} 
            alt={person.nickname} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
          {person.rank}
        </div>
      </div>
      <div className={`p-5 text-center ${isSmall ? 'bg-gray-50/50' : ''}`}>
        <h3 className={`${isSmall ? 'text-lg' : 'text-xl'} font-bold text-gray-900 mb-1`}>{person.nickname}</h3>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter mb-3">{person.name}</p>
        <div className="pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-yellow-600 text-xs font-bold flex items-center justify-center gap-1">
                BIO <Award size={12} />
            </span>
        </div>
      </div>
    </motion.div>
  );
}