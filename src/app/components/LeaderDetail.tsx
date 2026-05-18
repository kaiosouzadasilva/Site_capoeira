import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback'; 

const historiaPadrao = "Como ainda não tenho a biografia de cada um, fiquem com essa história que irá se repetir em todos esses perfis.\n\nAs maltas de capoeira foram grupos organizados que dominaram as ruas do Rio de Janeiro no século XIX. Divididas principalmente entre duas grandes facções rivais, os Nagoas e os Guaiamuns, essas organizações possuíam cores, territórios e símbolos próprios. Os Nagoas, que costumavam usar calças brancas, dominavam a periferia da cidade, enquanto os Guaiamuns, geralmente usando calças de brim ou seda, controlavam a região central.\n\nNaquela época, a capoeira não era apenas um jogo de roda, mas uma verdadeira arma de defesa e ataque. Os capoeiras eram temidos por sua agilidade e pelo uso de navalhas, sendo frequentemente contratados como guarda-costas de políticos ou atuando em conflitos nas ruas, tanto contra maltas rivais quanto contra a dura repressão da guarda imperial.";

// --- BANCO DE DADOS COM OS POLOS ---
const leadersData: Record<string, any> = {
  "m1": { 
    name: "Dermilson Brasil", 
    nickname: "Mestre Canário", 
    rank: "Mestre", 
    cordColor: "Branca",
    image: "/membros/Mestre_Canario.webp", 
    years: 42, 
    polo: "Centro Cultural Canto do Canário",
    specialties: ["Angola", "Regional", "Música"],
    history: historiaPadrao 
  },
  "l2": { 
    name: "Prateado", 
    nickname: "Contramestre Prateado", 
    rank: "Contramestre", 
    cordColor: "Branco Azul",
    image: "/membros/Mestre_Canario_e_Mestre_Camisa.webp", 
    years: 20, 
    polo: "Polo Comunitário",
    specialties: ["Benguela", "Acrobacias"],
    history: historiaPadrao 
  },
  "l3": { 
    name: "Jarline da Silva", 
    nickname: "Contramestra Peteca", 
    rank: "Contramestra", 
    cordColor: "Branco e Azul",
    image: "/membros/mestre_camisa_e_mestre_canario.webp", 
    years: 25, 
    polo: "Centro Cultural Canto do Canário",
    specialties: ["Infantil", "Regional"],
    history: historiaPadrao 
  },
  "l4": { 
    name: "Joel Brito", 
    nickname: "Monitor Jhoy", 
    rank: "Monitor", 
    cordColor: "Branco e verde",
    image: "/membros/Monitor_Jhoy.webp", 
    years: 12, 
    polo: "Novo Aleixo",
    specialties: ["Movimentação", "Técnica"],
    history: historiaPadrao 
  },
  "l5": { 
    name: "Relâmpago", 
    nickname: "Formado Relâmpago", 
    rank: "Formado", 
    cordColor: "Verde, Amarelo e Azul",
    image: "/membros/Invergado.webp", 
    years: 12, 
    polo: "Polo Centro",
    specialties: ["Movimentação"],
    history: historiaPadrao 
  },
  "l6": { 
    name: "Chocolate", 
    nickname: "Formado Chocolate", 
    rank: "Formado", 
    cordColor: "Verde, Amarelo e Azul",
    image: "/membros/Mestre_Canario_e_Mestre_Camisa.webp", 
    years: 12, 
    polo: "Polo Centro",
    specialties: ["Movimentação"],
    history: historiaPadrao 
  },
  "b5": { 
    name: "Kaio Souza", 
    nickname: "Estagiário Invergado", 
    rank: "Estagiário", 
    cordColor: "Azul e Amarelo",
    image: "/membros/Invergado.webp", 
    years: 5, 
    polo: "Novo Aleixo",
    history: historiaPadrao
  },
  "b6": { 
    name: "Colorau", 
    nickname: "Estagiário Colorau", 
    rank: "Estagiário", 
    cordColor: "Azul e Amarelo",
    image: "/membros/Invergado.webp", 
    years: 5, 
    polo: "Centro Cultural Canto do Canário",
    history: historiaPadrao 
  },
  "b1": { 
    name: "Francês", 
    nickname: "Graduado Francês", 
    rank: "Graduado", 
    cordColor: "Verde e Azul",
    image: "/membros/foto_frances.webp", 
    years: 8, 
    polo: "Polo Centro",
    history: historiaPadrao 
  },
  "b2": { 
    name: "Zumbi", 
    nickname: "Graduado Zumbi", 
    rank: "Graduado", 
    cordColor: "Verde e Amarelo",
    image: "/membros/foto_zumbi.webp", 
    years: 47,
    polo: "Novo Aleixo",
    history: `A história de Zumbi na capoeira teve início através de seu filho. Acompanhando o pequeno de nove anos, que se encantou pela arte através de um filme, Zumbi sentiu a mesma paixão aos 36 anos. Seus primeiros passos foram no chapéu de palha do bairro Hiléia, no Grupo Muzenza.

    Após passagens pelos grupos Giori e Cantoa, sob orientação do Professor Lua Branca, divergências internas o levaram a se afastar das rodas por seis anos. O reencontro com a arte aconteceu como um chamado: ao passar pelo chapéu de palha do Núcleo 16, na Cidade Nova, viu um treino e sentiu o "arrepio na pele" que o fez querer voltar.

    Após algumas tentativas frustradas em outros grupos, observou o Monitor Jhoy ministrando um treino com seriedade. Após conversar com ele e ter o pedido aceito pelo Mestre Canário, Zumbi integrou-se à Escola de Capoeira Luta de Libertação em abril, onde segue treinando com dedicação e muito orgulho dos fundamentos.`
  },
  "a1": { 
    name: "João Carlos", 
    nickname: "Ventania", 
    rank: "Aluno", 
    cordColor: "Verde",
    image: "/membros/batizado2025.webp", 
    years: 2, 
    polo: "Novo Aleixo",
    history: historiaPadrao 
  },
  "a2": { 
    name: "Mariana Silva", 
    nickname: "Sereia", 
    rank: "Aluno", 
    cordColor: "Verde",
    image: "/membros/batizado2025.webp", 
    years: 2, 
    polo: "Polo Comunitário",
    history: historiaPadrao
  }
};

