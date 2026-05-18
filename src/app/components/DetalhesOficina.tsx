import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Award, Image as ImageIcon, PlayCircle, HeartHandshake, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { culturalWorkshopsData } from '../data/oficinas';
import { BackgroundTexture } from './BackgroundTexture';

export function DetalhesOficina() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Busca a oficina pelo ID
  const oficina = culturalWorkshopsData.find(w => w.id === id);

  if (!oficina) {
    return (
      <div className="h-screen flex flex-col items-center justify-center dark:bg-gray-950">
        <p className="text-gray-400 font-bold uppercase text-sm">Oficina não encontrada.</p>
        <button onClick={() => navigate('/eventos')} className="text-yellow-500 mt-4 font-bold hover:underline">
          Voltar para Eventos
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 pt-32 pb-24 transition-colors duration-300 relative overflow-hidden">
      <BackgroundTexture />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <button 
          onClick={() => navigate('/eventos')} 
          className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-yellow-500 mb-12 font-black uppercase text-[10px] tracking-widest transition-all"
        >
          <ArrowLeft size={16} /> Voltar para Grade de Eventos
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-yellow-500 rounded-3xl flex items-center justify-center shadow-xl text-black">
              <oficina.icon size={40} />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-[0.3em] block mb-1">
                Manifestação Cultural
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">
                {oficina.title}
              </h1>
            </div>
          </div>

          <div className="space-y-12">
            {/* HISTÓRIA */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-stone-200/60 dark:border-gray-800 shadow-sm">
              <h3 className="font-black text-gray-900 dark:text-white uppercase text-sm tracking-[0.2em] mb-4 flex items-center gap-2">
                <BookOpen className="text-yellow-500" size={20} /> Origem e Fundamento
              </h3>
              <p className="text-stone-700 dark:text-gray-300 text-base font-medium leading-relaxed whitespace-pre-line">
                {oficina.historia}
              </p>
            </div>

            {/* EDITAIS E FOMENTO (COM LÓGICA DE CONTEMPLAÇÃO) */}
            <div className={`p-8 rounded-[2rem] shadow-xl border relative overflow-hidden transition-colors ${
              oficina.apoio?.contemplado 
                ? "bg-gradient-to-br from-green-900 to-black border-green-500/30 text-white" 
                : "bg-gradient-to-br from-stone-900 to-black border-white/5 text-white"
            }`}>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className={`font-black uppercase text-xs tracking-widest flex items-center gap-2 ${
                  oficina.apoio?.contemplado ? "text-green-400" : "text-yellow-500"
                }`}>
                  {oficina.apoio?.contemplado ? <Award size={18} /> : <HeartHandshake size={18} />}
                  {oficina.apoio?.contemplado ? "Apoio Institucional e Fomento" : "Iniciativa Independente"}
                </h3>

                {/* SELO VISUAL (BADGE) */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                  oficina.apoio?.contemplado 
                    ? "bg-green-500/20 text-green-300 border-green-500/30" 
                    : "bg-white/10 text-gray-300 border-white/10"
                }`}>
                  {oficina.apoio?.contemplado ? (
                    <><CheckCircle size={12} /> Projeto Contemplado</>
                  ) : (
                    <><Users size={12} /> Recursos Próprios</>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-200 font-medium leading-relaxed bg-white/5 p-5 rounded-2xl border border-white/5">
                {oficina.apoio?.descricao}
              </p>
            </div>

            {/* MÍDIA (FOTOS E VÍDEOS) */}
            <div className="space-y-6">
              <h3 className="font-black text-gray-900 dark:text-white uppercase text-sm tracking-[0.2em] flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
                <ImageIcon className="text-yellow-500" size={20} /> Acervo Visual
              </h3>
              
              {oficina.galeria && oficina.galeria.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {oficina.galeria.map((img, idx) => (
                    <div key={idx} className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
                      <img src={img} alt={`Acervo ${oficina.title}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl text-center">
                  <PlayCircle size={40} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                  <p className="text-gray-400 font-bold uppercase text-xs">Materiais audiovisuais em fase de catalogação.</p>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}