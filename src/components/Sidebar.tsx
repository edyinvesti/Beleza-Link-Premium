import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, DollarSign, Newspaper, PlayCircle, Target, LogOut, Globe } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Resumo', path: '/dashboard' },
    { icon: Calendar, label: 'Agenda', path: '/agenda' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: Target, label: 'CRM', path: '/crm' },
    { icon: Globe, label: 'Comunidade', path: '/community' },
    { icon: DollarSign, label: 'Financeiro', path: '/financeiro' },
    { icon: Newspaper, label: 'Blog', path: '/blog' },
    { icon: PlayCircle, label: 'Masterclass', path: '/live' },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 border-r border-white/5 hidden md:flex flex-col p-6 z-40">
        <div className="mb-12 px-4">
          <h2 className="text-xl font-black italic tracking-tighter text-white">BELEZA <span className="text-amber-500">LINK</span></h2>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Premium Access</p>
        </div>
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl font-bold text-sm transition-all ${
                location.pathname === item.path 
                  ? 'bg-amber-500 text-black' 
                  : 'text-zinc-500 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>
        <button onClick={() => navigate('/')} className="flex items-center gap-4 px-4 py-4 text-zinc-600 hover:text-red-500 transition-colors font-bold text-sm uppercase">
          <LogOut size={20} /> Sair
        </button>
      </aside>
    </>
  );
};
export default Sidebar;
