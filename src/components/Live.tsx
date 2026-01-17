import { useState, useEffect, useRef } from "react";
import { Users, Share2, X, Copy, MessageSquare, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msg, setMsg] = useState("");
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [espectadores, setEspectadores] = useState(1240);
  const [chat, setChat] = useState([
    { id: 1, user: "Studio Hair", text: "Essa técnica é revolucionária!", color: "#F97316" },
    { id: 2, user: "Duda Estética", text: "O brilho desse cabelo está incrível!", color: "#71717a" }
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nomes = ["Bia Cabelos", "Marcos Barber", "Luxo Salon", "Renata Expert"];
    const textos = ["Que aula fantástica!", "Parceiro novo na área!", "Beleza Link é o futuro.", "Amo essa plataforma!"];
    const interval = setInterval(() => {
      const novaMsg = {
        id: Date.now(),
        user: nomes[Math.floor(Math.random() * nomes.length)],
        text: textos[Math.floor(Math.random() * textos.length)],
        color: Math.random() > 0.5 ? "#F97316" : "#71717a"
      };
      setChat(prev => [...prev.slice(-8), novaMsg]);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat(prev => [...prev, { id: Date.now(), user: "VOCÊ", text: msg, color: "#fff" }]);
    setMsg("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => { setCopied(false); setIsSharing(false); }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans selection:bg-[#F97316]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-3 space-y-8">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-ping"></span>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-red-600">Masterclass Live</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] italic">
                Técnicas de <br/> <span className="text-[#F97316]">Alta Performance</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900/50 backdrop-blur-md border border-white/5 p-4 rounded-3xl">
              <Users size={18} className="text-[#F97316]" />
              <span className="text-sm font-black tabular-nums">{espectadores.toLocaleString()}</span>
            </div>
          </header>

          <div className="aspect-video bg-zinc-900 rounded-[50px] border border-white/5 relative overflow-hidden shadow-2xl">
             <video 
               className="w-full h-full object-cover" 
               autoPlay 
               loop 
               muted 
               playsInline 
               poster="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000"
             >
               <source src="https://v.ftcdn.net/04/86/03/40/700_F_486034057_kLhC5W6T6VvS9vU9S9G8Vv9J9Z9v9Z9v_ST.mp4" type="video/mp4" />
               Seu navegador não suporta vídeos.
             </video>
             <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-1 rounded-full">
                <span className="text-[8px] font-black tracking-widest text-white uppercase">HD Stream Active</span>
             </div>
          </div>

          <div className="flex items-center justify-between bg-zinc-900/30 backdrop-blur-xl p-6 rounded-[35px] border border-white/5">
             <p className="hidden md:block text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em]">Workshop de Beleza & Estética de Luxo</p>
             <div className="relative">
                <AnimatePresence mode="wait">
                  {!isSharing ? (
                    <motion.button 
                      key="sh-b" onClick={() => setIsSharing(true)}
                      className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-[22px] font-black text-[10px] uppercase tracking-widest hover:bg-[#F97316] transition-all"
                    >
                      <Share2 size={16}/> Compartilhar
                    </motion.button>
                  ) : (
                    <motion.div key="sh-a" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 bg-zinc-800 p-2 rounded-[24px]">
                       <button onClick={() => window.open('https://wa.me/?text='+window.location.href)} className="p-4 hover:bg-[#25D366] rounded-xl"><MessageSquare size={18} /></button>
                       <button onClick={handleCopy} className="p-4 hover:bg-[#F97316] rounded-xl">{copied ? <Check size={18} /> : <Copy size={18} />}</button>
                       <button onClick={() => setIsSharing(false)} className="p-4 text-zinc-500"><X size={18} /></button>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1 h-[600px] flex flex-col bg-zinc-900/20 border border-white/5 rounded-[50px] p-8 shadow-2xl">
           <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Comunidade</h3>
           </div>
           <div ref={chatRef} className="flex-1 overflow-y-auto space-y-6 scrollbar-hide mb-4 text-left">
              {chat.map(c => (
                <div key={c.id}>
                  <p className="text-[9px] font-black uppercase text-[#F97316] tracking-tighter">{c.user}</p>
                  <p className="text-xs text-zinc-300 leading-relaxed">{c.text}</p>
                </div>
              ))}
           </div>
           <form onSubmit={handleSend} className="pt-4 border-t border-white/5 flex gap-2">
              <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Interagir..." className="flex-1 bg-white/5 rounded-xl px-4 py-3 text-xs outline-none" />
              <button type="submit" className="bg-[#F97316] p-3 rounded-xl"><Send size={14}/></button>
           </form>
        </div>
      </div>
    </div>
  );
}