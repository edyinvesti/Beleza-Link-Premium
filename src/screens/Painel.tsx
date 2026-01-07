import { Wallet, ArrowUpRight, History, CreditCard, Gift, Zap, PlayCircle, TrendingUp, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Painel() {
    const navigate = useNavigate();

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto pb-32 animate-fadeIn">
            {/* Animated Background Gradient Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* HEADER FINANCEIRO */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <h1 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                        Conta Digital Elite
                    </h1>
                    <p className="text-3xl md:text-4xl font-black italic text-white uppercase tracking-tighter">
                        Bem-vindo, <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Parceiro</span>
                    </p>
                </div>
                <div className="group bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 border border-white/5 p-6 rounded-3xl backdrop-blur-md flex items-center gap-4 shadow-2xl hover:border-amber-500/30 hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                        <Wallet className="text-amber-500" size={24} />
                    </div>
                    <div>
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Saldo Disponível</p>
                        <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent italic">
                            R$ 1.250,00
                        </p>
                    </div>
                </div>
            </header>

            {/* BOTÕES DE ATALHO ESTILO BANCO */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <button
                    onClick={() => navigate("/academy")}
                    className="group bg-gradient-to-br from-amber-500 to-orange-500 text-black p-6 rounded-[2rem] flex flex-col items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all duration-300 active:scale-95 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/40 hover:scale-105"
                >
                    <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                    Meus Treinos
                </button>
                <button className="group bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 text-white p-6 rounded-[2rem] flex flex-col items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all duration-300 active:scale-95 border border-white/5 hover:border-emerald-500/30 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/10">
                    <ArrowUpRight size={20} className="group-hover:scale-110 transition-transform" />
                    Sacar PIX
                </button>
                <button className="group bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 text-white p-6 rounded-[2rem] flex flex-col items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all duration-300 active:scale-95 border border-white/5 hover:border-blue-500/30 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10">
                    <History size={20} className="group-hover:scale-110 transition-transform" />
                    Extrato
                </button>
                <button className="group bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 text-white p-6 rounded-[2rem] flex flex-col items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all duration-300 active:scale-95 border border-white/5 hover:border-purple-500/30 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
                    <CreditCard size={20} className="group-hover:scale-110 transition-transform" />
                    Cartão
                </button>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="group bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-emerald-500/20 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <TrendingUp className="text-emerald-400" size={20} />
                        </div>
                        <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Crescimento</p>
                    </div>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                        +24%
                    </h3>
                    <p className="text-emerald-400/60 text-xs mt-2">Este mês</p>
                </div>

                <div className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-500/20 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <Users className="text-blue-400" size={20} />
                        </div>
                        <p className="text-blue-400 font-bold text-xs uppercase tracking-wider">Clientes Ativos</p>
                    </div>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                        127
                    </h3>
                    <p className="text-blue-400/60 text-xs mt-2">Total na base</p>
                </div>

                <div className="group bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 p-6 rounded-3xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-violet-500/20 p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <Star className="text-violet-400" size={20} />
                        </div>
                        <p className="text-violet-400 font-bold text-xs uppercase tracking-wider">Avaliação</p>
                    </div>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-violet-300 to-violet-500 bg-clip-text text-transparent">
                        4.9★
                    </h3>
                    <p className="text-violet-400/60 text-xs mt-2">Média geral</p>
                </div>
            </div>

            {/* CARD BLACK */}
            <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-500">
                {/* Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Zap size={180} className="text-amber-500" />
                </div>

                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-amber-500/10 p-2 rounded-lg">
                            <Zap className="text-amber-500" size={16} />
                        </div>
                        <p className="text-zinc-400 text-xs font-bold italic uppercase tracking-[0.2em]">
                            Beleza Link Black Card
                        </p>
                    </div>

                    <p className="text-xl md:text-2xl font-medium tracking-[0.3em] text-white mb-12 group-hover:text-amber-100 transition-colors">
                        **** **** **** 2026
                    </p>

                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-zinc-500 text-[10px] uppercase font-black mb-1">Status do Limite</p>
                            <p className="text-emerald-400 font-bold tracking-widest text-lg flex items-center gap-2">
                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                                LIBERADO
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-zinc-500 text-[10px] uppercase font-black mb-1">Membro desde</p>
                            <p className="text-white font-bold tracking-widest text-lg">01/26</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    onClick={() => navigate("/clientes")}
                    className="group bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/5 p-6 rounded-3xl hover:border-amber-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-amber-500/10 p-3 rounded-xl group-hover:rotate-12 transition-transform">
                            <Users className="text-amber-500" size={24} />
                        </div>
                        <div className="text-left">
                            <p className="font-black text-white">Gerenciar Clientes</p>
                            <p className="text-zinc-500 text-xs">Ver todos os cadastros</p>
                        </div>
                    </div>
                    <ArrowUpRight className="text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>

                <button
                    onClick={() => navigate("/crm")}
                    className="group bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-white/5 p-6 rounded-3xl hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-500/10 p-3 rounded-xl group-hover:rotate-12 transition-transform">
                            <Star className="text-purple-500" size={24} />
                        </div>
                        <div className="text-left">
                            <p className="font-black text-white">CRM Estratégico</p>
                            <p className="text-zinc-500 text-xs">Clientes VIP e campanhas</p>
                        </div>
                    </div>
                    <ArrowUpRight className="text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
            </div>
        </div>
    );
}