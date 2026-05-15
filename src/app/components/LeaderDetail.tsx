import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback'; 

const historiaPadrao = "Como ainda não tenho a biografia de cada um fiquem com essa história irá se repetir em todos esses perfis.\n\nAs maltas de capoeira foram grupos organizados que dominaram as ruas do Rio de Janeiro no século XIX. Divididas principalmente entre duas grandes facções rivais, os Nagoas e os Guaiamuns, essas organizações possuíam cores, territórios e símbolos próprios. Os Nagoas, que costumavam usar calças brancas, dominavam a periferia da cidade, enquanto os Guaiamuns, geralmente usando calças de brim ou seda, controlavam a região central.\n\nNaquela época, a capoeira não era apenas um jogo de roda, mas uma verdadeira arma de defesa e ataque. Os capoeiras eram temidos por sua agilidade e pelo uso de navalhas, sendo frequentemente contratados como guarda-costas de políticos ou atuando em conflitos nas ruas, tanto contra maltas rivais quanto contra a dura repressão da guarda imperial.\n\nA história das maltas é um capítulo fascinante que nos lembra do poder da união, da resistência negra e de como a capoeira foi forjada na dureza das ruas antes de chegar às academias e ser reconhecida como o maior símbolo da cultura e da resistência brasileira.";

// --- BANCO DE DADOS DAS HISTÓRIAS ---
const leadersData: Record<string, any> = {
  "m1": { 
    name: "Dermilson Brasil", 
    nickname: "Mestre Canário", 
    rank: "Mestre", 
    image: "/membros/Mestre_Canario.jpg", 
    years: 42, 
    specialties: ["Angola", "Regional", "Música"],
    history: historiaPadrao 
  },
  "l1": { 
    name: "Nome do Ely", 
    nickname: "Contramestre Ely", 
    rank: "Contramestre", 
    image: "/membros/Contramestre_Ely.jpg", 
    years: 28, 
    specialties: ["Técnica", "Jogo"],
    history: historiaPadrao 
  },
  "l2": { 
    name: "Nome do Prateado", 
    nickname: "Contramestre Prateado", 
    rank: "Contramestre", 
    image: "/membros/Contramestre_Prateado.jpg", 
    years: 20, 
    specialties: ["Benguela", "Acrobacias"],
    history: historiaPadrao 
  },
  "l3": { 
    name: "Jarline da Silva", 
    nickname: "Contramestra Peteca", 
    rank: "Contramestra", 
    image: "/membros/Contramestra_Peteca.jpg", 
    years: 25, 
    specialties: ["Infantil", "Regional"],
    history: historiaPadrao 
  },
  "l4": { 
    name: "Joel Brito", 
    nickname: "Monitor Jhoy", 
    rank: "Monitor", 
    image: "/membros/Monitor_Jhoy.png", 
    years: 12, 
    specialties: ["Movimentação", "Técnica"],
    history: historiaPadrao 
  },
  "l5": { 
    name: "Relâmpago", 
    nickname: "Formado Relâmpago", 
    rank: "Formado", 
    image: "/membros/Formado_Relampago.png", 
    years: 12, 
    specialties: ["Movimentação"],
    history: historiaPadrao 
  },


//   A partir daqui são perfis de graduados e estagiários, que ainda não tem uma história individualizada, então estou usando a mesma história para todos, só para preencher o layout do site. Depois é só trocar a história de cada um quando tiver as informações.


  "l6": { 
    name: "Chocolate", 
    nickname: "Formado Chocolate", 
    rank: "Formado", 
    image: "/membros/Formado_Chocolate.png", 
    years: 12, 
    specialties: ["Movimentação"],
    history: historiaPadrao 
  },
  "b1": { 
    name: "Francês", 
    nickname: "Graduado Francês", 
    rank: "Graduado", 
    image: "/membros/foto_frances.jpeg", 
    years: 8, 
    specialties: ["Fundamentos"],
    history: historiaPadrao 
  },
  "b2": { 
    name: "Zumbi", 
    nickname: "Graduado Zumbi", 
    rank: "Graduado", 
    image: "/membros/foto_zumbi.jpeg", 
    years: 8, 
    specialties: ["Fundamentos"],
    history: historiaPadrao 
  },
  "b3": { 
    name: "Shrek", 
    nickname: "Graduado Shrek", 
    rank: "Graduado", 
    image: "/membros/placeholder.jpg", 
    years: 7, 
    specialties: ["Fundamentos"],
    history: historiaPadrao 
  },
  "b4": { 
    name: "Calanguinho", 
    nickname: "Graduado Calanguinho", 
    rank: "Graduado", 
    image: "/membros/placeholder.jpg", 
    years: 7, 
    specialties: ["Fundamentos"],
    history: historiaPadrao 
  },
  "b5": { 
    name: "Kaio Souza", 
    nickname: "Estagiário Invergado", 
    rank: "Estagiário", 
    image: "/membros/Invergado.png", 
    years: 5, 
    specialties: ["Agilidade", "Esquiva"],
    history: historiaPadrao 
  },
  "b6": { 
    name: "Colorau", 
    nickname: "Estagiário Colorau", 
    rank: "Estagiário", 
    image: "/membros/Estagiario_Colorau.jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
    history: historiaPadrao 
  },

//   {Aqui começam os alunos que não tem perfil ainda, então a história é a mesma para todos, só para preencher o layout do site.}


  "a1": { 
    name: "João carlos", 
    nickname: "Ventania", 
    rank: "Aluno", 
    image: "/membros/...jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
    history: historiaPadrao 
  },
  "a2": { 
   name: "Mariana Silva", 
    nickname: "Sereia", 
    rank: "Aluno", 
    image: "/membros/...jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
    history: historiaPadrao
  },
  "c1": { 
    name: "Pedro henrique", 
    nickname: "Faísca", 
    rank: "Aluno", 
    image: "/membros/...jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
    history: historiaPadrao
  },
  "c2": { 
    name: "Adriana", 
    nickname: "Andorinha", 
    rank: "Aluno", 
    image: "/membros/...jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
    history: historiaPadrao 
  },
  "d1": { 
    name: "Lucas Mendes", 
    nickname: "Gavião", 
    rank: "Aluno", 
    image: "/membros/...jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
    history: historiaPadrao
  },
  "d2": { 
    name: "Beatriz Costa", 
    nickname: "Pimenta", 
    rank: "Aluno", 
    image: "/membros/...jpg", 
    years: 5, 
    specialties: ["Força", "Resistência"],
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
        <h2 className="text-2xl font-black dark:text-white uppercase mb-4 text-center px-4">Membro não encontrado ou biografia em construção</h2>
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
          {/* COLUNA ESQUERDA: TEXTO */}
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

          {/* COLUNA DIREITA: INFOBOX */}
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
                <tr>
                  <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Tempo de Arte</th>
                  <td className="py-4 text-gray-600 dark:text-gray-400 text-right font-medium">{person.years} anos</td>
                </tr>
                <tr>
                  <th className="py-4 font-bold text-gray-900 dark:text-white uppercase text-xs">Especialidade</th>
                  <td className="py-4 text-gray-600 dark:text-gray-400 text-right font-medium">{person.specialties.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </aside>
        </div>
      </div>
    </motion.div>
  );
}