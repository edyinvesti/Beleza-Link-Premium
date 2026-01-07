import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, MoreHorizontal } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const navItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/Painel' },
    { icon: Calendar, label: 'Agenda', path: '/appointments' },
    { icon: Users, label: 'Clientes', path: '/clients' },
    { icon: MoreHorizontal, label: 'Mais', path: '/more' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#09090b]/80 backdrop-blur-xl border-t border-white/5 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-1 ${location.pathname === item.path ? 'text-amber-500' : 'text-zinc-500'}`}>
          <item.icon size={24} />
          <span className="text-[10px] font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
export default BottomNav;
