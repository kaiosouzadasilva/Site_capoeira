import { motion } from 'framer-motion';
import { Music, Users, GraduationCap, Drum, HeartHandshake, Footprints, Leaf } from 'lucide-react';
const culturalWorkshops = [
  {
    title: "Toques de Berimbau",
    description: "Estudo aprofundado das afinações, ritmos e da musicalidade que comanda a roda de capoeira.",
    icon: Music
  },
  {
    title: "Percussão e Pandeiro",
    description: "Fundamentos do pandeiro, atabaque e marcação de ritmo para sustentar a energia do jogo.",
    icon: Drum
  },
  {
    title: "Dança do Maculelê",
    description: "Resgate da expressão cultural afro-indígena com bastões, ritmo forte e muita expressão corporal.",
    icon: Users
  }, 
  {
    title: "Samba de Roda da frente unida",
    description: "Resgate da expressão cultural afro-indígena com bastões, ritmo forte e muita expressão corporal.",
    icon: Footprints
  }, 
  {
    title: "Carimbó",
    description: "Resgate da expressão cultural afro-indígena com bastões, ritmo forte e muita expressão corporal.",
    icon: Leaf
  }, 

];

const socialProjects = [
  {
    instructor: "Mestre Canário",
    audience: "Turma Mista (Crianças, Jovens e Adultos)",
    description: "Aulas completas abrangendo todas as idades, com foco na integração, filosofia da ECLL e disciplina em todas as fases da vida.",
    color: "border-yellow-500"
  },
  {
    instructor: "Contramestre Prateado",
    audience: "Turma Mista (Crianças, Jovens e Adultos)",
    description: "Desenvolvimento técnico e cultural para diversas faixas etárias, unindo fundamentos e acrobacias.",
    color: "border-gray-400"
  },
  {
    instructor: "Contramestra Peteca",
    audience: "Foco Infantil",
    description: "Pedagogia adaptada para os pequenos, usando a ludicidade e brincadeiras para introduzir a capoeira na vida das crianças.",
    color: "border-blue-500"
  },
  {
    instructor: "Monitor Jhoy",
    audience: "Turma mista (Crianças, Jovens e Adultos)",
    description: "Trabalho focado em escolas e projetos sociais, direcionando a energia da juventude para o esporte, respeito e cidadania.",
    color: "border-green-500"
  }
];

export function Oficinas() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">Oficinas & Projetos</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A Escola Luta de Libertação vai além da roda. Nosso compromisso é com a educação, a cultura e a transformação social da nossa comunidade.
          </p>
        </div>

        {/* SECÇÃO 1: OFICINAS CULTURAIS E INSTRUMENTOS */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Music className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight">Oficinas Culturais</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {culturalWorkshops.map((workshop, index) => (
              <motion.div 
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 hover:border-yellow-500 transition-all group"
              >
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform">
                  <workshop.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-3">{workshop.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{workshop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECÇÃO 2: PROJETOS SOCIAIS E ESCOLAS */}
        <div>
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <GraduationCap className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight">Capoeira nas Escolas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {socialProjects.map((project, index) => (
              <motion.div 
                key={project.instructor}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-lg border-l-8 ${project.color} border-y border-r border-y-gray-100 border-r-gray-100 dark:border-y-gray-800 dark:border-r-gray-800 flex flex-col md:flex-row gap-6 items-start`}
              >
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="text-gray-500 dark:text-gray-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">{project.instructor}</h3>
                  <p className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-widest mb-3">{project.audience}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}