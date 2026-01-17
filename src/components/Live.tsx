import { useState, useEffect, useRef } from "react";
import { Play, Users, MessageCircle, Share2, ShieldCheck, Zap, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { id: 1, user: "Ana Silva", text: "Top demais essa técnica!", color: "#F97316" },
    { id: 2, user: "Bruno Hair", text: "Qual spray você usou?", color: "#71717a" },
    { id: 3, user: "Carla Mendes", text: "Cheguei agora, vai ficar gravado?", color: "#F97316" }
  ]);
  const [espectadores, setEspectadores] = useState(1240);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nomes = ["Marcos", "Julia", "Salão VIP", "Expert Hair"];
    const textos = ["Incrível!", "Qual a marca do pente?", "A imagem tá ótima", "Mestre!", "Show!"];
    const interval = setInterval(() => {
      const novaMsg = {
        id: Date.now(),
        user: nomes[Math.floor(Math.random() * nomes.length)],
        text: textos[Math.floor(Math.random() * textos.length)],
        color: Math.random() > 0.5 ? "#F97316" : "#71717a"
      };
      setChat(prev => [...prev.slice(-15), novaMsg]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chat]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEspectadores(prev => prev + Math.floor(Math.random() * 11) - 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    const handleShare = async () => {
    const shareData = {
      title: 'Beleza Link - Ao Vivo',
      text: 'Vem conferir essa Masterclass incrível no Beleza Link!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      }
    } catch (err) {
      console.log("Erro ao compartilhar:", err);
    }
  };
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setChat(prev => [...prev, { id: Date.now(), user: "VOCÊ", text: msg, color: "#fff" }]);
    setMsg("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 px-4 md:px-12 font-sans selection:bg-[#F97316]">
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
               que duram até 12 horas. Prepare suas dúvidas para o chat lateral!
             </p>
             <button onClick={handleShare} className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-[#F97316] hover:text-white px-8 py-4 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest cursor-pointer">
                <Share2 size={16}/> Compartilhar
             </button>
          </div>
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6 h-[700px]">
          <div className="flex-1 bg-zinc-900/60 border border-white/10 rounded-[40px] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/20">
              <h3 className="font-black text-[11px] uppercase tracking-[0.2em] flex items-center gap-2">
                <MessageCircle size={16} className="text-[#F97316]"/> Chat da Live
              </h3>
            </div>
            <div ref={chatRef} className="flex-1 p-6 overflow-y-auto space-y-4 scroll-smooth scrollbar-hide">
              <AnimatePresence initial={false}>
                {chat.map((c) => (
                  <motion.div key={c.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white/5 p-3 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black uppercase mb-1" style={{ color: c.color }}>{c.user}:</p>
                    <p className="text-sm text-zinc-300">{c.text}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <form onSubmit={handleSend} className="p-4 bg-black/40 border-t border-white/5 flex gap-2">
                <input 
                  type="text" 
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Comentar..."
                  className="flex-1 bg-zinc-800 border-none rounded-xl py-4 px-5 text-xs outline-none focus:ring-1 focus:ring-[#F97316]/50"
                />
                <button type="submit" className="bg-[#F97316] p-4 rounded-xl text-black hover:scale-105 active:scale-95 transition-all">
                  <Send size={18} />
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}