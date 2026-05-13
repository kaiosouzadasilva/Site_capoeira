import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// Adicione esta linha com o nome exato do seu ficheiro:

import fotoGrupo from "@/imports/Imagem_do_grupo.png";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Imagem de Fundo com Escurecimento */}
      <div className="absolute inset-0">
        <ImageWithFallback
        src={fotoGrupo} 
        alt="Roda de Capoeira do meu grupo"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Conteúdo Central */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Tradição, Movimento e Respeito
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Descubra a pedagogia da Capoeira enraizada nas tradições ancestrais e na força comunitária
          </motion.p>

          <motion.a
            href="#metodologia"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg"
          >
            Conheça Nosso Método
          </motion.a>
        </div>
      </div>
    </section>
  );
}