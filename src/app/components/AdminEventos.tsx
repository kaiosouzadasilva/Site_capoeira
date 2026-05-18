import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, CalendarPlus, Trash2, MapPin, 
  Tag, Type, Check, X, Loader2, Calendar, Image as ImageIcon, FileText, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { useToast } from './Toast';

export function AdminEventos() {
  const navigate = useNavigate();
  const toast = useToast();
  const [eventos, setEventos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(''); 
  const [realDate, setRealDate] = useState(''); 
  const [location, setLocation] = useState('');
  const [tag, setTag] = useState('Roda Aberta');
  const [objetivo, setObjetivo] = useState('');
  const [editaisApoio, setEditaisApoio] = useState('');
  const [programacao, setProgramacao] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchEventos = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('eventos').select('*').order('real_date', { ascending: false });
    if (error) toast.error("Erro ao ler eventos: " + error.message);
    if (data) setEventos(data);
    setLoading(false);
  };

  useEffect(() => { fetchEventos(); }, []);

  const handleAddEvento = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imagemFinal = tag === 'Workshop' ? '/Imagem_do_grupo.webp' : '/membros/batizado2025.webp';
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `flyers/${fileName}`;
        const { error: uploadError } = await supabase.storage.from('eventos').upload(filePath, imageFile);
        if (uploadError) throw uploadError;
        const { data: { publicUrl } } = supabase.storage.from('eventos').getPublicUrl(filePath);
        imagemFinal = publicUrl;
      }
      const { data, error } = await supabase.from('eventos').insert([{ 
        title, date, real_date: realDate, location, tag, image: imagemFinal, objetivo, editais_apoio: editaisApoio, programacao
      }]).select();
      if (error) throw error;
      if (data) {
        setEventos([data[0], ...eventos]);
        setTitle(''); setDate(''); setRealDate(''); setLocation(''); 
        setObjetivo(''); setEditaisApoio(''); setProgramacao(''); setImageFile(null);
        setShowAddForm(false);
        toast.success('Evento publicado no site.');
      }
    } catch (error: any) {
      toast.error('Erro ao processar evento: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteEvento = async (id: string, titulo: string) => {
    if (window.confirm(`Tem a certeza que deseja apagar o evento "${titulo}"?`)) {
      const { error } = await supabase.from('eventos').delete().eq('id', id);
      if (error) {
        toast.error('Erro ao apagar evento: ' + error.message);
        return;
      }
      setEventos(prev => prev.filter(e => e.id !== id));
      toast.success('Evento apagado.');
    }
  };

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white mb-8 font-black uppercase text-[10px] tracking-widest transition-all">
          <ArrowLeft size={16} /> Voltar para o Painel
        </button>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Mural de Eventos</h2>
            <p className="text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest">Controle da Agenda ECLL</p>
          </div>
          <button onClick={() => setShowAddForm(true)} className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-2">
            <CalendarPlus size={18} /> Novo Evento
          </button>
        </div>

        <div className="grid gap-4">
          {loading ? (
            <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-yellow-500" size={32} /></div>
          ) : eventos.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-16 text-center border border-dashed border-gray-200 dark:border-gray-800">
              <p className="text-gray-400 font-black uppercase tracking-widest">Nenhum evento cadastrado no sistema.</p>
            </div>
          ) : (
            eventos.map((evento) => (
              <div key={evento.id} className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <img src={evento.image} alt={evento.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full text-[9px] font-black uppercase mb-2 border border-gray-200 dark:border-gray-700">
                      {evento.tag}
                    </span>
                    <h3 className="font-black text-gray-900 dark:text-white uppercase text-lg tracking-tight leading-tight">{evento.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-[10px] font-bold text-gray-400 uppercase">
                      <span className="flex items-center gap-1"><Calendar size={12} className="text-yellow-500"/> {evento.date}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} className="text-gray-500"/> {evento.location}</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleDeleteEvento(evento.id, evento.title)} className="w-full md:w-auto p-4 bg-red-50 text-red-500 dark:bg-red-500/10 hover:bg-red-500 hover:text-white rounded-xl transition-all flex items-center justify-center">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <AnimatePresence>
        {showAddForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-6 overflow-y-auto">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-900 w-full max-w-xl rounded-[3rem] shadow-3xl overflow-hidden border border-gray-100 dark:border-gray-800 my-8">
              <div className="bg-yellow-500 p-6 flex justify-between items-center text-black font-black uppercase tracking-tighter">
                <h3 className="text-lg">Anunciar Evento e Portfólio</h3>
                <button onClick={() => setShowAddForm(false)} className="hover:rotate-90 transition-transform"><X /></button>
              </div>
              
              <form onSubmit={handleAddEvento} className="p-8 space-y-4 max-h-[80vh] overflow-y-auto scrollbar-hide">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><Type size={11}/> Título do Evento</label>
                  <input required className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500" value={title} onChange={e => setTitle(e.target.value)} placeholder="Ex: Roda de Rua - Centro" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><Calendar size={11}/> Data para Exibição</label>
                    <input required className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500" value={date} onChange={e => setDate(e.target.value)} placeholder="Ex: 15 de Junho às 19h" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><Calendar size={11}/> Data de Controle (Filtro)</label>
                    <input type="date" required className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs encoding-none outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 cursor-pointer" value={realDate} onChange={e => setRealDate(e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><MapPin size={11}/> Local</label>
                    <input required className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500" value={location} onChange={e => setLocation(e.target.value)} placeholder="Ex: Largo de São Sebastião" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><Tag size={11}/> Categoria</label>
                    <select className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white cursor-pointer" value={tag} onChange={e => setTag(e.target.value)}>
                      <option value="Roda Aberta">Roda Aberta</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Batizado">Batizado</option>
                      <option value="Comunicado">Comunicado Oficial</option>
                      <option value="Oficina">Oficina Cultural / Contínua</option> 
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><Target size={11}/> Objetivo Pedagógico / Cultural</label>
                  <textarea rows={2} className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 resize-none font-medium" value={objetivo} onChange={e => setObjetivo(e.target.value)} placeholder="Descreva o propósito do evento na comunidade..." />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><Calendar size={11}/> Cronograma / Programação de Horários</label>
                  <textarea rows={2} className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 resize-none font-medium" value={programacao} onChange={e => setProgramacao(e.target.value)} placeholder="Ex: 18:00 - Oficinas de Toques&#10;19:30 - Roda de Encerramento" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><FileText size={11}/> Prestação de Contas (Editais / Leis de Fomento)</label>
                  <textarea rows={1} className="w-full p-3.5 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-xs outline-none text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 resize-none font-medium" value={editaisApoio} onChange={e => setEditaisApoio(e.target.value)} placeholder="Ex: Contemplado pela Lei Paulo Gustavo - Edital SEC AM n° 02/2024" />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase text-gray-400 ml-1 flex items-center gap-1"><ImageIcon size={11}/> Foto do Cartaz (Galeria)</label>
                  <input type="file" accept="image/*" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl text-[10px] outline-none text-gray-900 dark:text-white file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-[9px] file:font-black file:uppercase file:bg-yellow-500 file:text-black cursor-pointer" onChange={e => e.target.files?.[0] && setImageFile(e.target.files[0])} />
                </div>

                <button type="submit" disabled={saving} className="w-full bg-black dark:bg-yellow-500 text-white dark:text-black p-4 rounded-xl font-black uppercase tracking-widest text-xs shadow-xl flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-50 mt-2">
                  {saving ? <Loader2 className="animate-spin" size={16} /> : <><Check size={16} /> Publicar no Site</>}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
