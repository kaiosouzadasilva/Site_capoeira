import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'motion/react';
import { X, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const leaders = [
  {
    id: '1',
    name: 'João Silva',
    nickname: 'Mestre Coruja',
    rank: 'Mestre',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Mestre Coruja dedicou mais de 40 anos à Capoeira, treinado diretamente sob mestres lendários na Bahia. Fundou nossa escola com a visão de preservar tradições autênticas.',
    specialties: ['Angola', 'Música e Cantos', 'Filosofia'],
    yearsTraining: 42
  },
  {
    id: '2',
    name: 'Maria Santos',
    nickname: 'Contramestra Lua',
    rank: 'Contramestra',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Contramestra Lua traz 25 anos de experiência e especializa-se em métodos pedagógicos para crianças e jovens. Desenvolveu nosso currículo que equilibra tradição com ensino moderno.',
    specialties: ['Treinamento Infantil', 'Regional'],
    yearsTraining: 25
  },
  {
    id: '3',
    name: 'Carlos Mendes',
    nickname: 'Contramestre Relâmpago',
    rank: 'Contramestre',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Conhecido por seu estilo acrobático explosivo e profundo conhecimento de sequências avançadas. Lidera nossa equipe de competição.',
    specialties: ['Acrobacias', 'Benguela'],
    yearsTraining: 22
  }
];

export function LeadershipHierarchy() {
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  return (
    <section id="lideranca" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Liderança</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedLeader(leader)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform border border-gray-100"
            >
              <div className="aspect-[3/4] relative">
                <ImageWithFallback src={leader.image} alt={leader.nickname} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                  {leader.rank}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{leader.nickname}</h3>
                <p className="text-gray-500 mb-4">{leader.name}</p>
                <span className="text-yellow-600 font-bold flex items-center justify-center gap-2">
                  Ver Biografia <Award className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal da Biografia */}
        <Dialog.Root open={!!selectedLeader} onOpenChange={(open) => !open && setSelectedLeader(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/70 z-50" />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-8">
              {selectedLeader && (
                <div>
                  <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-black">
                    <X className="w-6 h-6" />
                  </Dialog.Close>
                  <h3 className="text-3xl font-bold mb-2">{selectedLeader.nickname}</h3>
                  <div className="flex items-center gap-2 text-yellow-600 font-bold mb-6">
                    <Award className="w-5 h-5" /> {selectedLeader.yearsTraining} anos de capoeira
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedLeader.bio}</p>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLeader.specialties.map((spec: string) => (
                        <span key={spec} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{spec}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}