import { Users, Calendar, DollarSign, ArrowUpRight, Star } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header com Saudação */}
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent">
          Olá, Profissional! ✨
        </h1>
        <p className="text-zinc-400 text-lg">Seu negócio está brilhando hoje. Confira os números do Eternidade Link.</p>
      </header>

      {/* Cards de Métricas com Efeito de Vidro */}
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
            <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Área Central: Próximos Clientes */}
      <section className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 backdrop-blur-md">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Star className="text-amber-500 fill-amber-500" size={20} />
            Próximos Clientes
          </h2>
          <button className="text-sm font-semibold text-amber-500 hover:underline">Ver todos</button>
        </div>

        <div className="space-y-4">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border-2 border-amber-500/30" />
                <div>
                  <p className="font-bold text-zinc-100">Cliente Exemplo {i + 1}</p>
                  <p className="text-xs text-zinc-500 text-amber-500/80">Corte & Escova • 14:30h</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">
                Confirmado
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;