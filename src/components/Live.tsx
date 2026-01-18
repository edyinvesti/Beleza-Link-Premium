import { useState, useEffect, useRef } from "react";
import { Share2, X, Copy, MessageSquare, Check, Volume2, VolumeX, Calendar, Bell, BellRing, ArrowRight, Flame, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [reminded, setReminded] = useState(false);
  const [stock, setStock] = useState(7);
  const [msgInput, setMsgInput] = useState("");
  const [chat, setChat] = useState([
    { id: 1, user: "Beleza Link", text: "Chat liberado! Diga oi.", color: "#F97316" }
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [chat]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setChat([...chat, { id: Date.now(), user: "Você", text: msgInput, color: "#F97316" }]);
    setMsgInput("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <header className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="text-[10px] font-black uppercase text-red-600 tracking-widest">Ao Vivo</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">Canal <span className="text-[#F97316]">Beleza Link</span></h2>
          </header>

          <div className="relative aspect-video bg-zinc-900 rounded-[40px] md:rounded-[60px] border border-white/5 overflow-hidden shadow-2xl">
             <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
             <div className="absolute bottom-8 left-8 z-40 w-full max-w-[300px]">
                <div className="bg-black/95 backdrop-blur-3xl p-5 rounded-[35px] border border-white/10 relative">
                   <div className="absolute -top-3 right-6 bg-[#F97316] px-3 py-1 rounded-full text-[9px] font-black uppercase text-white">Só {stock} Restantes</div>
                   <p className="text-lg font-black uppercase tracking-tighter mb-3 text-white">Kit Expert Shine Pro</p>
                   <button onClick={() => window.open('https://wa.me/5511999999999')} className="bg-white text-black w-full py-3 rounded-2xl text-[10px] font-black uppercase flex items-center justify-center gap-2 font-bold">Comprar Agora <ArrowRight size={14} /></button>
                </div>
             </div>
             <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} className="absolute bottom-8 right-8 z-30 bg-black/60 p-5 rounded-full border border-white/10">
               {isMuted ? <VolumeX size={24} className="text-white/70" /> : <Volume2 size={24} className="text-[#F97316]" />}
             </button>
          </div>
        </div>

        <div className="lg:col-span-1 h-[600px] bg-zinc-900/40 border border-white/10 rounded-[50px] flex flex-col overflow-hidden shadow-2xl mt-20 md:mt-0">
           <div className="p-6 border-b border-white/5 bg-white/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 font-bold">Chat Real</p>
           </div>
           <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
              {chat.map(c => (
                <div key={c.id} className="animate-in fade-in slide-in-from-right-2">
                  <p className="text-[9px] font-black uppercase text-[#F97316] tracking-tighter">{c.user}</p>
                  <p className="text-sm text-zinc-300 leading-snug font-medium">{c.text}</p>
                </div>
              ))}
              <div ref={chatEndRef} />
           </div>
           <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 flex items-center gap-2">
              <input type="text" value={msgInput} onChange={(e) => setMsgInput(e.target.value)} placeholder="Escreva aqui..."
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#F97316] text-white" />
              <button type="submit" className="bg-[#F97316] p-3 rounded-2xl text-white hover:scale-105 active:scale-95 transition-all"><Send size={18} /></button>
           </form>
        </div>
      </div>
    </div>
  );
}