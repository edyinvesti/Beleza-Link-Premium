import { MessageSquare, Heart, Share2, MoreVertical, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Comunidade() {
  const posts = [
    { id: 1, user: "Mestre dos Cortes", time: "2h atrás", content: "Qual a melhor técnica para finalização em cabelos cacheados no verão?", likes: 45, comments: 12 },
    { id: 2, user: "Nail Designer Pro", time: "5h atrás", content: "A nova coleção de esmaltes em gel da marca X está incrível! Alguém já testou?", likes: 89, comments: 24 }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-12 font-sans">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 text-[#F97316] px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 border border-[#F97316]/20">
            <Sparkles size={12}/> Espaço Exclusivo
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">Círculo <br/><span className="text-[#F97316]">Beleza Link</span></h2>
        </header>

        <div className="bg-zinc-900/60 border border-white/10 p-6 rounded-[35px] mb-12 flex flex-col gap-4">
          <textarea placeholder="O que você está criando hoje?" className="w-full bg-transparent border-none text-lg font-medium outline-none resize-none h-24 placeholder:text-zinc-700" />
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            <div className="flex gap-4 text-zinc-500">
               {/* Espaço para ícones de foto/video */}
            </div>
            <button className="bg-white text-black px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#F97316] transition-colors">Publicar</button>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 p-8 rounded-[40px]">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F97316] to-orange-300" />
                  <div>
                    <h4 className="font-black text-[12px] uppercase tracking-wide">{p.user}</h4>
                    <p className="text-zinc-600 text-[10px] font-bold italic">{p.time}</p>
                  </div>
                </div>
                <button className="text-zinc-700"><MoreVertical size={20}/></button>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-8">{p.content}</p>
              <div className="flex gap-8 border-t border-white/5 pt-6">
                <button className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-[#F97316] transition-colors"><Heart size={18}/> {p.likes}</button>
                <button className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors"><MessageSquare size={18}/> {p.comments}</button>
                <button className="ml-auto text-zinc-700 hover:text-white"><Share2 size={18}/></button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}