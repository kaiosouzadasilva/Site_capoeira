import { Heart, Brain, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { BackgroundTexture } from './BackgroundTexture';

const methodologyPillars = [
  { icon: Heart, title: 'Corpo', description: 'Condicionamento físico, acrobacias e a arte do movimento através de sequências tradicionais e treinamento moderno.' },
  { icon: Brain, title: 'Mente', description: 'Pensamento estratégico, conhecimento musical e a filosofia por trás de cada movimento.' },
  { icon: Users, title: 'Comunidade', description: 'Respeito, camaradagem e o espírito coletivo que define nossa roda e nossa família de capoeiristas.' }
];

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 px-6 bg-white relative overflow-hidden">
      <BackgroundTexture />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {methodologyPillars.map((pillar, index) => (
            <motion.div key={pillar.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <pillar.icon className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossas Raízes e Legado</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8" />
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Nossa escola combina a fluidez lúdica da Capoeira Angola com o atletismo estratégico da Capoeira Regional. Por mais de três décadas, preservamos essas tradições adaptando-as à prática contemporânea.</p>
        </motion.div>
      </div>
    </section>
  );
}