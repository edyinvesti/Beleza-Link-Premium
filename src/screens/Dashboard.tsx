import { Users, Calendar, DollarSign, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Olá, Profissional! ✨</h1>
          <p className="text-zinc-500 mt-2">Bem-vindo ao Beleza-Link-Premium.</p>
        </div>

        <button 
          onClick={() => navigate('/workshop')}
          className="flex items-center gap-3 bg-amber-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-amber-500/20"
        >
          <PlayCircle size={20} /> ACESSAR LIVE
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Faturamento', value: 'R$ 1.250', icon: DollarSign },
          { label: 'Agendamentos', value: '12', icon: Calendar },
          { label: 'Clientes', value: '4', icon: Users },
        ].map((card, i) => (
          <div key={i} className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/50 backdrop-blur-xl">
            <card.icon className="text-amber-500 mb-4" size={28} />
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">{card.label}</p>
            <h3 className="text-3xl font-bold text-white mt-2">{card.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;