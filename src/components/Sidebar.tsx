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
        {/* Link Especial: LIVE */}
        <button
          onClick={() => navigate('/live')}
          className="w-full mb-6 flex items-center justify-between px-4 py-4 rounded-2xl bg-red-600/10 border border-red-600/20 hover:bg-red-600/20 transition-all group shadow-[0_0_20px_rgba(220,38,38,0.1)]"
        >
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-red-500 group-hover:text-red-400 transition-colors">Ao Vivo</span>
          </div>
          <div className="bg-red-600/20 px-2 py-0.5 rounded text-[8px] font-black text-red-500 uppercase tracking-tighter">Live</div>
        </button>

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