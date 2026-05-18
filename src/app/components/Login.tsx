import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Lock, Mail, Loader2, AlertCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 👇 Usando a função direta de E-mail e Senha do Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Acesso negado. E-mail ou senha incorretos.');
      setLoading(false);
    } else if (data.session) {
      // Se a senha estiver certa, joga o Mestre direto para o Painel
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
      
      {/* Botão de voltar para o site público */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-8 left-8 flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-yellow-500 font-black uppercase text-[10px] tracking-widest transition-all z-20"
      >
        <ArrowLeft size={16} /> Voltar ao Site
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-yellow-500 rounded-[2rem] shadow-xl flex items-center justify-center rotate-3 text-black">
            <Lock size={48} />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
          Acesso Restrito
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400 font-medium">
          Painel de Gestão da Escola Luta de Libertação
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-900 py-8 px-4 shadow-2xl sm:rounded-[2rem] sm:px-10 border border-stone-200/60 dark:border-gray-800"
        >
          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* CAMPO DE E-MAIL */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-2">
                E-mail Institucional
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors font-medium"
                  placeholder="mestre@lutadelibertacao.com"
                />
              </div>
            </div>

            {/* CAMPO DE SENHA */}
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300 mb-2">
                Senha de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* MENSAGEM DE ERRO */}
            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm font-medium">
                <AlertCircle size={18} className="shrink-0" />
                {error}
              </motion.div>
            )}

            {/* BOTÃO DE LOGIN */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-2xl shadow-lg text-sm font-black uppercase tracking-widest text-black bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
            >
              {loading ? (
                <><Loader2 className="animate-spin" size={20} /> Autenticando...</>
              ) : (
                'Entrar no Sistema'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}