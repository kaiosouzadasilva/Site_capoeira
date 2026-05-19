import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, MapPin, Target, Award, 
  Clock, Loader2, FileText, History, HeartHandshake, CheckCircle, Users, ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { BackgroundTexture } from './BackgroundTexture';
import { Evento } from '../../types'; // 👇 Importação do Tipo (Ajuste o caminho '../types' se necessário baseado na sua pasta)

export function DetalheEvento() {
  const { id } = useParams();
  const navigate = useNavigate();
  // 👇 Fim da linha vermelha de erro do TypeScript!
  const [evento, setEvento] = useState<Evento | null>(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    async function fetchEventDetails() {
      setLoading(true);
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error("Erro ao carregar detalhes:", error.message);
      } else {
        setEvento(data);
      }
      setLoading(false);
    }
    fetchEventDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center dark:bg-gray-950">
        <Loader2 className="animate-spin text-yellow-500" size={32} />
      </div>
    );
  }

  if (!evento) {
    return (
      <div className="h-screen flex flex-col items-center justify-center dark:bg-gray-950">
        <p className="text-gray-400 font-bold uppercase text-sm">Evento não encontrado.</p>
        <button onClick={() => navigate('/eventos')} className="text-yellow-500 mt-4 font-bold hover:underline">
          Voltar para Eventos
        </button>
      </div>
    );
  }

  const dataEvento = new Date(evento.real_date);
  const hoje = new Date();
  const diferencaTempo = hoje.getTime() - dataEvento.getTime();
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
  const ehNoticiaPassada = diferencaDias > 30;

  // 🛡️ Lógica Inteligente: Se o campo editais_apoio contiver texto real, o evento foi contemplado!
  const ehContemplado = evento.editais_apoio && evento.editais_apoio.trim() !== "";

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 pt-32 pb-24 transition-colors duration-300 relative overflow-hidden">
      <BackgroundTexture />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <button 
          onClick={() => navigate('/eventos')} 
          className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-yellow-500 mb-12 font-black uppercase text-[10px] tracking-widest transition-all"
        >
          <ArrowLeft size={16} /> Voltar para Eventos
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          {/* BANNER DE STATUS DO EVENTO */}
          <div className="mb-8">
            {ehNoticiaPassada ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-black text-[9px] uppercase tracking-widest rounded-full border border-gray-300 dark:border-gray-700">
                <History size={10} /> Registro Histórico / Notícia
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 font-black text-[9px] uppercase tracking-widest rounded-full border border-yellow-500/20">
                <Clock size={10} className="animate-pulse" /> Agenda Cultural Ativa
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mt-4 leading-none">
              {evento.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-[10px] font-black uppercase tracking-wider">
              <span className="flex items-center gap-1 text-stone-400 dark:text-gray-500">
                <Calendar size={12} className="text-yellow-500" /> {evento.date}
              </span>

              {/* URL do Google Maps higienizada e robusta para produção */}
              <a
              href={`https://maps.google.com/?q=${encodeURIComponent(evento.location)}`}
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-stone-400 dark:text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors group"
                title="Clique para abrir rotas no Google Maps"
              >
                <MapPin size={12} className="text-gray-500 group-hover:scale-125 transition-transform duration-300" /> 
                <span className="underline decoration-stone-300 dark:decoration-gray-700 group-hover:decoration-yellow-500 underline-offset-4 transition-colors">
                  {evento.location}
                </span>
                <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-500" />
              </a>

              <span className="px-2.5 py-0.5 bg-stone-200 dark:bg-gray-800 rounded-md text-stone-600 dark:text-gray-400 font-bold">{evento.tag}</span>
            </div>
          </div>

          {/* FLYER / IMAGEM DO EVENTO */}
          <div className="aspect-[16/10] bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 mb-12">
            <img src={evento.image} alt={evento.title} className="w-full h-full object-cover object-center" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-10">
              {evento.objetivo && (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-stone-200/60 dark:border-gray-800 shadow-sm">
                  <h3 className="font-black text-gray-900 dark:text-white uppercase text-xs tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Target className="text-yellow-500" size={16} /> Objetivo do Evento
                  </h3>
                  <p className="text-stone-700 dark:text-gray-300 text-sm font-medium leading-relaxed whitespace-pre-line">
                    {evento.objetivo}
                  </p>
                </div>
              )}

              {evento.programacao && (
                <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-stone-200/60 dark:border-gray-800 shadow-sm">
                  <h3 className="font-black text-gray-900 dark:text-white uppercase text-xs tracking-[0.2em] mb-4 flex items-center gap-2">
                    <Clock className="text-yellow-500" size={16} /> Programação Oficial
                  </h3>
                  <p className="text-stone-700 dark:text-gray-300 text-sm font-medium leading-relaxed whitespace-pre-line">
                    {evento.programacao}
                  </p>
                </div>
              )}
            </div>

            {/* ASIDE LATERAL: SISTEMA DE VERIFICAÇÃO AUTOMÁTICA DE EDITAIS */}
            <aside className="space-y-6">
              <div className={`p-6 rounded-[2rem] shadow-xl border relative overflow-hidden transition-colors ${
                ehContemplado 
                  ? "bg-gradient-to-br from-green-900/90 to-black border-green-500/30 text-white" 
                  : "bg-gradient-to-br from-stone-900 to-black border-white/5 text-white"
              }`}>
                
                <div className="flex flex-col gap-3 mb-4">
                  <h3 className={`font-black uppercase text-[10px] tracking-widest flex items-center gap-1.5 ${
                    ehContemplado ? "text-green-400" : "text-yellow-500"
                  }`}>
                    {ehContemplado ? <Award size={14} /> : <HeartHandshake size={14} />}
                    {ehContemplado ? "Fomento Cultural" : "Iniciativa Independente"}
                  </h3>
                  
                  {/* BADGE DE CERTIFICAÇÃO */}
                  <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest border self-start ${
                    ehContemplado 
                      ? "bg-green-500/20 text-green-300 border-green-500/30" 
                      : "bg-white/5 text-gray-400 border-white/10"
                  }`}>
                    {ehContemplado ? (
                      <><CheckCircle size={10} /> Contemplado</>
                    ) : (
                      <><Users size={10} /> Recursos Próprios</>
                    )}
                  </div>
                </div>
                
                {ehContemplado ? (
                  <div className="space-y-2 mt-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide flex items-center gap-1">
                      <FileText size={12} /> Recursos de Amparo:
                    </p>
                    <p className="text-xs text-gray-200 font-medium leading-relaxed whitespace-pre-line bg-white/5 p-4 rounded-xl border border-white/10">
                      {evento.editais_apoio}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-gray-400 italic mt-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    Este evento específico foi mantido através de contribuições comunitárias e recursos voluntários da instituição.
                  </p>
                )}
                
                <div className="text-[8px] font-black text-center text-yellow-500/30 uppercase tracking-widest mt-6 pt-4 border-t border-white/5">
                  Portfólio Institucional ECLL
                </div>
              </div>
            </aside>
          </div>

        </motion.div>
      </div>
    </div>
  );
}