import { motion } from 'motion/react';
import { Award, BookOpen } from 'lucide-react';

export function MemorialPatriarca() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-widest text-sm">In Memoriam</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-2">Mestre Camisa Furada</h2>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col md:row-reverse md:flex-row">
          <div className="w-full md:w-1/2 h-96 md:h-auto">
            <img 
              src="/membros/Mestre_Camisa_furada.jpg" 
              alt="Mestre Camisa Furada" 
              className="w-full h-full object-cover object-top grayscale contrast-125"
            />
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
              "A semente plantada com verdade nunca deixa de florescer."
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Patriarca da nossa linhagem e fundador do Instituto Mestre Camisa Furada, dedicou sua vida à preservação da capoeira como ferramenta de transformação social.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Award className="text-yellow-500" />
                <span className="font-bold dark:text-white text-sm">Fundador da Escola Berimbau dos Palmares</span>
              </div>
              <div className="flex items-center gap-4">
                <BookOpen className="text-yellow-500" />
                <span className="font-bold dark:text-white text-sm">Criador do Instituto Mestre Camisa Furada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}