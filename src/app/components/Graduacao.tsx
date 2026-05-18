import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock, Users, Star } from 'lucide-react';

const alunosBase = [
  { nivel: 'Aluno', cor: 'Verde', hex: 'from-green-600 to-green-600' },
  { nivel: 'Aluno', cor: 'Amarelo', hex: 'from-yellow-500 to-yellow-500' },
  { nivel: 'Aluno', cor: 'Azul', hex: 'from-blue-600 to-blue-600' }
];

const graduadosEstagiarios = [
  { nivel: 'Graduado', cor: 'Verde com Amarelo', hex: 'from-green-600 to-yellow-500' },
  { nivel: 'Graduado', cor: 'Verde com Azul', hex: 'from-green-600 to-blue-600' },
  { nivel: 'Estagiário', cor: 'Azul com Amarelo', hex: 'from-blue-600 to-yellow-500' },
];

const formados = [
  { nivel: 'Formado', cor: 'Verde, Amarelo e Azul', hex: 'from-green-600 via-yellow-500 to-blue-600' }
];

const lideranca = [
  { nivel: 'Monitor', cor: 'Branca com Verde', hex: 'from-gray-100 to-green-600', textDark: true },
  { nivel: 'Professor', cor: 'Branca com Amarelo', hex: 'from-gray-100 to-yellow-500', textDark: true },
  { nivel: 'Contra-Mestre', cor: 'Branca com Azul', hex: 'from-gray-100 to-blue-600', textDark: true },
];

const mestrado = [
  { nivel: 'Mestre', cor: 'Branco Total', hex: 'from-white via-gray-100 to-gray-200', textDark: true }
];

export function Graduacao() {
  return (
    <div className="min-h-screen bg-transparent dark:bg-gray-950 transition-colors duration-300 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-20">
          <span className="text-yellow-600 font-black uppercase text-[10px] tracking-[0.4em] mb-4 block">A Jornada do Capoeirista</span>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">
            Sistema de Graduação
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A Escola Luta de Libertação segue uma tradição unificada. Mantemos uma única sequência de cordéis de lã trançados para todos os alunos, marcando o amadurecimento técnico, físico e filosófico na roda.
          </p>
        </div>

        {/* REGRAS GERAIS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-yellow-500/10 text-yellow-600 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h3 className="font-black text-gray-900 dark:text-white uppercase mb-2">Tempo de Evolução</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">O tempo base para a troca de cordão exige treino consistente, dedicação e obediência aos fundamentos, sujeito sempre à avaliação do Mestre.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-6">
              <Award size={32} />
            </div>
            <h3 className="font-black text-gray-900 dark:text-white uppercase mb-2">Batizado e Troca</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">A cerimónia de receção da primeira corda chama-se Batizado. As cerimónias posteriores marcam a transição e o peso das novas cores.</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="font-black text-gray-900 dark:text-white uppercase mb-2">Tradição da Lã</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Nossos cordéis são tradicionalmente confeccionados em fios de lã trançados, respeitando a raiz visual e o peso histórico da capoeira.</p>
          </div>
        </div>

        {/* FASE 1: ALUNOS E GRADUADOS */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* ALUNOS BASE */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Base e Fundamento</h2>
              <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Alunos</span>
            </div>
            <div className="space-y-4">
              {alunosBase.map((corda, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="flex items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${corda.hex} shadow-inner shrink-0 flex items-center justify-center`}>
                     <div className="w-8 h-8 rounded-full border-2 border-white/30" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white uppercase">{corda.nivel}</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{corda.cor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GRADUADOS E ESTAGIÁRIO */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Desenvolvimento</h2>
              <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Apoio</span>
            </div>
            <div className="space-y-4">
              {graduadosEstagiarios.map((corda, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.02 }} className="flex items-center gap-4 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${corda.hex} shadow-inner shrink-0 flex items-center justify-center`}>
                     <div className="w-8 h-8 rounded-full border-2 border-black/20 dark:border-white/20" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white uppercase">{corda.nivel}</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{corda.cor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FASE 2: FORMADOS */}
        <div className="mb-24">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group max-w-2xl mx-auto text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-600 via-yellow-500 to-blue-600 opacity-20 rounded-bl-[100px] transition-transform group-hover:scale-110" />
            <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase mb-2">{formados[0].nivel}</h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{formados[0].cor}</p>
            <div className={`h-12 w-full rounded-xl bg-gradient-to-r ${formados[0].hex} shadow-inner`} />
          </div>
        </div>

        {/* FASE 3: LIDERANÇA TÉCNICA E MESTRADO */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Liderança Técnica</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {lideranca.map((lider, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group text-center">
                <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase mb-2">{lider.nivel}</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{lider.cor}</p>
                <div className={`h-10 w-full rounded-xl bg-gradient-to-r ${lider.hex} shadow-inner`} />
              </div>
            ))}
          </div>

          {/* MESTRE ÚNICO */}
          <div className="mt-12 max-w-sm mx-auto">
             <motion.div 
                whileHover={{ y: -5 }} 
                className={`p-10 rounded-[3rem] shadow-2xl border-4 border-gray-200 bg-gradient-to-br ${mestrado[0].hex} flex flex-col items-center justify-center text-center relative overflow-hidden`}
              >
                <Star className="text-yellow-600 mb-4" size={32} />
                <div className="relative z-10">
                  <h4 className="font-black uppercase tracking-tighter text-3xl leading-tight mb-2 text-gray-900">
                    {mestrado[0].nivel}
                  </h4>
                  <p className="text-[12px] font-black uppercase tracking-widest text-gray-600">
                    {mestrado[0].cor}
                  </p>
                </div>
              </motion.div>
          </div>
        </div>

        {/* REGRAS DE INDUMENTÁRIA E ÉTICA */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <ShieldCheck className="absolute -bottom-10 -right-10 text-white/5 w-64 h-64" />
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-yellow-500">O Código de Ética</h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              Será obrigatório o conhecimento e o uso rigoroso do Código de Ética por todos os alunos e graduados da ECLL. A conduta dentro e fora da roda, o respeito à hierarquia e a lealdade aos fundamentos da Escola são o que verdadeiramente validam o cordão que se leva na cintura.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 p-10 rounded-[3rem] shadow-xl border border-gray-200 dark:border-gray-800 relative overflow-hidden">
             <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">Indumentária (Uniforme)</h3>
             <ul className="space-y-4 relative z-10">
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0" />
                 <p className="text-gray-700 dark:text-gray-300 text-sm">Calça branca oficial até ao tornozelo com passantes para acomodar corretamente o cordão de lã.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0" />
                 <p className="text-gray-700 dark:text-gray-300 text-sm">Camisa (ou t-shirt) de malha branca, de manga curta ou comprida.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 mt-2 bg-yellow-500 rounded-full shrink-0" />
                 <p className="text-gray-700 dark:text-gray-300 text-sm font-bold">Escudo da Escola Luta de Libertação no peito e o símbolo oficial nas costas.</p>
               </li>
             </ul>
          </div>
        </div>

      </div>
    </div>
  );
}