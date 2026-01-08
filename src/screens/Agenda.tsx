import { Calendar as CalendarIcon, Clock, User, Scissors, ChevronRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

export default function Agenda() {
  const agendamentos = [
    { id: 1, cliente: "Marcos Oliveira", servico: "Corte Degradê", hora: "14:30", status: "Confirmado" },
    { id: 2, cliente: "Cláudio Silva", servico: "Barba & Toalha Quente", hora: "15:45", status: "Em espera" },
    { id: 3, cliente: "Ricardo Santos", servico: "Combo Premium", hora: "17:00", status: "Confirmado" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="space-y-8 text-left"
    >
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">
            Sua <span className="text-[#F97316]">Agenda</span>
          </h1>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Quinta-feira, 08 de Janeiro</p>
        </div>
        <button className="bg-[#F97316] text-black p-3 rounded-xl hover:scale-110 transition-transform shadow-lg shadow-[#F97316]/20">
          <Plus size={20} strokeWidth={3} />
        </button>
      </header>

      <div className="grid gap-4">
        {agendamentos.map((item) => (
          <div key={item.id} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-[2rem] flex items-center justify-between hover:bg-zinc-900/60 transition-all group">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-black transition-all">
                <Clock size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <User size={12} className="text-zinc-500" />
                  <h3 className="text-sm font-bold uppercase italic">{item.cliente}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Scissors size={12} className="text-[#F97316]" />
                  <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">{item.servico} • {item.hora}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full border ${item.status === "Confirmado" ? "border-emerald-500/50 text-emerald-500 bg-emerald-500/10" : "border-amber-500/50 text-amber-500 bg-amber-500/10"}`}>
                {item.status}
              </span>
              <ChevronRight size={18} className="text-zinc-700" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900/20 border border-zinc-800 border-dashed p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center">
        <CalendarIcon size={32} className="text-zinc-800 mb-2" />
        <p className="text-zinc-600 uppercase text-[9px] font-black tracking-widest">Fim da agenda de hoje</p>
      </div>
    </motion.div>
  );
}