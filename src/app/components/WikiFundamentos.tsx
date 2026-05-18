import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { BackgroundTexture } from './BackgroundTexture';

// Banco de dados simulado da Wiki
const wikiData: Record<string, any> = {
  "berimbau": {
    titulo: "Berimbau",
    subtitulo: "A Alma e a Voz da Roda",
    tipo: "Instrumento",
    texto: "O berimbau (ou urucungo) é um instrumento de corda de origem africana, trazido ao Brasil pelos povos escravizados. Na capoeira, ele é a autoridade máxima. O berimbau dita o ritmo, a velocidade e o estilo do jogo. Ele é tradicionalmente dividido em três afinações principais: Gunga (grave, que marca o compasso base), Médio (que faz a inversão do toque do Gunga) e Viola (agudo, livre para fazer repiques e variações).",
    toques: ["São Bento Grande de Angola", "São Bento Grande de Regional", "Iúna", "Banguela", "Angola"],
    referencias: ["'O Berimbau na Capoeira' - Mestre Kayodê", "Registros Fonográficos de Mestre Pastinha (1969)"],
    imagem: "https://images.unsplash.com/photo-1596404764858-6923c5e8b381?q=80&w=1200&auto=format&fit=crop"
  },
  "angola": {
    titulo: "Capoeira Angola",
    subtitulo: "A Malícia e a Tradição",
    tipo: "Estilo",
    texto: "A Capoeira Angola é a mãe da capoeira moderna. Preservada e codificada de forma brilhante pelo Mestre Pastinha (Vicente Ferreira Pastinha), caracteriza-se por um jogo mais lento, cadenciado e focado na rasteira, na malícia e no jogo de chão. Os movimentos são furtivos, dissimulando o ataque na forma de defesa. O foco não é a força bruta, mas sim a inteligência tática e a conexão com a ancestralidade e o toque do berimbau.",
    toques: ["Toque de Angola", "São Bento Pequeno", "Jogo de Dentro"],
    referencias: ["'Capoeira Angola' - Mestre Pastinha (1964)", "'A Herança de Pastinha' - CECA"],
    imagem: "/membros/Mestre_Pastinha.webp"
  }
  // Pode adicionar os outros (pandeiro, atabaque, regional) aqui seguindo o mesmo molde!
};

export function WikiFundamentos() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const conteudo = wikiData[id || ""];

  if (!conteudo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 dark:bg-gray-950">
        <h2 className="text-2xl font-black uppercase text-gray-400">Página em Construção</h2>
        <button onClick={() => navigate('/fundamentos')} className="text-yellow-500 mt-4 font-bold hover:underline">Voltar para Fundamentos</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 pt-32 pb-24 transition-colors duration-300 relative overflow-hidden">
      <BackgroundTexture />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <button 
          onClick={() => navigate('/fundamentos')} 
          className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-yellow-500 mb-12 font-black uppercase text-[10px] tracking-widest transition-all"
        >
          <ArrowLeft size={16} /> Voltar para Fundamentos
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-12">
            <span className="text-yellow-600 dark:text-yellow-500 font-black text-[10px] uppercase tracking-[0.4em] mb-2 block">{conteudo.tipo}</span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter mb-4">{conteudo.titulo}</h1>
            <p className="text-xl text-stone-500 dark:text-gray-400 font-medium italic">"{conteudo.subtitulo}"</p>
          </div>

          <div className="aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 mb-12 relative">
            <img src={conteudo.imagem} alt={conteudo.titulo} className="w-full h-full object-cover object-top opacity-90" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-16 text-stone-700 dark:text-gray-300 font-medium leading-relaxed">
            <p>{conteudo.texto}</p>
          </div>

          {/* SECÇÃO INTERATIVA DE ÁUDIO */}
          <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 shadow-xl border border-stone-200 dark:border-gray-800 mb-12">
            <h3 className="font-black text-gray-900 dark:text-white uppercase tracking-tight mb-6 flex items-center gap-3">
              <PlayCircle className="text-yellow-500" /> Biblioteca de Toques
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {conteudo.toques.map((toque: string, idx: number) => (
                <button key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-yellow-500/10 border border-stone-100 dark:border-gray-700 transition-all group text-left">
                  <PlayCircle className="text-stone-300 dark:text-gray-500 group-hover:text-yellow-500 flex-shrink-0" size={24} />
                  <span className="font-bold text-sm text-gray-800 dark:text-gray-200 uppercase tracking-tight">{toque}</span>
                </button>
              ))}
            </div>
          </div>

          {/* REFERÊNCIAS BIBLIOGRÁFICAS */}
          <div className="border-t-2 border-dashed border-stone-200 dark:border-gray-800 pt-12">
            <h3 className="font-black text-gray-400 uppercase text-xs tracking-[0.3em] mb-6 flex items-center gap-2">
              <BookOpen size={14} /> Fontes e Pesquisa
            </h3>
            <ul className="space-y-2">
              {conteudo.referencias.map((ref: string, idx: number) => (
                <li key={idx} className="text-stone-500 dark:text-gray-500 text-sm italic">• {ref}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}