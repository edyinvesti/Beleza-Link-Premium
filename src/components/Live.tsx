import { useState, useEffect, useRef } from "react";
import { Share2, X, Copy, MessageSquare, Check, Volume2, VolumeX, Calendar, Bell, BellRing, ArrowRight, Flame, Send, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msgInput, setMsgInput] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const [stock, setStock] = useState(6);
  const [chat, setChat] = useState([
    { id: 1, user: "BELEZA LINK", text: "Chat ativo! Pode enviar a sua mensagem.", color: "#F97316" }
  ]);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Função para fazer o chat descer automaticamente
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = msgInput.trim();
    if (!texto) return;
    
    // Adiciona a mensagem com um ID único
    const novaMensagem = { 
      id: Date.now() + Math.random(), 
      user: "VOCÊ", 
      text: texto, 
      color: "#F97316" 
    };

    setChat(prevChat => [...prevChat, novaMensagem]);
    setMsgInput("");
    
    // Pequeno delay para garantir que o scroll aconteça após o render
    setTimeout(scrollToBottom, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between">
        <button className="bg-[#F97316] text-black px-4 py-2 rounded-xl font-black text-[10px] uppercase flex items-center gap-2">
          <ChevronLeft size={14} /> Voltar
        </button>
        <span className="text-[10px] font-black text-red-600 animate-pulse">● AO VIVO</span>
      </nav>

      <main className="pt-24 pb-10 px-4 max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter">CANAL <span className="text-[#F97316]">BELEZA LINK</span></h1>

        {/* Player */}
        <div className="relative aspect-video bg-zinc-900 rounded-[30px] overflow-hidden border border-white/10 shadow-2xl">
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline 
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
          <button onClick={() => {if(videoRef.current) videoRef.current.muted = !videoRef.current.muted; setIsMuted(!isMuted)}} 
            className="absolute bottom-4 right-4 bg-black/50 p-3 rounded-full border border-white/10">
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-[#F97316]" />}
          </button>
        </div>

        {/* COMPONENTE DE CHAT REFORMULADO */}
        <div className="bg-zinc-900/40 rounded-[35px] border border-white/10 flex flex-col h-[450px] shadow-xl overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Mensagens da Live</span>
             <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[8px] font-bold text-green-500">REAL-TIME</span>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
            {chat.map(c => (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={c.id} className="flex flex-col">
                <span className="text-[8px] font-black text-[#F97316] uppercase mb-0.5">{c.user}</span>
                <span className="text-[13px] text-zinc-200 bg-white/5 p-3 rounded-2xl rounded-tl-none inline-block max-w-[90%] break-words">
                  {c.text}
                </span>
              </motion.div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 bg-zinc-900 border-t border-white/10 flex items-center gap-3">
            <input 
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
              placeholder="Escreva algo..." 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:border-[#F97316] transition-all"
            />
            <button type="submit" className="bg-[#F97316] p-4 rounded-2xl text-black hover:scale-105 active:scale-95 transition-all">
              <Send size={18} />
            </button>
          </form>
        </div>

        <button onClick={() => window.open('https://wa.me/5511999999999')} className="w-full bg-[#F97316] text-black py-5 rounded-[25px] font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-all">
           Comprar Kit Agora
        </button>
      </main>
    </div>
  );
}