import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, DollarSign, Settings, Video } from 'lucide-react';

const Sidebar = () => {
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
    <>
      {/* Menu Lateral - Desktop */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-black border-r border-white/5 hidden lg:block">
        <div className="p-6 text-amber-500 font-black text-xl tracking-tighter">BELEZA LINK</div>
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? 'bg-amber-500 text-black font-bold' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Menu Inferior - Mobile (Rodapé) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-lg border-t border-white/10 px-6 py-3 flex justify-between items-center z-50">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link key={item.path} to={item.path} className={`flex flex-col items-center gap-1 ${isActive ? 'text-amber-500' : 'text-zinc-500'}`}>
              <item.icon size={20} strokeWidth={isActive ? 3 : 2} />
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
