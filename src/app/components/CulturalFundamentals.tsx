import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'motion/react';
import { Music, Drum, Radio, Bell, CircleDot } from 'lucide-react'; 
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundTexture } from './BackgroundTexture';

const instruments = [
  { 
    icon: Music, 
    name: 'Berimbau', 
    description: 'A alma da capoeira - um instrumento que guia o ritmo e a energia da roda.' 
  },
  { 
    icon: Drum, 
    name: 'Atabaque', 
    description: 'O tambor que ancora o ritmo e nos conecta às tradições ancestrais.' 
  },
  { 
    icon: CircleDot, 
    name: 'Pandeiro', 
    description: 'O toque vibrante que adiciona preenchimento e brilho às nossas canções.' 
  },
  { 
    icon: Radio, 
    name: 'Reco-reco', 
    description: 'O som do raspado que preenche a cadência. Tradicionalmente esculpido na madeira da Árvore Macumbe, carrega a voz da floresta e da ancestralidade.' 
  },
  { 
    icon: Bell, 
    name: 'Agogô', 
    description: 'O som metálico que corta a roda com clareza, acentuando o ritmo e guiando a marcação dos pés.' 
  },
];

const gameStyles = [
  { 
    id: 'angola', 
    name: 'Angola', 
    description: 'O estilo tradicional, mais lento e estratégico, jogado próximo ao chão. Na ECLL, a Angola é preservada como o fundamento da malícia e do respeito aos ancestrais.', 
    img: 'https://images.unsplash.com/photo-1518549945237-2e91b5e8f968?w=800&q=80' 
  },
  { 
    id: 'regional', 
    name: 'Regional', 
    description: 'Um jogo de rapidez, técnica e disciplina. Onde a agilidade e o atletismo se encontram com a metodologia rítmica do Mestre Bimba.', 
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80' 
  },
];

export function CulturalFundamentals() {
  const [activeStyle, setActiveStyle] = useState('angola');

  return (
    <section id="fundamentos" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      <BackgroundTexture />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Fundamentos Culturais</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Coluna dos Instrumentos */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-yellow-500 pl-4">Instrumentos Utilizados</h3>
            <div className="space-y-6">
              {instruments.map((inst) => (
                <div key={inst.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start gap-4 hover:border-yellow-200 transition-colors">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <inst.icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-gray-800">{inst.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{inst.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna dos Estilos - Agora apenas Angola e Regional */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-yellow-500 pl-4">Estilos de Jogo</h3>
            <Tabs.Root value={activeStyle} onValueChange={setActiveStyle}>
              <Tabs.List className="flex gap-2 mb-6 bg-gray-200 p-1 rounded-xl">
                {gameStyles.map((style) => (
                  <Tabs.Trigger 
                    key={style.id} 
                    value={style.id} 
                    className="flex-1 px-4 py-3 rounded-lg font-bold transition-all data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=inactive]:text-gray-500"
                  >
                    {style.name}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {gameStyles.map((style) => (
                <Tabs.Content key={style.id} value={style.id} className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback src={style.img} alt={style.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 leading-relaxed italic">"{style.description}"</p>
                  </div>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}