import { User, ArrowLeft, Sparkles, Check, ShieldCheck } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Curso() {
  const [selectedCurso, setSelectedCurso] = useState<any>(null);
  const [showLock, setShowLock] = useState(false);
  const [filtroAtivo, setFiltroAtivo] = useState("TODOS");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showLock) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showLock]);

  const categorias = [
    {
      nome: "CABELEREIRO",
      cursos: [
        { 
          id: 101, 
          titulo: "Técnicas de Cortes de Cabelos Femininos", 
          link: "https://go.hotmart.com/E103910855H", 
          img: "https://static-media.hotmart.com/aVE4p28CVQlmqHdXKoP5PJlATVI=/filters:background_color(white)/hotmart/product_pictures/7acc5c35-d8f8-432c-99b6-0eb04cbae124/Rogerquadrado51.png", 
          desc: "Domine as técnicas mais requisitadas de cortes femininos com o método oficial." 
        },
        { 
          id: 102, 
          titulo: "Cortes Femininos & Texturização", 
          link: "https://go.hotmart.com/D103911084L", 
          img: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=800", 
          desc: "Domine do corte básico ao extravagante com segurança total e excelência." 
        },
        { 
          id: 103, 
          titulo: "Alisamentos & Escovas", 
          link: "https://go.hotmart.com/E103910855H", 
          img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800", 
          desc: "Técnicas de alisamento seguro, selagens e escovas de alto padrão." 
        }
      ]
    },
    {
      nome: "MAQUIAGEM",
      cursos: [
        { 
          id: 201, 
          titulo: "Maquiagem na Web Pro", 
          link: "https://go.hotmart.com/D103912119J", 
          img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800", 
          desc: "Curso completo com Andreia Venturini. Técnicas para festas e noivas." 
        }
      ]
    },
    {
      nome: "SOBRANCELHAS",
      cursos: [
        { 
          id: 301, 
          titulo: "Design de Sobrancelhas", 
          link: "#", 
          img: "https://images.unsplash.com/photo-1522337300244-245156477ccb?q=80&w=800", 
          desc: "Aprenda a mapear e desenhar sobrancelhas perfeitas." 
        }
      ]
    },
    {
      nome: "MANICURE",
      cursos: [
        { 
          id: 401, 
          titulo: "Alongamento de Unhas", 
          link: "#", 
          img: "https://images.unsplash.com/photo-1604654894610-df490982570d?q=80&w=800", 
          desc: "Técnicas profissionais de gel e fibra de vidro." 
        }
      ]
    }
  ];

  const filtros = ["TODOS", "CABELEREIRO", "MAQUIAGEM", "SOBRANCELHAS", "MANICURE"];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans text-left pb-20">
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-black/80 backdrop-blur-lg border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-[#F97316] font-black text-2xl italic tracking-tighter uppercase">BELEZA LINK</div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest flex items-center gap-2">
            <ShieldCheck size={14} className="text-green-500" /> SISTEMA SEGURO
          </div>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">HUB <br/> <span className="text-[#F97316]">BELEZA.</span></h1>
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {filtros.map(f => (
              <button key={f} onClick={() => setFiltroAtivo(f)} className={"px-8 py-3 rounded-2xl text-[10px] font-black tracking-widest border transition-all shrink-0 " + (filtroAtivo === f ? "bg-[#F97316] border-[#F97316] text-black shadow-lg" : "bg-white/5 border-white/5 text-zinc-500 hover:text-white")}>{f}</button>
            ))}
          </div>
        </header>

        {categorias.filter(c => filtroAtivo === "TODOS" || c.nome === filtroAtivo).map((cat, i) => (
          <section key={i} className="mb-20">
            <h2 className="text-[10px] font-black tracking-[0.3em] text-zinc-500 uppercase mb-8 flex items-center gap-4"><span className="w-12 h-[1px] bg-[#F97316]"></span> {cat.nome}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.cursos.map(curso => (
                <div key={curso.id} onClick={() => {setSelectedCurso(curso); setShowLock(false);}} className="group relative bg-zinc-900/50 rounded-[40px] border border-white/5 overflow-hidden hover:border-[#F97316]/50 transition-all cursor-pointer shadow-2xl flex flex-col">
                  <div className="relative w-full h-64 overflow-hidden bg-white">
                    <img src={curso.img} className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="text-xl font-black uppercase italic mb-2 group-hover:text-[#F97316] transition-colors">{curso.titulo}</h3>
                    <div className="flex items-center gap-2 text-[#F97316] text-[9px] font-black tracking-widest uppercase">DISPONÍVEL</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <AnimatePresence>
        {selectedCurso && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[2000] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="w-full max-w-xl bg-zinc-900 border border-white/10 rounded-[50px] p-10 relative text-left">
              <button onClick={() => setSelectedCurso(null)} className="absolute top-8 left-8 text-zinc-500 hover:text-white flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all"><ArrowLeft size={16}/> Voltar</button>
              <div className="mt-12">
                <h2 className="text-4xl font-black uppercase italic leading-none mb-6 text-white">{selectedCurso.titulo}</h2>
                <p className="text-zinc-400 mb-8 leading-relaxed font-medium">{selectedCurso.desc}</p>
                {!showLock ? (
                  <button onClick={() => setShowLock(true)} className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-[#F97316] transition-all">Ver Detalhes</button>
                ) : (
                  <div ref={bottomRef}>
                    <button onClick={() => window.open(selectedCurso.link, "_blank")} className="w-full bg-[#F97316] text-black py-6 rounded-3xl font-black uppercase text-xs tracking-widest shadow-xl shadow-orange-600/30">MATRICULAR AGORA</button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}