import { Lock, Play, X, CheckCircle2, Award, Clock, Smartphone, User, ArrowLeft, BarChart3, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Curso({ onBack }: any) {
  const [selectedCurso, setSelectedCurso] = useState<any>(null);
  const [filtroAtivo, setFiltroAtivo] = useState("TODOS");
  const [showLogin, setShowLogin] = useState(false);

  const categorias = [
    { nome: "CABELEREIRO PROFISSIONAL", cursos: [{ id: 1, titulo: "Arquitetura do Corte", img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5", desc: "Domine a geometria.", linkHotmart: "#" }] },
    { nome: "MANICURE", cursos: [{ id: 3, titulo: "Nail Art", img: "https://images.unsplash.com/photo-1604654894610-df490688a50e", desc: "Design avançado.", linkHotmart: "#" }] }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8">
      <button onClick={onBack} className="mb-6 md:mb-8 bg-[#F97316] text-black px-4 md:px-6 py-3 md:py-2 rounded-full font-bold uppercase italic text-sm min-h-[44px] min-w-[44px]">← Voltar ao Sistema</button>
      <h2 className="text-2xl md:text-4xl font-black italic text-[#F97316] mb-8 md:mb-12">CURSOS BELEZA LINK</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {categorias.map(cat => cat.cursos.map(curso => (
          <div key={curso.id} className="bg-zinc-900 rounded-[20px] md:rounded-[30px] overflow-hidden border border-white/5 shadow-2xl">
            <img src={curso.img} className="w-full h-40 md:h-48 object-cover opacity-50" />
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-black uppercase mb-3 md:mb-4">{curso.titulo}</h3>
              <button onClick={() => setShowLogin(true)} className="w-full bg-white/10 py-3 md:py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F97316] hover:text-black active:bg-[#F97316] active:text-black transition-all text-sm min-h-[44px]">
                <Lock size={16} /> ACESSAR CURSO
              </button>
            </div>
          </div>
        )))}
      </div>
      <AnimatePresence>
        {showLogin && (
          <motion.div className="fixed inset-0 z-[5000] bg-black/95 flex items-center justify-center p-4 md:p-6">
            <div className="bg-zinc-900 p-6 md:p-10 rounded-[30px] md:rounded-[40px] border-t-8 border-[#F97316] text-center max-w-sm w-full">
              <Lock size={32} className="mx-auto text-[#F97316] mb-3 md:mb-4 md:w-10 md:h-10" />
              <h3 className="font-black uppercase mb-4 md:mb-6 text-base md:text-lg">Acesso Pro</h3>
              <input type="password" placeholder="CHAVE DE ACESSO" className="w-full bg-black p-3 md:p-4 rounded-xl mb-3 md:mb-4 text-center outline-none border border-white/10 focus:border-[#F97316] text-sm min-h-[44px]" />
              <button onClick={() => setShowLogin(false)} className="w-full bg-[#F97316] text-black font-black py-3 md:py-4 rounded-xl uppercase text-sm min-h-[44px] active:scale-95 transition-all">Desbloquear</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}