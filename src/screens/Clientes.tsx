import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { UserPlus, Search, Phone, MessageSquare, Loader2 } from 'lucide-react';

const Clientes = () => {
  const [loading, setLoading] = useState(true);
  const [clientes, setClientes] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');

  const fetchClientes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .order('nome', { ascending: true });
    if (!error) setClientes(data || []);
    setLoading(false);
  };

  const handleAddCliente = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from('clientes')
      .insert([{ nome: novoNome, telefone: novoTelefone }]);

    if (!error) {
      setNovoNome('');
      setNovoTelefone('');
      setIsModalOpen(false);
      fetchClientes(); // Atualiza a lista na hora
    }
  };

  useEffect(() => { fetchClientes(); }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-black text-white">Meus Clientes</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-500 text-black px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-amber-500/20"
        >
          <UserPlus size={20} /> Novo Cliente
        </button>
      </header>

      {/* Lista de Clientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <Loader2 className="animate-spin text-amber-500" />
        ) : (
          clientes.map((cliente) => (
            <div key={cliente.id} className="p-5 rounded-3xl bg-zinc-900/50 border border-white/5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                  {cliente.nome.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{cliente.nome}</h3>
                  <p className="text-zinc-500 text-sm">{cliente.telefone}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL PARA NOVO CLIENTE (SIMPLES) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-[2.5rem] w-full max-w-md shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Cadastrar Cliente</h2>
            <form onSubmit={handleAddCliente} className="space-y-4">
              <input 
                type="text" placeholder="Nome do cliente" required
                value={novoNome} onChange={(e) => setNovoNome(e.target.value)}
                className="w-full bg-zinc-800 border-zinc-700 rounded-2xl p-4 text-white outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input 
                type="text" placeholder="Telefone (WhatsApp)" required
                value={novoTelefone} onChange={(e) => setNovoTelefone(e.target.value)}
                className="w-full bg-zinc-800 border-zinc-700 rounded-2xl p-4 text-white outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 text-zinc-400 font-bold">Cancelar</button>
                <button type="submit" className="flex-1 bg-amber-500 text-black py-4 rounded-2xl font-bold hover:bg-amber-400 transition-all">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientes;