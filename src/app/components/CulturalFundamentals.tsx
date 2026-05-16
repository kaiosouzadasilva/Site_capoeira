import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Music, Drum, Radio, Bell, CircleDot, ArrowRight } from 'lucide-react'; 
import { ImageWithFallback } from './figma/ImageWithFallback';
import { BackgroundTexture } from './BackgroundTexture';

const instruments = [
  { 
    id: 'berimbau',
    icon: Music, 
    name: 'Berimbau', 
    description: 'A alma da capoeira - um instrumento que guia o ritmo e a energia da roda.' 
  },
  { 
    id: 'atabaque',
    icon: Drum, 
    name: 'Atabaque', 
    description: 'O tambor que ancora o ritmo e nos conecta às tradições ancestrais.' 
  },
  { 
    id: 'pandeiro',
    icon: CircleDot, 
    name: 'Pandeiro', 
    description: 'O toque vibrante que adiciona preenchimento e brilho às nossas canções.' 
  },
  { 
    id: 'reco-reco',
    icon: Radio, 
    name: 'Reco-reco', 
    description: 'O som do raspado que preenche a cadência, esculpido tradicionalmente na madeira.' 
  },
  { 
    id: 'agogo',
    icon: Bell, 
    name: 'Agogô', 
    description: 'O som metálico que corta a roda com clareza, acentuando o ritmo e guiando a marcação.' 
  },
];

const gameStyles = [
  { 
    id: 'angola', 
    name: 'Angola', 
    description: 'O estilo tradicional, mais lento e estratégico, jogado próximo ao chão. Na ECLL, a Angola é preservada como o fundamento da malícia e do respeito aos ancestrais.', 
    img: '/membros/Mestre_Pastinha.jpg' 
  },
  { 
    id: 'regional', 
    name: 'Regional', 
    description: 'Um jogo de rapidez, técnica e disciplina. Onde a agilidade e o atletismo se encontram com a metodologia rítmica do Mestre Bimba.', 
    img: '/membros/mestre_bimba.jpg' 
  },
];

export function CulturalFundamentals() {
  const [activeStyle, setActiveStyle] = useState('angola');

  return (
    // Utilizamos bg-stone-50 (um tom de areia bem claro) em vez do cinza frio
    <section id="fundamentos" className="py-24 px-6 bg-stone-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <BackgroundTexture />
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">A Raiz da Nossa Arte</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">
            Fundamentos Culturais
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* INSTRUMENTOS (Agora são botões clicáveis) */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase mb-8 border-l-4 border-yellow-500 pl-4">Os Instrumentos</h3>
            <div className="space-y-4">
              {instruments.map((inst) => (
                <Link 
                  to={`/fundamentos/instrumento/${inst.id}`} 
                  key={inst.id} 
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-stone-100 dark:border-gray-800 flex items-center justify-between group hover:border-yellow-500 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <inst.icon className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-1 text-gray-900 dark:text-white uppercase">{inst.name}</h4>
                      <p className="text-stone-600 dark:text-gray-400 text-sm leading-relaxed">{inst.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="text-stone-300 dark:text-gray-600 group-hover:text-yellow-500 transition-colors shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ESTILOS DE JOGO */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase mb-8 border-l-4 border-yellow-500 pl-4">Estilos de Jogo</h3>
            <Tabs.Root value={activeStyle} onValueChange={setActiveStyle}>
              
              <Tabs.List className="flex gap-2 mb-6 bg-stone-200/50 dark:bg-gray-800 p-1.5 rounded-2xl">
                {gameStyles.map((style) => (
                  <Tabs.Trigger 
                    key={style.id} 
                    value={style.id} 
                    className="flex-1 px-4 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:shadow-md data-[state=inactive]:text-stone-500 dark:data-[state=inactive]:text-gray-400"
                  >
                    {style.name}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>

              {gameStyles.map((style) => (
                <Tabs.Content key={style.id} value={style.id} className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-xl overflow-hidden border border-stone-100 dark:border-gray-800">
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <ImageWithFallback src={style.img} alt={style.name} className="w-full h-full object-cover object-top opacity-80 transform hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <p className="text-stone-700 dark:text-gray-300 leading-relaxed text-lg mb-8">"{style.description}"</p>
                    <Link 
                      to={`/fundamentos/estilo/${style.id}`}
                      className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-stone-100 dark:bg-gray-800 text-gray-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-xl border border-stone-200 dark:border-gray-700 hover:border-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-all group"
                    >
                      Aprofundar na História <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
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