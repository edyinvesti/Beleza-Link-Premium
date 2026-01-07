import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Zap, Crown } from "lucide-react";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#1a0a0a] text-white overflow-hidden">
            {/* Animated Background Gradient Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center">
                {/* Premium Badge */}
                <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 px-6 py-3 rounded-full backdrop-blur-xl animate-fadeIn">
                    <Crown className="text-amber-400" size={20} />
                    <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Premium Experience</span>
                    <Sparkles className="text-amber-400" size={16} />
                </div>

                {/* Main Title */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter uppercase mb-4 animate-fadeIn">
                    <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                        BELEZA
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                        LINK
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-zinc-400 tracking-[0.3em] uppercase text-xs md:text-sm mb-4 font-bold animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                    Premium Network Explorer
                </p>

                {/* Description */}
                <p className="text-zinc-500 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    Conecte-se com os melhores profissionais de beleza, gerencie seu negócio e expanda sua rede de forma inteligente
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={() => navigate("/painel")}
                        className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-black px-12 py-5 rounded-2xl font-black uppercase hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 active:scale-95 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3 justify-center">
                            Entrar no Sistema
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>

                    <button
                        onClick={() => navigate("/academy")}
                        className="group bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 flex items-center gap-3 justify-center"
                    >
                        <Zap size={20} />
                        Explorar Academy
                    </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 hover:scale-105">
                        <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                            <Sparkles className="text-amber-400" size={24} />
                        </div>
                        <h3 className="font-black text-lg mb-2">Gestão Completa</h3>
                        <p className="text-zinc-400 text-sm">Controle total do seu salão em uma única plataforma</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                            <Crown className="text-purple-400" size={24} />
                        </div>
                        <h3 className="font-black text-lg mb-2">Networking Premium</h3>
                        <p className="text-zinc-400 text-sm">Conecte-se com os melhores profissionais</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                            <Zap className="text-emerald-400" size={24} />
                        </div>
                        <h3 className="font-black text-lg mb-2">Academy Exclusiva</h3>
                        <p className="text-zinc-400 text-sm">Aprenda com os melhores do mercado</p>
                    </div>
                </div>
            </div>
        </div>
    );
}