import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlayCircle, Calendar, Users, Settings } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Início', path: '/dashboard' },
    { icon: PlayCircle, label: 'Live', path: '/workshop' },
    { icon: Calendar, label: 'Agenda', path: '/agenda' },
    { icon: Users, label: 'Clientes', path: '/clientes' },
    { icon: Settings, label: 'Ajustes', path: '/config' },
  ];

  return (
    <>
      {/* VERSÃO PC: Barra Lateral Fixa */}
      <aside className="hidden lg:flex flex-col w-64 bg-zinc-900/50 border-r border-white/5 h-screen fixed left-0 top-0 p-6">
        <div className="mb-10 px-2">
          <h2 className="text-xl font-black bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            BELEZA LINK
          </h2>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                location.pathname === item.path 
                ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20' 
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={22} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* VERSÃO CELULAR: Barra de Ícones Inferior */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-xl border-t border-white/5 px-6 py-3 z-50 flex justify-between items-center">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-all ${
              location.pathname === item.path ? 'text-amber-500 scale-110' : 'text-zinc-500'
            }`}
          >
            <item.icon size={24} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;