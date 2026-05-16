import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

// --- SUB-COMPONENTES AUXILIARES (Deixando aqui no topo para organização) ---

// Adicionamos 'imagePosition' nas propriedades
function MemberCard({ name, role, image, status, highlight, isSmall, borderColor, imagePosition }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center group"
    >
      <div className={`
        ${isSmall ? 'w-24 h-24' : 'w-32 h-32 md:w-44 md:h-44'} 
        rounded-full overflow-hidden border-4 
        ${borderColor || (highlight ? 'border-yellow-500' : 'border-gray-200 dark:border-gray-700')} 
        group-hover:border-yellow-500 transition-all duration-500 shadow-xl relative
       `}>
        <img 
          src={image} 
          alt={name} 
          /* 👇 Inserimos a variável imagePosition aqui */
          className={`w-full h-full object-cover transition-all duration-700 ${imagePosition || 'object-center'}`} 
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150?text=Capoeira")}
        />
        {status && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <span className="text-[8px] font-black text-white uppercase tracking-tighter">{status}</span>
          </div>
        )}
    

      </div>
      <h3 className={`${isSmall ? 'text-xs' : 'text-sm md:text-lg'} font-black text-gray-900 dark:text-white mt-4 uppercase text-center`}>{name}</h3>
      <p className="text-yellow-600 dark:text-yellow-400 font-bold text-[9px] md:text-xs uppercase tracking-widest text-center">{role}</p>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="flex flex-col items-center my-4">
      <div className="w-px h-12 bg-gradient-to-b from-yellow-500 to-transparent" />
      <ChevronDown className="text-yellow-500 -mt-2" size={20} />
    </div>
  );
}

function PlaceholderCard({ isSmall }: { isSmall?: boolean }) {
  return (
    <div className="flex flex-col items-center opacity-20 hover:opacity-50 transition-opacity border-2 border-dashed border-gray-400 rounded-full p-2 cursor-help" title="Espaço para novo membro">
        <div className={`${isSmall ? 'w-24 h-24' : 'w-32 h-32 md:w-44 md:h-44'} flex items-center justify-center rounded-full`}>
            <span className="text-4xl font-thin">+</span>
        </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL ---

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 px-6 bg-transparent dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Nossa Linhagem</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4" />
          <p className="mt-4 text-gray-500 dark:text-gray-400">A história preservada através das gerações</p>
        </div>

       {/* --- NÍVEL 1: PATRIARCA --- */}
       <div className="flex justify-center mb-4">
        <MemberCard 
        name="Mestre Camisa Furada" 
        role="Patriarca & Fundador" 
        image="/membros/Mestre_Camisa_furada2.jpg" 
        status="In Memoriam"
        highlight
        /* 👇 Adicione esta linha: */
        imagePosition="object-[center_15%]" 
        />
        </div>

        <Connector />

        {/* --- NÍVEL 2: MESTRES --- */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-32 mb-12">
          <MemberCard 
            name="Mestre Canário" 
            role="Mestre ECLL" 
            image="/membros/Mestre_Canario.jpg" 
          />


          {/* <PlaceholderCard /> Espaço para novos Mestres */}
        </div>

        <div className="flex justify-center">
             <Connector />
        </div>

        {/* --- NÍVEL 3: LINHAGEM DO MESTRE CANÁRIO --- */}
        <div className="bg-gray-50/50 dark:bg-gray-800/30 p-8 rounded-3xl border border-dashed border-gray-200 dark:border-gray-700">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-white-400 mb-10">Descendência Direta: Mestre Canário</p>
          
          <div className="flex flex-wrap justify-center gap-10">
            {/* Lideranças vindo de Canário */}
            <MemberCard name="CM Prateado" role="Contramestre" image="/membros/Contramestre_Prateado.jpg" isSmall />
            <MemberCard name="CM Peteca" role="Contramestra" image="/membros/Contramestra_Peteca.jpg" isSmall />
            
            {/* MONITOR JHOY -> INVERGADO */}
            <div className="flex flex-col items-center">
                <MemberCard 
                  name="Monitor Jhoy" 
                  role="Monitor" 
                  image="/membros/Monitor_Jhoy.png" 
                  borderColor="border-yellow-500" 
                  isSmall 
                />
                <div className="h-6 w-px bg-yellow-500 my-2" />
                <MemberCard 
                  name="Est. Invergado" 
                  role="Estagiário" 
                  image="/membros/Invergado.png" 
                  isSmall 
                />
                {/* Espaço para um futuro aluno do Invergado ou do Jhoy -----------------------------------------------------------------------------------
                <div className="h-4 w-px bg-gray-300 my-1" />
                <PlaceholderCard isSmall /> */}
            </div>

            {/* Outros Formados de Canário */}
            <MemberCard name="Formado Chocolate" role="Formado" image="/membros/placeholder.jpg" isSmall />
            <MemberCard name="Formado Relâmpago" role="Formado" image="/membros/Formado_Relampago.jpg" isSmall />
            <MemberCard name="Estagiário Colorau" role="Estagiário" image="/membros/Estagiario_Colorau.jpg" isSmall />
            
            {/* Espaço para novos Formados do Mestre Canário------------------------------------------------------------------------------------------------
            <PlaceholderCard isSmall /> */}
          </div>
        </div>

      </div>
    </section>
  );
}