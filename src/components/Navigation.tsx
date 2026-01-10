import { Home, Zap, Target, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: Home, path: "/", label: "Início" },
    { icon: Zap, path: "/ia", label: "Mestre" },
    { icon: Target, path: "/crm", label: "CRM" },
    { icon: User, path: "/perfil", label: "Perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-2xl border-t border-white/5 pb-8 pt-4 px-8 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {menu.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button key={item.path} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-1.5">
              <div className={`p-2.5 rounded-2xl transition-all ${active ? "bg-[#F97316] text-black shadow-lg shadow-orange-500/20" : "text-zinc-600"}`}>
                <item.icon size={22} />
              </div>
              <span className={`text-[8px] font-black uppercase tracking-widest ${active ? "text-[#F97316]" : "text-zinc-800"}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}