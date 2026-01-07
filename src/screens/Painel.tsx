import {
    Wallet,
    ArrowUpRight,
    Zap,
    CreditCard,
    Gift,
    History
} from "lucide-react";

export default function Painel() {
    const stats = [
        { n: "Sacar PIX", i: ArrowUpRight, c: "bg-amber-500 text-black" },
        { n: "Extrato", i: History, c: "bg-zinc-900 text-white" },
        { n: "Cartão", i: CreditCard, c: "bg-zinc-900 text-white" },
        { n: "Indicar", i: Gift, c: "bg-zinc-900 text-white" }
    ];

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto animate-in fade-in duration-700">
            {/* HEADER FINANCEIRO */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-2">Conta Digital Elite</h1>
                    <p className="text-3xl font-black italic text-white uppercase tracking-tighter">
                        Bem-vindo, <span className="text-amber-500">Parceiro</span>
                    </p>
                </div>
                <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-3xl backdrop-blur-md flex items-center gap-4 shadow-2xl">
                    <div className="bg-amber-500/10 p-3 rounded-2xl">
                        <Wallet className="text-amber-500" size={24} />
                    </div>
                    <div>
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Saldo Disponível</p>
                        <p className="text-2xl font-black text-white italic">R$ 1.250,00</p>
                    </div>
                </div>
            </header>

            {/* BOTÕES DE ATALHO ESTILO BANCO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {stats.map((item, idx) => (
                    <button
                        key={idx}
                        className={`${item.c} p-6 rounded-[2rem] flex flex-col items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-transform active:scale-95 shadow-xl`}
                    >
                        <item.i size={20} />
                        {item.n}
                    </button>
                ))}
            </div>

            {/* CARD DE CARTÃO VIRTUAL */}
            <div className="bg-gradient-to-br from-zinc-800 to-black p-8 rounded-[2.5rem] border border-white/10 mb-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={120} className="text-amber-500" />
                </div>
                <div className="relative z-10">
                    <p className="text-zinc-400 text-xs font-bold mb-8 italic uppercase tracking-[0.2em]">Beleza Link Black Card</p>
                    <p className="text-xl md:text-2xl font-medium tracking-[0.3em] text-white mb-10">**** **** **** 2026</p>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-zinc-500 text-[10px] uppercase font-black">Status do Limite</p>
                            <p className="text-white font-bold tracking-widest">LIBERADO</p>
                        </div>
                        <div className="text-right">
                            <p className="text-zinc-500 text-[10px] uppercase font-black">Membro desde</p>
                            <p className="text-white font-bold tracking-widest">01/26</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}