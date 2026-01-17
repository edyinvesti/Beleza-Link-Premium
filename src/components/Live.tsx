import { useState } from "react";
import { Play, Users, MessageCircle, Share2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Live() {
  const [msg, setMsg] = useState("");
  
  const proximasLives = [
    { id: 1, titulo: "Colorimetria Avançada", data: "Amanhã, 20h", icon: <Zap size={14}/> },
    { id: 2, titulo: "Gestão de Salão", data: "Quinta, 19h", icon: <ShieldCheck size={14}/> }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* COLUNA DO VÍDEO (3/4 da tela) */}
        <div className="lg:col-span-3 space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span> AO VIVO AGORA
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
                Masterclass: <span className="text-[#F97316]">Penteados de Noiva</span>
              </h2>
            </div>
            <div className="flex gap-4">
              <div className="bg-zinc-900 border border-white/5 px-4 py-2 rounded-2xl flex items-center gap-2">
                <Users size={18} className="text-[#F97316]" />
                <span className="font-black text-sm">1.2k</span>
              </div>
            </div>
          </header>

          {/* PLAYER (Simulação) */}
          <div className="aspect-video bg-zinc-900 rounded-[40px] border border-white/10 relative overflow-hidden group shadow-2xl shadow-[#F97316]/5">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-[#F97316] rounded-full flex items-center justify-center pl-1 shadow-2xl shadow-[#F97316]/40"
              >
                <Play size={32} fill="black" className="text-black" />
              </motion.button>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-[#F97316]"></div>
               </div>
            </div>
          </div>

          {/* DESCRIÇÃO E AÇÕES */}
          <div className="flex justify-between items-center bg-zinc-900/40 p-6 rounded-[30px] border border-white/5">
             <p className="text-zinc-400 text-sm max-w-xl">
               Nesta aula ao vivo, o mestre demonstra as técnicas de fixação e texturização 
               que duram até 12 horas. Prepare suas dúvidas para o chat lateral!
             </p>
             <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest">
                <Share2 size={16}/> Compartilhar
             </button>
          </div>
        </div>

        {/* COLUNA DO CHAT (1/4 da tela) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-[40px] flex flex-col overflow-hidden h-[500px] lg:h-auto">
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <h3 className="font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
                <MessageCircle size={16} className="text-[#F97316]"/> Chat da Live
              </h3>
            </div>
            
            <div className="flex-1 p-6 overflow-y-auto space-y-4 text-sm scrollbar-hide">
              <p><span className="text-[#F97316] font-bold uppercase text-[10px]">Ana Silva:</span> Top demais essa técnica!</p>
              <p><span className="text-zinc-500 font-bold uppercase text-[10px]">Bruno Hair:</span> Qual spray você usou?</p>
              <p><span className="text-[#F97316] font-bold uppercase text-[10px]">Carla Mendes:</span> Cheguei agora, vai ficar gravado?</p>
            </div>

            <div className="p-4 bg-black/40">
              <div className="relative">
                <input 
                  type="text" 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Envie sua mensagem..."
                  className="w-full bg-zinc-800 border-none rounded-2xl py-4 px-5 text-xs outline-none focus:ring-1 focus:ring-[#F97316]/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* PRÓXIMAS LIVES */}
          <div className="bg-[#F97316] p-6 rounded-[40px] text-black">
            <h4 className="font-black text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2">
               Agendadas
            </h4>
            <div className="space-y-4">
              {proximasLives.map(l => (
                <div key={l.id} className="bg-black/10 p-4 rounded-2xl border border-black/5">
                   <p className="font-black text-sm uppercase leading-none mb-1">{l.titulo}</p>
                   <span className="text-[9px] font-bold opacity-70">{l.data}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}