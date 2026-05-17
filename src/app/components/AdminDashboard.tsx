// src/app/components/AdminDashboard.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, UserCheck, Award, TrendingUp, Calendar, AlertCircle, Loader2
} from 'lucide-react';
import { supabase } from '../lib/supabase'; // Conexão com o banco

export function AdminDashboard() {
  // 1. Criamos estados para guardar as métricas reais
  const [metricas, setMetricas] = useState({
    totalAlunos: 0,
    alunosAtivos: 0,
    eventosAtivos: 0,
    examesVista: 0 // Deixaremos 0 até ter a lógica de frequência
  });
  const [loading, setLoading] = useState(true);

  // 2. O hook busca os dados no Supabase assim que o Mestre abre o painel
  useEffect(() => {
    async function carregarMetricasReais() {
      setLoading(true);
      
      try {
        // Busca a contagem real de alunos na tabela (mude 'alunos' para o nome exato da sua tabela se for diferente)
        const { count: countTotal, error: erroAlunos } = await supabase
          .from('alunos')
          .select('*', { count: 'exact', head: true }); // head: true não traz os dados, só a contagem (mais rápido)

        // Busca quantos alunos estão com status 'Ativo'
        const { count: countAtivos } = await supabase
          .from('alunos')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'Ativo');

        // Busca os eventos que ainda não aconteceram
        const hoje = new Date().toISOString().split('T')[0];
        const { count: countEventos, error: erroEventos } = await supabase
          .from('eventos')
          .select('*', { count: 'exact', head: true })
          .gte('real_date', hoje);

        setMetricas({
          totalAlunos: countTotal || 0,
          alunosAtivos: countAtivos || 0,
          eventosAtivos: countEventos || 0,
          examesVista: 0 // Fica para uma próxima etapa cruzar com a chamada
        });

      } catch (error) {
        console.error("Erro ao carregar métricas:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarMetricasReais();
  }, []);

  // 3. Cálculo de Assiduidade Geral (simplificado para o exemplo)
  const taxaAssiduidade = metricas.totalAlunos > 0 
    ? Math.round((metricas.alunosAtivos / metricas.totalAlunos) * 100) 
    : 0;

  // 4. Cartões de Estatísticas
  const stats = [
    { label: 'Total Matriculados', value: metricas.totalAlunos, icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Alunos Ativos', value: metricas.alunosAtivos, icon: UserCheck, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'Aptos para Exame', value: metricas.examesVista, icon: Award, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Eventos Futuros', value: metricas.eventosAtivos, icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="animate-spin text-yellow-500" size={40} />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* CABEÇALHO */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Painel de Comando</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Visão geral e indicadores da Escola Luta de Libertação</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-500 rounded-full text-xs font-black uppercase tracking-widest border border-green-500/20">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Sistema Ativo
        </div>
      </div>

      {/* CARDS DE ESTATÍSTICAS REAIS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg}`}>
                <stat.icon className={stat.color} size={24} />
              </div>
            </div>
            <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-1">{stat.value}</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {/* GRÁFICO DE ASSIDUIDADE */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Assiduidade Geral</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Frequência média da escola</p>
            </div>
            <TrendingUp className="text-gray-400" size={24} />
          </div>

          <div className="flex items-end gap-6 mb-8">
            <h4 className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter">{taxaAssiduidade}%</h4>
            <span className="text-sm font-bold text-green-500 mb-2">+2.4% este mês</span>
          </div>

          <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${taxaAssiduidade}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-yellow-500 rounded-full"
            />
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">A meta institucional é manter a média acima de 75%.</p>
        </div>

        {/* ALERTAS DO SISTEMA */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
            <AlertCircle className="text-yellow-500" size={24} />
            <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Alertas</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-center text-center opacity-50 grayscale">
            <Award size={48} className="text-gray-300 mb-4" />
            <p className="text-sm font-bold text-gray-500 uppercase">Nenhum exame agendado</p>
            <p className="text-xs text-gray-400 mt-2">A lista de aptos aparecerá aqui quando o batizado for marcado.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 