export function LeaderDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const person = leadersData[id || ""];

  if (!person) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center transition-colors duration-300">
        <h2 className="text-2xl font-black dark:text-white uppercase mb-4 text-center px-4">Biografia em construção</h2>
        <button onClick={() => navigate('/lideranca')} className="text-yellow-500 font-bold hover:underline">Voltar para Liderança</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-20 px-6 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate('/lideranca')} 
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 mb-12 font-black uppercase text-[10px] tracking-widest transition-all"
        >
          <ArrowLeft size={16} /> Voltar para Liderança
        </button>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div>
              <p className="text-yellow-600 font-black text-sm uppercase tracking-widest mb-2">{person.rank}</p>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">{person.nickname}</h1>
              <p className="text-gray-400 font-bold uppercase mt-2 text-sm">{person.name}</p>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-xl font-bold border-b-2 border-yellow-500 pb-2 mb-6 text-gray-900 dark:text-white uppercase tracking-tight">Biografia e Trajetória</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-lg">
                {person.history}
              </p>
            </div>
          </div>

          <aside className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-8 h-fit md:sticky md:top-32 shadow-xl">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-8 shadow-inner">
              <ImageWithFallback 
                src={person.image} 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                alt={person.nickname} 
              />
            </div>
            
            <table className="w-full text-left text-sm">
              <caption className="font-black uppercase text-[10px] mb-6 text-gray-400 tracking-widest text-left">Ficha Técnica</caption>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Graduação</th>
                  <td className="py-4 text-yellow-600 font-black text-right">{person.rank}</td>
                </tr>

                {/* --- ATUAÇÃO / POLO CLICÁVEL --- */}
                <tr>
                  <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Atuação / Polo</th>
                  <td className="py-4 text-right font-medium">
                    <div className="flex flex-col items-end">
                       <Link 
                         to="/polos" 
                         className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors group"
                         title="Ver detalhes de todos os polos"
                       >
                         <MapPin size={12} className="text-yellow-500 group-hover:scale-125 transition-transform" />
                         <span className="underline decoration-transparent group-hover:decoration-yellow-500 underline-offset-4 transition-colors">
                           {person.polo || "Polo Central"}
                         </span>
                       </Link>
                       <span className="text-[8px] text-yellow-500 font-black uppercase mt-1">
                         {person.rank === "Mestre" || person.rank === "Contramestre" ? "Responsável Técnico" : "Instrutor Auxiliar"}
                       </span>
                    </div>
                  </td>
                </tr>

                {person.cordColor && (
                  <tr>
                    <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Corda</th>
                    <td className="py-4 text-gray-600 dark:text-gray-400 text-right font-medium">{person.cordColor}</td>
                  </tr>
                )}
                <tr>
                  <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Tempo de Arte</th>
                  <td className="py-4 text-gray-600 dark:text-gray-400 text-right font-medium">{person.years} anos</td>
                </tr>
                {person.specialties && person.specialties.length > 0 && (
                  <tr>
                    <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Especialidade</th>
                    <td className="py-4 text-gray-600 dark:text-gray-400 text-right font-medium">{person.specialties.join(", ")}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}