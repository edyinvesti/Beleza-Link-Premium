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
    { id: 1, user: "Beleza Link", text: "Bem-vindos à Masterclass!", color: "#F97316" },
    { id: 2, user: "Suporte", text: "Produtos da live com 20% OFF.", color: "#71717a" }
  ]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const proximasLives = [
    { id: 101, hora: "20:00", titulo: "Técnica Microblading", dia: "Hoje" },
    { id: 102, hora: "15:00", titulo: "Gestão de Salão 5.0", dia: "Amanhã" }
  ];

  const produto = { id: 1, nome: "Kit Expert Shine", preco: "R$ 189,90", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=200" };

  useEffect(() => {
    // Simulação de chat e redução de stock para urgência
    const intervalChat = setInterval(() => {
      const nomes = ["Ana Pro", "Studio VIP", "Lucas Barber", "Cida Unhas"];
      const textos = ["Acabei de comprar!", "Resta pouco no stock!", "Garantam o vosso!", "Preço imbatível."];
      setChat(prev => [...prev.slice(-8), { id: Date.now(), user: nomes[Math.floor(Math.random() * nomes.length)], text: textos[Math.floor(Math.random() * textos.length)], color: "#F97316" }]);
      
      // Diminuir stock aleatoriamente até 1
      setStock(s => (s > 1 && Math.random() > 0.7) ? s - 1 : s);
    }, 5000);
    return () => clearInterval(intervalChat);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
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
                Canal <br/> <span className="text-[#F97316]">Beleza Link</span>
              </h2>
            </div>
          </header>

          <div className="relative group aspect-video bg-zinc-900 rounded-[40px] md:rounded-[50px] border border-white/5 overflow-hidden shadow-2xl">
             <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline webkit-playsinline="true"
               src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
             ></video>
             
             {/* VITRINE COM GATILHO DE STOCK */}
             <div className="absolute bottom-6 left-6 z-40 max-w-[280px]">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-black/90 backdrop-blur-2xl p-4 rounded-[30px] border border-white/10 flex items-center gap-4 relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-[#F97316] px-2 py-1 rounded-bl-xl flex items-center gap-1">
                      <Flame size={10} className="text-white animate-pulse" />
                      <span className="text-[7px] font-black uppercase">Só {stock} restantes</span>
                   </div>
                   <img src={produto.image} className="w-16 h-16 rounded-2xl object-cover border border-white/10" alt="Produto" />
                   <div className="flex-1 mt-2">
                      <p className="text-[10px] font-black uppercase leading-tight">{produto.nome}</p>
                      <button onClick={() => window.open('https://wa.me/SEUNUMERO?text=Quero%20o%20Kit%20Expert%20Shine')} className="mt-2 bg-white text-black px-4 py-2 rounded-full text-[8px] font-black uppercase flex items-center gap-1 hover:bg-[#F97316] hover:text-white transition-all w-full justify-center">
                        Comprar Agora <ArrowRight size={10} />
                      </button>
                   </div>
                </motion.div>
             </div>

             <button onClick={toggleMute} className="absolute bottom-6 right-6 z-30 bg-black/60 backdrop-blur-md p-4 rounded-full border border-white/10">
               {isMuted ? <VolumeX size={20} className="text-white/70" /> : <Volume2 size={20} className="text-[#F97316]" />}
             </button>
          </div>

          {/* BARRA DE DIVULGAÇÃO E AGENDA */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/30 backdrop-blur-xl p-6 rounded-[35px] border border-white/5">
             <div className="flex flex-wrap gap-4">
                {proximasLives.map((live) => (
                  <div key={live.id} className="bg-white/5 p-3 rounded-2xl border border-white/5 flex items-center gap-4">
                    <div className="flex flex-col">
                      <p className="text-[8px] uppercase font-bold text-zinc-500">{live.dia} - {live.hora}</p>
                      <p className="text-[10px] font-black uppercase tracking-tighter">{live.titulo}</p>
                    </div>
                    <button onClick={() => setReminded(!reminded)} className={`p-2 rounded-xl transition-all ${reminded ? 'bg-[#F97316]' : 'bg-white/10 text-zinc-400'}`}>
                      {reminded ? <BellRing size={14} /> : <Bell size={14} />}
                    </button>
                  </div>
                ))}
             </div>
             <button onClick={() => setIsSharing(true)} className="bg-white text-black px-8 py-5 rounded-[22px] font-black text-[10px] uppercase tracking-widest hover:bg-[#F97316] hover:text-white transition-all">
                Divulgar Live
             </button>
          </div>
        </div>

        {/* CHAT COM PROVA SOCIAL */}
        <div className="lg:col-span-1 h-[600px] flex flex-col bg-zinc-900/20 border border-white/5 rounded-[40px] p-8 shadow-2xl">
           <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <MessageSquare size={14} /> <span className="text-[10px] font-bold uppercase tracking-widest">Chat Direto</span>
              </div>
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