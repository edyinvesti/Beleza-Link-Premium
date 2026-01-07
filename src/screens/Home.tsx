import { useNavigate } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-amber-500">
            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />

            <nav className="relative p-6 md:p-10 flex justify-between items-center max-w-7xl mx-auto z-50">
                <div className="flex items-center gap-4">
                    <span className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">
                        BELEZA <span className="text-amber-500">LINK</span>
                    </span>
                    <div className="flex items-center gap-2 bg-red-600/10 border border-red-600/30 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">LIVE</span>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/painel")}
                    className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-amber-500 transition-all shadow-xl"
                >
                    ACESSAR PAINEL
                </button>
            </nav>

            <main className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-40 text-center z-10">
                <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-white/10 px-6 py-2.5 rounded-full mb-10">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">Plataforma Expert 2026</span>
                </div>

                <h1 className="text-5xl md:text-9xl font-black italic tracking-tighter uppercase leading-[0.85] mb-10">
                    TRANSFORME SUA PAIXÃO <br />
                    <span className="text-amber-500 bg-gradient-to-b from-amber-200 to-amber-700 bg-clip-text text-transparent">
                        POR BELEZA EM RENDA.
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-2xl mb-14 leading-relaxed font-medium">
                    Ganhe <span className="text-white font-bold">20% de comissão</span> em cada venda. Faça upload dos seus vídeos e receba via <span className="text-amber-500 font-bold italic">PIX</span>.
                </p>

                <button
                    onClick={() => navigate("/painel")}
                    className="group bg-white text-black px-12 py-7 rounded-[2.5rem] font-black uppercase text-md flex items-center gap-6 mx-auto hover:bg-amber-500 transition-all shadow-2xl active:scale-95"
                >
                    Começar Agora <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </main>

            <footer className="fixed bottom-0 w-full p-8 border-t border-white/5 bg-black/60 backdrop-blur-3xl z-50 text-[10px] font-black uppercase tracking-[0.4em] text-center text-zinc-500">
                Beleza Link System © 2026
            </footer>
        </div>
    );
}