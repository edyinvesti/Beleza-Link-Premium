import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Wallet, Package, Settings, Sparkles } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Calendar, label: 'Agenda', path: '/appointments' },
    { icon: Users, label: 'Clientes', path: '/clients' },
    { icon: Wallet, label: 'Financeiro', path: '/cash-flow' },
    { icon: Package, label: 'Produtos', path: '/products' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <nav className="w-64 h-full bg-[#09090b] border-r border-white/5 p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-amber-500 p-2 rounded-xl">
          <Sparkles className="text-black" size={20} />
        </div>
        <h1 className="text-lg font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
          Eternidade Link
        </h1>
      </div>

      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive 
                ? 'bg-amber-500 text-black font-bold' 
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;