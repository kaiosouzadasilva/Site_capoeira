import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Image as ImageIcon, Video, Star, Users, MapPin } from 'lucide-react';

const categories = ['Todos', 'Rodas', 'Eventos', 'Histórico'];

// DESTAQUES DO SITE (As imagens que aparecem logo de cara)
// DICA: Escolha umas 6 fotos bem bonitas dos álbuns, descarregue e coloque na pasta public/galeria/
const galleryItems = [
  { id: 1, category: 'Eventos', title: 'Batizado 2025', image: '/membros/batizado2025.webp' },
  { id: 2, category: 'Rodas', title: 'Roda na Eduardo Ribeiro', image: '/Imagem_do_grupo.webp' },
  { id: 3, category: 'Histórico', title: 'Mestre Camisa e Mestre Canário (27 Anos ACBP)', image: '/membros/mestre_camisa_e_mestre_canario.webp' },
];

// OS SEUS LINKS DO GOOGLE FOTOS ORGANIZADOS
const externalAlbums = [
  {
    title: "Batizado e Troca de Graduação 2025",
    description: "Dias 20 e 21 de dezembro de 2025",
    url: "https://photos.app.goo.gl/cMjFkeemyuCZCHu26",
    icon: Star,
    color: "text-yellow-500"
  },
  {
    title: "Enc. Internacional de Capoeira Angola",
    description: "Largo de São Sebastião (15/08/2025)",
    url: "https://photos.app.goo.gl/Lzow4vRTEbAW6dUR6",
    icon: MapPin,
    color: "text-blue-500"
  },
  {
    title: "1° Dia - Frente Unida da Capoeira",
    description: "Encontro Internacional",
    url: "https://photos.app.goo.gl/g2cZMDaPSLnqCn1j6",
    icon: Users,
    color: "text-green-500"
  },
  {
    title: "27 Anos de ACBP - Mestre Camisa",
    description: "Acervo histórico com o nosso Patriarca",
    url: "https://photos.app.goo.gl/dxQKG2B7xLDooRjA8",
    icon: Camera,
    color: "text-amber-700"
  },
  {
    title: "3° Ciclo do Evento ECLL",
    description: "Evento da Escola Luta de Libertação",
    url: "https://photos.app.goo.gl/6TnEmJgZ755SMXXy8",
    icon: ImageIcon,
    color: "text-gray-500"
  },
  {
    title: "2° Ciclo do Projeto (Vídeos)",
    description: "Dia 21 de junho de 2025",
    url: "https://photos.app.goo.gl/8JUq5NCQXYoDudcV7",
    icon: Video,
    color: "text-red-500"
  },
  {
    title: "Projeto Luta de Libertação",
    description: "Ações da escola",
    url: "https://photos.app.goo.gl/271Fw2poFTXMUS2s7",
    icon: ImageIcon,
    color: "text-gray-500"
  },
  {
    title: "6ª Contrapartida - Eduardo Ribeiro",
    description: "Roda, Aula e Graduação no Povos da Amazônia (14.12.24)",
    url: "https://photos.app.goo.gl/vc6CDRFDFn2Fo6Am9",
    icon: MapPin,
    color: "text-orange-500"
  },
  {
    title: "2ª Contrapartida - Eduardo Ribeiro",
    description: "Aula Regional e Batizado",
    url: "https://photos.app.goo.gl/t39VcY3aKKcySNkh6",
    icon: Users,
    color: "text-blue-400"
  },
  {
    title: "XXXVII Batizado Luta de Libertação",
    description: "Evento de Graduação",
    url: "https://photos.app.goo.gl/ZAx1BpQSAZj2Lywj9",
    icon: Star,
    color: "text-yellow-600"
  },
  {
    title: "XXV Batizado ECLL",
    description: "Evento Histórico de Graduação",
    url: "https://photos.app.goo.gl/MZEYaV3wGHbXcguX9",
    icon: Star,
    color: "text-yellow-600"
  },
  {
    title: "Batizado 2023",
    description: "Evento de Graduação",
    url: "https://photos.app.goo.gl/HhhNaQ4TuD3wNN1B6",
    icon: Star,
    color: "text-yellow-500"
  },
  {
    title: "Encontro de Capoeira ECLL",
    description: "Roda e Integração",
    url: "https://photos.app.goo.gl/Wc1DMwdzrCw2nfNt6",
    icon: Users,
    color: "text-purple-500"
  },
  {
    title: "Oficinas ECLL (08.05.2021)",
    description: "Treinos e Fundamentos",
    url: "https://photos.app.goo.gl/j244PcyXHAnVsuSJA",
    icon: Camera,
    color: "text-gray-500"
  }
];

export function Gallery() {
  const [filter, setFilter] = useState('Todos');

  const filteredImages = filter === 'Todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-24 px-6 bg-transparent dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO DA GALERIA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">Acervo Digital</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 mb-8" />
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore os grandes momentos, batizados e o legado histórico da nossa escola registados pelas lentes da nossa comunidade.
          </p>
          
          {/* FILTROS DOS DESTAQUES */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* DESTAQUES (IMAGENS LOCAIS) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border-4 border-transparent hover:border-yellow-500 transition-all shadow-xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-black uppercase tracking-widest text-sm">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- SEÇÃO DE ÁLBUNS EXTERNOS (Google Fotos) --- */}
        <div className="mt-32 border-t border-gray-100 dark:border-gray-800 pt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tighter flex items-center justify-center gap-3">
                <Camera className="text-yellow-500" size={32} />
                Álbuns Completos
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm font-bold uppercase tracking-widest">
                Aceda à biblioteca oficial no Google Fotos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {externalAlbums.map((album) => (
                  <a 
                    key={album.title}
                    href={album.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-[2rem] border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all group hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${album.color} group-hover:bg-yellow-500 group-hover:text-black transition-colors`}>
                            <album.icon size={24} />
                        </div>
                        <div className="text-left flex-1">
                            <h4 className="font-black text-gray-900 dark:text-white uppercase leading-tight">{album.title}</h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">{album.description}</p>
                        </div>
                    </div>
                  </a>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
