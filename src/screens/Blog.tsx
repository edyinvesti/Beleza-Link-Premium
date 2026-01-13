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

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">Beleza <span className="text-[#F97316]">News</span></h1>
                        <p className="text-zinc-500 text-sm font-bold tracking-widest uppercase">Conteúdo estratégico para profissionais</p>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="BUSCAR ARTIGO..." className="bg-zinc-900 border border-white/10 rounded-full py-3 px-6 pl-12 text-xs font-black uppercase tracking-widest w-full md:w-64 focus:border-[#F97316] outline-none transition-colors" />
                        <Search size={16} className="absolute left-4 top-3 text-zinc-500" />
                    </div>
                </div>

                {/* Destaque Principal */}
                <div className="relative h-[400px] md:h-[500px] rounded-[30px] overflow-hidden group cursor-pointer border border-white/5">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                        <div className="bg-[#F97316] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">Destaque da Semana</div>
                        <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">O Futuro dos Salões: <br />Experiência vs Serviço</h2>
                        <div className="flex items-center gap-6 text-zinc-300 text-xs font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Clock size={14} className="text-[#F97316]" /> 15 min leitura</span>
                            <span className="flex items-center gap-1 hover:text-white transition-colors">Ler Completo <ArrowRight size={14} /></span>
                        </div>
                    </div>
                </div>

                {/* Grid de Artigos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((art, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="h-64 rounded-[25px] overflow-hidden mb-6 border border-white/5 relative">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${art.image})` }}></div>
                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-[9px] font-black uppercase text-[#F97316] tracking-widest">{art.category}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-[#F97316] transition-colors">{art.title}</h3>
                            <p className="text-zinc-500 text-xs leading-relaxed mb-4 line-clamp-2">{art.excerpt}</p>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#F97316]">
                                Ler Agora <ArrowRight size={12} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[30px] p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5"><Hash size={200} /></div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">Receba Tech & Beauty</h3>
                    <p className="text-zinc-500 text-xs max-w-md mx-auto mb-8 relative z-10">Inscreva-se para receber as atualizações semanais sobre tecnologia aplicada à beleza.</p>
                    <div className="flex justify-center relative z-10">
                        <input type="email" placeholder="SEU E-MAIL" className="bg-black border border-white/10 rounded-l-xl py-3 px-6 text-xs font-black uppercase tracking-widest w-64 focus:border-[#F97316] outline-none transition-colors" />
                        <button className="bg-[#F97316] text-black font-black uppercase tracking-widest text-xs px-6 rounded-r-xl hover:bg-white transition-colors">Assinar</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
