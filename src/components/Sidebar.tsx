import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Users, Wallet, LogOut } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { label: "Painel", icon: LayoutDashboard, path: "/painel" },
    { label: "Agenda", icon: Calendar, path: "/agenda" },
    { label: "Clientes", icon: Users, path: "/clientes" },
    { label: "Financeiro", icon: Wallet, path: "/wallet" }
  ];

  return (
    <aside className="hidden lg:flex h-screen w-64 bg-black border-r border-white/5 flex-col fixed left-0 top-0 z-50">
      <div className="p-8">
        <h2 className="text-xl font-light tracking-[0.3em] uppercase text-white">BELEZA <span className="text-[#F97316] font-bold">LINK</span></h2>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <button key={item.path} onClick={() => navigate(item.path)} className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${location.pathname === item.path ? "bg-[#F97316]/10 text-[#F97316]" : "text-zinc-500 hover:text-white"}`}>
            <item.icon size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-6">
        <button onClick={() => window.location.reload()} className="flex items-center gap-4 text-zinc-600 hover:text-red-500 w-full p-2">
          <LogOut size={18} />
          <span className="text-[10px] font-black uppercase tracking-widest">Sair</span>
        </button>
      </div>
    </aside>
  );
}