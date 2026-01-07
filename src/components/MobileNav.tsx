import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Video, PlusCircle, MoreHorizontal } from 'lucide-react';

export default function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/painel' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: PlusCircle, label: 'Agenda', path: '/agenda', primary: true },
    { icon: Video, label: 'Live', path: '/live', active: true },
    { icon: MoreHorizontal, label: 'Mais', path: '/more' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-lg border-t border-white/5 px-6 py-3 z-50 flex items-center justify-between pb-8">
      {navItems.map((item: any) => (
        <button key={item.path} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-1">
          <div className={`p-2 rounded-xl transition-all relative ${location.pathname === item.path ? (item.primary ? 'bg-amber-500 text-black' : 'text-amber-500') : 'text-zinc-500'}`}>
            <item.icon size={item.primary ? 28 : 22} />
            {item.active && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse border border-zinc-950"></span>
            )}
          </div>
          <span className={`text-[9px] font-black uppercase ${location.pathname === item.path ? 'text-white' : 'text-zinc-600'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

