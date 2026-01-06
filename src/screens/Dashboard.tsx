import { Users, Calendar, DollarSign, ArrowUpRight, Star, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 animate-in fade-in duration-700 p-6">
      {/* Header com Saudação */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
            Olá, Profissional! ✨
          </h1>
          <p className="text-zinc-400 text-lg">Seu negócio está brilhando hoje.</p>
        </div>

        {/* BOTÃO DA LIVE - NOVO ACESSO DIRETO */}
        <button 
          onClick={() => navigate('/workshop')}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20 group"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </div>
          <PlayCircle size={20} className="group-hover:rotate-12 transition-transform" />
          ACESSAR LIVE AGORA
        </button>
      </header>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Faturamento', value: 'R$ 1.250,00', icon: DollarSign, color: 'from-amber-500/20' },
          { label: 'Agendamentos', value: '12 hoje', icon: Calendar, color: 'from-blue-500/20' },
          { label: 'Novos Clientes', value: '+4', icon: Users, color: 'from-emerald-500/20' },
        ].map((card, i) => (
          <div key={i} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all hover:border-amber-500/50">
            <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${card.color} blur-2xl transition-all group-hover:blur-3xl`} />
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-zinc-800 text-amber-500">
                <card.icon size={24} />
              </div>
              <ArrowUpRight className="text-zinc-500 group-hover:text-white transition-colors" />
            </div>
            <p className="text-zinc-400 font-medium">{card.label}</p>
            <h3 className="text-2xl font-bold mt-1 text-white">{card.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;