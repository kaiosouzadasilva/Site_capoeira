// src/app/data/oficinas.ts
import { Music, Users, Drum, Footprints, Leaf, LucideIcon } from 'lucide-react';

export interface OficinaFixa {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  historia: string;
  // 👇 NOVA ESTRUTURA DE APOIO
  apoio: {
    contemplado: boolean; // true para edital, false para independente
    descricao: string;
  };
  galeria: string[];
  videoUrl?: string;
}

export interface ProjetoSocialFixo {
  instructor: string;
  audience: string;
  description: string;
  color: string;
}

export const culturalWorkshopsData: OficinaFixa[] = [
  {
    id: 'toques-de-berimbau',
    title: "Toques de Berimbau",
    description: "Estudo aprofundado das afinações, ritmos e da musicalidade que comanda a roda de capoeira.",
    icon: Music,
    historia: "O berimbau, instrumento sagrado de origem africana (ancestral do m'bolumbumba), é a alma da capoeira. Na Escola Luta de Libertação, preservamos a tradição dos toques fundamentais como São Bento Grande de Angola, Iúna e Cavalaria...",
    apoio: {
      contemplado: true,
      descricao: "Projeto fomentado pela Lei Paulo Gustavo (2024) - Edital de Preservação de Bens Imateriais."
    },
    galeria: [
      "https://images.unsplash.com/photo-1515522744888-eb0d21e05a3c?q=80&w=800",
      "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?q=80&w=800"
    ]
  },
  {
    id: 'percussao-e-pandeiro',
    title: "Percussão e Pandeiro",
    description: "Fundamentos do pandeiro, atabaque e marcação de ritmo para sustentar a energia do jogo.",
    icon: Drum,
    historia: "O atabaque marca o coração da roda, enquanto o pandeiro e o agogô preenchem a cadência. Nossa oficina foca na técnica de batida, sincronia e respiração musical...",
    apoio: {
      contemplado: false, // 👈 Marcado como falso
      descricao: "Realizado de forma independente com recursos próprios da Associação e apoio voluntário da liderança."
    },
    galeria: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800"
    ]
  },
  {
    id: 'danca-do-maculele',
    title: "Dança do Maculelê",
    description: "Resgate da expressão cultural afro-indígena com bastões, ritmo forte e muita expressão corporal.",
    icon: Users,
    historia: "O Maculelê é uma manifestação folclórica nascida em Santo Amaro, na Bahia. Conta a lenda de um guerreiro solitário que defendeu sua tribo usando apenas pedaços de pau...",
    apoio: {
      contemplado: true,
      descricao: "Edital Lei Aldir Blanc - Fomento a Expressões Populares."
    },
    galeria: []
  }, 
  {
    id: 'samba-de-roda',
    title: "Samba de Roda",
    description: "Expressão tradicional e festiva com passos característicos, palmas e cantigas de roda.",
    icon: Footprints,
    historia: "O Samba de Roda do Recôncavo Baiano, patrimônio imaterial da humanidade, é a festa que geralmente encerra as rodas de capoeira...",
    apoio: {
      contemplado: false,
      descricao: "Iniciativa comunitária mantida com Recursos Próprios da ECLL."
    },
    galeria: []
  }, 
  {
    id: 'carimbo',
    title: "Carimbó",
    description: "Vivência do ritmo e da dança tradicional nortista integrada às manifestações da nossa escola.",
    icon: Leaf,
    historia: "Honrando nossas raízes no Norte do Brasil, incorporamos o Carimbó, dança de origem indígena e africana tradicional do Pará...",
    apoio: {
      contemplado: true,
      descricao: "Fomento Estadual de Cultura - Valorização Regional do Estado do Amazonas."
    },
    galeria: []
  }
];

// ... (mantenha a lista socialProjectsData inalterada abaixo) ...

export const socialProjectsData: ProjetoSocialFixo[] = [
  {
    instructor: "Mestre Canário",
    audience: "Turma Mista (Crianças, Jovens e Adultos)",
    description: "Aulas completas abrangendo todas as idades, com foco na integração, filosofia da ECLL e disciplina em todas as fases da vida.",
    color: "border-yellow-500"
  },
  {
    instructor: "Contramestre Prateado",
    audience: "Turma Mista (Crianças, Jovens e Adultos)",
    description: "Desenvolvimento técnico e cultural para diversas faixas etárias, unindo fundamentos e acrobacias.",
    color: "border-gray-400"
  },
  {
    instructor: "Contramestra Peteca",
    audience: "Foco Infantil",
    description: "Pedagogia adaptada para os pequenos, usando a ludicidade e brincadeiras para introduzir a capoeira na vida das crianças.",
    color: "border-blue-500"
  },
  {
    instructor: "Monitor Jhoy",
    audience: "Turma mista (Crianças, Jovens e Adultos)",
    description: "Trabalho focado em escolas e projetos sociais, direcionando a energia da juventude para o esporte, respeito e cidadania.",
    color: "border-green-500"
  }
];