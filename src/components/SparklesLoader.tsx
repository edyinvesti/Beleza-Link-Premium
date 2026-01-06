import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function SparklesLoader() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
    
    // Função para gerar o som de "Bip" elegante de banco digital
    const playStartupSound = () => {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioCtx = new AudioContext();
        
        // Primeiro tom (Grave)
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(220, audioCtx.currentTime); 
        gain1.gain.setValueAtTime(0, audioCtx.currentTime);
        gain1.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.05);
        gain1.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        
        // Segundo tom (Agudo - Harmónico)
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(440, audioCtx.currentTime + 0.1);
        gain2.gain.setValueAtTime(0, audioCtx.currentTime + 0.1);
        gain2.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.15);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6);

        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);

        osc1.start();
        osc2.start();
        osc1.stop(audioCtx.currentTime + 0.6);
        osc2.stop(audioCtx.currentTime + 0.6);
      } catch (e) {
        console.log("Áudio bloqueado pelo navegador até interação do user.");
      }
    };

    // Toca o som após um pequeno delay para garantir o carregamento
    const timer = setTimeout(playStartupSound, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-[999] transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute w-64 h-64 bg-amber-500/20 blur-[100px] rounded-full animate-pulse" />
      
      <div className="relative flex flex-col items-center animate-bounce">
        <div className="bg-amber-500 p-6 rounded-[40px] shadow-[0_0_50px_rgba(245,158,11,0.4)]">
          <Sparkles size={60} className="text-black" />
        </div>
        <h1 className="mt-8 text-3xl font-black italic tracking-tighter text-white uppercase">
          BELEZA LINK <span className="text-amber-500">PREMIUM</span>
        </h1>
      </div>

      <div className="absolute bottom-12 flex flex-col items-center gap-4">
        <div className="w-12 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
          <div className="w-full h-full bg-amber-500 origin-left animate-[loading_2s_ease-in-out_infinite]" />
        </div>
        <p className="text-zinc-600 text-[10px] font-black tracking-[0.3em] uppercase opacity-50">Nexo OS Security Systems</p>
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
