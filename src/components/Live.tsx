import { useState, useEffect, useRef } from "react";
import { Users, MessageCircle, Share2, Heart, Volume2 } from "lucide-react";

export default function Live() {
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [chat, setChat] = useState([
    { id: 1, user: "SISTEMA", text: "Bem-vindo à transmissão oficial Beleza Link!", color: "#F97316" }
  ]);

  const videoId = "5VvEe0nlx9w"; 
  const chatEndRef = useRef<HTMLDivElement>(null);

  // EFEITO CHAT VIVO: Simula pessoas entrando e comentando
  useEffect(() => {
    if (hasStarted) {
      const users = ["Studio_Ana", "Marcos_Hair", "Beleza_VIP", "Corte_Master", "Elite_Beauty"];
      const messages = [
        "Essa técnica é surreal! 😱",
        "O som está perfeito aqui.",
        "Beleza Link sempre inovando!",
        "Qual o nome desse produto?",
        "Top demais essa live! 🔥",
        "Melhor canal de estética."
      ];

      const interval = setInterval(() => {
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        const colors = ["#ec4899", "#a855f7", "#3b82f6", "#10b981", "#f59e0b"];
        
        setChat(prev => [...prev.slice(-10), { 
          id: Date.now(), 
          user: randomUser, 
          text: randomMsg, 
          color: colors[Math.floor(Math.random() * colors.length)] 
        }]);
      }, 4000); // Nova mensagem a cada 4 segundos

      return () => clearInterval(interval);
    }
  }, [hasStarted]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col items-center justify-center pt-24 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        <div className="lg:col-span-3 space-y-6">
          <div className="relative aspect-video bg-zinc-900 rounded-[50px] border-b-8 border-r-8 border-[#F97316]/20 overflow-hidden shadow-2xl">
            
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ borderRadius: "50px" }}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`}
              allow="autoplay; encrypted-media"
            ></iframe>

            {!hasStarted && (
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center z-40">
                <button 
                  onClick={() => { setIsMuted(false); setHasStarted(true); }}
                  className="bg-[#F97316] text-black px-10 py-5 rounded-[25px] font-black uppercase tracking-[0.2em] flex items-center gap-4 hover:scale-105 transition-all shadow-2xl"
                >
                  <Volume2 size={24} /> ENTRAR NA LIVE
                </button>
              </div>
            )}
            
            {/* PISCA-PISCA AO VIVO */}
            <div className="absolute top-8 left-8 flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full shadow-lg z-50 animate-[pulse_1s_infinite]">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">AO VIVO</span>
            </div>

            <div className="absolute top-8 right-8 flex items-center gap-2 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 z-50">
              <Users size={14} className="text-[#F97316]" />
              <span className="text-[10px] font-black tracking-widest text-white">4.2K</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-zinc-950 p-8 rounded-[40px] border-l-8 border-[#F97316] shadow-xl">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white italic">BELEZA LINK <span className="text-[#F97316] not-italic">TV</span></h2>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mt-1">Sintonizado • Chat em Tempo Real</p>
            </div>
            <div className="flex gap-3">
              <button className="p-4 bg-zinc-900 rounded-2xl hover:text-[#F97316] transition-all"><Share2 size={20}/></button>
              <button className="p-4 bg-zinc-900 rounded-2xl hover:text-red-500 transition-all"><Heart size={20}/></button>
            </div>
          </div>
        </div>

        {/* CHAT INTERATIVO VIVO */}
        <div className="lg:col-span-1 bg-zinc-950 rounded-[40px] border border-white/5 flex flex-col h-[500px] lg:h-auto shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 bg-white/5 flex items-center gap-3">
            <MessageCircle size={18} className="text-[#F97316]" />
            <h3 className="text-[10px] font-black uppercase tracking-widest">Chat ao vivo</h3>
          </div>
          <div className="flex-1 p-6 overflow-y-auto space-y-4 scrollbar-hide">
            {chat.map((m) => (
              <div key={m.id} className="flex flex-col gap-1 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <span style={{ color: m.color }} className="text-[9px] font-black uppercase tracking-widest">{m.user}</span>
                <p className="text-zinc-300 text-[10px] font-bold uppercase tracking-wider bg-white/5 p-3 rounded-2xl border border-white/5">{m.text}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>

      </div>
    </div>
  );
}