import { useState } from "react";
import { Bell, UserPlus, Star, Check } from "lucide-react";

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const notifications = [
    { id: 1, type: "agendamento", text: "Novo agendamento: Corte Degradê às 14h", time: "10 min ago", icon: UserPlus, color: "text-[#F97316]" },
    { id: 2, type: "social", text: "Edy curtiu seu post na comunidade", time: "1h ago", icon: Star, color: "text-[#F97316]" },
    { id: 3, type: "sistema", text: "Nova aula liberada: Visagismo 2026", time: "5h ago", icon: Check, color: "text-green-500" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => { setIsOpen(!isOpen); setUnreadCount(0); }}
        className="relative p-2.5 bg-zinc-900/50 rounded-xl border border-white/5 hover:bg-zinc-800 transition-all group"
      >
        <Bell size={20} className="text-zinc-400 group-hover:text-[#F97316] transition-colors" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F97316] text-black text-[9px] font-black rounded-full flex items-center justify-center border-2 border-black">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          {/* Ajuste aqui: "right-[-50px]" ou centralizado no mobile com "fixed" ou "absolute" controlado */}
          <div className="absolute right-[-10px] md:right-0 mt-4 w-[280px] sm:w-80 bg-zinc-950 border border-white/10 rounded-[2rem] shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-zinc-900/20">
              <h3 className="font-black italic uppercase text-[10px] tracking-widest text-white">Notificações</h3>
              <span className="text-[9px] font-black text-[#F97316] uppercase">Recentes</span>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((n) => (
                <div key={n.id} className="p-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-4 text-left">
                  <div className={`mt-1 flex-shrink-0 ${n.color}`}><n.icon size={16} /></div>
                  <div>
                    <p className="text-[11px] text-zinc-300 font-medium leading-relaxed">{n.text}</p>
                    <span className="text-[9px] text-zinc-600 font-bold uppercase mt-1 block">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full p-4 text-center text-[9px] font-black text-zinc-500 uppercase tracking-widest hover:text-white transition-colors bg-white/5">
              Ver tudo
            </button>
          </div>
        </>
      )}
    </div>
  );
}