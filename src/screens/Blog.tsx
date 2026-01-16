import { Clock } from "lucide-react";
import BackHeader from "../components/BackHeader";

export default function Blog() {
    const articles = [
        { category: "TENDÊNCIA", title: "Loiro Manteiga: A Cor do Verão 2026", excerpt: "A técnica que está dominando os salões de elite.", image: "https://images.unsplash.com/photo-1562025281-34443b31e719?q=80&w=1974&auto=format&fit=crop", time: "5 min" },
        { category: "GESTÃO", title: "Como Fidelizar Clientes", excerpt: "Estratégias para transformar clientes em fãs.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop", time: "8 min" },
        { category: "MARKETING", title: "Instagram para Beauty Artists", excerpt: "O guia para atrair agendamentos automáticos.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", time: "12 min" }
    ];
    return (
        <div className="min-h-screen bg-black text-white pb-20">
            <BackHeader title="Beleza News" />
            <div className="max-w-7xl mx-auto p-6 space-y-12">
                <h1 className="text-5xl font-black uppercase tracking-tighter">Beleza <span className="text-[#F97316]">News</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((art, i) => (
                        <div key={i} className="group border border-white/5 rounded-[30px] overflow-hidden bg-zinc-900/30 p-4">
                            <img src={art.image} className="h-48 w-full object-cover rounded-[20px] mb-4" />
                            <span className="text-[10px] font-bold text-[#F97316]">{art.category}</span>
                            <h3 className="text-xl font-bold uppercase mt-2">{art.title}</h3>
                            <div className="flex items-center gap-2 text-zinc-500 text-[10px] mt-4 uppercase"><Clock size={12}/> {art.time}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
