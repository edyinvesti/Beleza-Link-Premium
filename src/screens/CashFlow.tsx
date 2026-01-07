export default function CashFlow() {
  return (
    <div className="p-4 text-white space-y-6">
      <h1 className="text-3xl font-black">Financeiro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl">
          <p className="text-emerald-500 font-bold text-xs uppercase">Entradas Hoje</p>
          <h2 className="text-4xl font-black mt-1">R$ 450,00</h2>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-3xl">
          <p className="text-zinc-500 font-bold text-xs uppercase">Previsão Mensal</p>
          <h2 className="text-4xl font-black mt-1">R$ 8.200</h2>
        </div>
      </div>
    </div>
  );
}

