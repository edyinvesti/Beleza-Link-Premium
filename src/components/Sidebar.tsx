import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, DollarSign } from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/dashboard' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: Calendar, label: 'Agenda', path: '/agenda' },
    { icon: DollarSign, label: 'Finanças', path: '/financeiro' },
  ];

  return (
    <>
      {/* LATERAL: Apenas Desktop (md:flex) - Escondida no Mobile (hidden) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-zinc-950 border-r border-white/5 flex-col z-40">
        <div className="p-8 text-amber-500 font-black italic text-xl">
          BELEZA LINK
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  isActive ? 'bg-amber-500 text-black font-bold' : 'text-zinc-500 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon size={22} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* RODAPÉ: Apenas Mobile (flex) - Escondido no Desktop (md:hidden) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 pb-8 pt-3 px-4 flex justify-around items-center z-50">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center transition-all active:scale-90"
            >
              <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-amber-500 text-black' : 'text-zinc-500'}`}>
                <item.icon size={24} />
              </div>
              <span className={`text-[10px] mt-1 font-bold ${isActive ? 'text-amber-500' : 'text-zinc-600'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
