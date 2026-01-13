import { motion } from "framer-motion";
import { Clock } from "lucide-react";
export default function Agenda() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8">
      <h2 className="text-3xl font-light uppercase tracking-tighter text-zinc-300">Agenda <span className="font-serif italic text-zinc-600">Online</span></h2>
      <div className="mt-8 bg-zinc-950 border border-white/5 p-6 rounded-[30px] flex items-center justify-between">
        <div className="flex items-center gap-4"><Clock className="text-[#F97316]" /><span className="text-sm font-bold uppercase">Nenhum agendamento hoje</span></div>
      </div>
    </motion.div>
  );
}