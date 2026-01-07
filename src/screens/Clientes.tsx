import React, { useState, useEffect } from 'react';
import { Users, Plus, Phone, DollarSign, Trash2, X, Save } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Clientes() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Estados do Formulário
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [spent, setSpent] = useState('');

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    setLoading(true);
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (!error && data) setClients(data);
    setLoading(false);
  }

  async function handleAddClient(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;

    const { error } = await supabase
      .from('clients')
      .insert([{ 
        name, 
        phone, 
        total_spent: parseFloat(spent) || 0 
      }]);

    if (!error) {
      setName('');
      setPhone('');
      setSpent('');
      setIsModalOpen(false);
      fetchClients();
    }
  }

  async function deleteClient(id: string) {
    const { error } = await supabase.from('clients').delete().eq('id', id);
    if (!error) fetchClients();
  }

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 text-amber-500 mb-4">
            <Users size={32} />
            <span className="font-black tracking-widest uppercase text-sm">Gestão de Clientes</span>
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
            Seus <br />
            <span className="text-amber-500">Contatos.</span>
          </h1>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-500 text-black font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/20"
        >
          <Plus size={20} /> NOVO CLIENTE
        </button>
      </header>

      {/* Grid de Clientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-zinc-500 animate-pulse">Carregando contatos...</p>
        ) : clients.length > 0 ? (
          clients.map((client) => (
            <div key={client.id} className="bg-zinc-900/50 border border-white/5 p-6 rounded-[2rem] hover:bg-zinc-900 transition-all group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-black font-black text-xl shadow-lg shadow-amber-500/10">
                  {client.name[0].toUpperCase()}
                </div>
                <button 
                  onClick={() => deleteClient(client.id)}
                  className="text-zinc-700 hover:text-red-500 transition-colors p-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-amber-500 transition-colors">{client.name}</h3>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <Phone size={14} className="text-amber-500" />
                  </div>
                  {client.phone}
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <DollarSign size={14} className="text-amber-500" />
                  </div>
                  Total Gasto: <span className="text-white font-bold ml-1">R$ {client.total_spent?.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
            <p className="text-zinc-500 font-medium">Nenhum cliente cadastrado ainda.</p>
          </div>
        )}
      </div>

      {/* MODAL DE CADASTRO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-950 border border-white/10 w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Novo <span className="text-amber-500">Cliente</span></h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleAddClient} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">Nome Completo</label>
                <input 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-all"
                  placeholder="Ex: Maria Silva"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">WhatsApp / Telefone</label>
                <input 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">Gasto Inicial (R$)</label>
                <input 
                  type="number"
                  value={spent}
                  onChange={(e) => setSpent(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-amber-500 outline-none transition-all"
                  placeholder="0,00"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-amber-500 transition-all uppercase tracking-widest text-xs mt-4"
              >
                <Save size={18} /> Salvar Cliente
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

