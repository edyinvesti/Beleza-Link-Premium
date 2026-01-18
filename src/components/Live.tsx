import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Volume2, VolumeX, Send, ChevronLeft, Bell, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [stock, setStock] = useState(6);
  const [chat, setChat] = useState([
    { id: 1, user: "BELEZA LINK", text: "Bem-vindos! Clique no produto para comprar.", color: "#F97316" }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [chat]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setChat([...chat, { id: Date.now(), user: "VOCÊ", text: msgInput.trim(), color: "#F97316" }]);
    setMsgInput("");
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* NAVBAR COM APENAS UM BOTÃO */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between px-6 md:px-12">
        <button 
          onClick={() => window.history.back()}
          className="bg-[#F97316] text-black px-6 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <ChevronLeft size={14} /> Voltar
        </button>
        <span className="text-[10px] font-black text-red-600 animate-pulse bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20 uppercase tracking-widest">● AO VIVO</span>
      </nav>

      <main className="pt-28 pb-10 px-4 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              CANAL <span className="text-[#F97316]">BELEZA LINK</span>
            </h1>

            <div className="relative aspect-video bg-zinc-900 rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
              
              {/* Produto Flutuante */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-6 left-6 z-50 cursor-pointer"
                onClick={() => window.open('https://wa.me/5511999999999')}
              >
                <div className="bg-black/80 backdrop-blur-2xl p-2 pr-6 rounded-full border border-white/20 flex items-center gap-3 shadow-2xl">
                  <div className="relative">
                    <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=100" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-[#F97316]" />
                    <div className="absolute -bottom-1 -right-1 bg-[#F97316] p-1 rounded-full"><ShoppingCart size={10} className="text-black" /></div>
                  </div>
                  <div>
                    <p className="text-[7px] md:text-[8px] font-black text-[#F97316] uppercase tracking-widest leading-none mb-1">Comprar</p>
                    <p className="text-[10px] md:text-xs font-black uppercase text-white leading-none">Kit Expert Shine</p>
                  </div>
                </div>
              </motion.div>

              <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} className="absolute bottom-6 right-6 bg-black/60 p-4 rounded-full border border-white/10">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="text-[#F97316]" />}
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 h-[600px] lg:h-[700px]">
            <div className="bg-zinc-900/30 rounded-[50px] border border-white/10 flex flex-col h-full shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="p-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Live Chat</span>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                {chat.map(c => (
                  <div key={c.id}>
                    <p className="text-[9px] font-black uppercase text-[#F97316] mb-1">{c.user}</p>
                    <p className="text-sm text-zinc-300 bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">{c.text}</p>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/10 flex items-center gap-2">
                <input type="text" value={msgInput} onChange={(e) => setMsgInput(e.target.value)} placeholder="Comentar..." className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none" />
                <button type="submit" className="bg-[#F97316] p-3 rounded-xl text-black"><Send size={18} /></button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}