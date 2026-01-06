-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PRODUCTS TABLE
create table if not exists products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  brand text,
  price numeric not null,
  commission numeric,
  image text,
  category text,
  tag text,
  tag_color text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- COURSES TABLE
create table if not exists courses (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  instructor text,
  price numeric,
  original_price numeric,
  duration text,
  rating numeric,
  students integer,
  image text,
  category text,
  level text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- CLIENTS TABLE
create table if not exists clients (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  phone text,
  last_visit timestamp with time zone,
  total_spent numeric default 0,
  avatar text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- APPOINTMENTS TABLE
create table if not exists appointments (
  id uuid default uuid_generate_v4() primary key,
  client_id uuid references clients(id),
  client_name text,
  service text,
  time timestamp with time zone,
  price numeric,
  status text check (status in ('pending', 'confirmed', 'completed', 'canceled')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- TRANSACTIONS TABLE
create table if not exists transactions (
  id uuid default uuid_generate_v4() primary key,
  type text,
  date timestamp with time zone default now(),
  client text,
  amount numeric,
  image text,
  status text check (status in ('confirmed', 'pending')),
  category text,
  flow text check (flow in ('in', 'out')),
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Set up Row Level Security (RLS)
-- We drop existing policies first to avoid "policy already exists" errors when re-running
alter table products enable row level security;
drop policy if exists "Public products are viewable by everyone" on products;
create policy "Public products are viewable by everyone" on products for select using (true);
drop policy if exists "Authenticated users can insert products" on products;
create policy "Authenticated users can insert products" on products for insert with check (auth.role() = 'authenticated');

alter table courses enable row level security;
drop policy if exists "Public courses are viewable by everyone" on courses;
create policy "Public courses are viewable by everyone" on courses for select using (true);

alter table clients enable row level security;
drop policy if exists "Public clients are viewable by everyone" on clients;
create policy "Public clients are viewable by everyone" on clients for select using (true);

alter table appointments enable row level security;
drop policy if exists "Public appointments are viewable by everyone" on appointments;
create policy "Public appointments are viewable by everyone" on appointments for select using (true);

alter table transactions enable row level security;
drop policy if exists "Public transactions are viewable by everyone" on transactions;
create policy "Public transactions are viewable by everyone" on transactions for select using (true);
