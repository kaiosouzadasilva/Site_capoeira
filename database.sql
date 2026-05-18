-- E.C.L.L. - Supabase setup
-- Execute este arquivo no SQL Editor do Supabase antes do primeiro deploy.

create extension if not exists "pgcrypto";

create table if not exists public.alunos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  nome text not null,
  apelido text,
  email text,
  telefone text,
  data_nascimento date,
  polo text default 'A definir',
  graduacao text default 'Sem corda',
  status text not null default 'Ativo',
  observacoes text,
  radar_tecnico jsonb not null default '{
    "tecnica": { "nota": 5, "feedback": "" },
    "musicalidade": { "nota": 5, "feedback": "" },
    "mandinga": { "nota": 5, "feedback": "" },
    "postura": { "nota": 5, "feedback": "" }
  }'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.eventos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  date text not null,
  real_date date not null,
  location text not null,
  tag text not null default 'Roda Aberta',
  image text not null default '/membros/batizado2025.webp',
  objetivo text,
  editais_apoio text,
  programacao text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.presencas (
  id uuid primary key default gen_random_uuid(),
  aluno_id uuid not null references public.alunos(id) on delete cascade,
  polo text not null,
  presente boolean not null default true,
  data date not null default current_date,
  observacoes text,
  created_at timestamptz not null default now(),
  unique (aluno_id, data, polo)
);

create index if not exists alunos_status_idx on public.alunos(status);
create index if not exists alunos_polo_idx on public.alunos(polo);
create index if not exists eventos_real_date_idx on public.eventos(real_date desc);
create index if not exists presencas_data_idx on public.presencas(data desc);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists alunos_set_updated_at on public.alunos;
create trigger alunos_set_updated_at
before update on public.alunos
for each row execute function public.set_updated_at();

drop trigger if exists eventos_set_updated_at on public.eventos;
create trigger eventos_set_updated_at
before update on public.eventos
for each row execute function public.set_updated_at();

alter table public.alunos enable row level security;
alter table public.eventos enable row level security;
alter table public.presencas enable row level security;

drop policy if exists "Eventos publicos para leitura" on public.eventos;
create policy "Eventos publicos para leitura"
on public.eventos for select
using (true);

drop policy if exists "Eventos gerenciados por usuarios autenticados" on public.eventos;
create policy "Eventos gerenciados por usuarios autenticados"
on public.eventos for all
to authenticated
using (true)
with check (true);

drop policy if exists "Alunos visiveis para usuarios autenticados" on public.alunos;
create policy "Alunos visiveis para usuarios autenticados"
on public.alunos for select
to authenticated
using (true);

drop policy if exists "Alunos gerenciados por usuarios autenticados" on public.alunos;
create policy "Alunos gerenciados por usuarios autenticados"
on public.alunos for insert
to authenticated
with check (true);

drop policy if exists "Alunos atualizados por usuarios autenticados" on public.alunos;
create policy "Alunos atualizados por usuarios autenticados"
on public.alunos for update
to authenticated
using (true)
with check (true);

drop policy if exists "Alunos removidos por usuarios autenticados" on public.alunos;
create policy "Alunos removidos por usuarios autenticados"
on public.alunos for delete
to authenticated
using (true);

drop policy if exists "Presencas visiveis para usuarios autenticados" on public.presencas;
create policy "Presencas visiveis para usuarios autenticados"
on public.presencas for select
to authenticated
using (true);

drop policy if exists "Presencas gerenciadas por usuarios autenticados" on public.presencas;
create policy "Presencas gerenciadas por usuarios autenticados"
on public.presencas for insert
to authenticated
with check (true);

drop policy if exists "Presencas atualizadas por usuarios autenticados" on public.presencas;
create policy "Presencas atualizadas por usuarios autenticados"
on public.presencas for update
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('eventos', 'eventos', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Flyers publicos para leitura" on storage.objects;
create policy "Flyers publicos para leitura"
on storage.objects for select
using (bucket_id = 'eventos');

drop policy if exists "Flyers enviados por usuarios autenticados" on storage.objects;
create policy "Flyers enviados por usuarios autenticados"
on storage.objects for insert
to authenticated
with check (bucket_id = 'eventos');

drop policy if exists "Flyers atualizados por usuarios autenticados" on storage.objects;
create policy "Flyers atualizados por usuarios autenticados"
on storage.objects for update
to authenticated
using (bucket_id = 'eventos')
with check (bucket_id = 'eventos');

drop policy if exists "Flyers removidos por usuarios autenticados" on storage.objects;
create policy "Flyers removidos por usuarios autenticados"
on storage.objects for delete
to authenticated
using (bucket_id = 'eventos');
