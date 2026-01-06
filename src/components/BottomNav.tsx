import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, MoreHorizontal } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();
  const items = [
    { icon: LayoutDashboard, label: 'Início', path: '/dashboard' },
    { icon: Calendar, label: 'Agenda', path: '/appointments' },
    { icon: Users, label: 'Clientes', path: '/clients' },
    { icon: MoreHorizontal, label: 'Mais', path: '/more' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/5 flex justify-around items-center py-3 z-50">
      {items.map((item) => {
        const active = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path} className={lex flex-col items-center \}>
            <item.icon size={22} />
            <span className="text-[10px] mt-1 font-medium">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
export default BottomNav;
