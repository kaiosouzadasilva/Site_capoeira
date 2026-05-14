import { useState, useEffect } from 'react';
import { 
  UserPlus, 
  Edit, 
  Trash2, 
  Eye, 
  X, 
  Check, 
  Loader2, 
  FileSpreadsheet,
  Calendar,
  MapPin,
  Save
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase'; 

// IMPORTANTE: O nome da função deve ser EXATAMENTE GraduationManager
export function GraduationManager() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Estados para o formulário
  const [newName, setNewName] = useState('');
  const [newNickname, setNewNickname] = useState('');
  const [newPolo, setNewPolo] = useState('Novo Aleixo');
  const [newGraduation, setNewGraduation] = useState('Corda Crua');

  // --- BUSCAR ALUNOS ---
  const fetchStudents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('alunos')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setStudents(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // --- SALVAR NOVO ALUNO ---
  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { data, error } = await supabase
      .from('alunos')
      .insert([
        { 
          nome: newName, 
          apelido: newNickname, 
          polo: newPolo,
          graduacao: newGraduation,
          status: "Apto"
        }
      ])
      .select();

    if (error) {
      alert("Erro ao salvar: " + error.message);
    } else {
      if (data) setStudents([data[0], ...students]);
      setNewName('');
      setNewNickname('');
      setShowAddForm(false);
    }
    setSaving(false);
  };

  // --- EXPORTAR CSV ---
  const exportToCSV = () => {
    const headers = ["Nome", "Apelido", "Polo", "Graduacao"];
    const rows = students.map(s => [s.nome, s.apelido, s.polo, s.graduacao]);
    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "relatorio_ecll.csv";
    link.click();
  };

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-4xl font-black dark:text-white uppercase tracking-tighter">Gestão ECLL</h2>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Controle de Membros & Performance</p>
          </div>
          
          <div className="flex gap-3">
            <button onClick={exportToCSV} className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-100 transition-all">
              <FileSpreadsheet size={16} className="text-green-600" /> Exportar
            </button>
            <button 
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-yellow-500/20"
            >
              <UserPlus size={16} /> Novo Aluno
            </button>
          </div>
        </div>

        {/* TABELA */}
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl">
          {loading ? (
            <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-yellow-500" /></div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400">Membro</th>
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400">Polo</th>
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400">Graduação</th>
                  <th className="p-6 text-[10px] font-black uppercase text-gray-400 text-center">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-yellow-500/10 text-yellow-600 rounded-xl flex items-center justify-center font-black">
                          {student.apelido ? student.apelido[0] : student.nome[0]}
                        </div>
                        <div>
                          <p className="font-black dark:text-white text-sm uppercase">{student.apelido}</p>
                          <p className="text-[10px] text-gray-500 font-bold">{student.nome}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-xs font-bold dark:text-gray-400 uppercase">{student.polo}</td>
                    <td className="p-6">
                      <span className="bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                        {student.graduacao}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-500"><Eye size={18}/></button>
                        <button className="p-2 text-gray-400 hover:text-red-500"><Trash2 size={18}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* MODAL (ANIMADO) */}
        <AnimatePresence>
          {showAddForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-[3rem] shadow-3xl overflow-hidden">
                 <div className="bg-yellow-500 p-8 flex justify-between items-center text-black font-black uppercase">
                    <h3>Matricular Aluno</h3>
                    <button onClick={() => setShowAddForm(false)}><X /></button>
                 </div>
                 <form onSubmit={handleAddStudent} className="p-10 space-y-5">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400">Nome Completo</label>
                      <input required className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl outline-none dark:text-white" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black uppercase text-gray-400">Apelido</label>
                      <input required className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl outline-none dark:text-white" value={newNickname} onChange={(e) => setNewNickname(e.target.value)} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-gray-400">Polo</label>
                        <select className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl outline-none dark:text-white" value={newPolo} onChange={(e) => setNewPolo(e.target.value)}>
                          <option value="Novo Aleixo">Novo Aleixo</option>
                          <option value="Centro">Centro</option>
                          <option value="Cidade Nova">Cidade Nova</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-gray-400">Graduação</label>
                        <select className="w-full p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl outline-none dark:text-white" value={newGraduation} onChange={(e) => setNewGraduation(e.target.value)}>
                          <option value="Corda Crua">Corda Crua</option>
                          <option value="Amarela">Amarela</option>
                          <option value="Verde">Verde</option>
                          <option value="Roxa">Roxa</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" disabled={saving} className="w-full bg-black dark:bg-yellow-500 text-white dark:text-black p-5 rounded-2xl font-black uppercase shadow-xl flex items-center justify-center gap-2">
                      {saving ? <Loader2 className="animate-spin" /> : <Check size={20} />} Salvar no Banco
                    </button>
                 </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}