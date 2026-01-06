import { Sparkles } from 'lucide-react';

export function SparklesLoader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[999]">
      {/* Efeito de brilho ao fundo */}
      <div className="absolute w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full animate-pulse" />
      
      {/* Logo Centralizado */}
      <div className="relative flex flex-col items-center animate-bounce">
        <div className="bg-amber-500 p-6 rounded-[40px] shadow-[0_0_50px_rgba(245,158,11,0.3)]">
          <Sparkles size={60} className="text-black" />
        </div>
        <h1 className="mt-8 text-3xl font-black italic tracking-tighter text-white uppercase">
          BELEZA LINK <span className="text-amber-500">PREMIUM</span>
        </h1>
      </div>

      {/* Indicador de carregamento inferior estilo iOS */}
      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-amber-500 origin-left animate-[loading_2s_ease-in-out_infinite]" />
        </div>
        <p className="text-zinc-600 text-xs font-bold tracking-[0.2em] uppercase">Nexo OS Security</p>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </div>
  );
}
