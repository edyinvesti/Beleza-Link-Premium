import { ArrowRight, Clock, Hash, Search } from "lucide-react";
import BackHeader from "../components/BackHeader";

export default function Blog() {
    const articles = [
        {
            category: "TENDÊNCIA",
            title: "Loiro Manteiga: A Cor do Verão 2026",
            excerpt: "Descubra a técnica que está dominando os salões de elite e como aplicá-la com perfeição.",
            image: "https://images.unsplash.com/photo-1562025281-34443b31e719?q=80&w=1974&auto=format&fit=crop",
            time: "5 min"
        },
        {
            category: "GESTÃO",
            title: "Como Fidelizar Clientes",
            excerpt: "Estratégias digitais para transformar clientes casuais em fãs da sua marca.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop",
            time: "8 min"
        },
        {
            category: "MARKETING",
            title: "Instagram para Beauty Artists",
            excerpt: "O guia definitivo para crescer seu perfil e atrair agendamentos automáticos.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
            time: "12 min"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white pb-20 overflow-x-hidden">
            <BackHeader title="Beleza News" />
            
            <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">Beleza <span className="text-[#F97316]">News</span></h1>
                        <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase">Conteúdo estratégico</p>
                    </div>
                </div>

                <div className="relative h-[400px] md:h-[500px] rounded-[30px] overflow-hidden border border-white/5">
                    <img 
                        src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2080&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Destaque"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                        <div className="bg-[#F97316] text-black text-[10px] font-black uppercase px-3 py-1 rounded-full w-fit mb-4">Destaque</div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">O Futuro dos Salões</h2>
                        <div className="flex items-center gap-6 text-zinc-300 text-xs font-bold uppercase">
                            <span className="flex items-center gap-2"><Clock size={14} className="text-[#F97316]" /> 15 min</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((art, i) => (
                        <div key={i} className="group">
                            <div className="h-64 rounded-[25px] overflow-hidden mb-6 border border-white/5 relative">
                                <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={art.title} />
                                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-[9px] font-black uppercase text-[#F97316]">{art.category}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-black uppercase mb-3">{art.title}</h3>
                            <p className="text-zinc-500 text-xs mb-4 line-clamp-2">{art.excerpt}</p>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[#F97316]">
                                Ler Agora <ArrowRight size={12} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
