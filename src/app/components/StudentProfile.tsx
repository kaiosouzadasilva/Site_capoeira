import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, User, MessageSquare, 
  Award, Save, Loader2, Activity,
  Zap, Music, Flame, ShieldCheck, Target, Edit3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useToast } from './Toast';

export function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const [student, setStudent] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('radar'); 
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [note, setNote] = useState('');
  
  // NOVA ESTRUTURA: Cada pilar agora tem 'nota' (0 a 10) e 'feedback' específico
  const [radar, setRadar] = useState({
    tecnica: { nota: 5, feedback: '' },
    musicalidade: { nota: 5, feedback: '' },
    mandinga: { nota: 5, feedback: '' },
    postura: { nota: 5, feedback: '' }
  });

  useEffect(() => {
    const fetchStudent = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('alunos')
        .select('*')
        .eq('id', id)
        .single();
        
      if (data) {
        setStudent(data);
        setNote(data.observacoes || '');
        
        // Se o aluno já tiver dados, carregamos. Se for do formato antigo (só números), adaptamos.
        if (data.radar_tecnico) {
          const r = data.radar_tecnico;
          setRadar({
            tecnica: typeof r.tecnica === 'number' ? { nota: r.tecnica * 2, feedback: '' } : (r.tecnica || { nota: 5, feedback: '' }),
            musicalidade: typeof r.musicalidade === 'number' ? { nota: r.musicalidade * 2, feedback: '' } : (r.musicalidade || { nota: 5, feedback: '' }),
            mandinga: typeof r.mandinga === 'number' ? { nota: r.mandinga * 2, feedback: '' } : (r.mandinga || { nota: 5, feedback: '' }),
            postura: typeof r.postura === 'number' ? { nota: r.postura * 2, feedback: '' } : (r.postura || { nota: 5, feedback: '' })
          });
        }
      }
      setLoading(false);
    };
    fetchStudent();
  }, [id]);

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('alunos')
        .update({ 
          observacoes: note,
          radar_tecnico: radar
        })
        .eq('id', id);

      if (error) throw error;
      toast.success('Prontuário e avaliações atualizados com sucesso.');
    } catch (err: any) {
      toast.error('Erro ao guardar dados: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center dark:bg-gray-950">
        <Loader2 className="animate-spin text-yellow-500" size={32} />
      </div>
    );
  }

  if (!student) {
    return (
      <div className="h-screen flex flex-col items-center justify-center dark:bg-gray-950">
        <p className="text-gray-400 font-bold uppercase text-sm">Aluno não encontrado.</p>
        <button onClick={() => navigate('/admin')} className="text-yellow-500 mt-4 font-bold hover:underline">
          Voltar para a lista
        </button>
      </div>
    );
  }

  // Calcula a média baseada em 10 pontos
  const mediaRadar = (radar.tecnica.nota + radar.musicalidade.nota + radar.mandinga.nota + radar.postura.nota) / 4;
  const statusColor = mediaRadar >= 8 ? 'text-green-500' : mediaRadar >= 5 ? 'text-yellow-500' : 'text-red-500';

  // Função para atualizar uma nota ou feedback específico de forma limpa
  const updateRadar = (pilar: string, campo: 'nota' | 'feedback', valor: any) => {
    setRadar(prev => ({
      ...prev,
      [pilar]: {
        ...(prev[pilar as keyof typeof prev]),
        [campo]: valor
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6 md:p-12 transition-colors duration-300 pb-32">
      <div className="max-w-4xl mx-auto">
        
        <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white mb-8 font-black uppercase text-[10px] tracking-widest transition-all">
          <ArrowLeft size={16} /> Voltar para lista
        </button>

        {/* HEADER DO PERFIL */}
        <header className="bg-white dark:bg-gray-900 rounded-[3rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-800 mb-8 flex flex-col sm:flex-row items-center gap-8 transition-colors relative overflow-hidden">
          <div className="w-28 h-28 bg-gray-100 dark:bg-gray-800 rounded-[2rem] flex items-center justify-center text-4xl font-black text-gray-400 border-4 border-yellow-500 shadow-xl shrink-0 z-10">
            {student.apelido ? student.apelido[0] : student.nome[0]}
          </div>
          
          <div className="text-center sm:text-left flex-1 z-10">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-3">
              <span className="inline-block px-3 py-1 bg-yellow-500 text-black rounded-full text-[9px] font-black uppercase shadow-sm">
                {student.graduacao}
              </span>
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full text-[9px] font-black uppercase border border-gray-200 dark:border-gray-700">
                Polo {student.polo}
              </span>
            </div>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">{student.apelido || student.nome}</h1>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">{student.nome}</p>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        </header>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8 transition-colors">
          {[
            { id: 'radar', icon: Activity, label: 'Avaliação Pedagógica' },
            { id: 'ficha', icon: User, label: 'Evolução' },
            { id: 'notas', icon: MessageSquare, label: 'Anotações Gerais' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${
                activeTab === tab.id 
                ? 'bg-black text-yellow-500 dark:bg-yellow-500 dark:text-black scale-105' 
                : 'bg-white text-gray-500 hover:text-gray-900 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-white border border-gray-100 dark:border-gray-800'
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
          className="bg-white dark:bg-gray-900 rounded-[3rem] p-6 md:p-12 border border-gray-100 dark:border-gray-800 shadow-xl transition-colors relative overflow-hidden"
        >
          {/* ================= ABA: RADAR TÉCNICO (0 a 10) ================= */}
          {activeTab === 'radar' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
                <div>
                  <h3 className="text-2xl font-black uppercase text-gray-900 dark:text-white tracking-tighter flex items-center gap-2">
                    <Target className="text-yellow-500" /> Matriz de Fundamentos
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Avaliação detalhada de 0 a 10</p>
                </div>
                <div className={`flex items-center gap-2 font-black uppercase text-xs tracking-widest ${statusColor} bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-xl`}>
                  Média Global: {mediaRadar.toFixed(1)}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { key: 'tecnica', label: 'Técnica de Jogo', icon: Zap, color: 'text-blue-500' },
                  { key: 'musicalidade', label: 'Musicalidade', icon: Music, color: 'text-purple-500' },
                  { key: 'mandinga', label: 'Mandinga', icon: Flame, color: 'text-orange-500' },
                  { key: 'postura', label: 'Postura & Ética', icon: ShieldCheck, color: 'text-green-500' }
                ].map((item) => (
                  <div key={item.key} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 space-y-6">
                    
                    {/* Header do Card */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm ${item.color}`}>
                          <item.icon size={20} />
                        </div>
                        <h4 className="font-black text-gray-900 dark:text-white uppercase text-sm">{item.label}</h4>
                      </div>
                      <span className={`font-black text-2xl ${item.color}`}>
                        {radar[item.key as keyof typeof radar].nota}<span className="text-gray-400 text-sm">/10</span>
                      </span>
                    </div>
                    
                    {/* Slider Customizado (0 a 10) */}
                    <div>
                      <input 
                        type="range" 
                        min="0" max="10" step="1"
                        value={radar[item.key as keyof typeof radar].nota}
                        onChange={(e) => updateRadar(item.key, 'nota', Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                      />
                      <div className="flex justify-between text-[8px] font-black text-gray-400 uppercase mt-2">
                        <span>Deficiente (0)</span>
                        <span>Mestre (10)</span>
                      </div>
                    </div>

                    {/* Feedback Específico do Pilar */}
                    <div className="relative">
                      <Edit3 size={14} className="absolute left-3 top-3 text-gray-400" />
                      <textarea
                        rows={2}
                        placeholder={`Feedback sobre a ${item.label.toLowerCase()}...`}
                        value={radar[item.key as keyof typeof radar].feedback}
                        onChange={(e) => updateRadar(item.key, 'feedback', e.target.value)}
                        className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-3 pl-9 text-xs font-medium text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-yellow-500 transition-all resize-none"
                      />
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= ABA: FICHA (EVOLUÇÃO) ================= */}
          {activeTab === 'ficha' && (
            <div className="space-y-10">
              <h3 className="text-2xl font-black uppercase text-gray-900 dark:text-white tracking-tighter flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-6">
                <Award className="text-yellow-500" /> Histórico de Graduação
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-end mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Rumo ao próximo nível</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white uppercase mt-1">Carência estimada em andamento</span>
                  </div>
                  <span className="text-2xl font-black text-yellow-500">65%</span>
                </div>
                <div className="w-full h-4 bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden shadow-inner">
                  <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Status Atual</p>
                    <p className="font-black text-green-500 uppercase mt-2">{student.status || 'Regular'}</p>
                 </div>
                 <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Último Exame</p>
                    <p className="font-black text-gray-900 dark:text-white uppercase mt-2">Batizado 2025</p>
                 </div>
              </div>
            </div>
          )}

          {/* ================= ABA: ANOTAÇÕES GERAIS ================= */}
          {activeTab === 'notas' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase text-gray-900 dark:text-white tracking-tighter flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-6">
                <MessageSquare className="text-yellow-500" /> Diário de Bordo Geral
              </h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Anotações de contexto, comportamento ou eventos do aluno.</p>
              
              <textarea 
                className="w-full h-64 bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700 dark:text-white transition-all resize-none font-medium leading-relaxed"
                placeholder="Ex: Aluno auxiliou na montagem do evento de domingo. Demonstra perfil de liderança perante as crianças do polo..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* BOTÃO FLUTUANTE DE SALVAR */}
      <div className="fixed bottom-10 left-0 right-0 px-6 z-50 pointer-events-none">
        <div className="max-w-4xl mx-auto flex justify-end">
          <button 
            onClick={handleSaveProfile}
            disabled={saving}
            className="pointer-events-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-5 rounded-full font-black uppercase text-xs tracking-widest flex items-center gap-3 shadow-2xl shadow-yellow-500/30 active:scale-95 transition-all disabled:opacity-50"
          >
            {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
            Salvar Prontuário
          </button>
        </div>
      </div>
    </div>
  );
}
