import { Play, Wifi, User } from "lucide-react";
import { useState } from "react";

export default function Live() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-24 p-4 md:p-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
            <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">Live <span className="text-red-600">Streaming</span></h2>
          </div>
          <div className="bg-zinc-900 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <User size={14} className="text-red-600" />
            <span className="text-[10px] font-black uppercase">1.2k Assistindo</span>
          </div>
        </div>

        {/* Player de Vídeo Original */}
        <div className="relative aspect-video w-full bg-zinc-900 rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/5 shadow-2xl">
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 cursor-pointer"
            >
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.5)]">
                <Play size={32} className="text-white fill-current ml-1" />
              </div>
              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-white">CLIQUE PARA ASSISTIR</p>
            </div>
          ) : (
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="mt-8 p-6 bg-zinc-900/50 rounded-[30px] border border-white/5">
          <h3 className="font-black uppercase text-sm mb-2">Beleza Link - Ao Vivo</h3>
          <p className="text-zinc-500 text-xs font-bold leading-relaxed uppercase tracking-widest">Sinal Digital Ativo</p>
        </div>
      </div>
    </div>
  );
}