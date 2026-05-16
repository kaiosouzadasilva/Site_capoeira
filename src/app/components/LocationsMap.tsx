import { motion } from 'framer-motion'; // Verifique se é 'framer-motion' ou 'motion/react' conforme seu projeto
import { MapPin, Clock, MessageCircle } from 'lucide-react';

const polos = [
  {
    id: '1',
    name: 'Polo Centro Cultural Canto do Canário',
    address: 'R. Juticá, 280 - Cidade de Deus, Manaus - AM',
    instructor: 'Mestre Canário e Contramestre Peteca',
    schedules: { 
      morning: 'Sáb - 09h às 11h', 
      night: 'Ter, Qui - 18:30h às 20:30h', 
      afternoon: 'Não possui horário à tarde' 
    },
    whatsapp: '559293331766' // Apenas números para o link funcionar
  },
  {
    id: '2',
    name: 'Polo Novo Aleixo - Cidade Nova',
    address: 'R. Cento Noventa Tres, 249 - Cj Cidade Nova IV, Manaus - AM',
    instructor: 'Monitor Jhoy e Estagiário Invergado',
    schedules: { 
      morning: 'Não possui horário de manhã', 
      afternoon: 'Sáb - 15h às 17h', 
      night: 'Ter, Qui - 19h às 21h' 
    },
    whatsapp: '5592985012070' // Use o número principal aqui
  },
  {
    id: '3',
    name: 'Polo Comunitário',
    address: 'Rua do Parque, 789 - Zona Oeste',
    instructor: 'Contra-Mestre Prateado',
    schedules: { 
      morning: 'Não possui',
      afternoon: 'Ter, Qui - 14h30 às 16h30', 
      night: 'Seg, Qua, Sex - 19h30 às 21h30' 
    },
    whatsapp: '5592999999999'
  }
];

export function LocationsMap() {
  return (
    <section id="locais" className="py-24 px-6 bg-transparent dark:bg-gray-900 transition-colors duration-300">      
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter">Locais de Treinamento</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400">Encontre o polo mais próximo e junte-se à nossa roda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {polos.map((polo, index) => (
            <motion.div
              key={polo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tighter">{polo.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 font-medium">{polo.address}</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                  <div className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
                    <p><span className="font-black text-[10px] uppercase tracking-widest text-gray-400">Manhã:</span> <br/>{polo.schedules.morning}</p>
                    <p><span className="font-black text-[10px] uppercase tracking-widest text-gray-400">Tarde:</span> <br/>{polo.schedules.afternoon}</p>
                    <p><span className="font-black text-[10px] uppercase tracking-widest text-gray-400">Noite:</span> <br/>{polo.schedules.night}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600">
                  <p className="text-[10px] font-black uppercase text-gray-400 mb-1 tracking-widest">Responsável</p>
                  <p className="text-sm font-bold dark:text-white">{polo.instructor}</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${polo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 uppercase text-xs tracking-widest"
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