import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Music, GraduationCap, HeartHandshake, 
  Calendar, MapPin, ArrowUpRight, Loader2, History 
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Evento } from '../types'; 
import { culturalWorkshopsData, socialProjectsData } from '../data/oficinas'; 

export function Eventos() {
  const navigate = useNavigate();
  const [eventosAtivos, setEventosAtivos] = useState<Evento[]>([]); 
  const [eventosPassados, setEventosPassados] = useState<Evento[]>([]); 
  const [oficinasDinamicas, setOficinasDinamicas] = useState<Evento[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      setLoading(true);
      const { data } = await supabase
        .from('eventos')
        .select('*')
        .order('real_date', { ascending: false });
        
      if (data) {
        const hoje = new Date();
        const trintaDiasAtras = new Date();
        trintaDiasAtras.setDate(hoje.getDate() - 30);
        const limiteData = trintaDiasAtras.toISOString().split('T')[0];

        const oficinas = (data as Evento[]).filter(e => e.tag === 'Oficina');
        const eventosNormais = (data as Evento[]).filter(e => e.tag !== 'Oficina');

        const ativos = eventosNormais.filter(e => e.real_date >= limiteData);
        const passados = eventosNormais.filter(e => e.real_date < limiteData);

        setEventosAtivos(ativos);
        setEventosPassados(passados);
        setOficinasDinamicas(oficinas);
      }
      setLoading(false);
    }
    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-transparent dark:bg-gray-950 transition-colors duration-300 pt-32 pb-24 px-6">      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">Eventos & Calendários</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Fique por dentro das rodas, workshops, oficinas e comunicados oficiais da Escola Luta de Libertação.
          </p>
        </div>

        <div className="mb-32">
          <div className="text-center md:text-left mb-10">
            <span className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-[0.3em] block mb-2">Novidades & Próximas Datas</span>
            <h2 className="text-4xl font-black dark:text-white uppercase tracking-tight">O que está acontecendo?</h2>
          </div>

          {loading ? (
            <div className="flex justify-center p-12"><Loader2 className="animate-spin text-yellow-500" size={40} /></div>
          ) : eventosAtivos.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-16 text-center border border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-400 font-black uppercase tracking-widest">Nenhum evento agendado para os próximos dias.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventosAtivos.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -6 }}
                  onClick={() => navigate(`/eventos/${event.id}`)}
                  className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 p-4 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-900">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-yellow-500 text-black text-[8px] font-black uppercase px-2.5 py-1 rounded-full tracking-widest shadow-md">
                      {event.tag}
                    </span>
                  </div>

                  <div className="px-2 pb-2 space-y-2">
                    <div className="flex items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-yellow-500" /> {event.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} className="text-gray-500" /> {event.location}</span>
                    </div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-tight group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors flex items-start justify-between gap-2">
                      {event.title}
                      <ArrowUpRight size={18} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {!loading && eventosPassados.length > 0 && (
          <div className="mb-32 border-t border-gray-100 dark:border-gray-800 pt-24">
            <div className="text-center md:text-left mb-10 flex items-center gap-3">
              <History className="text-gray-400" size={28} />
              <div>
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-[0.3em] block mb-1">Acervo & Prestação de Contas</span>
                <h2 className="text-4xl font-black dark:text-white uppercase tracking-tight">Mural de Memórias e Notícias</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {eventosPassados.map((event) => (
                <div 
                  key={event.id}
                  onClick={() => navigate(`/eventos/${event.id}`)}
                  className="bg-white/60 dark:bg-gray-900/40 hover:bg-white dark:hover:bg-gray-900 p-4 rounded-[2rem] border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl cursor-pointer group flex flex-col justify-between"
                >
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div>
                    <span className="text-[8px] font-black px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 uppercase rounded">
                      {event.tag}
                    </span>
                    <h4 className="font-black text-gray-800 dark:text-gray-200 uppercase text-xs mt-2 line-clamp-2 leading-tight group-hover:text-yellow-500 transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-32 border-t border-gray-100 dark:border-gray-800 pt-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <Music className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight">Grade de Oficinas Ordinárias</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* OFICINAS CRIADAS PELO PAINEL */}
            {oficinasDinamicas.map((oficina, index) => (
              <motion.div 
                key={oficina.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/eventos/${oficina.id}`)} 
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-yellow-500/50 dark:border-yellow-500/30 hover:bg-yellow-50 dark:hover:bg-yellow-900/10 cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-md border-2 border-white dark:border-gray-800 group-hover:rotate-6 transition-transform">
                    <img src={oficina.image} alt={oficina.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-widest block mb-2">Novo Projeto Ativo</span>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-3 flex justify-between items-start">
                    {oficina.title}
                    <ArrowUpRight size={20} className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {oficina.objetivo || "Clique para ver detalhes do projeto, cronogramas e editais."}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* OFICINAS FIXAS */}
            {culturalWorkshopsData.map((workshop, index) => (
              <motion.div 
                key={workshop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (oficinasDinamicas.length + index) * 0.1 }}
                onClick={() => navigate(`/oficinas/${workshop.id}`)} 
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 hover:border-yellow-500 hover:scale-[1.02] cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 text-black group-hover:rotate-12 transition-transform">
                    <workshop.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-3 flex justify-between items-start">
                    {workshop.title}
                    <ArrowUpRight size={20} className="text-gray-300 group-hover:text-yellow-500 transition-colors" />
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{workshop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-24">
          <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
            <GraduationCap className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-black dark:text-white uppercase tracking-tight">Capoeira nas Escolas & Comunidades</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {socialProjectsData.map((project, index) => (
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