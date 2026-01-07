import { useEffect, useState } from 'react';

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onFinish, 500); // Tempo para a animação de saída terminar
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center">
        {/* Logo Animado */}
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-white animate-pulse">
            BELEZA <span className="text-amber-500">LINK</span>
          </h1>
          {/* Brilho que passa por trás do texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent skew-x-12 animate-[shimmer_2s_infinite] pointer-events-none"></div>
        </div>

        {/* Barra de carregamento estilo iOS/Digital Bank */}
        <div className="w-48 h-[2px] bg-zinc-800 mt-8 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 animate-[loading_2.5s_ease-in-out]"></div>
        </div>

        <p className="mt-4 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 animate-bounce">
          Access
        </p>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

