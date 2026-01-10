import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Sparkles, Briefcase } from "lucide-react";

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    { icon: Briefcase, path: "/portfolio" },
    { icon: LayoutDashboard, path: "/painel" },
    { icon: Calendar, path: "/agenda" },
    { icon: Sparkles, path: "/ia" }
  ];

  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-2 rounded-3xl flex gap-2 z-[150] shadow-2xl">
      {menu.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`p-4 rounded-2xl transition-all ${
            location.pathname === item.path ? "bg-[#F97316] text-black" : "text-zinc-500"
          }`}
        >
          <item.icon size={24} />
        </button>
      ))}
    </nav>
  );
}