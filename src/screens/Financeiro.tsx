import { useState, useEffect } from 'react';
import { TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Stats {
  totalRevenue: number;
  clientCount: number;
  averageTicket: number;
  monthlyData: number[];
}

export default function Financeiro() {
  const [stats, setStats] = useState<Stats>({
    totalRevenue: 0,
    clientCount: 0,
    averageTicket: 0,
    monthlyData: [32, 45, 55, 40, 70, 85, 95]
  });

  useEffect(() => {
    fetchFinancialData();
  }, []);

  async function fetchFinancialData() {
    const { data, error } = await supabase.from('clients').select('total_spent');

    if (!error && data) {
      const total = data.reduce((acc: number, curr: { total_spent: number }) => acc + (Number(curr.total_spent) || 0), 0);
      const count = data.length;

      setStats(prev => ({
        ...prev,
        totalRevenue: total,
        clientCount: count,
        averageTicket: count > 0 ? total / count : 0
      }));
    }
  }

  const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL'];

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-emerald-500 mb-4">
          <TrendingUp size={32} />
          <span className="font-black tracking-widest uppercase text-sm">Alta Performance</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Métricas <br />
          <span className="text-emerald-500">Financeiras.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-zinc-900 shadow-2xl p-8 rounded-[2.5rem] border border-white/5">
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Faturamento Total</p>
          <h2 className="text-4xl font-black italic">R$ {stats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
          <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold mt-4 uppercase">
            <Activity size={14} /> +12% este mês
          </div>
        </div>

        <div className="bg-zinc-900 shadow-2xl p-8 rounded-[2.5rem] border border-white/5">
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Total de Clientes</p>
          <h2 className="text-4xl font-black italic">{stats.clientCount}</h2>
          <div className="flex items-center gap-2 text-blue-500 text-xs font-bold mt-4 uppercase">
            <BarChart3 size={14} /> Base Ativa
          </div>
        </div>

        <div className="bg-zinc-900 shadow-2xl p-8 rounded-[2.5rem] border border-white/5">
          <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Ticket Médio</p>
          <h2 className="text-4xl font-black italic">R$ {stats.averageTicket.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h2>
          <div className="flex items-center gap-2 text-amber-500 text-xs font-bold mt-4 uppercase">
            <PieChart size={14} /> Por Atendimento
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5">
        <h3 className="text-xl font-black uppercase italic mb-10 tracking-tighter">Fluxo de Caixa Mensal</h3>
        <div className="flex items-end gap-3 h-64 md:gap-6">
          {stats.monthlyData.map((val: number, i: number) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4">
              <div
                className="w-full bg-emerald-500 rounded-lg transition-all hover:bg-emerald-400 group relative"
                style={{ height: `${val}%` }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {val}%
                </div>
              </div>
              <span className="text-[10px] font-black text-zinc-600 italic tracking-tighter">{months[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
