import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Imagem de Fundo - Usando caminho da pasta public */}
      <img 
        src="/membros/Imagem_do_grupo.png" 
        alt="Grupo ECLL" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[30%]"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-5xl font-black text-white mb-4 tracking-tighter"
        >
          Escola de capoeira <span className="text-yellow-500">Luta de Libertação</span>
        </motion.h1>
        <p className="text-white text-xl md:text-1xl font-bold tracking-widest uppercase italic">
          Preservando a ancestralidade da nossa arte brasileira
        </p>
      </div>
    </section>
  );
}