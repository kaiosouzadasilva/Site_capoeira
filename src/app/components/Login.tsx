import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ShieldCheck, KeyRound, Loader2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function Login() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  
  // O estado agora tem 3 etapas: email, token (para o mestre) ou password (para você)
  const [step, setStep] = useState<'email' | 'token' | 'password'>('email'); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();

  // O seu e-mail de desenvolvedor (único que usa senha)
  const EMAIL_DEV = "kaio.souza3020@gmail.com";
  
  const EMAILS_AUTORIZADOS = [
    "mestre@ecll.com",             
    EMAIL_DEV,
    "auxiliar1@ecll.com",               
    "auxiliar2@ecll.com",               
    "auxiliar3@ecll.com" 
  ];

  // ETAPA 1: Identificar quem está tentando logar
  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentEmail = email.trim().toLowerCase();
    
    if (!EMAILS_AUTORIZADOS.includes(currentEmail)) {
      setMessage({ type: 'error', text: 'Acesso negado. E-mail não autorizado.' });
      return;
    }

    // BYPASS DO DESENVOLVEDOR: Se for o seu e-mail, pede a senha e para por aqui.
    if (currentEmail === EMAIL_DEV) {
      setStep('password');
      return;
    }

    // Se for o Mestre ou auxiliares, segue o fluxo normal do código por e-mail
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: currentEmail,
        options: { shouldCreateUser: true }
      });

      if (error) throw error;

      setStep('token');
      setMessage({ type: 'success', text: 'Código de 6 dígitos enviado para o seu e-mail!' });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Erro ao enviar código.' });
    } finally {
      setLoading(false);
    }
  };

  // ETAPA 2 (MESTRE): Validar código de 6 dígitos
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email: email.trim().toLowerCase(),
        token: token.trim(),
        type: 'magiclink'
      });

      if (error) throw error;

      if (data.session) {
        setMessage({ type: 'success', text: 'Autenticado com sucesso!' });
        setTimeout(() => navigate('/admin'), 1000);
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: 'Código inválido ou expirado. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  // ETAPA 2 (DEV): Validar Senha
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password: password
      });

      if (error) throw error;

      if (data.session) {
        setMessage({ type: 'success', text: 'Acesso de Desenvolvedor Autorizado!' });
        setTimeout(() => navigate('/admin'), 1000);
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: 'Senha incorreta.' });
    } finally {
      setLoading(false);
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
          <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Portal de Gestão</h2>
          <p className="text-black/60 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Uso Exclusivo da Liderança</p>
        </div>

        <div className="p-10 space-y-6">
          {message.text && (
            <div className={`p-4 rounded-xl text-xs font-black uppercase text-center ${
              message.type === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'
            }`}>
              {message.text}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 'email' && (
              <motion.form key="form-email" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleRequestAccess} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">E-mail Administrativo</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="email" required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-none focus:ring-2 focus:ring-yellow-500 outline-none dark:text-white transition-all"
                      placeholder="ex: mestre@ecll.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-black dark:bg-yellow-500 text-white dark:text-black font-black py-5 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : 'Continuar'}
                </button>
              </motion.form>
            )}

            {step === 'token' && (
              <motion.form key="form-token" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handleVerifyOTP} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Código de Verificação (6 dígitos)</label>
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" maxLength={6} required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-none focus:ring-2 focus:ring-yellow-500 outline-none tracking-[0.5em] text-center font-black text-xl dark:text-white transition-all"
                      placeholder="000000"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-green-600 text-white font-black py-5 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : 'Confirmar e Entrar'}
                </button>
                <button type="button" onClick={() => setStep('email')} className="w-full text-center text-[10px] text-gray-400 uppercase tracking-widest hover:underline">
                  Alterar E-mail
                </button>
              </motion.form>
            )}

            {step === 'password' && (
              <motion.form key="form-password" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onSubmit={handlePasswordLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-yellow-600 dark:text-yellow-500 tracking-widest ml-1">Senha de Desenvolvedor</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-600 dark:text-yellow-500" size={20} />
                    <input 
                      type="password" required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border-none focus:ring-2 focus:ring-yellow-500 outline-none dark:text-white transition-all"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black font-black py-5 rounded-2xl uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50">
                  {loading ? <Loader2 className="animate-spin" size={18} /> : 'Acessar Sistema'}
                </button>
                <button type="button" onClick={() => setStep('email')} className="w-full text-center text-[10px] text-gray-400 uppercase tracking-widest hover:underline">
                  Voltar
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}