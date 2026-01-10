import { Search, LogOut, Bell } from "lucide-react";

interface HeaderProps {
  onLogout: () => void;
}

function Notifications() {
  return (
    <button className="relative p-2 text-zinc-500 hover:text-white transition-colors">
      <Bell size={20} />
      <span className="absolute top-1 right-1 w-2 h-2 bg-[#F97316] rounded-full border-2 border-black"></span>
    </button>
  );
}

export default function Header({ onLogout }: HeaderProps) {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-black/20 backdrop-blur-md sticky top-0 z-[40] border-b border-white/[0.02]">
      <div className="flex items-center gap-4 bg-zinc-900/30 px-4 py-2 rounded-xl border border-white/5 w-64">
        <Search size={16} className="text-zinc-500" />
        <input 
          type="text" 
          placeholder="BUSCAR..." 
          className="bg-transparent border-none outline-none text-[10px] font-bold tracking-widest uppercase w-full text-white" 
        />
      </div>

      <div className="flex items-center gap-6">
        <Notifications />
        <div className="h-10 w-[1px] bg-white/5 mx-2" />
        <div className="flex items-center gap-3 text-right">
          <div>
            <p className="text-[10px] font-black uppercase text-white tracking-tighter italic leading-none">Edy Carlos</p>
            <p className="text-[8px] font-bold text-[#F97316] uppercase tracking-widest">Administrador</p>
          </div>
          <button 
            onClick={onLogout}
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden hover:border-red-500/50 group transition-all"
            title="Sair do Sistema"
          >
            <LogOut size={18} className="text-zinc-500 group-hover:text-red-500 transition-colors" />
          </button>
        </div>
      </div>
    </header>
  );
}