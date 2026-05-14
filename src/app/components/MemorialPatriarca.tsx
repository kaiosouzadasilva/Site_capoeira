import { motion } from 'motion/react';
import { Award, BookOpen, Heart } from 'lucide-react';
// Certifique-se de que o caminho da imagem está correto
import fotoCamisa from '../../imports/Mestre_Camisa_furada.jpg';

export function MemorialPatriarca() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Elemento de fundo decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 dark:bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Cabeçalho do Memorial */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-sm mb-2 block"
          >
            In Memoriam
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6"
          >
            O Patriarca da Nossa Linhagem
          </motion.h2>
          <div className="w-24 h-1 bg-orange-600 dark:bg-orange-500 mx-auto" />
        </div>

        {/* Card do Memorial */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row transition-colors duration-300">
          
          {/* Lado Esquerdo - Foto Sépia/Preto e Branco */}
          <div className="w-full md:w-2/5 relative h-96 md:h-auto">
            <img 
              src={fotoCamisa} 
              alt="Mestre Camisa Furada" 
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
            />
            {/* Gradiente por cima da foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Nome e Datas sobre a foto */}
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-3xl font-bold mb-1">Mestre Camisa Furada</h3>
              <p className="text-orange-300 font-medium tracking-wider">★ 19XX ✝ 2025</p> 
            </div>
          </div>

          {/* Lado Direito - Texto e Legado */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
              "A verdadeira capoeira não morre quando o mestre parte, ela floresce nas sementes que ele plantou ao longo de sua jornada."
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Nosso patriarca dedicou sua vida inteira à preservação dos fundamentos, da música e da filosofia da capoeira. Seu legado transcendeu a roda, tocando a vida de centenas de alunos e formando cidadãos de bem através da arte.
            </p>

            {/* Fundações do Mestre */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                Obras e Fundações
              </h4>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-orange-700 dark:text-orange-400" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white">Escola de Capoeira Berimbau dos Palmares</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Grupo fundador de onde a nossa semente, a ECLL, germinou.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-orange-700 dark:text-orange-400" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 dark:text-white">Instituto Mestre Camisa Furada</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Projeto social e institucional focado em expandir o acesso à cultura, cidadania e ao esporte.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}