import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

const categories = ['Todos', 'Rodas', 'Treinos', 'Eventos'];

const galleryItems = [
  { id: 1, category: 'Rodas', title: 'Roda de Sexta', image: '/galeria/roda1.jpg' },
  { id: 2, category: 'Treinos', title: 'Treino de Fundamento', image: '/galeria/treino1.jpg' },
  { id: 3, category: 'Eventos', title: 'Batizado 2024', image: '/galeria/evento1.jpg' },
];

// O NOME AQUI TEM QUE SER EXATAMENTE "Gallery"
export function Gallery() {
  const [filter, setFilter] = useState('Todos');

  const filteredImages = filter === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Galeria de Fotos</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 mb-8" />
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-transparent hover:border-yellow-500 transition-all shadow-xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- SEÇÃO DE ÁLBUNS EXTERNOS (Google Fotos) --- */}
        <div className="mt-24 border-t border-gray-100 dark:border-gray-800 pt-16 text-center">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Álbuns Completos</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8">Acesse nossa biblioteca completa no Google Fotos</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="#" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border-2 border-transparent hover:border-yellow-500 transition-all group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black">
                            <Camera size={24} />
                        </div>
                        <div className="text-left">
                            <h4 className="font-black text-gray-900 dark:text-white uppercase">Batizado 2024</h4>
                            <p className="text-xs text-gray-500">Clique para ver fotos externas</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}