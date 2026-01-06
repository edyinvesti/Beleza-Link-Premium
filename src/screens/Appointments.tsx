import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, Save, Loader2, Trash2 } from 'lucide-react';

const Appointments = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [clientes, setClientes] = useState<any[]>([]);
  const [agendamentos, setAgendamentos] = useState<any[]>([]);
  
  const [selectedClient, setSelectedClient] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [servico, setServico] = useState('');

  const carregarDados = async () => {
    setFetching(true);
    // Busca clientes para o select
    const { data: cData } = await supabase.from('clientes').select('id, nome');
    if (cData) setClientes(cData);

    // Busca agendamentos com o nome do cliente (Join)
    const { data: aData } = await supabase
      .from('appointments')
      .select(`
        id,
        data_hora,
        servico,
        clientes ( nome )
      `)
      .order('data_hora', { ascending: true });
    
    if (aData) setAgendamentos(aData);
    setFetching(false);
  };

  useEffect(() => { carregarDados(); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const dataHoraStr = `${data}T${hora}:00Z`;

    const { error } = await supabase.from('appointments').insert([{
      client_id: selectedClient,
      data_hora: dataHoraStr,
      servico: servico
    }]);

    if (!error) {
      alert("✅ Agendamento realizado!");
      setServico('');
      carregarDados();
    } else {
      alert("Erro: " + error.message);
    }
    setLoading(false);
  };

  const deletarAgendamento = async (id: string) => {
    if (confirm("Deseja cancelar este horário?")) {
      await supabase.from('appointments').delete().eq('id', id);
      carregarDados();
    }
  };

  return (
    <div className="p-4 text-white space-y-8 pb-20">
      <header>
        <h1 className="text-3xl font-black flex items-center gap-2">
          <Calendar className="text-amber-500" /> Agenda
        </h1>
      </header>
      
      {/* Formulário */}
      <form onSubmit={handleSave} className="bg-zinc-900 p-6 rounded-3xl border border-white/5 space-y-4">
        <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest">Novo Horário</h2>
        <div>
          <label className="text-xs font-bold text-zinc-500 uppercase">Cliente</label>
          <select required value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}
            className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1 text-white outline-none focus:border-amber-500">
            <option value="">Selecione...</option>
            {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-zinc-500 uppercase">Data</label>
            <input required type="date" value={data} onChange={(e) => setData(e.target.value)} className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1" />
          </div>
          <div>
            <label className="text-xs font-bold text-zinc-500 uppercase">Hora</label>
            <input required type="time" value={hora} onChange={(e) => setHora(e.target.value)} className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1" />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-zinc-500 uppercase">Serviço</label>
          <input required placeholder="Ex: Progressiva" value={servico} onChange={(e) => setServico(e.target.value)} className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-amber-400">
          {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> AGENDAR AGORA</>}
        </button>
      </form>

      {/* Lista de Próximos Horários */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold px-2">Próximos Atendimentos</h2>
        <div className="grid gap-3">
          {fetching ? <Loader2 className="animate-spin mx-auto text-amber-500" /> : 
           agendamentos.length === 0 ? <p className="text-zinc-500 text-center py-4">Nenhum horário marcado.</p> :
           agendamentos.map(a => (
            <div key={a.id} className="bg-zinc-900/50 border border-white/5 p-4 rounded-2xl flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500">
                   <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-lg">{(a.clientes as any)?.nome || 'Cliente Excluído'}</p>
                  <p className="text-zinc-500 text-sm">
                    {new Date(a.data_hora).toLocaleDateString('pt-BR')} às {new Date(a.data_hora).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'})}
                  </p>
                  <span className="text-xs text-amber-500/80 font-medium italic">{a.servico}</span>
                </div>
              </div>
              <button onClick={() => deletarAgendamento(a.id)} className="text-zinc-700 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Appointments;