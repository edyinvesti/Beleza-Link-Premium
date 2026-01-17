import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react"; // Play removido daqui para evitar erro de 'não utilizado'
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
      live: <Live />, blog: <Blog />, crm: <CRM />, comunidades: <Curso />, curso: <Comunidade />, geo: <Geo />
    };
    return (
      <div className="relative bg-black min-h-screen">
        <button onClick={() => setCurrentView("home")} className="fixed top-8 left-8 z-[600] bg-[#F97316] text-black p-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-110 transition-all">← Voltar</button>
        {views[currentView]}
      </div>
    );
  }

  const cards = [
    { n: "Live", v: "live", tag: "AO VIVO", color: "bg-red-600", lock: false }, 
    { n: "Blog", v: "blog", tag: "FREE", color: "bg-green-600", lock: false }, 
    { n: "COMUNIDADE", v: "comunidades", tag: "FREE", color: "bg-green-600", lock: false },
    { n: "CURSO", v: "curso", tag: "FREE", color: "bg-green-600", lock: false },
    { n: "Geolocalização", v: "geo", tag: "FREE", color: "bg-green-600", lock: false }, 
    { n: "CRM", v: "crm", tag: "LOCK", color: "bg-zinc-800", lock: true }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#F97316]">
      <AnimatePresence mode="wait">
        {showSystem ? (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex items-center justify-center bg-black/95 z-[500] p-6">
             <div className="w-full max-w-sm bg-zinc-900 border-t-8 border-[#F97316] p-10 rounded-[40px] text-center border border-white/5 shadow-2xl">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F97316]/30">
                  <Lock size={30} className="text-[#F97316]" />
                </div>
                <h2 className="text-xl font-black mb-2 uppercase tracking-[0.2em]">Acesso Restrito</h2>
                <div className="space-y-4">
                  <button onClick={() => setShowSystem(false)} className="w-full bg-[#F97316] text-black font-black py-5 rounded-xl uppercase text-[10px] tracking-widest">Voltar</button>
                </div>
             </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <nav className="p-6 flex justify-between items-center sticky top-0 z-[100] bg-black/50 backdrop-blur-md border-b border-white/5">
              <h1 className="text-sm font-black tracking-[0.5em] uppercase italic">BELEZA <span className="text-[#F97316]">LINK</span></h1>
            </nav>
            <main className="max-w-7xl mx-auto px-6 py-12">
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                   <div className="h-12 w-3 bg-[#F97316] rounded-full"></div>
                   <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">NOSSA <br/>EXPERIÊNCIA</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {cards.map((item) => (
                    <div key={item.n} onClick={() => item.lock ? setShowSystem(true) : setCurrentView(item.v)} 
                      className="bg-zinc-900/50 p-10 rounded-[25px] border border-white/5 shadow-xl cursor-pointer transition-all group hover:bg-zinc-800 relative overflow-hidden">
                      {item.tag && (
                        <div className={`absolute top-0 right-0 ${item.color} px-8 py-3 rounded-bl-[30px] z-50`}>
                          <span className="text-[12px] font-black uppercase text-white">{item.tag}</span>
                        </div>
                      )}
                      <h3 className="text-2xl font-black uppercase text-white group-hover:text-[#F97316] transition-colors">{item.n}</h3>
                      <div className="text-[12px] text-zinc-400 font-black uppercase mt-8">Acessar Bloco →</div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="py-20 text-center">
                <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white/10 italic mb-16">MARCAS <span className="text-white/20">ELITE</span></h3>
                <div className="relative h-[450px] flex items-center justify-center overflow-hidden" style={{ perspective: "1500px" }}>
                  <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d", transform: isMobile ? `rotateX(${rotation}deg)` : `rotateY(${rotation}deg)` }}>
                    {["LUX GLOSS", "SELAGEM 3D", "PLATINUM PRO", "KYHEROS", "VELVET SKIN", "TREEH HAIR", "CHOKY COSMÉTICOS", "ELASTIKY", "LAED", "CHEQUY"].map((p, i) => (
                      <div key={i} className="absolute w-[180px] md:w-[320px] h-[80px] md:h-[120px] flex items-center justify-center rounded-[20px] bg-zinc-900 border-b-[6px] border-r-[6px] border-black shadow-xl" 
                        style={{ transform: isMobile ? `rotateX(${(i * 360) / 10}deg) translateZ(200px)` : `rotateY(${(i * 360) / 10}deg) translateZ(400px)`, backfaceVisibility: "hidden" }}>
                        <span className="text-[11px] md:text-xl font-black tracking-widest text-zinc-300 uppercase">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}