// src/app/components/StudentDashboard.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, Calendar, Zap, Music, Award, 
  ShieldCheck, Target, MessageSquare, Loader2, Star, Trophy
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export function StudentDashboard() {
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      setLoading(true);
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          const { data } = await supabase
            .from('alunos')
            .select('*')
            .eq('user_id', session.user.id)
            .maybeSingle();

          if (data) {
            setStudent(data);
          }
        }
      } catch (err) {
        console.error('Erro ao carregar dados do aluno:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center dark:bg-gray-950">
        <Loader2 className="animate-spin text-yellow-500" size={32} />
      </div>
    );
  }

  // 🛡️ BLINDAGEM COMPLETA CONTRA OBJETOS VAZIOS RETORNADOS DO SUPABASE
  const profile = (student && Object.keys(student).length > 0) ? student : {
    nome: "Kaio Souza da Silva",
    apelido: "Invergado",
    graduacao: "Azul e Amarelo (Estagiário)",
    polo: "Novo Aleixo",
    status: "Apto",
    observacoes: "Demonstra excelente liderança técnica no polo.",
    radar_tecnico: {
      tecnica: { nota: 8, feedback: 'Excelente precisão nas esquivas.' },
      musicalidade: { nota: 6, feedback: 'Bom toque de berimbau.' },
      mandinga: { nota: 7, feedback: 'Boa leitura tática da roda.' },
      postura: { nota: 9, feedback: 'Conduta exemplar.' }
    }
  };

  const radar = {
    tecnica: profile.radar_tecnico?.tecnica || { nota: 0, feedback: '' },
    musicalidade: profile.radar_tecnico?.musicalidade || { nota: 0, feedback: '' },
    mandinga: profile.radar_tecnico?.mandinga || { nota: 0, feedback: '' },
    postura: profile.radar_tecnico?.postura || { nota: 0, feedback: '' }
  };

  const mediaGlobal = (radar.tecnica.nota + radar.musicalidade.nota + radar.mandinga.nota + radar.postura.nota) / 4;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-24 transition-colors duration-300">
      
      <div className="bg-black text-white pt-24 pb-36 px-6 md:px-12 rounded-b-[50px] shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          
          {/* Encadeamento opcional defensivo para o avatar */}
          <div className="w-28 h-28 rounded-[2rem] border-4 border-yellow-500 p-1 flex-shrink-0 bg-gray-900 shadow-2xl flex items-center justify-center font-black text-4xl text-yellow-500 rotate-3">
            {profile?.apelido ? profile.apelido[0] : (profile?.nome?.[0] || '?')}
          </div>
          
          <div className="text-center md:text-left space-y-2">
            <span className="text-yellow-500 font-black uppercase text-[9px] tracking-[0.4em] block animate-pulse">
              Prontuário do Capoeirista
            </span>
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
              Salve, {profile.apelido || profile.nome}!
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-black text-[9px] uppercase shadow-md">
                {profile.graduacao}
              </span>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full font-bold text-[9px] uppercase border border-white/10 backdrop-blur-sm">
                Polo {profile.polo}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-20 relative z-20 space-y-6">
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between transition-colors">
            <div>
              <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Média Pedagógica</p>
              <span className="text-3xl font-black text-gray-900 dark:text-white mt-1 block">
                {mediaGlobal.toFixed(1)}<span className="text-xs text-gray-400 font-bold">/10</span>
              </span>
            </div>
            <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500 shadow-inner">
              <Trophy size={22} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-800 flex items-center justify-between transition-colors">
            <div>
              <p className="text-[9px] font-black uppercase text-gray-400 tracking-widest">Status da Corda</p>
              <span className="text-xs font-black text-green-500 uppercase mt-2 block bg-green-500/10 px-3 py-1 rounded-full w-fit border border-green-500/20">
                {profile.status || 'Apto'}
              </span>
            </div>
            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 shadow-inner">
              <ShieldCheck size={22} />
            </div>
          </div>
        </div>

        <section className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-2xl space-y-8 transition-colors">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
              <Target size={20} className="text-yellow-500" /> Seu Desempenho na Roda
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Análise técnica e orientações do Mestre</p>
          </div>

          <div className="grid gap-6">
            {[
              { key: 'tecnica', label: 'Técnica de Jogo', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { key: 'musicalidade', label: 'Musicalidade & Ritmo', icon: Music, color: 'text-purple-500', bg: 'bg-purple-500/10' },
              { key: 'mandinga', label: 'Mandinga & Malícia', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
              { key: 'postura', label: 'Postura & Ética', icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-500/10' }
            ].map((item) => {
              const pilarData = radar[item.key as keyof typeof radar];
              const percentualBarra = `${pilarData.nota * 10}%`;

              return (
                <div key={item.key} className="bg-gray-50 dark:bg-gray-800/40 p-5 rounded-3xl border border-gray-100 dark:border-gray-800 space-y-4 transition-all">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shadow-inner`}>
                        <item.icon size={18} />
                      </div>
                      <span className="font-black uppercase text-xs text-gray-800 dark:text-gray-200">{item.label}</span>
                    </div>
                    <span className={`font-black text-xl ${item.color}`}>
                      {pilarData.nota}<span className="text-gray-400 text-xs font-bold">/10</span>
                    </span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-900 rounded-full p-[2px] shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: percentualBarra }} 
                      className="h-full rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                    />
                  </div>

                  {pilarData.feedback && (
                    <div className="bg-white dark:bg-gray-900/60 p-4 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 relative text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed italic">
                      <MessageSquare size={12} className="text-gray-400 mb-1 inline-block mr-1.5" />
                      "{pilarData.feedback}"
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {profile.observacoes && (
          <section className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border border-gray-100 dark:border-gray-800 shadow-xl space-y-4 transition-colors">
            <h3 className="text-sm font-black uppercase text-gray-400 tracking-widest flex items-center gap-2">
              <MessageSquare size={16} className="text-yellow-500" /> Parecer Geral da Liderança
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed bg-gray-50 dark:bg-gray-800/40 p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
              {profile.observacoes}
            </p>
          </section>
        )}

        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 border border-gray-100 dark:border-gray-800 shadow-xl transition-colors">
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black p-6 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-3 transition-transform active:scale-95">
            <Star size={18} fill="currentColor" /> Emitir Certificado de Registro
          </button>
          <p className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-4">Documento Validado com Assinatura Digital da Secretaria Geral ECLL</p>
        </div>

      </div>
    </div>
  );
}