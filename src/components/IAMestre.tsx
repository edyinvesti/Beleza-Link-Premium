import { motion } from "framer-motion";
export default function IAMestre() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 bg-zinc-950 border border-[#F97316]/20 rounded-[40px]">
      <h2 className="text-4xl font-black italic uppercase text-[#F97316]">IA Preditora</h2>
    </motion.div>
  );
}