import { useNavigate } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight, TrendingUp, Users } from 'lucide-react';

export default function Blog() {
    const navigate = useNavigate();
    const posts = [
        { id: 1, title: "5 Tendências de Cortes para 2026", excerpt: "Descubra o que vai estar em alta nos salões de luxo este ano...", date: "06 Jan, 2026", category: "Tendências", icon: TrendingUp },
        { id: 2, title: "Como Dobrar seu Faturamento com a Agenda", excerpt: "Estratégias simples de agendamento que aumentam a retenção de clientes.", date: "04 Jan, 2026", category: "Gestão", icon: Users }
    ];

    return (
        <div className="p-6 md:p-12 text-white min-h-screen pb-32 animate-fadeIn">
            <header className="mb-12 text-left">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 p-3 rounded-2xl">
                        <Newspaper className="text-amber-500" size={32} />
                    </div>
                    <span className="font-black tracking-widest uppercase text-sm bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Beleza Link Blog</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase leading-none">
                    Conteúdo <br />
                    <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">Exclusivo.</span>
                </h1>
                <p className="text-zinc-500 mt-4 text-sm">Aprenda com os melhores profissionais do mercado</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                    <div
                        key={post.id}
                        onClick={() => navigate(`/post/${post.id}`)}
                        className="group bg-gradient-to-br from-zinc-900/80 to-zinc-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:border-amber-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-amber-500/10"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-2">
                                <div className="bg-amber-500/10 p-2 rounded-xl">
                                    <post.icon className="text-amber-500" size={16} />
                                </div>
                                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">{post.category}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-500 text-xs">
                                <Calendar size={14} />
                                {post.date}
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{post.title}</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8">{post.excerpt}</p>
                        <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                            Ler artigo completo
                            <ArrowRight size={16} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Featured Section */}
            <div className="mt-12 bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 p-8 rounded-[2rem] backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-500/20 p-2 rounded-xl">
                        <TrendingUp className="text-amber-400" size={20} />
                    </div>
                    <h3 className="text-xl font-black uppercase">Mais Lidos da Semana</h3>
                </div>
                <p className="text-zinc-400 text-sm">Confira os artigos que estão fazendo sucesso entre os profissionais</p>
            </div>
        </div>
    );
}

