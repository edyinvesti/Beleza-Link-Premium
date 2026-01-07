import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
    const navigate = useNavigate();
    const posts = [
        { id: 1, title: "5 Tendências de Cortes para 2026", excerpt: "Descubra o que vai estar em alta nos salões de luxo este ano...", date: "06 Jan, 2026", category: "Tendências" },
        { id: 2, title: "Como Dobrar seu Faturamento com a Agenda", excerpt: "Estratégias simples de agendamento que aumentam a retenção de clientes.", date: "04 Jan, 2026", category: "Gestão" }
    ];

    return (
        <div className="p-6 md:p-12 text-white min-h-screen pb-32">
            <header className="mb-12 text-left">
                <div className="flex items-center gap-3 text-amber-500 mb-4">
                    <Newspaper size={32} />
                    <span className="font-black tracking-widest uppercase text-sm">Beleza Link Blog</span>
                </div>
                <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">Conteúdo <br /><span className="text-amber-500">Exclusivo.</span></h1>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map(post => (
                    <div key={post.id} onClick={() => navigate(`/post/${post.id}`)} className="group bg-zinc-900/50 border border-white/5 p-8 rounded-[2rem] hover:bg-zinc-900 transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <span className="bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">{post.category}</span>
                            <div className="flex items-center gap-2 text-zinc-500 text-xs"><Calendar size={14} />{post.date}</div>
                        </div>
                        <h2 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{post.title}</h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8">{post.excerpt}</p>
                        <button className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">Ler artigo completo <ArrowRight size={16} className="text-amber-500" /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Blog;
