import { motion } from 'framer-motion';
import { Trophy, Flame, Calendar, Music, BookOpen, Download, Star } from 'lucide-react';

export function StudentDashboard() {
  const studentData = {
    name: "Kaio Souza", nickname: "Invergado", currentCord: "Azul e amarelo (Estagiário)",
    nextCord: "Verde, amarelo e azul (Formado)", progress: 75, streak: 5, attendanceThisMonth: 92,
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20">
      {/* HEADER: Perfil em destaque */}
      <div className="bg-black text-white pt-24 pb-32 px-10 rounded-b-[60px] shadow-2xl relative">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="w-28 h-28 rounded-full border-4 border-yellow-500 p-1 flex-shrink-0 bg-gray-800 shadow-xl">
            <img src="/membros/Invergado.png" className="w-full h-full rounded-full object-cover" alt="Perfil" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-tight">Salve, {studentData.nickname}!</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-black text-[10px] uppercase">{studentData.currentCord}</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full font-bold text-[10px] uppercase border border-white/20">Polo Novo Aleixo</span>
            </div>
          </div>
        </div>
        {/* Decoração sutil de fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -mr-20 -mt-20" />
      </div>

      {/* CONTEÚDO: Cards de Status (Usando margem negativa controlada) */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Dias de Fogo</p>
                <span className="text-4xl font-black dark:text-white">{studentData.streak}</span>
            </div>
            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
              <Flame size={32} />
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
                <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Presença Mensal</p>
                <span className="text-4xl font-black dark:text-white">{studentData.attendanceThisMonth}%</span>
            </div>
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
              <Calendar size={32} />
            </div>
          </motion.div>
        </div>

        {/* BARRA DE PROGRESSO REFINADA */}
        <div className="mt-8 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800">
           <div className="flex justify-between items-end mb-4">
            <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Rumo à graduação</span>
                <span className="text-sm font-bold dark:text-white">{studentData.nextCord}</span>
            </div>
            <span className="text-2xl font-black text-yellow-500">{studentData.progress}%</span>
          </div>
          <div className="w-full h-5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-1 shadow-inner">
            <motion.div initial={{ width: 0 }} animate={{ width: `${studentData.progress}%` }} className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full shadow-lg" />
          </div>
        </div>

        {/* ÁREA DE DOWNLOAD DE CERTIFICADOS */}
        <div className="mt-8">
            <button className="w-full bg-yellow-500 text-black p-6 rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-xl shadow-yellow-500/20 flex items-center justify-center gap-4 hover:bg-yellow-400 transition-all hover:scale-[1.01] active:scale-[0.99]">
              <Star size={24} fill="currentColor" /> Baixar Certificado Oficial
            </button>
            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">Documento Validado com Assinatura Digital do Mestre</p>
        </div>
      </div>
    </div>
  );
}
