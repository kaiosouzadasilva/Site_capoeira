// src/app/data/polos.ts
import { Polo } from '../types';

export const polosData: Polo[] = [
  {
    id: '1',
    name: 'Polo Centro Cultural Canto do Canário',
    address: 'R. Juticá, 280 - Cidade de Deus, Manaus - AM',
    instructor: 'Mestre Canário e Contramestre Peteca',
    schedules: { 
      morning: 'Sáb - 09h às 11h', 
      night: 'Ter, Qui - 18:30h às 20:30h', 
    },
    whatsapp: '559293331766'
  },
  {
    id: '2',
    name: 'Polo Novo Aleixo - Cidade Nova',
    address: 'R. Cento Noventa Tres, 249 - Cj Cidade Nova IV, Manaus - AM',
    instructor: 'Monitor Jhoy e Estagiário Invergado',
    schedules: { 
      afternoon: 'Sáb - 15h às 17h', 
      night: 'Ter, Qui - 19h às 21h' 
    },
    whatsapp: '5592985012070'
  },
  {
    id: '3',
    name: 'Polo Comunitário',
    address: 'Rua do Parque, 789 - Zona Oeste',
    instructor: 'Contra-Mestre Prateado',
    schedules: { 
      afternoon: 'Ter, Qui - 14h30 às 16h30', 
      night: 'Seg, Qua, Sex - 19h30 às 21h30' 
    },
    whatsapp: '5592999999999'
  }
];