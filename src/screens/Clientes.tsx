import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'; // AJUSTADO PARA O NOME DA FOTO
import { UserPlus, Loader2 } from 'lucide-react'; // REMOVIDOS OS ÍCONES NÃO USADOS

const Clients = () => {
  const [loading, setLoading] = useState(true);
  const [clientes, setClientes] = useState<any[]>([]);

  const fetchClientes = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('clientes').select('*');
    if (!error) setClientes(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchClientes(); }, []);

  return (
    <div className="space-y-6 text-white">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-black">Meus Clientes</h1>
        <button className="bg-amber-500 text-black px-4 py-2 rounded-xl font-bold flex items-center gap-2">
          <UserPlus size={18} /> Novo
        </button>
      </header>

      <div className="grid gap-4">
        {loading ? <Loader2 className="animate-spin" /> : clientes.map(c => (
          <div key={c.id} className="p-4 bg-zinc-900 rounded-2xl border border-white/5">
            {c.nome} - {c.telefone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;