import { Play, BookOpen, Award, Users, Scissors, Star } from "lucide-react";

export default function Academy() {
  const categories = [
    { title: "Corte & Estilo", icon: Scissors, color: "text-amber-500", desc: "Técnicas avançadas" },
    { title: "Visagismo", icon: Star, color: "text-amber-500", desc: "Harmonia facial" },
    { title: "Masterclass", icon: Play, color: "text-amber-500", desc: "Aulas ao vivo" },
    { title: "Gestão", icon: BookOpen, color: "text-amber-500", desc: "Marketing e Vendas" },
    { title: "Certificados", icon: Award, color: "text-amber-500", desc: "Sua evolução" },
    { title: "Comunidade", icon: Users, color: "text-amber-500", desc: "Networking" }
  ];

  return (
    <div className="p-6 md:p-12 text-white min-h-screen bg-[#050505] pb-24">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-2">
          ACADEMY
        </h1>
        <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">Treinamento de Elite</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((item, idx) => (
          <div key={idx} className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] flex flex-col items-center text-center gap-4 hover:border-amber-500/50 transition-all cursor-pointer group shadow-xl">
            <div className="bg-zinc-800/50 p-4 rounded-2xl group-hover:scale-110 transition-transform">
              <item.icon className={item.color} size={28} />
            </div>
            <div>
              <h3 className="font-black uppercase text-xs tracking-widest mb-1">{item.title}</h3>
              <p className="text-[9px] text-zinc-500 font-bold uppercase">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}