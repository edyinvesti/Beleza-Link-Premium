import { useState, useEffect, useRef } from "react";
import { Play, Users, MessageCircle, Share2, Send, X, Copy, MessageSquare, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msg, setMsg] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [espectadores, setEspectadores] = useState(1240);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => { setCopied(false); setIsSharing(false); }, 1500);
  };

  const shareWA = () => {
    window.open(`https://api.whatsapp.com/send?text=Acesse agora: ${window.location.href}`, '_blank');
    setIsSharing(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans selection:bg-[#F97316]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-3 space-y-8">
          {/* Header Minimalista */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-600">Live Streaming</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] italic">
                Masterclass <br/> <span className="text-[#F97316]">Penteados Noiva</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-md border border-white/5 p-4 rounded-3xl">
              <Users size={18} className="text-[#F97316]" />
              <span className="text-sm font-black tabular-nums">{espectadores.toLocaleString()}</span>
            </div>
          </header>

          {/* Player com bordas infinitas */}
          <div className="aspect-video bg-zinc-900 rounded-[50px] border border-white/5 relative overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-2 shadow-2xl">
                   <Play size={32} fill="black" className="text-black" />
                </motion.button>
             </div>
          </div>

          {/* Barra de Ações de Luxo */}
          <div className="flex items-center justify-between bg-zinc-900/30 backdrop-blur-xl p-6 rounded-[35px] border border-white/5">
             <p className="hidden md:block text-zinc-500 text-xs font-medium tracking-wide">Técnicas de fixação e texturização avançada para 12 horas.</p>
             
             <div className="relative">
                <AnimatePresence mode="wait">
                  {!isSharing ? (
                    <motion.button 
                      key="btn-share"
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setIsSharing(true)}
                      className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-[22px] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#F97316] hover:text-white transition-all shadow-lg"
                    >
                      <Share2 size={16}/> Compartilhar
                    </motion.button>
                  ) : (
                    <motion.div 
                      key="share-actions"
                      initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} exit={{ width: 0, opacity: 0 }}
                      className="flex items-center gap-2 bg-zinc-800 p-2 rounded-[24px] border border-white/10 overflow-hidden"
                    >
                       <button onClick={shareWA} className="p-4 hover:bg-[#25D366] rounded-xl transition-all group">
                          <MessageSquare size={18} className="group-hover:text-white" />
                       </button>
                       <button onClick={handleCopy} className="p-4 hover:bg-[#F97316] rounded-xl transition-all group">
                          {copied ? <Check size={18} className="text-white" /> : <Copy size={18} className="group-hover:text-white" />}
                       </button>
                       <button onClick={() => setIsSharing(false)} className="p-4 hover:bg-white/10 rounded-xl transition-all text-zinc-500">
                          <X size={18} />
                       </button>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </div>

        {/* Chat Minimal */}
        <div className="lg:col-span-1 h-[600px] md:h-auto bg-zinc-900/20 border border-white/5 rounded-[50px] p-8 flex flex-col">
           <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Interaction</h3>
           </div>
           <div className="flex-1 overflow-y-auto space-y-6 text-[13px] text-zinc-300">
              <p><span className="text-[#F97316] font-bold uppercase text-[10px]">Ana:</span> Maravilhoso!</p>
              <p><span className="text-zinc-500 font-bold uppercase text-[10px]">Expert:</span> Qual o spray?</p>
           </div>
           <div className="mt-6 pt-6 border-t border-white/5">
              <input placeholder="Enviar..." className="w-full bg-transparent border-none text-xs outline-none py-2" />
           </div>
        </div>
      </div>
    </div>
  );
}