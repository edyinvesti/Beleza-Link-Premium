import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Users, Brain, Wallet, GraduationCap, MessageSquare, Settings } from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Painel", path: "/painel" },
  { icon: Calendar, label: "Agenda", path: "/agenda" },
  { icon: Users, label: "Clientes", path: "/clientes" },
  { icon: Brain, label: "IA Preditora", path: "/ia" },
  { icon: Wallet, label: "Carteira", path: "/wallet" },
  { icon: GraduationCap, label: "Academy", path: "/academy" },
  { icon: MessageSquare, label: "Comunidade", path: "/comunidade" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#050505] border-r border-zinc-900 z-[100] flex flex-col p-6 shadow-2xl">
      <div className="mb-12 px-2">
        <h1 className="text-xl font-black italic tracking-tighter text-white">
          BELEZA <span className="text-[#F97316]">LINK</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 group ${
                isActive 
                ? "bg-[#F97316] text-black shadow-[0_0_30px_rgba(249,115,22,0.4)]" 
                : "text-zinc-500 hover:text-white hover:bg-zinc-900/50"
              }`}
            >
              <item.icon size={18} className={isActive ? "animate-pulse" : "group-hover:text-[#F97316]"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-zinc-900">
        <button className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-white transition-all w-full text-[11px] font-bold uppercase tracking-widest group">
          <Settings size={18} className="group-hover:rotate-90 transition-transform duration-500" />
          Ajustes
        </button>
      </div>
    </aside>
  );
}