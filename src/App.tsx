import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Lock } from "lucide-react";
import SplashScreen from "./components/SplashScreen";
import Live from "./components/Live";
import Blog from "./components/Blog";
import CRM from "./components/CRM";
import Comunidade from "./components/Comunidade";
import Curso from "./components/Curso";
import Geo from "./components/Geo";

export default function App() {
  const [finished, setFinished] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [currentView, setCurrentView] = useState("home");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (finished && currentView === "home" && !showSystem) {
      let frameId: number;
      const animate = () => {
        setRotation(prev => prev - 0.3);
        frameId = requestAnimationFrame(animate);
      };
      frameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frameId);
    }
  }, [finished, currentView, showSystem]);

  if (!finished) return <SplashScreen onFinish={() => setFinished(true)} />;

  if (currentView !== "home") {
    const views: { [key: string]: any } = { 
      live: <Live onBack={() => setCurrentView("home")} />, 
      blog: <Blog onBack={() => setCurrentView("home")} />, 
      crm: <CRM onBack={() => setCurrentView("home")} />, 
      comunidades: <Comunidade onBack={() => setCurrentView("home")} />, 
      curso: <Curso onBack={() => setCurrentView("home")} />,
      geo: <Geo onBack={() => setCurrentView("home")} />
    };
    return (
      <div className="relative bg-black min-h-screen">
        <button onClick={() => setCurrentView("home")} className="fixed top-8 left-8 z-[600] bg-[#F97316] text-black p-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-110 transition-all">← Voltar</button>
        {views[currentView]}
      </div>
    );
  }

  const cards = [
    { n: "Live", v: "live", tag: "AO VIVO", color: "bg-red-600", lock: false }, 
    { n: "Blog", v: "blog", tag: "FREE", color: "bg-green-600", lock: false }, 
    { n: "COMUNIDADE", v: "comunidades", tag: "FREE", color: "bg-green-600", lock: false },
    { n: "CURSO", v: "curso", tag: "LOCK", color: "bg-zinc-800", lock: true },
    { n: "Geolocalização", v: "geo", tag: "FREE", color: "bg-green-600", lock: false }, 
    { n: "CRM", v: "crm", tag: "LOCK", color: "bg-zinc-800", lock: true }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#F97316]">
      <AnimatePresence mode="wait">
        {showSystem ? (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-2xl z-[500] p-6">
             <div className="w-full max-w-sm bg-zinc-900 border-t-8 border-[#F97316] p-10 rounded-[40px] text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F97316]/30">
                  <Lock size={30} className="text-[#F97316]" />
                </div>
                <h2 className="text-xl font-black mb-2 uppercase tracking-[0.2em]">Acesso Restrito</h2>
                <p className="text-zinc-500 text-[10px] font-bold uppercase mb-8 tracking-widest">Este bloco é exclusivo para membros Pro</p>
                <div className="space-y-4">
                  <input type="password" placeholder="SUA CHAVE DE ACESSO" className="w-full bg-black border border-white/10 p-4 rounded-xl text-center text-[10px] font-black tracking-[0.5em] focus:border-[#F97316] outline-none transition-all" />
                  <button onClick={() => setShowSystem(false)} className="w-full bg-[#F97316] text-black font-black py-5 rounded-xl uppercase text-[10px] tracking-widest hover:scale-105 transition-all">Desbloquear</button>
                  <button onClick={() => setShowSystem(false)} className="w-full bg-transparent text-zinc-600 font-black py-2 rounded-xl uppercase text-[9px] tracking-widest hover:text-white">Voltar</button>
                </div>
             </div>
          </motion.div>
        ) : (
          <motion.div key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <nav className="p-6 flex justify-between items-center sticky top-0 z-[100] bg-black/80 backdrop-blur-md border-b-4 border-white/5">
              <h1 className="text-sm font-black tracking-[0.5em] uppercase italic">BELEZA <span className="text-[#F97316]">LINK</span></h1>
            </nav>
            <main className="max-w-7xl mx-auto px-6 py-12">
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                   <div className="h-12 w-3 bg-[#F97316] rounded-full"></div>
                   <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">NOSSA <br/>EXPERIÊNCIA</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cards.map((item) => (
                    <div key={item.n} 
                      onClick={() => { 
                        if (item.lock) setShowSystem(true);
                        else setCurrentView(item.v); 
                      }} 
                      className="bg-zinc-900 p-10 rounded-[25px] border-l-8 border-l-zinc-700 border-b-8 border-black shadow-xl cursor-pointer transition-all group hover:border-l-[#F97316] relative overflow-hidden">
                      {item.tag && (
                        <div className={`absolute top-0 right-0 ${item.color} px-8 py-3 rounded-bl-[30px] animate-pulse z-50 flex items-center justify-center`}>
                          {item.tag === "LOCK" ? <Lock size={14} className="text-white" /> : <span className="text-[12px] font-black uppercase text-white">{item.tag}</span>}
                        </div>
                      )}
                      <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#F97316] transition-colors">{item.n}</h3>
                      <div className="text-[12px] text-zinc-400 font-black uppercase mt-8 group-hover:text-white transition-all">Acessar Bloco →</div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="py-20 text-center">
                <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white italic mb-16">MARCAS <span className="text-[#F97316]">ELITE</span></h3>
                <div className="relative h-[450px] flex items-center justify-center overflow-hidden" style={{ perspective: "1500px" }}>
                  <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d", transform: isMobile ? `rotateX(${rotation}deg)` : `rotateY(${rotation}deg)`, willChange: "transform" }}>
                    {["LUX GLOSS", "SELAGEM 3D", "PLATINUM PRO", "KYHEROS", "VELVET SKIN", "TREEH HAIR", "AKY LISSO", "YGRY", "LAED", "NATURAL LISS"].map((p, i) => (
                      <div key={i} className="absolute w-[180px] md:w-[320px] h-[80px] md:h-[120px] flex items-center justify-center rounded-[20px] bg-zinc-900 border-b-[6px] border-r-[6px] border-black shadow-xl cursor-pointer hover:bg-[#F97316] group" 
                           style={{ transform: isMobile ? `rotateX(${(i * 360) / 10}deg) translateZ(200px)` : `rotateY(${(i * 360) / 10}deg) translateZ(400px)`, backfaceVisibility: "hidden" }}>
                        <span className="text-[11px] md:text-xl font-black tracking-widest text-zinc-300 uppercase group-hover:text-black transition-colors">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <footer className="mt-32 pb-12 text-center border-t border-white/5 pt-12">
                <p className="text-[12px] font-black uppercase tracking-[0.5em] text-zinc-500">© 2026 Beleza Link</p>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}