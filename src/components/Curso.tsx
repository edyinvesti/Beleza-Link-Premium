import { Lock, Play, X, CheckCircle2, Award, Clock, Smartphone, User, ArrowLeft, BarChart3, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Curso({onBack}: any) {
  const [selectedCurso, setSelectedCurso] = useState<any>(null);
  const [filtroAtivo, setFiltroAtivo] = useState("TODOS");
  const [showLogin, setShowLogin] = useState(false);

  const categorias = [
    { nome: "CABELEREIRO PROFISSIONAL", cursos: [{ id: 1, titulo: "Arquitetura do Corte", img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5", desc: "Domine a geometria.", linkHotmart: "#" }] },
    { nome: "MANICURE", cursos: [{ id: 3, titulo: "Nail Art", img: "https://images.unsplash.com/photo-1604654894610-df490688a50e", desc: "Design avançado.", linkHotmart: "#" }] }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <button onClick={onBack} className="mb-8 bg-[#F97316] text-black px-6 py-2 rounded-full font-bold uppercase italic">← Voltar ao Sistema</button>
      <h2 className="text-4xl font-black italic text-[#F97316] mb-12">CURSOS BELEZA LINK</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categorias.map(cat => cat.cursos.map(curso => (
          <div key={curso.id} className="bg-zinc-900 rounded-[30px] overflow-hidden border border-white/5 shadow-2xl">
            <img src={curso.img} className="w-full h-48 object-cover opacity-50" />
            <div className="p-6">
              <h3 className="text-xl font-black uppercase mb-4">{curso.titulo}</h3>
              <button onClick={() => setShowLogin(true)} className="w-full bg-white/10 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F97316] hover:text-black transition-all">
                <Lock size={16} /> ACESSAR CURSO
              </button>
            </div>
          </div>
        )))}
      </div>
      <AnimatePresence>
        {showLogin && (
          <motion.div className="fixed inset-0 z-[5000] bg-black/95 flex items-center justify-center p-6">
            <div className="bg-zinc-900 p-10 rounded-[40px] border-t-8 border-[#F97316] text-center max-w-sm w-full">
              <Lock size={40} className="mx-auto text-[#F97316] mb-4" />
              <h3 className="font-black uppercase mb-6">Acesso Pro</h3>
              <input type="password" placeholder="CHAVE DE ACESSO" className="w-full bg-black p-4 rounded-xl mb-4 text-center outline-none border border-white/10 focus:border-[#F97316]" />
              <button onClick={() => setShowLogin(false)} className="w-full bg-[#F97316] text-black font-black py-4 rounded-xl uppercase">Desbloquear</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}