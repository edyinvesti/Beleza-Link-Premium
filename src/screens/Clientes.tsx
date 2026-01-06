import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { UserPlus, Loader2, X, Save } from 'lucide-react';

const Clients = () => {
  const [loading, setLoading] = useState(true);
  const [clientes, setClientes] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estados do Formulário
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const fetchClientes = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('clientes').select('*').order('created_at', { ascending: false });
    if (!error) setClientes(data || []);
    setLoading(false);
  };

  const handleAddClient = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from('clientes').insert([{ nome, telefone }]);
    
    if (!error) {
      setNome('');
      setTelefone('');
      setIsModalOpen(false);
      fetchClientes();
    } else {
      alert('Erro ao salvar: ' + error.message);
    }
  };

  useEffect(() => { fetchClientes(); }, []);

  return (
    <div className="space-y-6 text-white p-4">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-black">Clientes</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-500 text-black px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-amber-400 transition-colors"
        >
          <UserPlus size={18} /> Novo
        </button>
      </header>

      {/* Modal de Cadastro */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 w-full max-w-md rounded-3xl p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-zinc-500"><X /></button>
            <h2 className="text-xl font-bold mb-6">Cadastrar Cliente</h2>
            <form onSubmit={handleAddClient} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-500 uppercase font-bold ml-1">Nome Completo</label>
                <input required value={nome} onChange={(e) => setNome(e.target.value)} className="w-full bg-black border border-white/10 rounded-xl p-3 mt-1 focus:border-amber-500 outline-none" placeholder="Ex: Maria Oliveira" />
              </div>
              <div>
                <label className="text-xs text-zinc-500 uppercase font-bold ml-1">WhatsApp / Telefone</label>
                <input required value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full bg-black border border-white/10 rounded-xl p-3 mt-1 focus:border-amber-500 outline-none" placeholder="(00) 00000-0000" />
              </div>
              <button type="submit" className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 mt-4">
                <Save size={20} /> SALVAR CLIENTE
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Lista de Clientes */}
      <div className="grid gap-3">
        {loading ? (
          <div className="flex flex-col items-center py-10 text-zinc-500"><Loader2 className="animate-spin mb-2" /> Carregando...</div>
        ) : clientes.length === 0 ? (
          <p className="text-center text-zinc-600 py-10">Nenhum cliente cadastrado.</p>
        ) : (
          clientes.map(c => (
            <div key={c.id} className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">{c.nome}</p>
                <p className="text-zinc-500 text-sm">{c.telefone}</p>
              </div>
              <div className="bg-amber-500/10 text-amber-500 text-xs font-bold px-2 py-1 rounded-lg uppercase">Ativo</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Clients;