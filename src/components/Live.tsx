import { useState, useEffect, useRef } from "react";
import { Share2, X, Copy, MessageSquare, Check, Volume2, VolumeX, Calendar, Bell, BellRing, ArrowRight, Flame, Send, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [stock, setStock] = useState(6);
  const [chat, setChat] = useState([
    { id: 1, user: "BELEZA LINK", text: "Bem-vindos ao maior canal de elite!", color: "#F97316" }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setChat([...chat, { id: Date.now(), user: "VOCÊ", text: msgInput, color: "#F97316" }]);
    setMsgInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#F97316]">
      {/* HEADER MOBILE FIXO */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/5 p-4 flex items-center justify-between">
        <button className="bg-[#F97316] text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2">
          <ChevronLeft size={14} /> Voltar
        </button>
        <div className="flex flex-col items-end">
          <span className="text-[8px] font-black text-red-600 animate-pulse uppercase tracking-[0.2em]">Ao Vivo</span>
          <span className="text-[10px] font-bold">1.2k assistindo</span>
        </div>
      </nav>

      <main className="pt-20 pb-10 px-4 max-w-md mx-auto space-y-6">
        {/* TÍTULO DE IMPACTO */}
        <header className="py-4">
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none">
            CANAL <br/> <span className="text-[#F97316] italic">BELEZA LINK</span>
          </h1>
        </header>

        {/* PLAYER DE VÍDEO SEGURO */}
        <div className="relative aspect-[9/16] md:aspect-video bg-zinc-900 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay loop muted playsInline
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          
          {/* OFERTA FLUTUANTE OTIMIZADA */}
          <div className="absolute top-6 right-6 left-6 z-40">
            <motion.div initial={{ y: -20 }} animate={{ y: 0 }} className="bg-black/90 backdrop-blur-xl p-4 rounded-[30px] border border-white/10 relative">
               <div className="absolute -top-2 -right-2 bg-[#F97316] px-3 py-1 rounded-full text-[8px] font-black">SÓ {stock} UNIDADES</div>
               <div className="flex items-center gap-4">
                 <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=150" className="w-16 h-16 rounded-2xl object-cover" />
                 <div className="flex-1">
                   <p className="text-[10px] font-bold text-zinc-500 uppercase">Oferta Exclusiva</p>
                   <p className="text-sm font-black uppercase leading-tight">Kit Expert Shine Pro</p>
                   <button onClick={() => window.open('https://wa.me/5511999999999')} className="mt-2 bg-white text-black w-full py-2 rounded-xl text-[9px] font-black uppercase">Comprar Agora</button>
                 </div>
               </div>
            </motion.div>
          </div>

          <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} className="absolute bottom-6 right-6 bg-black/50 p-4 rounded-full border border-white/10">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-[#F97316]" />}
          </button>
        </div>

        {/* PRÓXIMAS LIVES */}
        <div className="bg-zinc-900/50 rounded-[35px] p-6 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[8px] font-black text-[#F97316] uppercase tracking-widest">Hoje • 20:00</p>
              <p className="text-xs font-bold uppercase">Técnica Microblading</p>
            </div>
            <button className="bg-white/10 p-3 rounded-2xl"><Bell size={16} /></button>
          </div>
          <button onClick={() => {navigator.clipboard.writeText(window.location.href)}} className="w-full bg-white text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Divulgar Canal</button>
        </div>

        {/* CHAT MOBILE */}
        <div className="bg-zinc-900/30 rounded-[35px] border border-white/5 h-[400px] flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 text-[9px] font-black uppercase tracking-widest text-zinc-500">Chat da Comunidade</div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chat.map(c => (
              <div key={c.id}>
                <span className="text-[8px] font-black text-[#F97316] mr-2">{c.user}</span>
                <span className="text-xs text-zinc-300">{c.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/5 flex gap-2">
            <input value={msgInput} onChange={(e) => setMsgInput(e.target.value)} placeholder="Escreva..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs outline-none focus:border-[#F97316]" />
            <button type="submit" className="bg-[#F97316] p-2 rounded-xl"><Send size={16} /></button>
          </form>
        </div>
      </main>
    </div>
  );
}