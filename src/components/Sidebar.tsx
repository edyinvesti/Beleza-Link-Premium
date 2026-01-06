import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, DollarSign, Settings, Video } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const menuItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/dashboard' },
    { icon: Calendar, label: 'Agenda', path: '/agenda' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: DollarSign, label: 'Financeiro', path: '/financeiro' },
    { icon: Video, label: 'Workshop', path: '/workshop' },
    { icon: Settings, label: 'Ajustes', path: '/config' },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-black border-r border-white/5 hidden lg:block">
      <div className="p-6 text-amber-500 font-black text-xl tracking-tighter">BELEZA LINK</div>
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${location.pathname === item.path ? 'bg-amber-500 text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
