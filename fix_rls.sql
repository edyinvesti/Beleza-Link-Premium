-- Allow anyone to insert clients (for testing)
drop policy if exists "Authenticated users can insert clients" on clients;
drop policy if exists "Enable insert for all users" on clients;
create policy "Enable insert for all users" on clients for insert with check (true);

-- Allow anyone to insert appointments
drop policy if exists "Enable insert for all users" on appointments;
create policy "Enable insert for all users" on appointments for insert with check (true);

-- Allow anyone to insert products
drop policy if exists "Authenticated users can insert products" on products;
drop policy if exists "Enable insert for all users" on products;
create policy "Enable insert for all users" on products for insert with check (true);
