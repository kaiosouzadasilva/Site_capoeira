// src/app/components/FastAttendance.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, X, Save, MapPin, Loader2, Calendar, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function FastAttendance() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});
  const [polo, setPolo] = useState('Novo Aleixo');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadStudentsByPolo = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('alunos')
          .select('id, apelido, nome')
          .eq('polo', polo);
        
        if (error) throw error;

        if (data) {
          setStudents(data);
          const initialAttendance: Record<string, boolean> = {};
          data.forEach(s => {
            initialAttendance[s.id] = true;
          });
          setAttendance(initialAttendance);
        }
      } catch (err: any) {
        alert('Erro ao carregar alunos do polo: ' + err.message);
      } finally { // 👇 CORRIGIDO: O bloco 'finally' voltou para o lugar certo!
        setLoading(false);
      }
    };

    loadStudentsByPolo();
  }, [polo]);

  const toggleAttendance = (id: string) => {
    setAttendance(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSaveAttendance = async () => {
    if (students.length === 0) return;
    
    setSaving(true);
    try {
      const registrosPresenca = students.map(s => ({
        aluno_id: s.id,
        polo: polo,
        presente: attendance[s.id],
        data: new Date().toISOString().split('T')[0]
      }));

      const { error } = await supabase
        .from('presencas')
        .insert(registrosPresenca);

      if (error) throw error;

      alert(`Chamada do Polo [ ${polo} ] salva com sucesso!`);
      navigate('/admin'); 
    } catch (err: any) {
      alert('Erro ao salvar a chamada: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="py-12 px-6 md:px-10 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto pb-24">
        
        {/* BOTÃO VOLTAR PERFEITAMENTE VISÍVEL E ALINHADO */}
        <button 
          onClick={() => navigate('/admin')} 
          className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white mb-8 font-black uppercase text-[10px] tracking-widest transition-all cursor-pointer"
        >
          <ArrowLeft size={16} /> Voltar para o Painel
        </button>

        {/* HEADER DE CONTROLE */}
        <header className="mb-8 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter flex items-center gap-2">
                Chamada Diária
              </h2>
              <div className="flex items-center gap-2 mt-1 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                <Calendar size={14} className="text-yellow-500" />
                {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 transition-colors">
              <MapPin className="text-yellow-500" size={20} />
              <select 
                className="bg-transparent font-black text-xs uppercase outline-none text-gray-900 dark:text-white w-full cursor-pointer pr-4" 
                value={polo} 
                onChange={e => setPolo(e.target.value)}
              >
                <option value="Novo Aleixo">Novo Aleixo</option>
                <option value="Centro">Centro</option>
                <option value="Cidade Nova">Cidade Nova</option>
              </select>
            </div>
          </div>
        </header>

        {/* LISTA DE ALUNOS DO POLO */}
        <div className="grid gap-3">
          {loading ? (
            <div className="flex justify-center p-20">
              <Loader2 className="animate-spin text-yellow-500" size={40} />
            </div>
          ) : students.length > 0 ? (
            students.map(s => (
              <div 
                key={s.id} 
                onClick={() => toggleAttendance(s.id)}
                className={`group p-6 rounded-[2rem] cursor-pointer transition-all border-2 flex justify-between items-center active:scale-95 ${
                  attendance[s.id] 
                  ? 'bg-white dark:bg-gray-900 border-green-500/30 dark:border-green-500/20 shadow-lg shadow-green-500/5' 
                  : 'bg-red-50/50 dark:bg-red-900/10 border-red-500/20 opacity-60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black transition-colors ${
                    attendance[s.id] 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                  }`}>
                    {attendance[s.id] ? <Check size={20} /> : <X size={20} />}
                  </div>
                  <div>
                    <span className="font-black uppercase text-sm tracking-tight text-gray-900 dark:text-white">
                      {s.apelido || s.nome}
                    </span>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">
                      {attendance[s.id] ? 'Presente' : 'Ausente'}
                    </p>
                  </div>
                </div>

                <div className={`text-[10px] font-black uppercase px-3 py-1 rounded-full ${
                   attendance[s.id] ? 'text-green-600 bg-green-500/10' : 'text-red-600 bg-red-500/10'
                }`}>
                  {attendance[s.id] ? '✓ Na Roda' : '✕ Ausente'}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-20 bg-white dark:bg-gray-900 rounded-[2.5rem] border border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-400 font-black uppercase text-xs">Nenhum aluno cadastrado neste polo.</p>
            </div>
          )}
        </div>
      </div>

      {/* BOTÃO SALVAR (BARRA FLUTUANTE INFERIOR) */}
      <div className="fixed bottom-10 left-0 right-0 px-6 z-50">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={handleSaveAttendance}
            disabled={saving || students.length === 0}
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black p-6 rounded-[2.5rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-yellow-500/40 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:grayscale cursor-pointer"
          >
            {saving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            Finalizar Chamada do Polo
          </button>
        </div>
      </div>
    </div>
  );
}