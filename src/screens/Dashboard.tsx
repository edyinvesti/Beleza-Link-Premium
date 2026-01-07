import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Calendar, DollarSign, PlayCircle, ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({ revenue: 0, clients: 0, appointments: 0 });

  useEffect(() => {
    async function getStats() {
      const { data: c } = await supabase.from('clients').select('total_spent');
      const { count: a } = await supabase.from('appointments').select('*', { count: 'exact', head: true });
      
      const totalRevenue = c?.reduce((acc, curr) => acc + (curr.total_spent || 0), 0) || 0;
      setData({
        revenue: totalRevenue,
        clients: c?.length || 0,
        appointments: a || 0
      });
    }
    getStats();
  }, []);

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Olá, <br />
          <span className="text-amber-500">Expert.</span>
        </h1>
      </header>

      {/* Banner Live */}
      <div className="mb-12 cursor-pointer" onClick={() => navigate('/live')}>
        <div className="bg-zinc-900/50 border border-amber-500/50 p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-black shadow-lg shadow-amber-500/20">
              <PlayCircle size={32} />
            </div>
            <div>
              <span className="text-red-500 font-black text-[10px] uppercase animate-pulse">● Ao Vivo Agora</span>
              <h2 className="text-2xl font-black uppercase italic italic tracking-tight">Masterclass: Técnicas 2026</h2>
            </div>
          </div>
          <button className="bg-white text-black font-black px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition-all text-xs">
            ENTRAR NA AULA <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2rem]">
          <DollarSign size={24} className="text-green-500 mb-4" />
          <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Faturamento Real</p>
          <p className="text-3xl font-black">R$ {data.revenue.toLocaleString('pt-BR')}</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2rem]">
          <Users size={24} className="text-blue-500 mb-4" />
          <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Total de Clientes</p>
          <p className="text-3xl font-black">{data.clients}</p>
        </div>
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2rem]">
          <Calendar size={24} className="text-amber-500 mb-4" />
          <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Agendamentos</p>
          <p className="text-3xl font-black">{data.appointments}</p>
        </div>
      </div>
    </div>
  );
}
