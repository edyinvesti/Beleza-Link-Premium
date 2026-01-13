import { motion } from "framer-motion";
export default function PainelHome() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8">
      <h1 className="text-4xl font-light uppercase tracking-tighter">Painel <span className="text-[#F97316] font-black">Link</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="p-10 bg-zinc-900/30 border border-white/5 rounded-[40px] text-2xl uppercase font-light">Bem-vindo</div>
      </div>
    </motion.div>
  );
}