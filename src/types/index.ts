// src/types/index.ts

// 1. Tipagem restrita para garantir que as categorias sejam exatas
export type CategoriaEvento = 'Roda Aberta' | 'Workshop' | 'Batizado' | 'Comunicado Oficial' | string;
export type StatusAluno = 'Ativo' | 'Inativo' | 'Afastado';

// 2. Estrutura dos Eventos (Fim do uso de "any" no Supabase)
export interface Evento {
  id: string;
  title: string;
  date: string;               // Ex: "15 de Junho às 19h" (Para o público)
  real_date: string;          // Ex: "2024-06-15" (Para o filtro do banco)
  location: string;
  tag: CategoriaEvento;
  image: string;
  objetivo?: string;          // O "?" significa que o campo é opcional
  editais_apoio?: string;
  programacao?: string;
  created_at?: string;
}

// 3. Estrutura dos Polos (Locais de Treino)
export interface Polo {
  id: string;
  name: string;
  address: string;
  instructor: string;
  schedules: {
    morning?: string;
    afternoon?: string;
    night?: string;
  };
  whatsapp: string;
}

// 4. Estrutura dos Alunos no Sistema de Gestão
export interface Aluno {
  id: string;
  nome_completo: string;
  apelido_capoeira?: string;
  email?: string;
  telefone?: string;
  data_nascimento?: string;
  graduacao_atual: string;
  polo_id?: string;
  data_inicio?: string;
  status: StatusAluno;
  created_at?: string;
}

// 5. Estrutura do Histórico de Chamadas (Frequência)
export interface Chamada {
  id: string;
  aluno_id: string;
  evento_id?: string;         // Se a chamada foi em um evento específico
  data_aula: string;
  presente: boolean;
  observacoes?: string;
}