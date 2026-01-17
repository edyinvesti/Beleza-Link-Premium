import { Users, UserPlus, Search, Filter, MoreHorizontal, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function CRM() {
  const clientes = [
    { id: 1, nome: "Ana Silva", servico: "Mechas de Luxo", status: "Ativo", valor: "R$ 450", data: "Hoje" },
    { id: 2, nome: "Bia Costa", servico: "Corte Geométrico", status: "Pendente", valor: "R$ 180", data: "Amanhã" },
    { id: 3, nome: "Carla Souza", servico: "Limpeza Profunda", status: "Ativo", valor: "R$ 220", data: "18 Jan" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Gestão <span className="text-[#F97316]">Elite</span></h2>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Controle Total de Clientes</p>
          </div>
          <button className="flex items-center gap-3 bg-[#F97316] text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
            <UserPlus size={16} /> Novo Cliente
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[ {t: "Total Atendidos", v: "1,284"}, {t: "Faturamento Mês", v: "R$ 12.450"}, {t: "Novos Clientes", v: "48"} ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[35px] backdrop-blur-md">
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.t}</p>
              <h3 className="text-3xl font-black text-white">{stat.v}</h3>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900/40 border border-white/5 rounded-[40px] overflow-hidden">
          <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between gap-4">
             <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input type="text" placeholder="BUSCAR CLIENTE..." className="w-full bg-black/40 border border-white/5 py-4 pl-12 pr-4 rounded-2xl text-[10px] font-bold outline-none focus:border-[#F97316]/50" />
             </div>
             <button className="flex items-center gap-2 bg-white/5 px-6 py-4 rounded-2xl text-[10px] font-black uppercase"><Filter size={16}/> Filtros</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-zinc-600 uppercase tracking-widest border-b border-white/5">
                  <th className="p-8">Cliente</th>
                  <th className="p-8">Serviço</th>
                  <th className="p-8">Status</th>
                  <th className="p-8 text-right">Valor</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {clientes.map((c) => (
                  <tr key={c.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-8 font-bold">{c.nome}</td>
                    <td className="p-8 text-zinc-400">{c.servico}</td>
                    <td className="p-8">
                      <span className={`flex items-center gap-2 text-[9px] font-black uppercase px-3 py-1 rounded-full w-fit ${c.status === 'Ativo' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                        {c.status === 'Ativo' ? <CheckCircle2 size={12}/> : <Clock size={12}/>} {c.status}
                      </span>
                    </td>
                    <td className="p-8 text-right font-black text-[#F97316]">{c.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}