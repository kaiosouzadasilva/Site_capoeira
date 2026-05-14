import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { User, Mail, Lock, UserPlus, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function Register({ onToggle }: { onToggle: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Cria o usuário na Autenticação do Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // 2. Cria o perfil do aluno na nossa tabela vinculando ao ID do Auth
        const { error: profileError } = await supabase
          .from('alunos')
          .insert([
            { 
              user_id: authData.user.id,
              nome, 
              apelido, 
              polo: 'A definir', // Aluno novo entra sem polo definido
              graduacao: 'Corda Crua',
              status: 'Iniciante'
            }
          ]);

        if (profileError) throw profileError;
        
        alert("Cadastro realizado! Verifique seu e-mail para confirmar.");
        onToggle(); // Volta para o login
      }
    } catch (err: any) {
      alert("Erro no cadastro: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-900 rounded-[3rem] p-10 border border-gray-800 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3">
            <UserPlus size={32} className="text-black" />
          </div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Criar Conta</h2>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Plataforma ECLL Digital</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-4 text-gray-500" size={18} />
            <input 
              required
              placeholder="Nome Completo"
              className="w-full bg-gray-800 border-none rounded-2xl p-4 pl-12 text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="relative">
            <ShieldCheck className="absolute left-4 top-4 text-gray-500" size={18} />
            <input 
              required
              placeholder="Apelido na Capoeira"
              className="w-full bg-gray-800 border-none rounded-2xl p-4 pl-12 text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-gray-500" size={18} />
            <input 
              required
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full bg-gray-800 border-none rounded-2xl p-4 pl-12 text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-gray-500" size={18} />
            <input 
              required
              type="password"
              placeholder="Crie uma senha"
              className="w-full bg-gray-800 border-none rounded-2xl p-4 pl-12 text-white outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-black uppercase p-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-yellow-400 transition-all shadow-xl shadow-yellow-500/10"
          >
            {loading ? <Loader2 className="animate-spin" /> : <>Finalizar Cadastro <ArrowRight size={18} /></>}
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500 text-sm font-bold">
          Já tem uma conta? 
          <button onClick={onToggle} className="text-yellow-500 ml-2 hover:underline">Faça Login</button>
        </p>
      </motion.div>
    </div>
  );
}