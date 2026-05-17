// src/app/components/LocationsMap.tsx
import { motion } from 'framer-motion';
import { MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { polosData } from '../data/polos'; // 👇 Importando os dados limpos

export function LocationsMap() {
  return (
    <section id="locais" className="py-24 px-6 bg-transparent dark:bg-gray-950 transition-colors duration-300">      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">Locais de Treinamento</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 font-medium">Encontre o polo mais próximo e junte-se à nossa roda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {polosData.map((polo, index) => (
            <motion.div
              key={polo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-lg p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:border-yellow-500/30 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">{polo.name}</h3>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(polo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 text-xs mt-2 font-medium hover:text-yellow-600 dark:hover:text-yellow-500 flex items-center gap-1 group/link inline-block underline underline-offset-2 decoration-gray-300 dark:decoration-gray-700"
                      title="Ver rotas no Google Maps"
                    >
                      {polo.address} <ArrowUpRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm space-y-3 text-gray-700 dark:text-gray-300 w-full">
                      {polo.schedules.morning && (
                        <p><span className="font-black text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-500 block">Manhã</span>{polo.schedules.morning}</p>
                      )}
                      {polo.schedules.afternoon && (
                        <p><span className="font-black text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-500 block">Tarde</span>{polo.schedules.afternoon}</p>
                      )}
                      {polo.schedules.night && (
                        <p><span className="font-black text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-500 block">Noite</span>{polo.schedules.night}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <p className="text-[9px] font-black uppercase text-gray-400 dark:text-gray-500 mb-0.5 tracking-widest">Responsável técnico</p>
                    <p className="text-sm font-bold dark:text-white">{polo.instructor}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${polo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-green-500/10 uppercase text-xs tracking-widest mt-2"
              >
                <MessageCircle className="w-5 h-5" /> Falar com o responsável
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}