import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Video, Calendar, GraduationCap, TrendingUp } from "lucide-react";

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Início", path: "/painel" },
    { icon: Calendar, label: "Agenda", path: "/agenda" },
    { icon: TrendingUp, label: "Caixa", path: "/cashflow" },
    { icon: GraduationCap, label: "Academy", path: "/academy" },
    { icon: Video, label: "Live", path: "/live", active: true },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 z-50 flex items-center justify-around pb-safe">
      {navItems.map((item: any) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-1.5 min-w-[60px] group"
          >
            <div
              className={`p-2.5 rounded-2xl transition-all relative ${isActive
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/30 scale-110"
                : "text-zinc-500 group-hover:bg-white/5 group-hover:text-white"
                }`}
            >
              <item.icon size={isActive ? 24 : 22} className="transition-all" />
              {item.active && !isActive && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse border-2 border-zinc-950"></span>
              )}
            </div>
            <span
              className={`text-[9px] font-black uppercase tracking-wider transition-colors ${isActive ? "text-amber-400" : "text-zinc-600 group-hover:text-zinc-400"
                }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}