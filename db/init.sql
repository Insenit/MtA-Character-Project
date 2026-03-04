-- Run this in the Supabase SQL editor or psql connected to the project DB

-- Enable pgcrypto for gen_random_uuid
create extension if not exists "pgcrypto";

-- Create a sheets table. We rely on Supabase Auth for users; owner will store the auth.uid() (uuid)
create table if not exists public.sheets (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Untitled',
  tabs jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- trigger to update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_updated_at on public.sheets;
create trigger set_updated_at before update on public.sheets
for each row execute procedure public.set_updated_at();

-- Enable Row Level Security and add policies so users can only access their own sheets
alter table public.sheets enable row level security;

-- Allow owners to insert rows where owner = auth.uid()
create policy "Insert own sheets" on public.sheets
for insert using (auth.role() = 'authenticated') with check (owner = auth.uid());

-- Allow owners to select their own sheets
create policy "Select own sheets" on public.sheets
for select using (owner = auth.uid());

-- Allow owners to update their own sheets
create policy "Update own sheets" on public.sheets
for update using (owner = auth.uid()) with check (owner = auth.uid());

-- Allow owners to delete their own sheets
create policy "Delete own sheets" on public.sheets
for delete using (owner = auth.uid());

-- Index for owner lookups
create index if not exists idx_sheets_owner on public.sheets (owner);
