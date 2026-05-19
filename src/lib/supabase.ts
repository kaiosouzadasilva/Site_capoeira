// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// No Vite, usa-se import.meta.env em vez de process.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Essa trava impede que o app quebre em silêncio e te diz no console o que falta
if (!supabaseUrl || !supabaseKey) {
  console.error(
    "❌ ERRO CRÍTICO: As variáveis de ambiente VITE_SUPABASE_URL ou VITE_SUPABASE_ANON_KEY não foram carregadas! " +
    "Verifique se o arquivo .env está na raiz do projeto e se as variáveis começam com VITE_"
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url-para-evitar-crash.supabase.co', 
  supabaseKey || 'placeholder-key'
);