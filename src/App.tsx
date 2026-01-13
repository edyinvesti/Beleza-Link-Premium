import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Calendar, Users, LogOut, ChevronDown, Radio, Newspaper, Database, MapPin, GraduationCap, Lock } from "lucide-react";
import SplashScreen from "./components/SplashScreen";
import Live from "./screens/Live";
import Blog from "./screens/Blog";
import Comunidade from "./screens/Comunidade";
import Academy from "./screens/Academy";

export default function App() {
  const [finished, setFinished] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showSystem, setShowSystem] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showComunidade, setShowComunidade] = useState(false);
  const [showAcademy, setShowAcademy] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (finished && !showSystem) {
      const interval = setInterval(() => setRotation(prev => prev - 0.4), 30);
      return () => clearInterval(interval);
    }
  }, [finished, showSystem]);

  const getWhatsAppLink = (partner: string) => {
    let number = "5562992115143";
    if (partner === "PLATINUM PRO") number = "5562991598393";
    else if (partner === "YGRY") number = "5562984231649";
    else if (partner === "NATURAL LISS") number = "5562985811896";
    else if (partner === "AKY LISSO") number = "5562993047719";
    else if (partner === "SELAGEM 3D") number = "5511940635561";
    else if (partner === "ONILISS") number = "5562985811896";
    const message = `Olá! Vim pelo Beleza Link e quero saber mais sobre a marca ${partner}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  };

  if (!finished) return <SplashScreen onFinish={() => setFinished(true)} />;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#F97316]">
      <AnimatePresence mode="wait">

        {showSystem && isLoggedIn ? (
          <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex min-h-screen bg-black">
            <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 border-r border-white/5 p-6 hidden md:flex flex-col z-[100]">
              <h2 className="text-[#F97316] font-black text-xl uppercase italic mb-12">Painel <span className="text-white">Link</span></h2>
              <nav className="flex-1 space-y-3">
                {[
                  { name: "Painel", icon: LayoutDashboard, active: true },
                  { name: "Agenda", icon: Calendar, active: false },
                  { name: "Clientes", icon: Users, active: false }
                ].map((item) => (
                  <div key={item.name} className={`flex items-center gap-4 p-4 rounded-[15px] border-b-4 border-black/40 transition-all ${item.active ? "bg-[#F97316] text-black" : "bg-zinc-900 text-zinc-500 hover:bg-zinc-800"}`}>
                    <item.icon size={18} /> <span className="text-[10px] font-black uppercase tracking-widest">{item.name}</span>
                  </div>
                ))}
              </nav>
              <button onClick={() => { setIsLoggedIn(false); setShowSystem(false); }} className="flex items-center gap-4 text-red-500/40 p-4 border-t border-white/5 text-[10px] font-black uppercase tracking-widest hover:text-red-500"><LogOut size={18} /> Sair</button>
            </aside>
            <main className="flex-1 md:ml-64 p-8">
              <h1 className="text-4xl font-black uppercase tracking-tighter">SISTEMA <span className="text-[#F97316] italic">Beleza Link</span></h1>
            </main>
          </motion.div>
        ) : showLive ? (
          <motion.div key="live" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-black relative">
            <button onClick={() => setShowLive(false)} className="absolute top-6 left-6 z-50 text-white/50 hover:text-white uppercase text-[10px] font-black tracking-widest flex items-center gap-2">
              ← Voltar
            </button>
            <Live />
          </motion.div>
        ) : showBlog ? (
          <motion.div key="blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-black relative">
            <button onClick={() => setShowBlog(false)} className="absolute top-6 left-6 z-50 text-white/50 hover:text-white uppercase text-[10px] font-black tracking-widest flex items-center gap-2">
              ← Voltar
            </button>
            <Blog />
          </motion.div>
        ) : showComunidade ? (
          <motion.div key="comunidade" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-black relative">
            <button onClick={() => setShowComunidade(false)} className="absolute top-6 left-6 z-50 text-white/50 hover:text-white uppercase text-[10px] font-black tracking-widest flex items-center gap-2">
              ← Voltar
            </button>
            <Comunidade />
          </motion.div>
        ) : showAcademy ? (
          <motion.div key="academy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-black relative">
            <Academy onBack={() => setShowAcademy(false)} />
          </motion.div>
        ) : showSystem && !isLoggedIn ? (
          <motion.div key="login" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-xl z-[500] p-6">
            <div className="w-full max-w-sm bg-zinc-900 border-t-8 border-[#F97316] p-10 rounded-[30px] text-center shadow-[0_20px_50px_rgba(0,0,0,1)]">
              <button onClick={() => setShowSystem(false)} className="text-zinc-600 mb-8 uppercase text-[9px] font-black tracking-widest hover:text-[#F97316]">← Voltar</button>
              <h2 className="text-xl font-black tracking-[0.2em] mb-10 uppercase">Acesso <span className="text-[#F97316]">Restrito</span></h2>
              <div className="space-y-3">
                <input type="text" placeholder="USUÁRIO" className="w-full bg-black border-b-4 border-white/5 p-5 rounded-[15px] outline-none text-[10px] font-black tracking-widest uppercase focus:border-[#F97316]" />
                <input type="password" placeholder="SENHA" className="w-full bg-black border-b-4 border-white/5 p-5 rounded-[15px] outline-none text-[10px] font-black tracking-widest uppercase focus:border-[#F97316]" />
                <button onClick={() => setIsLoggedIn(true)} className="w-full bg-[#F97316] text-black font-black py-5 rounded-[15px] uppercase tracking-[0.3em] text-[10px] border-b-4 border-orange-900 active:border-b-0 active:translate-y-1 transition-all">Conectar Bloco</button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div key="site" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <nav className="p-6 flex justify-between items-center sticky top-0 z-[100] bg-black/80 backdrop-blur-md">
              <h1 className="text-sm font-black tracking-[0.5em] uppercase italic">BELEZA <span className="text-[#F97316]">LINK</span></h1>
            </nav>
            <main className="max-w-7xl mx-auto px-6 py-12">
              <section className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-12 w-3 bg-[#F97316] rounded-full"></div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">NOSSA <br />EXPERIÊNCIA</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "Live", icon: Radio },
                    { name: "Curso", icon: GraduationCap },
                    { name: "Comunidade", icon: Users },
                    { name: "Blog", icon: Newspaper },
                    { name: "CRM", icon: Database },
                    { name: "Geolocalização", icon: MapPin }
                  ].map((item) => {
                    const isLive = item.name === "Live";
                    const isBlog = item.name === "Blog";
                    const isComunidade = item.name === "Comunidade";
                    const isAcademy = item.name === "Curso";
                    const isFree = isLive || isBlog || isComunidade || isAcademy;

                    return (
                      <div key={item.name}
                        onClick={() => {
                          if (isLive) setShowLive(true);
                          else if (isBlog) setShowBlog(true);
                          else if (isComunidade) setShowComunidade(true);
                          else if (isAcademy) setShowAcademy(true);
                          else setShowSystem(true);
                        }}
                        className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-[25px] shadow-2xl cursor-pointer transition-all group hover:bg-[#F97316]/10 hover:shadow-[#F97316]/20 hover:scale-105 active:scale-95">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-3 bg-zinc-800 rounded-2xl group-hover:bg-[#F97316] transition-colors relative">
                            <item.icon size={24} className="text-white" />
                            {isLive && (
                              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                              </span>
                            )}
                          </div>
                          {!isFree && <Lock size={16} className="text-zinc-600 group-hover:text-[#F97316] transition-colors" />}
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-2">{item.name}</h3>
                        <div className="flex items-center justify-between mt-4">
                          <div className="text-[9px] text-zinc-500 font-black uppercase tracking-widest group-hover:text-[#F97316] transition-colors">
                            {isFree ? "Acessar Agora →" : "Conectar →"}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="py-20 text-center">
                <div className="flex flex-col items-center mb-16">
                  <h3 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-white italic">MARCAS <span className="text-[#F97316]">ELITE</span></h3>
                  <div className="flex flex-col items-center mt-8">
                    <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#F97316] mb-2 scale-110">
                      SELECIONE E CLIQUE
                    </p>
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                      <ChevronDown size={28} className="text-[#F97316]" />
                    </motion.div>
                  </div>
                </div>

                <div className="relative h-[500px] flex items-center justify-center overflow-hidden" style={{ perspective: "1500px" }}>
                  <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: "preserve-3d", transform: isMobile ? `rotateX(${rotation}deg)` : `rotateY(${rotation}deg)` }}>
                    {[
                      { name: "LUX GLOSS", logo: "https://placehold.co/150x50/black/FFF?text=LUX+GLOSS" },
                      { name: "SELAGEM 3D", logo: "https://placehold.co/150x50/black/FFF?text=SELAGEM" },
                      { name: "PLATINUM PRO", logo: "https://placehold.co/150x50/black/FFF?text=PLATINUM" },
                      { name: "KYHEROS", logo: "/Beleza-Link/kyheros-logo.png" },
                      { name: "ONILISS", logo: "/Beleza-Link/oniliss-logo.png" },
                      { name: "TREEH HAIR", logo: "https://placehold.co/150x50/black/FFF?text=TREEH" },
                      { name: "AKY LISSO", logo: "/Beleza-Link/aky-lisso-logo.png" },
                      { name: "YGRY", logo: "/Beleza-Link/ygry-logo.png" },
                      { name: "LAED", logo: "/Beleza-Link/laed-logo.png" },
                      { name: "NATURAL LISS", logo: "https://placehold.co/150x50/black/FFF?text=NATURAL" }
                    ].map((p, i) => (
                      <div key={i}
                        onClick={(e) => { e.stopPropagation(); window.open(getWhatsAppLink(p.name), "_blank"); }}
                        className={`absolute w-[180px] md:w-[320px] h-[80px] md:h-[120px] flex items-center justify-center rounded-[20px] cursor-pointer active:scale-95 transition-all hover:bg-[#F97316] group overflow-hidden ${p.name === "LAED" ? "bg-white" : p.name === "KYHEROS" ? "bg-[#F97316]" : p.name === "ONILISS" ? "bg-[#8B1A1A]" : p.name === "AKY LISSO" ? "bg-[#0081C9]" : "bg-zinc-900"}`}
                        style={{
                          transform: isMobile ? `rotateX(${(i * 360) / 10}deg) translateZ(220px)` : `rotateY(${(i * 360) / 10}deg) translateZ(450px)`,
                          backfaceVisibility: "hidden"
                        }}>
                        <div className={`absolute top-2 left-2 w-2 h-2 rounded-full group-hover:bg-white/20 z-10 ${p.name === "LAED" ? "bg-black/5" : "bg-white/5"}`}></div>
                        <img
                          src={p.logo}
                          alt={p.name}
                          className={`w-[85%] h-[75%] object-contain transition-all ${p.name === "LAED" || p.name === "KYHEROS" || p.name === "ONILISS" || p.name === "AKY LISSO" ? "group-hover:brightness-110" : "opacity-70 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert grayscale group-hover:grayscale-0"}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-12 text-center"
                >
                  <p className="text-zinc-500 text-[10px] font-black tracking-[0.8em] uppercase">
                    Tecnologia em Beleza
                  </p>
                </motion.div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}