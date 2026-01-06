import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, DollarSign, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: Calendar, label: 'Agenda', path: '/agenda' },
    { icon: DollarSign, label: 'Financeiro', path: '/financeiro' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 md:w-64 bg-zinc-950 border-r border-white/5 flex flex-col z-40">
      <div className="p-8 text-amber-500 font-black italic text-xl hidden md:block">
        BELEZA LINK
      </div>
      
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                isActive 
                ? 'bg-amber-500 text-black font-bold' 
                : 'text-zinc-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={24} />
              <span className="hidden md:block">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-4 p-4 text-zinc-500 hover:text-red-500 transition-colors"
        >
          <LogOut size={24} />
          <span className="hidden md:block font-bold">Sair</span>
        </button>
      </div>
    </aside>
  );
}
