import { useState, useEffect, useRef } from "react";
import { Share2, X, Copy, MessageSquare, Check, Volume2, VolumeX, Calendar, Bell, BellRing, ArrowRight, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [reminded, setReminded] = useState(false);
  const [stock, setStock] = useState(7);
  const [chat, setChat] = useState([
    { id: 1, user: "Beleza Link", text: "Bem-vindos!", color: "#F97316" },
    { id: 2, user: "Suporte", text: "Kit com 20% OFF hoje.", color: "#71717a" }
  ]);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setStock(s => (s > 1 && Math.random() > 0.7) ? s - 1 : s);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <header className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-600">Ao Vivo</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
              Canal <br/> <span className="text-[#F97316]">Beleza Link</span>
            </h2>
          </header>

          <div className="relative aspect-video bg-zinc-900 rounded-[40px] md:rounded-[60px] border border-white/5 overflow-hidden shadow-2xl">
             <video ref={videoRef} className="w-full h-full object-cover opacity-80" autoPlay loop muted playsInline 
               src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
             ></video>
             
             {/* VITRINE ULTRA LEGÍVEL */}
             <div className="absolute bottom-8 left-8 z-40 w-full max-w-[320px]">
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-black/95 backdrop-blur-3xl p-5 rounded-[35px] border border-white/20 flex items-center gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                   <div className="absolute -top-3 right-6 bg-[#F97316] px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                      <Flame size={12} className="text-white animate-pulse" />
                      <span className="text-[9px] font-black uppercase text-white tracking-widest">Só {stock} Unidades</span>
                   </div>
                   
                   {/* FOTO HD SEM FUNDO BRANCO ESTOURADO */}
                   <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=300" 
                        className="w-20 h-20 rounded-[22px] object-cover border-2 border-[#F97316]/30 shadow-inner" alt="Kit" />
                   
                   <div className="flex-1">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">Oferta Exclusiva</p>
                      <p className="text-lg font-black uppercase leading-tight tracking-tighter text-white mb-3">Kit Expert <br/> Shine Pro</p>
                      <button onClick={() => window.open('https://wa.me/5511999999999')} className="bg-white text-black w-full py-3 rounded-2xl text-[10px] font-black uppercase flex items-center justify-center gap-2 hover:bg-[#F97316] hover:text-white transition-all transform active:scale-95">
                        Comprar Agora <ArrowRight size={14} />
                      </button>
                   </div>
                </motion.div>
             </div>

             <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} className="absolute bottom-8 right-8 z-30 bg-black/60 backdrop-blur-md p-5 rounded-full border border-white/10 active:scale-90">
               {isMuted ? <VolumeX size={24} className="text-white/70" /> : <Volume2 size={24} className="text-[#F97316]" />}
             </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-zinc-900/40 backdrop-blur-xl p-8 rounded-[40px] border border-white/5">
             <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 px-5 py-4 rounded-3xl border border-white/10 flex items-center gap-5">
                   <div>
                      <p className="text-[9px] uppercase font-black text-[#F97316] tracking-widest">Hoje • 20:00</p>
                      <p className="text-sm font-black uppercase tracking-tighter">Técnica Microblading</p>
                   </div>
                   <button onClick={() => setReminded(!reminded)} className={`p-3 rounded-2xl transition-all ${reminded ? 'bg-[#F97316]' : 'bg-white/10 text-zinc-400'}`}>
                      {reminded ? <BellRing size={18} /> : <Bell size={18} />}
                   </button>
                </div>
             </div>
             <button onClick={() => setIsSharing(true)} className="bg-zinc-100 text-black px-12 py-6 rounded-[25px] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#F97316] hover:text-white transition-all shadow-xl">
                Divulgar Canal
             </button>
          </div>
        </div>

        <div className="lg:col-span-1 h-[600px] bg-zinc-900/30 border border-white/5 rounded-[50px] p-8 flex flex-col">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8">Chat ao Vivo</p>
           <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
              {chat.map(c => (
                <div key={c.id} className="animate-in fade-in slide-in-from-bottom-2">
                  <p className="text-[10px] font-black uppercase text-[#F97316] mb-1">{c.user}</p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{c.text}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}