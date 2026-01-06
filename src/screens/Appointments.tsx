import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, User, Save, Loader2 } from 'lucide-react';

const Appointments = () => {
  const [loading, setLoading] = useState(false);
  const [clientes, setClientes] = useState<any[]>([]);
  
  // Dados do agendamento
  const [selectedClient, setSelectedClient] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [servico, setServico] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      const { data } = await supabase.from('clientes').select('id, nome');
      if (data) setClientes(data);
    };
    fetchClientes();
  }, []);

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
    } else {
      alert("Erro: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 text-white space-y-6">
      <h1 className="text-3xl font-black">Nova Agenda</h1>
      
      <form onSubmit={handleSave} className="bg-zinc-900 p-6 rounded-3xl border border-white/5 space-y-4">
        <div>
          <label className="text-xs font-bold text-zinc-500 uppercase">Cliente</label>
          <select 
            required
            value={selectedClient} 
            onChange={(e) => setSelectedClient(e.target.value)}
            className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1 text-white"
          >
            <option value="">Selecione o cliente...</option>
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
          <input required placeholder="Ex: Corte e Barba" value={servico} onChange={(e) => setServico(e.target.value)} className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1" />
        </div>

        <button type="submit" disabled={loading} className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2">
          {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> AGENDAR</>}
        </button>
      </form>
    </div>
  );
};

export default Appointments;