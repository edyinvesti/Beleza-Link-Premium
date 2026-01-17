import { X, Award, User, ArrowLeft, BarChart3 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Curso() {
  const [selectedCurso, setSelectedCurso] = useState<any>(null);
  const [showLock, setShowLock] = useState(false);
  const [filtroAtivo, setFiltroAtivo] = useState("TODOS");
  const [showLogin, setShowLogin] = useState(false);

  // --- CONFIGURAÇÃO DOS CURSOS E CATEGORIAS ---
  const categorias = [
    {
      nome: "CABELEREIRO PROFISSIONAL",
      cursos: [
        { id: 1, titulo: "Arquitetura do Corte", img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=800", desc: "Domine a geometria e precisão dos cortes.", aulas: ["Ângulos", "Geometria"], horas: "15h", progresso: 65, linkHotmart: "#" },
        { id: 2, titulo: "Loiros de Luxo", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=500", desc: "Técnicas avançadas de mechas.", aulas: ["Ponto de abertura", "Neutralização"], horas: "10h", progresso: 10, linkHotmart: "#" }
      ]
    },
    {
      nome: "MANICURE & NAILS",
      cursos: [
        { id: 9, titulo: "Manicure de Luxo", img: "https://images.unsplash.com/photo-1604654894610-df490688a50e?q=80&w=800", desc: "Cutilagem russa e esmaltação perfeita.", aulas: ["Cutilagem a seco", "Esmaltação em Gel"], horas: "12h", progresso: 0, linkHotmart: "#" },
        { id: 11, titulo: "Alongamento em Fibra", img: "https://images.unsplash.com/photo-1632345031435-812727987766?q=80&w=800", desc: "A técnica mais lucrativa do mercado.", aulas: ["Ponto de tensão", "Manutenção"], horas: "18h", progresso: 90, linkHotmart: "#" }
      ]
    },
    {
      nome: "ESTÉTICA AVANÇADA",
      cursos: [
        { id: 20, titulo: "Limpeza de Pele Profunda", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800", desc: "Protocolos completos para extração e hidratação.", aulas: ["Anatomia da Pele", "Extração Manual"], horas: "20h", progresso: 40, linkHotmart: "#" },
        { id: 21, titulo: "Drenagem Linfática", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800", desc: "Técnicas corporais para redução de medidas.", aulas: ["Sistema Linfático", "Manobras"], horas: "25h", progresso: 15, linkHotmart: "#" }
      ]
    },
    {
      nome: "MAQUIAGEM PRO",
      cursos: [
        { id: 30, titulo: "Maquiagem Social", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800", desc: "Pele blindada e esfumado clássico.", aulas: ["Preparação de Pele", "Colorimetria"], horas: "12h", progresso: 50, linkHotmart: "#" },
        { id: 31, titulo: "Noivas de Gala", img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=800", desc: "Maquiagem de alta durabilidade para eventos.", aulas: ["Aplicação de Cílios", "Técnicas de Luz"], horas: "18h", progresso: 5, linkHotmart: "#" }
      ]
    }
  ];

  const listaFiltros = ["TODOS", "CABELEREIRO", "MANICURE", "ESTÉTICA", "MAQUIAGEM"];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-12 font-sans overflow-x-hidden">
      
      {/* --- NAVEGAÇÃO SUPERIOR --- */}
      <nav className="flex justify-between items-center mb-12 mt-4 relative z-[100] max-w-7xl mx-auto w-full">
        <div className="text-[#F97316] font-black text-xl italic tracking-tighter">BELEZA LINK</div>
        <button onClick={() => setShowLogin(true)} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 md:px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">
          <User size={14} /> <span className="hidden sm:inline">Portal do Aluno</span><span className="sm:hidden">Entrar</span>
        </button>
      </nav>

      {/* --- CABEÇALHO --- */}
      <header className="mb-12 relative z-10 max-w-7xl mx-auto w-full text-left">
        <h2 className="text-[2.4rem] md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.85] text-white">
          Sua Carreira na <br className="hidden md:block"/>
          <span className="text-[#F97316]">Beleza Começa Aqui</span> 
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {listaFiltros.map((f) => (
            <button key={f} onClick={() => setFiltroAtivo(f)} className={"px-6 py-3 rounded-2xl text-[10px] font-black tracking-widest transition-all border shrink-0 " + (filtroAtivo === f ? "bg-[#F97316] border-[#F97316] text-black shadow-lg" : "bg-white/5 border-white/5 text-zinc-500")}>
              {f}
            </button>
          ))}
        </div>
      </header>

      {/* --- GRID DE CURSOS --- */}
      <div className="max-w-7xl mx-auto w-full">
        {categorias.filter(cat => filtroAtivo === "TODOS" || cat.nome.includes(filtroAtivo)).map((secao, idx) => (
          <section key={idx} className="mb-12 text-left">
            <h3 className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase mb-6 pl-3 border-l-2 border-[#F97316] italic">{secao.nome}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {secao.cursos.map((curso) => (
                <div key={curso.id} onClick={() => {setSelectedCurso(curso); setShowLock(false);}} className="bg-zinc-900/40 rounded-[35px] overflow-hidden border border-white/5 shadow-2xl cursor-pointer group hover:border-[#F97316]/30 transition-all">
                  <div className="relative h-44 overflow-hidden">
                    <img src={curso.img} className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-black text-[12px] uppercase tracking-wide line-clamp-1 flex-1">{curso.titulo}</h4>
                      <span className="text-[10px] font-bold text-zinc-600 ml-2 italic">{curso.horas}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-[#F97316]" style={{ width: curso.progresso + '%' }}></div>
                      </div>
                      <span className="text-[9px] font-black text-zinc-500">{curso.progresso}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {selectedCurso && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[3000] flex items-end md:items-center justify-center bg-black/95 backdrop-blur-xl p-0 md:p-6 text-left">
             <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} className="w-full max-w-2xl bg-zinc-900 rounded-t-[50px] md:rounded-[50px] p-8 md:p-12 max-h-[95vh] overflow-y-auto border-t md:border border-white/10">
                <button onClick={() => setSelectedCurso(null)} className="mb-8 text-white/30 flex items-center gap-2 text-[11px] font-black uppercase tracking-widest hover:text-white"><ArrowLeft size={18}/> Voltar</button>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-1.5 rounded-full border border-green-500/10 text-[10px] font-black uppercase"><Award size={16} /> Certificado</div>
                  <div className="flex items-center gap-2 bg-orange-500/10 text-[#F97316] px-4 py-1.5 rounded-full border border-orange-500/10 text-[10px] font-black uppercase italic"><BarChart3 size={16} /> {selectedCurso.progresso}% Concluído</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-4 text-white">{selectedCurso.titulo}</h2>
                <p className="text-zinc-500 text-sm mb-10 leading-relaxed">{selectedCurso.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                   {selectedCurso.aulas.map((aula: any, i: number) => (
                     <div key={i} className="bg-white/5 p-4 rounded-2xl text-[10px] font-bold border border-white/5 uppercase flex items-center gap-3">
                       <div className="w-2 h-2 rounded-full bg-zinc-700"></div> {aula}
                     </div>
                   ))}
                </div>
                <button onClick={() => setShowLock(true)} className="w-full bg-white text-black py-6 rounded-3xl font-black uppercase text-[11px] tracking-[0.2em] active:scale-95 shadow-xl">Continuar Aula</button>
                {showLock && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8 border-t border-white/5 mt-8">
                    <p className="text-zinc-400 text-[10px] font-bold uppercase mb-8 tracking-[0.2em]">Libere o acesso Vitalício na Hotmart</p>
                    <button onClick={() => window.open(selectedCurso.linkHotmart, "_blank")} className="w-full bg-[#F97316] text-black py-6 rounded-3xl font-black uppercase text-[12px] tracking-[0.3em] shadow-2xl shadow-orange-600/30">MATRICULAR AGORA</button>
                  </motion.div>
                )}
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLogin && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[4000] flex items-center justify-center p-6 bg-black/98 backdrop-blur-2xl">
            <div className="w-full max-w-sm bg-zinc-900 border border-white/10 rounded-[45px] p-10 text-center relative shadow-3xl">
               <button onClick={() => setShowLogin(false)} className="absolute top-8 right-8 text-white/20"><X size={24} /></button>
               <h3 className="text-xl font-black uppercase mb-8 italic">Beleza Link <span className="text-[#F97316]">Login</span></h3>
               <input type="email" placeholder="USUÁRIO" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl mb-3 text-xs font-bold focus:border-[#F97316] outline-none" />
               <input type="password" placeholder="SENHA" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl mb-8 text-xs font-bold focus:border-[#F97316] outline-none" />
               <button onClick={() => setShowLogin(false)} className="w-full bg-[#F97316] text-black py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-orange-600/20">Acessar Painel</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}