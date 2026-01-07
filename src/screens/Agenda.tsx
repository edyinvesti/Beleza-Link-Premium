import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Plus, Clock, User, Scissors, X, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Agenda() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Estados do Formulário
  const [clientId, setClientId] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    // Busca Agendamentos
    const { data: apptData } = await supabase
      .from('appointments')
      .select('*, clients(name)')
      .order('date', { ascending: true });
    
    // Busca Clientes para o Select
    const { data: clientData } = await supabase
      .from('clients')
      .select('id, name')
      .order('name', { ascending: true });

    if (apptData) setAppointments(apptData);
    if (clientData) setClients(clientData);
    setLoading(false);
  }

  async function handleAddAppointment(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase
      .from('appointments')
      .insert([{ 
        client_id: clientId, 
        service, 
        date, 
        time,
        status: 'pending' 
      }]);

    if (!error) {
      setIsModalOpen(false);
      setClientId('');
      setService('');
      fetchData();
    }
  }

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 text-amber-500 mb-4">
            <CalendarIcon size={32} />
            <span className="font-black tracking-widest uppercase text-sm">Cronograma</span>
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
            Sua <br />
            <span className="text-amber-500">Agenda.</span>
          </h1>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-white text-black font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-amber-500 transition-all hover:scale-105 active:scale-95"
        >
          <Plus size={20} /> NOVO AGENDAMENTO
        </button>
      </header>

      {/* Lista de Compromissos */}
      <div className="space-y-4">
        {loading ? (
          <p className="text-zinc-500 animate-pulse uppercase font-bold text-xs">Sincronizando agenda...</p>
        ) : appointments.length > 0 ? (
          appointments.map((item) => (
            <div key={item.id} className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-zinc-900 transition-all">
              <div className="flex items-center gap-6">
                <div className="bg-amber-500/10 text-amber-500 p-4 rounded-2xl font-black text-center min-w-[80px]">
                  <span className="block text-xs uppercase">Hora</span>
                  <span className="text-xl">{item.time}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.clients?.name || 'Cliente'}</h3>
                  <p className="text-zinc-500 text-sm flex items-center gap-2">
                    <Scissors size={14} /> {item.service}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-zinc-600 text-xs font-bold uppercase">{item.date}</span>
                 <div className="h-10 w-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                    <Check size={20} />
                 </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-white/5 rounded-[3rem]">
            <p className="text-zinc-500 font-medium italic">Sua agenda está limpa por enquanto.</p>
          </div>
        )}
      </div>

      {/* MODAL DE AGENDAMENTO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-zinc-950 border border-white/10 w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter">Marcar <span className="text-amber-500">Horário</span></h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={24} /></button>
            </div>

            <form onSubmit={handleAddAppointment} className="space-y-5">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">Selecionar Cliente</label>
                <select 
                  required
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-amber-500 outline-none appearance-none"
                >
                  <option value="">Escolha um cliente...</option>
                  {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">Serviço</label>
                <input 
                  required
                  placeholder="Ex: Corte e Barba"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 text-white focus:border-amber-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">Data</label>
                  <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-4 py-4 text-white text-sm" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block">Hora</label>
                  <input type="time" required value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-4 py-4 text-white text-sm" />
                </div>
              </div>

              <button type="submit" className="w-full bg-amber-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-amber-400 transition-all uppercase tracking-widest text-xs mt-4">
                Confirmar Agendamento
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
