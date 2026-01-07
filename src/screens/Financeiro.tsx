import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Wallet, BarChart3, PieChart, Activity } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Financeiro() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    clientCount: 0,
    averageTicket: 0,
    monthlyData: [32, 45, 55, 40, 70, 85, 95] 
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFinancialData();
  }, []);

  async function fetchFinancialData() {
    setLoading(true);
    const { data, error } = await supabase.from('clients').select('total_spent');
    
    if (!error && data) {
      const total = data.reduce((acc, curr) => acc + (Number(curr.total_spent) || 0), 0);
      const count = data.length;
      
      setStats(prev => ({
        ...prev,
        totalRevenue: total,
        clientCount: count,
        averageTicket: count > 0 ? total / count : 0
      }));
    }
    setLoading(false);
  }

  const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL'];

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-green-500 mb-4">
          <Activity size={32} />
          <span className="font-black tracking-widest uppercase text-sm">Performance Financeira</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Painel de <br />
          <span className="text-green-500">Resultados.</span>
        </h1>
      </header>

      {/* Cards Principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-green-500/5 transition-all hover:bg-zinc-900">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Receita Acumulada</p>
          <h2 className="text-4xl font-black text-white mb-2">
            R$ {stats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </h2>
          <div className="flex items-center gap-2 text-green-500 text-xs font-bold">
            <TrendingUp size={14} /> +22% vs mês anterior
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] transition-all hover:bg-zinc-900">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Ticket Médio p/ Cliente</p>
          <h2 className="text-4xl font-black text-white mb-2">
            R$ {stats.averageTicket.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </h2>
          <p className="text-zinc-600 text-[10px] font-black uppercase">Base: {stats.clientCount} Clientes</p>
        </div>

        <div className="bg-zinc-900/50 border border-amber-500/20 p-8 rounded-[2.5rem] relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 text-amber-500/10 group-hover:scale-110 transition-transform">
            <PieChart size={120} />
          </div>
          <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Meta de Faturamento</p>
          <h2 className="text-4xl font-black text-white">84%</h2>
          <div className="w-full bg-white/5 h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-amber-500 h-full w-[84%] shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
          </div>
        </div>
      </div>

      {/* Gráfico de Faturamento Mensal */}
      <div className="bg-zinc-900/50 border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter flex items-center gap-3">
              <BarChart3 className="text-amber-500" /> Evolução Mensal
            </h3>
            <p className="text-zinc-500 text-sm mt-1">Análise de crescimento anual de 2026</p>
          </div>
        </div>

        <div className="h-64 flex items-end justify-between gap-3 md:gap-6 px-4">
          {stats.monthlyData.map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
              <div className="relative w-full flex flex-col items-center justify-end">
                <div className="absolute -top-10 bg-white text-black text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {val}%
                </div>
                <div 
                  className="w-full max-w-[40px] bg-white/5 rounded-2xl group-hover:bg-amber-500/20 transition-all duration-500 relative flex items-end justify-center overflow-hidden" 
                  style={{ height: `${val * 2}px` }}
                >
                  <div className="w-full bg-gradient-to-t from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 h-0 group-hover:h-full transition-all duration-700 ease-out shadow-[0_0_20px_rgba(245,158,11,0.3)]"></div>
                </div>
              </div>
              <span className="text-[10px] font-black text-zinc-600 group-hover:text-white transition-colors uppercase tracking-widest">
                {months[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
