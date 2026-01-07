import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, Calendar, DollarSign, Target,
  Settings, LogOut, GraduationCap, Newspaper,
  Wallet, TrendingUp, UsersRound, Sparkles
} from 'lucide-react';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Organized menu sections
  const menuSections = [
    {
      title: 'Gestão',
      items: [
        { icon: LayoutDashboard, label: 'Painel', path: '/painel' },
        { icon: Calendar, label: 'Agenda', path: '/agenda' },
        { icon: Users, label: 'Clientes', path: '/clientes' },
        { icon: Target, label: 'CRM', path: '/crm' },
      ]
    },
    {
      title: 'Financeiro',
      items: [
        { icon: TrendingUp, label: 'Fluxo de Caixa', path: '/cashflow' },
        { icon: DollarSign, label: 'Financeiro', path: '/financeiro' },
        { icon: Wallet, label: 'Carteira', path: '/wallet' },
      ]
    },
    {
      title: 'Aprendizado',
      items: [
        { icon: GraduationCap, label: 'Academy', path: '/academy' },
        { icon: Newspaper, label: 'Blog', path: '/blog' },
        { icon: UsersRound, label: 'Comunidade', path: '/community' },
      ]
    },
    {
      title: 'Sistema',
      items: [
        { icon: Sparkles, label: 'Assistente IA', path: '/ia' },
        { icon: Settings, label: 'Configurações', path: '/configuracoes' },
      ]
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-black via-zinc-950 to-black border-r border-white/5 z-50 hidden md:flex flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-white/5">
        <span className="text-xl font-black italic uppercase tracking-tighter">
          BELEZA <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">LINK</span>
        </span>
        <p className="text-[8px] text-zinc-600 uppercase tracking-widest mt-1 font-bold">Premium Network</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {/* Link Especial: LIVE */}
        <button
          onClick={() => navigate('/live')}
          className="w-full flex items-center justify-between px-4 py-4 rounded-2xl bg-gradient-to-r from-red-600/10 to-red-500/5 border border-red-600/20 hover:border-red-500/40 hover:bg-red-600/20 transition-all group shadow-[0_0_20px_rgba(220,38,38,0.1)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]"
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

        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div key={section.title} className="space-y-2">
            {/* Section Header */}
            <div className="flex items-center gap-2 px-4 mb-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
                {section.title}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            {/* Section Items */}
            {section.items.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all group ${isActive
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/20'
                      : 'text-zinc-500 hover:bg-white/5 hover:text-white'
                    }`}
                >
                  <item.icon size={18} className={isActive ? '' : 'group-hover:scale-110 transition-transform'} />
                  {item.label}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all group"
        >
          <LogOut size={18} className="group-hover:scale-110 transition-transform" />
          Sair
        </button>
      </div>
    </aside>
  );
}