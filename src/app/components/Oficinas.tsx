import { motion } from 'framer-motion';
import { Music, Users, GraduationCap, Drum, HeartHandshake, Footprints, Leaf, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Vivência Técnica e Toques de Gunga",
    date: "24 de Maio de 2026",
    location: "Polo Novo Aleixo",
    image: "/galeria/treino1.jpg",
    tag: "Workshop"
  },
  {
    id: 2,
    title: "Mandinga na Praça - Roda de Rua",
    date: "07 de Junho de 2026",
    location: "Largo de São Sebastião",
    image: "/galeria/roda1.jpg", 
    tag: "Roda Aberta"
  },
  {
    id: 3,
    title: "Nota Oficial: Preparativos para o Próximo Batizado",
    date: "15 de Maio de 2026",
    location: "Informativo Geral",
    image: "/membros/mestre_camisa_e_mestre_canário.jpeg",
    tag: "Comunicado"
  }
];

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
    title: "Samba de Roda da Frente Unida",
    description: "Expressão tradicional e festiva com passos característicos, palmas e cantigas de roda.",
    icon: Footprints
  }, 
  {
    title: "Carimbó",
    description: "Vivência do ritmo e da dança tradicional nortista integrada às manifestações da nossa escola.",
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
    <div className="min-h-screen bg-transparent dark:bg-gray-950 transition-colors duration-300 pt-32 pb-24 px-6">      
    <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">Oficinas & Calendário</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A Escola Luta de Libertação vai além dos treinos diários. Veja nossa agenda de eventos, workshops e projetos ativos.
          </p>
        </div>

        {/* ================= SEÇÃO NOVA: O QUE ESTÁ ACONTECENDO ================= */}
        <div className="mb-32">
          <div className="text-center md:text-left mb-10">
            <span className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-[0.3em] block mb-2">Novidades & Eventos</span>
            <h2 className="text-4xl font-black dark:text-white uppercase tracking-tight">O que está acontecendo?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 p-4 flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-900">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[9px] font-black uppercase px-3 py-1 rounded-full tracking-widest border border-white/10">
                    {event.tag}
                  </span>
                </div>

                <div className="px-2 pb-2 space-y-2">
                  <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-yellow-500" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-gray-500" />
                      {event.location}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors flex items-start justify-between gap-2">
                    {event.title}
                    <ArrowUpRight size={18} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECÇÃO 2: OFICINAS CULTURAIS E INSTRUMENTOS */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Music className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight">Grade de Oficinas Ordinárias</h2>
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

        {/* SECÇÃO 3: PROJETOS SOCIAIS E ESCOLAS */}
        <div>
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <GraduationCap className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight">Capoeira nas Escolas & Comunidades</h2>
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