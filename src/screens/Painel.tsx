import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Painel() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 pt-8 text-left pb-24 md:pb-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 p-8">
        <h1 className="text-4xl font-black italic tracking-tighter text-white uppercase">EDY <span className="text-[#F97316]">CARLOS</span></h1>
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Barbearia do Edy • Anápolis</p>
      </div>
      <div className="space-y-4">
        <div onClick={() => navigate("/ia")} className="bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between cursor-pointer hover:border-[#F97316]/50 transition-all">
          <div>
            <Zap size={24} className="text-[#F97316] mb-4" />
            <h3 className="text-xl font-black uppercase italic text-white">Mestre da Beleza</h3>
            <p className="text-zinc-500 text-[10px] font-bold uppercase mt-1">Consultoria com IA</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}