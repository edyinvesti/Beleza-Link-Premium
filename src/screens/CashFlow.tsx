import { DollarSign, TrendingUp, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const CashFlow = () => {
  return (
    <div className="p-4 text-white space-y-6 pb-20">
      <h1 className="text-3xl font-black">Financeiro</h1>
      
      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest">Entradas Hoje</p>
              <h2 className="text-4xl font-black mt-1">R$ 450,00</h2>
            </div>
            <ArrowUpCircle className="text-emerald-500" size={32} />
          </div>
        </div>
        
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Previsão Mensal</p>
              <h2 className="text-4xl font-black mt-1 text-zinc-300">R$ 8.200</h2>
            </div>
            <TrendingUp className="text-zinc-500" size={32} />
          </div>
        </div>
      </div>

      {/* Lista de Transações */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold px-2">Últimos Recebimentos</h3>
        <div className="bg-zinc-900 rounded-3xl border border-white/5 divide-y divide-white/5">
          <div className="p-4 flex justify-between items-center">
            <div>
              <p className="font-bold">Corte + Barba</p>
              <p className="text-xs text-zinc-500">Cliente: Kelly Silva</p>
            </div>
            <span className="text-emerald-500 font-bold">+ R$ 85,00</span>
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <p className="font-bold">Progressiva</p>
              <p className="text-xs text-zinc-500">Cliente: Ana Paula</p>
            </div>
            <span className="text-emerald-500 font-bold">+ R$ 250,00</span>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CashFlow;
