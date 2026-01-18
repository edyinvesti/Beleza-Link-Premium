import { useState, useEffect, useRef } from "react";
import { Share2, X, Copy, MessageSquare, Check, Volume2, VolumeX, Calendar, Bell, BellRing, ArrowRight, Flame, Send, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [stock, setStock] = useState(6);
  const [chat, setChat] = useState([
    { id: 1, user: "BELEZA LINK", text: "Chat ativo na Web e Mobile!", color: "#F97316" }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgInput.trim()) return;
    setChat([...chat, { id: Date.now() + Math.random(), user: "VOCÊ", text: msgInput.trim(), color: "#F97316" }]);
    setMsgInput("");
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* NAVBAR FIXA */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between px-6 md:px-12">
        <button className="bg-[#F97316] text-black px-6 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2 hover:scale-105 transition-transform">
          <ChevronLeft size={14} /> Voltar
        </button>
        <div className="flex items-center gap-4">
           <span className="text-[10px] font-black text-red-600 animate-pulse bg-red-600/10 px-3 py-1 rounded-full border border-red-600/20">● AO VIVO</span>
        </div>
      </nav>

      {/* CONTAINER PRINCIPAL COM GRID RESPONSIVO */}
      <main className="pt-28 pb-10 px-4 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUNA DA ESQUERDA: VÍDEO E INFO (Ocupa 8 colunas na Web) */}
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
              CANAL <span className="text-[#F97316]">BELEZA LINK</span>
            </h1>

            <div className="relative aspect-video bg-zinc-900 rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline 
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
              
              {/* OFERTA SOBRE O VÍDEO */}
              <div className="absolute top-8 left-8 z-40 w-full max-w-[320px]">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-black/90 backdrop-blur-2xl p-6 rounded-[40px] border border-white/10 shadow-2xl">
                   <div className="absolute -top-3 right-8 bg-[#F97316] px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-white shadow-lg">SÓ {stock} DISPONÍVEIS</div>
                   <div className="flex items-center gap-5">
                      <img src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=200" className="w-20 h-20 rounded-3xl object-cover border border-white/10" />
                      <div className="flex-1">
                         <p className="text-lg font-black uppercase leading-tight text-white mb-3">Kit Expert <br/> Shine Pro</p>
                         <button onClick={() => window.open('https://wa.me/5511999999999')} className="bg-white text-black w-full py-3 rounded-2xl text-[10px] font-black uppercase hover:bg-[#F97316] hover:text-white transition-all">Comprar</button>
                      </div>
                   </div>
                </motion.div>
              </div>

              <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} 
                className="absolute bottom-8 right-8 bg-black/60 p-5 rounded-full border border-white/10 hover:scale-110 transition-transform">
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} className="text-[#F97316]" />}
              </button>
            </div>

            {/* AGENDA ABAIXO DO VÍDEO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-zinc-900/40 p-6 rounded-[35px] border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-[9px] font-black text-[#F97316] uppercase tracking-widest">Amanhã • 15:00</p>
                    <p className="text-sm font-bold uppercase text-white">Gestão de Salão 5.0</p>
                  </div>
                  <button className="bg-white/5 p-4 rounded-2xl hover:bg-[#F97316] transition-colors"><Bell size={20} /></button>
               </div>
               <button className="bg-white text-black rounded-[35px] font-black uppercase text-xs tracking-widest hover:bg-[#F97316] hover:text-white transition-all">Divulgar Live</button>
            </div>
          </div>

          {/* COLUNA DA DIREITA: CHAT (Ocupa 4 colunas na Web) */}
          <div className="lg:col-span-4 h-[500px] lg:h-[750px] sticky top-28">
            <div className="bg-zinc-900/30 rounded-[50px] border border-white/10 flex flex-col h-full shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Comunidade em Tempo Real</span>
                 <span className="bg-green-500/20 text-green-500 text-[8px] px-2 py-1 rounded-md font-bold">ONLINE</span>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {chat.map(c => (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} key={c.id}>
                    <p className="text-[10px] font-black uppercase text-[#F97316] mb-1 tracking-tighter">{c.user}</p>
                    <p className="text-[14px] text-zinc-300 bg-white/5 p-4 rounded-[24px] rounded-tl-none border border-white/5 inline-block w-full">{c.text}</p>
                  </motion.div>
                ))}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleSend} className="p-6 bg-black/40 border-t border-white/10 flex items-center gap-3">
                <input 
                  type="text" value={msgInput} onChange={(e) => setMsgInput(e.target.value)}
                  placeholder="Envie sua mensagem..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-[#F97316] transition-all"
                />
                <button type="submit" className="bg-[#F97316] p-4 rounded-2xl text-black hover:scale-105 transition-all">
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}