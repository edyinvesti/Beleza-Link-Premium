import { PlayCircle, Clock, Star, Share2, MoreVertical, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Cursos() {
  const aulas = [
    { 
      id: 1, 
      instrutor: "Mestre dos Cortes", 
      tempo: "Nova Aula", 
      titulo: "Técnica de Camadas Invisíveis",
      desc: "Aprenda a criar volume sem marcar o corte. Técnica exclusiva para cabelos médios.", 
      duracao: "25 min", 
      alunos: 124 
    },
    { 
      id: 2, 
      instrutor: "Especialista em Cor", 
      tempo: "Atualizado", 
      titulo: "Neutralização de Tons Acobreados",
      desc: "Como chegar ao platinado perfeito utilizando a estrela de oswald de forma prática.", 
      duracao: "40 min", 
      alunos: 89 
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-12 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-[#F97316]/20">
            <Sparkles size={12}/> Conteúdo Premium
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
            Cursos <br/><span className="text-[#F97316]">Beleza Link</span>
          </h2>
        </header>

        <div className="space-y-6">
          {aulas.map((a) => (
            <motion.div 
              key={a.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/40 border border-white/5 p-8 rounded-[40px] hover:border-[#F97316]/20 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                    <PlayCircle className="text-[#F97316]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] text-zinc-500 uppercase tracking-widest">{a.instrutor}</h4>
                    <p className="text-[#F97316] text-[10px] font-bold italic">{a.tempo}</p>
                  </div>
                </div>
                <button className="text-zinc-700 hover:text-white transition-colors"><MoreVertical size={20}/></button>
              </div>
              
              <h3 className="text-xl font-black uppercase italic mb-2">{a.titulo}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">{a.desc}</p>
              
              <div className="flex gap-8 border-t border-white/5 pt-6">
                <button className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <Clock size={18} className="text-[#F97316]"/> {a.duracao}
                </button>
                <button className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">
                  <Star size={18} className="text-[#F97316]"/> {a.alunos} Alunos
                </button>
                <button className="ml-auto bg-[#F97316] text-black px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest active:scale-95">
                  Assistir
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}