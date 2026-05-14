import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ShieldCheck, UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  name: string;
  role: 'mestre' | 'aluno';
}

export function Login({ onLogin }: { onLogin: (user: UserData) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // LÓGICA DE SIMULAÇÃO (Isso será substituído pelo Supabase futuramente)
    if (email === "mestre@ecll.com" && password === "123456") {
      const userData: UserData = { name: "Mestre Canário", role: 'mestre' };
      onLogin(userData);
      navigate('/admin');
    } 
    else if (email === "aluno@ecll.com" && password === "123456") {
      const userData: UserData = { name: "Invergado", role: 'aluno' };
      onLogin(userData);
      navigate('/meu-progresso');
    } 
    else {
      alert("Credenciais inválidas! Tente mestre@ecll.com ou aluno@ecll.com (senha 123456)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-gray-900 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
      >
        <div className="bg-yellow-500 p-10 text-center relative">
          <div className="w-20 h-20 bg-black rounded-3xl mx-auto flex items-center justify-center mb-4 shadow-xl rotate-3">
            <ShieldCheck className="text-yellow-500" size={40} />
          </div>
          <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Portal ECLL</h2>
          <p className="text-black/60 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Área de Membros & Liderança</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">E-mail Cadastrado</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-none focus:ring-2 focus:ring-yellow-500 outline-none dark:text-white transition-all"
                placeholder="ex: mestre@ecll.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Senha de Acesso</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-none focus:ring-2 focus:ring-yellow-500 outline-none dark:text-white transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-black dark:bg-yellow-500 text-white dark:text-black font-black py-5 rounded-2xl uppercase tracking-widest text-sm hover:shadow-2xl hover:shadow-yellow-500/20 transition-all active:scale-95"
          >
            Entrar no Sistema
          </button>
          
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
            Esqueceu sua senha? Contate o Mestre.
          </p>
        </form>
      </motion.div>
    </div>
  );
}