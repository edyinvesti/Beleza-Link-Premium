import { useState, useEffect, useRef } from "react";
import { Share2, X, Copy, MessageSquare, Check, Volume2, VolumeX, Calendar, Bell, BellRing, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
  const [isSharing, setIsSharing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [reminded, setReminded] = useState(false);
  const [chat, setChat] = useState([
    { id: 1, user: "Beleza Link", text: "Bem-vindos à Masterclass!", color: "#F97316" },
    { id: 2, user: "Suporte", text: "Produtos da live com 20% OFF.", color: "#71717a" }
  ]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const proximasLives = [
    { id: 101, hora: "20:00", titulo: "Técnica Microblading", dia: "Hoje" },
    { id: 102, hora: "15:00", titulo: "Gestão de Salão 5.0", dia: "Amanhã" }
  ];

  const produtosEmDestaque = [
    { id: 1, nome: "Kit Expert Shine", preco: "R$ 189,90", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=200" }
  ];

  useEffect(() => {
    const nomes = ["Ana Pro", "Carlos Hair", "Studio VIP", "Lucas Barber"];
    const textos = ["Que produto é esse?", "Amei o resultado!", "Já quero comprar!", "Top demais."];
    const interval = setInterval(() => {
      const novaMsg = {
        id: Date.now(),
        user: nomes[Math.floor(Math.random() * nomes.length)],
        text: textos[Math.floor(Math.random() * textos.length)],
        color: Math.random() > 0.5 ? "#F97316" : "#71717a"
      };
      setChat(prev => [...prev.slice(-8), novaMsg]);
    }, 4000);
    return () => clearInterval(interval);
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
             
             {/* VITRINE DE PRODUTO EM DESTAQUE NA LIVE */}
             <div className="absolute bottom-6 left-6 right-auto z-40 max-w-[280px]">
                <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-black/80 backdrop-blur-2xl p-4 rounded-[30px] border border-white/10 flex items-center gap-4">
                   <img src={produtosEmDestaque[0].image} className="w-16 h-16 rounded-2xl object-cover border border-white/10" alt="Produto" />
                   <div className="flex-1">
                      <p className="text-[8px] uppercase font-bold text-[#F97316]">Oferta da Live</p>
                      <p className="text-[10px] font-black uppercase leading-tight mb-1">{produtosEmDestaque[0].nome}</p>
                      <button onClick={() => window.open('https://wa.me/SEUNUMERO?text=Vim%20pela%20Live%20e%20quero%20o%20Kit%20Expert%20Shine')} className="bg-white text-black px-3 py-1 rounded-full text-[8px] font-black uppercase flex items-center gap-1 hover:bg-[#F97316] hover:text-white transition-all">
                        Comprar <ArrowRight size={10} />
                      </button>
                   </div>
                </motion.div>
             </div>

             <button onClick={toggleMute} className="absolute bottom-6 right-6 z-30 bg-black/60 backdrop-blur-md p-4 rounded-full border border-white/10">
               {isMuted ? <VolumeX size={20} className="text-white/70" /> : <Volume2 size={20} className="text-[#F97316]" />}
             </button>
          </div>

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
             
             <div className="flex items-center gap-2">
                <button onClick={() => setIsSharing(true)} className="bg-white text-black px-8 py-5 rounded-[22px] font-black text-[10px] uppercase tracking-widest hover:bg-[#F97316] hover:text-white transition-all">
                  <Share2 size={16} className="inline mr-2"/> Divulgar
                </button>
             </div>
          </div>
        </div>

        <div className="lg:col-span-1 h-[600px] flex flex-col bg-zinc-900/20 border border-white/5 rounded-[40px] p-8 shadow-2xl">
           <div className="flex-1 overflow-y-auto space-y-6 scrollbar-hide">
              <div className="flex items-center gap-2 mb-4 text-zinc-500">
                <MessageSquare size={14} /> <span className="text-[10px] font-bold uppercase tracking-widest">Chat em Tempo Real</span>
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