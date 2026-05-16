import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, CalendarCheck, Award, MapPin, 
  TrendingUp, ArrowRight, Zap, Target, BookOpen 
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState({ totalStudents: 0, activePolos: 3 });
  const [loading, setLoading] = useState(true);
  
  // Estado para o Planejamento Pedagógico (Ciclo Atual)
  const [focoAtual, setFocoAtual] = useState('As 8 Sequências da Regional de Bimba');
  const [isEditingFoco, setIsEditingFoco] = useState(false);

  useEffect(() => {
    async function getDashboardData() {
      // Busca a contagem real de alunos no banco de dados
      const { count } = await supabase
        .from('alunos')
        .select('*', { count: 'exact', head: true });
        
      setMetrics(prev => ({ ...prev, totalStudents: count || 0 }));
      setLoading(false);
    }
    getDashboardData();
  }, []);

  // Dados mockados para o gráfico de distribuição
  const poloDistribution = [
    { name: 'Novo Aleixo', count: metrics.totalStudents ? Math.ceil(metrics.totalStudents * 0.5) : 0, percentage: '50%', color: 'bg-yellow-500' },
    { name: 'Centro Cultural', count: metrics.totalStudents ? Math.floor(metrics.totalStudents * 0.3) : 0, percentage: '30%', color: 'bg-blue-500' },
    { name: 'Comunitário', count: metrics.totalStudents ? Math.floor(metrics.totalStudents * 0.2) : 0, percentage: '20%', color: 'bg-green-500' }
  ];

  return (
    <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300 pb-24">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* BANNER DE BOAS-VINDAS IMPERIAL */}
        <header className="bg-black text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="relative z-10 space-y-2">
            <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.4em] block animate-pulse">
              Painel de Liderança
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Salve, <span className="text-yellow-500">Mestre Canário</span>!
            </h1>
            <p className="text-gray-400 text-xs md:text-sm max-w-xl font-medium tracking-wide mt-2">
              Acompanhe a evolução pedagógica, a assiduidade e direcione o foco técnico de todos os polos da Escola Luta de Libertação.
            </p>
          </div>
          {/* Efeito estético de fundo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700 -mr-20 -mt-20" />
        </header>

        {/* DIRETRIZ PEDAGÓGICA (O FOCO DO MÊS) */}
        <section className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-yellow-500/30 dark:border-yellow-500/20 shadow-xl shadow-yellow-500/5 relative overflow-hidden transition-all">
          <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pl-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Target size={18} className="text-yellow-500" />
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Ciclo Técnico Vigente (Neste Mês)</h2>
              </div>
              
              {isEditingFoco ? (
                <div className="flex items-center gap-3">
                  <input 
                    type="text" 
                    value={focoAtual}
                    onChange={(e) => setFocoAtual(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-black text-xl md:text-2xl uppercase tracking-tight p-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-yellow-500 w-full md:w-96"
                    autoFocus
                  />
                  <button onClick={() => setIsEditingFoco(false)} className="bg-yellow-500 text-black px-4 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                    Salvar
                  </button>
                </div>
              ) : (
                <div className="group cursor-pointer" onClick={() => setIsEditingFoco(true)}>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors">
                    {focoAtual}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Clique para alterar a diretriz</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-2xl border border-gray-100 dark:border-gray-700">
              <BookOpen size={16} className="text-gray-400" />
              <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Baseado em: Técnica de Jogo</span>
            </div>
          </div>
        </section>

        {/* METRICS GRID (Indicadores Rápidos) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'Capoeiristas', value: loading ? '...' : metrics.totalStudents, icon: Users, color: 'text-yellow-500', bg: 'bg-yellow-500/10', action: () => navigate('/admin/membros') },
            { label: 'Polos Ativos', value: metrics.activePolos, icon: MapPin, color: 'text-blue-500', bg: 'bg-blue-500/10', action: null },
            { label: 'Assiduidade Geral', value: '87%', icon: CalendarCheck, color: 'text-green-500', bg: 'bg-green-500/10', action: () => navigate('/admin/chamada') },
            { label: 'Exame à Vista', value: '7', icon: Award, color: 'text-purple-500', bg: 'bg-purple-500/10', action: null },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={card.action || undefined}
              className={`p-6 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl flex flex-col justify-between h-40 transition-colors ${card.action ? 'cursor-pointer' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">{card.label}</span>
                <div className={`w-10 h-10 ${card.bg} ${card.color} rounded-xl flex items-center justify-center shadow-inner`}>
                  <card.icon size={20} />
                </div>
              </div>
              <span className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{card.value}</span>
            </motion.div>
          ))}
        </section>

        {/* DISTRIBUIÇÃO E ATALHOS */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* GRÁFICO DE DISTRIBUIÇÃO POR POLO */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl transition-colors">
            <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight flex items-center gap-2 mb-1">
              <TrendingUp size={18} className="text-yellow-500" /> Distribuição de Força
            </h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">Volume de alunos retidos por região</p>

            <div className="space-y-6">
              {poloDistribution.map((polo, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-xs font-black uppercase">
                    <span className="text-gray-600 dark:text-gray-300">{polo.name}</span>
                    <span className="text-gray-900 dark:text-white">{polo.count} Alunos ({polo.percentage})</span>
                  </div>
                  <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: polo.percentage }} 
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full ${polo.color} rounded-full`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTÕES DE AÇÃO RÁPIDA (UX TÁTICO) */}
          <div className="space-y-4 flex flex-col justify-end">
            <button 
              onClick={() => navigate('/admin/chamada')}
              className="w-full bg-zinc-950 text-white dark:bg-gray-800 hover:bg-zinc-900 p-8 rounded-[2.5rem] font-black uppercase tracking-widest text-xs flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-1 shadow-2xl active:scale-95 group"
            >
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-yellow-500 fill-yellow-500" />
              </div>
              Abrir Chamada Diária
            </button>

            <button 
            onClick={() => navigate('/admin/eventos')}
            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white p-6 rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all hover:border-yellow-500 active:scale-95 shadow-sm"
            >
                <CalendarCheck size={16} className="text-yellow-500" /> Gerir Mural de Eventos
            </button>
                           
            <button 
              onClick={() => navigate('/admin/membros')}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black p-6 rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-yellow-500/10"
            >
              <Users size={16} /> Ver Todos os Alunos <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}