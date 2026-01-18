import { useState, useEffect, useRef } from "react";
import { Users, Share2, X, Copy, MessageSquare, Check, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [chat, setChat] = useState([
    { id: 1, user: "Studio Hair", text: "Técnica impecável!", color: "#F97316" },
    { id: 2, user: "Duda Estética", text: "Beleza Link mudando o jogo.", color: "#71717a" }
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nomes = ["Bia Cabelos", "Marcos Barber", "Luxo Salon", "Renata Expert"];
    const textos = ["Que visual incrível!", "Isso é luxo puro!", "Amei o brilho!", "Plataforma nota 10."];
    const interval = setInterval(() => {
      const novaMsg = {
        id: Date.now(),
        user: nomes[Math.floor(Math.random() * nomes.length)],
        text: textos[Math.floor(Math.random() * textos.length)],
        color: Math.random() > 0.5 ? "#F97316" : "#71717a"
      };
      setChat(prev => [...prev.slice(-8), novaMsg]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => { setCopied(false); setIsSharing(false); }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-600">Ao Vivo</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] italic">
                Masterclass <br/> <span className="text-[#F97316]">Beleza de Elite</span>
              </h2>
            </div>
          </header>

          <div className="aspect-video bg-black rounded-[50px] border border-white/5 relative overflow-hidden shadow-2xl">
             {/* Player Vimeo: Melhor para Mobile e Som */}
             <iframe 
               src="https://player.vimeo.com/video/494440494?autoplay=1&loop=1&muted=0&background=0" 
               className="absolute inset-0 w-full h-full"
               frameBorder="0" 
               allow="autoplay; fullscreen; picture-in-picture" 
               allowFullScreen>
             </iframe>
             
             {/* Dica de áudio para o usuário no celular */}
             <div className="absolute bottom-4 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
                <span className="text-[10px] font-bold text-white flex items-center gap-2">
                  <Volume2 size={12} className="text-[#F97316]" /> Use os botões laterais do celular para o som
                </span>
             </div>
          </div>

          <div className="flex items-center justify-between bg-zinc-900/30 backdrop-blur-xl p-6 rounded-[35px] border border-white/5">
             <p className="hidden md:block text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em]">Workshop Profissional - Beleza Link</p>
             
             <div className="relative">
                <AnimatePresence mode="wait">
                  {!isSharing ? (
                    <motion.button 
                      key="btn-sh" onClick={() => setIsSharing(true)}
                      className="bg-white text-black px-10 py-5 rounded-[22px] font-black text-[10px] uppercase tracking-widest hover:bg-[#F97316] hover:text-white transition-all shadow-lg"
                    >
                      <Share2 size={16} className="inline mr-2"/> Compartilhar
                    </motion.button>
                  ) : (
                    <motion.div key="menu-sh" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 bg-zinc-800 p-2 rounded-[24px] border border-white/10">
                       <button onClick={() => window.open(`https://wa.me/?text=${window.location.href}`)} className="p-4 hover:bg-[#25D366] rounded-xl"><MessageSquare size={18} /></button>
                       <button onClick={handleCopy} className="p-4 hover:bg-[#F97316] rounded-xl">{copied ? <Check size={18} /> : <Copy size={18} />}</button>
                       <button onClick={() => setIsSharing(false)} className="p-4 text-zinc-500 hover:text-white"><X size={18} /></button>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1 h-[600px] flex flex-col bg-zinc-900/20 border border-white/5 rounded-[50px] p-8 shadow-2xl">
           <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Público</h3>
           </div>
           <div ref={chatRef} className="flex-1 overflow-y-auto space-y-6 scrollbar-hide mb-4">
              {chat.map(c => (
                <div key={c.id}>
                  <p className="text-[9px] font-black uppercase text-[#F97316] tracking-tighter">{c.user}</p>
                  <p className="text-xs text-zinc-300">{c.text}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}