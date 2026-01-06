import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { UserPlus, Trash2, Search, Loader2 } from 'lucide-react';

export default function Clientes() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');

  // Busca os clientes no Supabase
  const fetchClientes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .order('nome', { ascending: true });

    if (!error) setClientes(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchClientes(); }, []);

  // Adiciona novo cliente
  const handleAddCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoNome) return;

    const { error } = await supabase
      .from('clientes')
      .insert([{ nome: novoNome, telefone: novoTelefone }]);

    if (!error) {
      setNovoNome('');
      setNovoTelefone('');
      fetchClientes();
    }
  };

  // Remove cliente
  const handleRemove = async (id: string) => {
    const { error } = await supabase.from('clientes').delete().eq('id', id);
    if (!error) fetchClientes();
  };

  return (
    <div className="p-4 text-white space-y-6 pb-24">
      <h1 className="text-3xl font-black italic tracking-tighter">CLIENTES</h1>

      {/* Formulário Rápido */}
      <form onSubmit={handleAddCliente} className="bg-zinc-900 p-6 rounded-3xl border border-white/5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            placeholder="Nome do Cliente" 
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            className="bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-amber-500"
          />
          <input 
            placeholder="Telefone" 
            value={novoTelefone}
            onChange={(e) => setNovoTelefone(e.target.value)}
            className="bg-black border border-white/10 p-4 rounded-2xl outline-none focus:border-amber-500"
          />
        </div>
        <button type="submit" className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 uppercase">
          <UserPlus size={20} /> Cadastrar Novo Cliente
        </button>
      </form>

      {/* Lista de Clientes */}
      <div className="space-y-3">
        {loading ? (
          <div className="flex justify-center p-10"><Loader2 className="animate-spin text-amber-500" /></div>
        ) : (
          clientes.map((c) => (
            <div key={c.id} className="bg-zinc-900/50 border border-white/5 p-4 rounded-2xl flex justify-between items-center group">
              <div>
                <p className="font-bold text-lg">{c.nome}</p>
                <p className="text-zinc-500 text-sm">{c.telefone || 'Sem telefone'}</p>
              </div>
              <button onClick={() => handleRemove(c.id)} className="p-3 text-zinc-600 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
