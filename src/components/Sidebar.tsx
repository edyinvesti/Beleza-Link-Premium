import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, Calendar, DollarSign,
  MessageSquare, Settings, LogOut, GraduationCap, Newspaper
} from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Painel', path: '/painel' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: Calendar, label: 'Agenda', path: '/agenda' },
    { icon: DollarSign, label: 'Financeiro', path: '/financeiro' },
    { icon: GraduationCap, label: 'Workshops', path: '/workshops' },
    { icon: Newspaper, label: 'Editorial', path: '/blog' },
    { icon: MessageSquare, label: 'Assistente IA', path: '/ia' },
    { icon: Settings, label: 'Configurações', path: '/configuracoes' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/5 z-50 hidden md:block">
      <div className="p-8">
        <span className="text-xl font-black italic uppercase tracking-tighter">
          BELEZA <span className="text-amber-500">LINK</span>
        </span>
      </div>

      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${location.pathname === item.path
              ? 'bg-amber-500 text-black'
              : 'text-zinc-500 hover:bg-white/5 hover:text-white'
              }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 px-4 w-full">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}