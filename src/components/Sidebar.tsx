import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  DollarSign, 
  Settings, 
  Video,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
      {/* Botão Mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-amber-500 rounded-xl text-black"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <aside className={
        fixed inset-y-0 left-0 z-40 w-64 bg-black border-r border-white/5 transform transition-transform duration-300 ease-in-out
         lg:translate-x-0
      }>
        <div className="p-6">
          <h1 className="text-xl font-black bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            BELEZA LINK
          </h1>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Premium Edition</p>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={
                  flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200
                  
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
