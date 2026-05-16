import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, Trash2, Eye, X, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

export function GraduationManager() {
  const navigate = useNavigate();
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [newName, setNewName] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [newPolo, setNewPolo] = useState('Novo Aleixo');
  const [newGraduation, setNewGraduation] = useState('Corda Crua');

  const fetchStudents = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('alunos')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setStudents(data);
    setLoading(false);
  };

  useEffect(() => { 
    fetchStudents(); 
  }, []);

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase.from('alunos').insert([{ 
      nome: newName, 
      apelido: newNickname, 
      polo: newPolo, 
      graduacao: newGraduation, 
      status: "Apto" 
    }]).select();

    if (!error && data) {
      setStudents([data[0], ...students]);
      setNewName(''); 
      setNewNickname(''); 
      setShowAddForm(false);
    }
  };

  const handleDeleteStudent = async (id: string, apelido: string) => {
    const confirmar = window.confirm(`Tem certeza que deseja remover o capoeirista "${apelido}" do grupo?`);
    
    if (confirmar) {
      const { error } = await supabase
        .from('alunos')
        .delete()
        .eq('id', id);

      if (error) {
        alert('Erro ao remover aluno: ' + error.message);
      } else {
        setStudents(prev => prev.filter(student => student.id !== id));
      }
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER CONTROLE */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Membros</h2>
            <p className="text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest">Controle Pedagógico ECLL</p>
          </div>
          
          {/* Grupo de botões de Ação rápida */}
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={() => navigate('/admin/chamada')} 
              className="flex-1 sm:flex-none bg-zinc-900 text-white dark:bg-gray-800 hover:bg-zinc-800 dark:hover:bg-gray-750 px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl transition-all active:scale-95"
            >
              <div className="flex items-center justify-center gap-2">
                <Check size={16} className="text-green-500" /> Fazer Chamada
              </div>
            </button>

            <button 
              onClick={() => setShowAddForm(true)} 
              className="flex-1 sm:flex-none bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl shadow-yellow-500/20 transition-all active:scale-95"
            >
              <div className="flex items-center justify-center gap-2">
                <UserPlus size={16} /> Novo Aluno
              </div>
            </button>
          </div>
        </div>

        {/* TABELA DE MEMBROS */}
        <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-800">
                <tr className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
                  <th className="p-6">Capoeirista</th>
                  <th className="p-6">Polo</th>
                  <th className="p-6">Graduação</th>
                  <th className="p-6 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-20 text-center">
                      <Loader2 className="animate-spin mx-auto text-yellow-500" size={32} />
                    </td>
                  </tr>
                ) : (
                  students.map((s) => (
                    <tr key={s.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                          <div className="w-10 h-10 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-xl flex items-center justify-center font-black shadow-inner">
                            {s.apelido ? s.apelido[0] : s.nome[0]}
                          </div>
                          <div>
                            <p className="font-black text-sm uppercase tracking-tight">{s.apelido}</p>
                            <p className="text-[10px] text-gray-400 font-bold">{s.nome}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">
                        {s.polo}
                      </td>
                      <td className="p-6">
                        <span className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-yellow-500/20">
                          {s.graduacao}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => navigate(`/admin/aluno/${s.id}`)}
                            title="Ver Prontuário"
                            className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all"
                          >
                            <Eye size={18}/>
                          </button>

                          <button 
                            onClick={() => handleDeleteStudent(s.id, s.apelido || s.nome)}
                            title="Remover Aluno"
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all"
                          >
                            <Trash2 size={18}/>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL ADICIONAR ALUNO */}
      <AnimatePresence>
        {showAddForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-6">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <div className="bg-yellow-500 p-8 flex justify-between items-center text-black font-black uppercase tracking-tighter">
                <h3 className="text-xl">Novo Cadastro</h3>
                <button onClick={() => setShowAddForm(false)} className="hover:rotate-90 transition-transform"><X /></button>
              </div>
              
              <form onSubmit={handleAddStudent} className="p-10 space-y-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Nome Civil</label>
                  <input required className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all" value={newName} onChange={e => setNewName(e.target.value)} placeholder="Ex: João Silva" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Apelido na Roda</label>
                  <input required className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 transition-all" value={newNickname} onChange={e => setNewNickname(e.target.value)} placeholder="Ex: Ligeiro" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Polo</label>
                    <select className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl outline-none text-gray-900 dark:text-white cursor-pointer" value={newPolo} onChange={e => setNewPolo(e.target.value)}>
                      <option value="Novo Aleixo">Novo Aleixo</option>
                      <option value="Centro">Centro</option>
                      <option value="Cidade Nova">Cidade Nova</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-gray-400 ml-1">Graduação</label>
                    <select className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl outline-none text-gray-900 dark:text-white cursor-pointer" value={newGraduation} onChange={e => setNewGraduation(e.target.value)}>
                      <option value="Corda Crua">Corda Crua</option>
                      <option value="Amarela">Amarela</option>
                      <option value="Laranja">Laranja</option>
                      <option value="Azul">Azul</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-black dark:bg-yellow-500 text-white dark:text-black p-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
                  <Check size={18} /> Confirmar Matrícula
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}