import { motion } from 'motion/react';
import { MapPin, Clock, MessageCircle } from 'lucide-react';

const polos = [
  {
    id: '1',
    name: 'Polo Centro Cultural Canto do Canário',
    address: 'R. Juticá, 280 - Cidade de Deus, Manaus - AM, 69099-201',
    instructor: 'Mestre Canário e Contramestre Peteca',
    schedules: { morning: 'Sáb - 09h às 11h', night: 'Ter, Qui - 18:30h às 20:30h', afternoon: 'Não possui horário à tarde' },
    whatsapp: '+55 92 9333-1766' // Coloque o número real aqui
  },
  {
    id: '2',
    name: 'Polo Novo Aleixo - Cidade Nova',
    address: 'R. Cento Noventa Tres, 249 - Cj Cidade - Nova IV, Manaus - AM, 69098-240',
    instructor: 'Monitor Jhoy e Estagiário Invergado',
    schedules: { afternoon: 'Sáb - 15h às 17h', night: 'Ter, Qui - 19h às 21h', morning: 'Não possui horário de manhã' },
    whatsapp: '+55 92 98501-2070' + ' +55 92 99199-8238'
  },
  {
    id: '3',
    name: 'Polo Comunitário',
    address: 'Rua do Parque, 789 - Zona Oeste',
    instructor: 'Contra-Mestre Prateado',
    schedules: { afternoon: 'Ter, Qui - 14h30 às 16h30', night: 'Seg, Qua, Sex - 19h30 às 21h30' },
    whatsapp: '+55 92 99999-9999'
  }
];

export function LocationsMap() {
  return (
    <section id="locais" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Locais de Treinamento</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600">Encontre o polo mais próximo e junte-se à nossa roda</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {polos.map((polo, index) => (
            <motion.div
              key={polo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{polo.name}</h3>
                  <p className="text-gray-500 text-sm">{polo.address}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <div className="text-sm">
                    <p><strong>Manhã:</strong> {polo.schedules.morning}</p>
                    <p><strong>Noite:</strong> {polo.schedules.night}</p>
                    <p><strong> Tarde:</strong> {polo.schedules.afternoon}</p>
                  </div>
                </div>
                <div className="text-sm bg-gray-50 p-2 rounded">
                  <strong>Responsável:</strong> {polo.instructor}
                </div>
              </div>

              <a
                href={`https://wa.me/${polo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}