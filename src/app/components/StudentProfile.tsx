import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, User, BarChart3, MessageSquare, 
  Award, Calendar, Save, Loader2, Plus 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('ficha'); // ficha, presenca, notas
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      const { data } = await supabase.from('alunos').select('*').eq('id', id).single();
      if (data) setStudent(data);
      setLoading(false);
    };
    fetchStudent();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center dark:bg-gray-950"><Loader2 className="animate-spin text-yellow-500" /></div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 md:p-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* VOLTAR */}
        <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white mb-8 font-black uppercase text-[10px] tracking-widest transition-all">
          <ArrowLeft size={16} /> Voltar para lista
        </button>

        {/* HEADER DO PERFIL */}
        <header className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 dark:border-gray-800 mb-8 flex flex-col md:flex-row items-center gap-8 transition-colors">
          <div className="w-32 h-32 bg-yellow-500 rounded-[2.5rem] flex items-center justify-center text-4xl font-black text-black rotate-3 shadow-xl">
            {student.apelido[0]}
          </div>
          <div className="text-center md:text-left flex-1">
            <div className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-full text-[10px] font-black uppercase mb-2">
              {student.graduacao}
            </div>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">{student.apelido}</h1>
            <p className="text-gray-400 font-bold uppercase text-xs">{student.nome} • Polo {student.polo}</p>
          </div>
        </header>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="flex gap-2 p-2 bg-gray-200/50 dark:bg-gray-900 rounded-2xl mb-8 w-fit transition-colors">
          {[
            { id: 'ficha', icon: User, label: 'Ficha' },
            { id: 'presenca', icon: BarChart3, label: 'Desempenho' },
            { id: 'notas', icon: MessageSquare, label: 'Observações' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab.id 
                ? 'bg-white dark:bg-gray-800 text-yellow-500 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </div>

        {/* CONTEÚDO DAS ABAS */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 rounded-[3rem] p-10 border border-gray-100 dark:border-gray-800 shadow-xl transition-colors"
        >
          {activeTab === 'ficha' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="font-black uppercase text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Award className="text-yellow-500" /> Informações de Graduação
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <p className="text-[10px] font-black text-gray-400 uppercase">Status de Avaliação</p>
                    <p className="font-bold text-green-500 uppercase">Apto para troca de corda</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <p className="text-[10px] font-black text-gray-400 uppercase">Último Batizado</p>
                    <p className="font-bold dark:text-white uppercase">Julho de 2025</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-black uppercase text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
                  <Calendar className="text-blue-500" /> Presença Global
                </h3>
                <div className="h-40 flex items-center justify-center border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-[2rem]">
                  <p className="text-gray-400 text-xs font-bold uppercase">Gráfico em desenvolvimento...</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notas' && (
            <div className="space-y-6">
              <h3 className="font-black uppercase text-gray-900 dark:text-white tracking-tight">Avaliação Técnica do Mestre</h3>
              <textarea 
                className="w-full h-48 bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 dark:text-white transition-all"
                placeholder="Ex: Aluno demonstra grande agilidade na esquiva, mas precisa focar na musicalidade e no ritmo do berimbau..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <button className="bg-black dark:bg-yellow-500 text-white dark:text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-xl active:scale-95 transition-all">
                <Save size={16} /> Salvar Observações
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}