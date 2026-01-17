import { useState, useEffect, useRef } from "react";
import { Play, Users, MessageCircle, Share2, ShieldCheck, Zap, Send, X, Copy, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msg, setMsg] = useState("");
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const [chat, setChat] = useState([
    { id: 1, user: "Ana Silva", text: "Top demais essa técnica!", color: "#F97316" },
    { id: 2, user: "Bruno Hair", text: "Qual spray você usou?", color: "#71717a" }
  ]);
  const [espectadores, setEspectadores] = useState(1240);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWA = () => {
    const url = `https://api.whatsapp.com/send?text=Vem ver essa Masterclass no Beleza Link: ${window.location.href}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEspectadores(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat(prev => [...prev, { id: Date.now(), user: "VOCÊ", text: msg, color: "#fff" }]);
    setMsg("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans relative overflow-hidden">
      
      {/* PAINEL DE COMPARTILHAMENTO PREMIUM */}
      <AnimatePresence>
        {showShare && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowShare(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[700]" 
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-white/10 rounded-t-[40px] z-[701] p-10 pb-16"
            >
              <div className="max-w-md mx-auto">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-black uppercase tracking-widest">Compartilhar</h3>
                  <button onClick={() => setShowShare(false)} className="p-2 bg-white/5 rounded-full"><X size={20}/></button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={shareWA} className="flex flex-col items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 p-6 rounded-[30px] border border-[#25D366]/20 transition-all">
                    <MessageSquare size={32} className="text-[#25D366]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
                  </button>
                  
                  <button onClick={handleCopyLink} className="flex flex-col items-center gap-3 bg-white/5 hover:bg-white/10 p-6 rounded-[30px] border border-white/10 transition-all">
                    <Copy size={32} className="text-[#F97316]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {copied ? "Copiado!" : "Copiar Link"}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span> AO VIVO AGORA
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight">
                Masterclass: <span className="text-[#F97316]">Penteados de Noiva</span>
              </h2>
            </div>
            <div className="bg-zinc-900 border border-white/5 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
              <Users size={20} className="text-[#F97316]" />
              <span className="font-black text-lg tabular-nums">{espectadores.toLocaleString()}</span>
            </div>
          </header>

          <div className="aspect-video bg-zinc-900 rounded-[40px] border border-white/10 relative overflow-hidden group shadow-2xl shadow-[#F97316]/10">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-24 h-24 bg-[#F97316] rounded-full flex items-center justify-center pl-2 shadow-2xl shadow-[#F97316]/40">
                <Play size={40} fill="black" className="text-black" />
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-zinc-900/40 p-8 rounded-[40px] border border-white/5 gap-6">
             <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
               Nesta aula ao vivo, o mestre demonstra as técnicas de fixação e texturização 
               que duram até 12 horas.
             </p>
             <button 
                onClick={() => setShowShare(true)}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-[#F97316] hover:text-white px-8 py-4 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest cursor-pointer"
             >
                <Share2 size={16}/> Compartilhar
             </button>
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col gap-6">
           <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-[40px] flex flex-col h-[500px] overflow-hidden">
             {/* Chat aqui simplificado para o exemplo */}
             <div className="p-6 border-b border-white/5 font-black text-[11px] uppercase tracking-widest">Chat em Tempo Real</div>
             <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {chat.map(c => (
                  <div key={c.id} className="text-xs">
                    <span style={{color: c.color}} className="font-bold uppercase tracking-tighter">{c.user}:</span> {c.text}
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}