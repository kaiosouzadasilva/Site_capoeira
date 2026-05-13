import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'motion/react';
import { Music, Drum, Radio } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundTexture } from './BackgroundTexture';

const instruments = [
  { icon: Music, name: 'Berimbau', description: 'A alma da capoeira - um instrumento que guia o ritmo e a energia da roda.' },
  { icon: Drum, name: 'Atabaque', description: 'O tambor que ancora o ritmo e nos conecta às tradições ancestrais.' },
  { icon: Radio, name: 'Pandeiro', description: 'O pandeiro brasileiro adicionando brilho às nossas canções.' }
];

const gameStyles = [
  { id: 'angola', name: 'Angola', description: 'O estilo tradicional, mais lento e estratégico, jogado próximo ao chão.', img: 'https://images.unsplash.com/photo-1518549945237-2e91b5e8f968?w=800&q=80' },
  { id: 'regional', name: 'Regional', description: 'Estilo moderno que incorpora técnicas rápidas, acrobáticas e métodos estruturados.', img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80' },
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
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Instrumentos Sagrados</h3>
            <div className="space-y-6">
              {instruments.map((inst) => (
                <div key={inst.name} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start gap-4">
                  <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <inst.icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{inst.name}</h4>
                    <p className="text-gray-600">{inst.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Estilos de Jogo</h3>
            <Tabs.Root value={activeStyle} onValueChange={setActiveStyle}>
              <Tabs.List className="flex gap-3 mb-6">
                {gameStyles.map((style) => (
                  <Tabs.Trigger key={style.id} value={style.id} className="flex-1 px-4 py-3 rounded-lg font-bold data-[state=active]:bg-yellow-500 data-[state=inactive]:bg-white shadow-sm border border-gray-200">
                    {style.name}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              {gameStyles.map((style) => (
                <Tabs.Content key={style.id} value={style.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback src={style.img} alt={style.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">{style.description}</p>
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