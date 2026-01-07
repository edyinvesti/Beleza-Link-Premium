import { TrendingUp, TrendingDown, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function CashFlow() {
  const transactions = [
    { id: 1, type: 'entrada', client: 'Maria Silva', service: 'Corte + Escova', value: 150, time: '14:30' },
    { id: 2, type: 'entrada', client: 'Ana Costa', service: 'Manicure', value: 80, time: '13:15' },
    { id: 3, type: 'saida', client: 'Fornecedor XYZ', service: 'Produtos', value: 320, time: '11:00' },
    { id: 4, type: 'entrada', client: 'Julia Mendes', service: 'Coloração', value: 220, time: '10:00' },
  ];

  return (
    <div className="p-4 md:p-6 text-white space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
          Fluxo de Caixa
        </h1>
        <button className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:scale-105">
          <DollarSign size={18} />
          Nova Entrada
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Entradas Hoje */}
        <div className="group bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-emerald-500/20 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              <TrendingUp className="text-emerald-400" size={24} />
            </div>
            <ArrowUpRight className="text-emerald-400 opacity-50" size={20} />
          </div>
          <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Entradas Hoje</p>
          <h2 className="text-4xl font-black mt-2 bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
            R$ 450,00
          </h2>
          <p className="text-emerald-400/60 text-sm mt-2">+12% vs ontem</p>
        </div>

        {/* Saídas Hoje */}
        <div className="group bg-gradient-to-br from-rose-500/20 to-rose-600/10 border border-rose-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/20 cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-rose-500/20 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              <TrendingDown className="text-rose-400" size={24} />
            </div>
            <ArrowDownRight className="text-rose-400 opacity-50" size={20} />
          </div>
          <p className="text-rose-400 font-bold text-xs uppercase tracking-wider">Saídas Hoje</p>
          <h2 className="text-4xl font-black mt-2 bg-gradient-to-r from-rose-300 to-rose-500 bg-clip-text text-transparent">
            R$ 320,00
          </h2>
          <p className="text-rose-400/60 text-sm mt-2">-5% vs ontem</p>
        </div>

        {/* Saldo Atual */}
        <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-blue-500/20 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              <DollarSign className="text-blue-400" size={24} />
            </div>
          </div>
          <p className="text-blue-400 font-bold text-xs uppercase tracking-wider">Saldo Atual</p>
          <h2 className="text-4xl font-black mt-2 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            R$ 3.450
          </h2>
          <p className="text-blue-400/60 text-sm mt-2">Disponível</p>
        </div>

        {/* Previsão Mensal */}
        <div className="group bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <div className="bg-violet-500/20 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              <Calendar className="text-violet-400" size={24} />
            </div>
          </div>
          <p className="text-violet-400 font-bold text-xs uppercase tracking-wider">Previsão Mensal</p>
          <h2 className="text-4xl font-black mt-2 bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">
            R$ 8.200
          </h2>
          <p className="text-violet-400/60 text-sm mt-2">Janeiro 2026</p>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300">
        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full"></div>
          Transações Recentes
        </h3>
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className="group bg-zinc-800/50 hover:bg-zinc-800 border border-white/5 hover:border-white/10 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${transaction.type === 'entrada'
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-rose-500/20 text-rose-400'
                    }`}>
                    {transaction.type === 'entrada' ? (
                      <ArrowUpRight size={20} />
                    ) : (
                      <ArrowDownRight size={20} />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-white">{transaction.client}</p>
                    <p className="text-sm text-zinc-400">{transaction.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-black text-lg ${transaction.type === 'entrada' ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                    {transaction.type === 'entrada' ? '+' : '-'} R$ {transaction.value}
                  </p>
                  <p className="text-sm text-zinc-500">{transaction.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-300">
        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-violet-400 rounded-full"></div>
          Evolução Semanal
        </h3>
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-white/10 rounded-2xl">
          <p className="text-zinc-500 font-bold">Gráfico em desenvolvimento 📊</p>
        </div>
      </div>
    </div>
  );
}

