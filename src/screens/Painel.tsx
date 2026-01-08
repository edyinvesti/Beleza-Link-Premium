import { Users, Calendar, DollarSign, ArrowUpRight, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Painel() {
  const stats = [
    { label: "Clientes Ativos", value: "1,248", icon: Users, color: "text-blue-500" },
    { label: "Agendamentos Hoje", value: "14", icon: Calendar, color: "text-[#F97316]" },
    { label: "Faturamento Mensal", value: "R$ 12.450", icon: DollarSign, color: "text-emerald-500" },
    { label: "Crescimento", value: "+12%", icon: ArrowUpRight, color: "text-amber-500" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="space-y-8 text-left"
    >
      <header>
        <h1 className="text-3xl font-black uppercase italic tracking-tighter">
          Painel <span className="text-[#F97316]">Executivo</span>
        </h1>
        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Bem-vindo de volta, Administrador</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl hover:border-[#F97316]/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <stat.icon className={`${stat.color} group-hover:scale-110 transition-transform`} size={24} />
              <TrendingUp size={14} className="text-zinc-700" />
            </div>
            <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">{stat.label}</p>
            <h2 className="text-2xl font-bold italic mt-1">{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-zinc-900/20 border border-zinc-800 border-dashed h-64 rounded-3xl flex items-center justify-center">
          <p className="text-zinc-600 uppercase text-[10px] font-bold tracking-[0.2em]">Gráfico de Desempenho (Em breve)</p>
        </div>
        <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-3xl">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4">Atividade Recente</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(item => (
              <div key={item} className="flex items-center gap-4 p-3 bg-black/20 rounded-xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-[#F97316] shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                <p className="text-[11px] font-medium">Novo agendamento confirmado às 14:00</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}