import { motion } from "framer-motion";
export default function CRM() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black uppercase italic mb-8">Gestão <span className="text-[#F97316]">CRM</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-10 rounded-[30px] border-b-8 border-orange-600 shadow-2xl">
            <h4 className="font-black text-[10px] tracking-widest uppercase mb-4 text-zinc-500">Clientes Ativos</h4>
            <span className="text-5xl font-black italic">1.240</span>
          </div>
          <div className="bg-zinc-900 p-10 rounded-[30px] border-b-8 border-zinc-800 shadow-2xl">
            <h4 className="font-black text-[10px] tracking-widest uppercase mb-4 text-zinc-500">Agendamentos</h4>
            <span className="text-5xl font-black italic">18</span>
          </div>
        </div>
      </div>
    </div>
  );
}