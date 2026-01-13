import { useState, useEffect } from "react";
import { ArrowUpCircle, ArrowDownCircle, Plus, Wallet } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Financeiro() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "outcome">("income");

  useEffect(() => { fetchTransactions(); }, []);

  async function fetchTransactions() {
    const { data } = await supabase.from("transactions").select("*").order("created_at", { ascending: false });
    if (data) setTransactions(data);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!description || !amount) return;
    const { error } = await supabase.from("transactions").insert([{
      description,
      amount: parseFloat(amount),
      type
    }]);
    if (!error) {
      setDescription(""); setAmount("");
      fetchTransactions();
    }
  }

  const totalIncome = transactions.filter(t => t.type === "income").reduce((acc, t) => acc + t.amount, 0);
  const totalOutcome = transactions.filter(t => t.type === "outcome").reduce((acc, t) => acc + t.amount, 0);
  const balance = totalIncome - totalOutcome;

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-emerald-500 mb-4">
          <Wallet size={32} />
          <span className="font-black tracking-widest uppercase text-sm">Gestão de Capital</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Fluxo de <br /> <span className="text-emerald-500">Caixa.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2rem]">
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">Saldo Total</p>
          <p className={`text-4xl font-black italic ${balance >= 0 ? "text-white" : "text-red-500"}`}>
            R$ {balance.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2rem]">
          <div className="flex items-center gap-2 text-emerald-500 mb-2 font-black text-[10px] uppercase">
            <ArrowUpCircle size={14} /> Entradas
          </div>
          <p className="text-4xl font-black italic text-emerald-500">
            R$ {totalIncome.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-8 rounded-[2rem]">
          <div className="flex items-center gap-2 text-red-500 mb-2 font-black text-[10px] uppercase">
            <ArrowDownCircle size={14} /> Saídas
          </div>
          <p className="text-4xl font-black italic text-red-500">
            R$ {totalOutcome.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <form onSubmit={handleAdd} className="bg-zinc-900 border border-emerald-500/20 p-8 rounded-[2.5rem] space-y-4">
            <h2 className="text-xl font-black uppercase italic mb-6">Nova <span className="text-emerald-500">Transação</span></h2>
            <input required placeholder="Descrição (Ex: Corte, Aluguel...)" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all" />
            <input required type="number" step="0.01" placeholder="Valor R$" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all" />
            <div className="flex gap-2 p-1 bg-black rounded-2xl border border-white/5">
              <button type="button" onClick={() => setType("income")} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase transition-all ${type === "income" ? "bg-emerald-500 text-black" : "text-zinc-500 hover:text-white"}`}>Entrada</button>
              <button type="button" onClick={() => setType("outcome")} className={`flex-1 py-3 rounded-xl font-black text-[10px] uppercase transition-all ${type === "outcome" ? "bg-red-500 text-black" : "text-zinc-500 hover:text-white"}`}>Saída</button>
            </div>
            <button type="submit" className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-emerald-500 transition-all uppercase tracking-widest text-[10px] mt-4">
              <Plus size={18} /> Registrar
            </button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="space-y-4">
            {transactions.map((t) => (
              <div key={t.id} className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl flex items-center justify-between group hover:bg-zinc-900 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${t.type === "income" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`}>
                    {t.type === "income" ? <ArrowUpCircle size={24} /> : <ArrowDownCircle size={24} />}
                  </div>
                  <div>
                    <p className="font-bold">{t.description}</p>
                    <p className="text-zinc-500 text-[10px] uppercase font-bold">{new Date(t.created_at).toLocaleDateString("pt-BR")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <p className={`font-black italic ${t.type === "income" ? "text-emerald-500" : "text-red-500"}`}>
                    {t.type === "income" ? "+" : "-"} R$ {t.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}