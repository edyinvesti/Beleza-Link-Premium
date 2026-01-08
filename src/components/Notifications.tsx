import { useState } from "react";
import { Bell, UserPlus, Star, Check } from "lucide-react";

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const notifications = [
    { id: 1, type: "agendamento", text: "Novo agendamento: Corte Degradê às 14h", time: "10 min ago", icon: UserPlus, color: "text-amber-500" },
    { id: 2, type: "social", text: "Edy curtiu seu post na comunidade", time: "1h ago", icon: Star, color: "text-amber-500" },
    { id: 3, type: "sistema", text: "Nova aula liberada: Visagismo 2026", time: "5h ago", icon: Check, color: "text-green-500" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => { setIsOpen(!isOpen); setUnreadCount(0); }}
        className="relative p-3 bg-zinc-900 rounded-2xl border border-white/5 hover:bg-zinc-800 transition-all group"
      >
        <Bell size={20} className="text-zinc-400 group-hover:text-amber-500" />
        {unreadCount > 0 && (
          <span className="absolute top-2 right-2 w-4 h-4 bg-amber-500 text-black text-[10px] font-black rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-4 w-80 bg-zinc-950 border border-white/10 rounded-[2rem] shadow-2xl z-50 overflow-hidden">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-black italic uppercase text-xs tracking-widest text-white">Notificações</h3>
              <span className="text-[9px] font-black text-amber-500 uppercase">Recentes</span>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((n) => (
                <div key={n.id} className="p-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-4">
                  <div className={`mt-1 ${n.color}`}><n.icon size={16} /></div>
                  <div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">{n.text}</p>
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