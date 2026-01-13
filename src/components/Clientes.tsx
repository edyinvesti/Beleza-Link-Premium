import { motion, AnimatePresence } from "framer-motion";
import { Plus, RefreshCcw, X, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Clientes() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estados do formulário
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [marca, setMarca] = useState("SELAGEM 3D");

  async function fetchClientes() {
    setLoading(true);
    const { data, error } = await supabase.from("clientes").select("*").order("created_at", { ascending: false });
    if (!error && data) setClientes(data);
    setLoading(false);
  }

  async function handleAddCliente(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from("clientes").insert([{ nome, telefone, marca, status: "Ativo" }]);

    if (!error) {
      setNome(""); setTelefone(""); setIsModalOpen(false);
      fetchClientes();
    } else {
      alert("Erro ao salvar: Verifique sua tabela no Supabase.");
    }
  }

  useEffect(() => { fetchClientes(); }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-light uppercase tracking-tighter text-zinc-300">Gestão de <span className="font-serif italic text-zinc-600">Clientes</span></h2>
        <div className="flex gap-4">
          <button onClick={fetchClientes} className="p-3 border border-white/5 rounded-xl text-zinc-500 hover:text-[#F97316] transition-all">
            <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
          </button>
          <button onClick={() => setIsModalOpen(true)} className="bg-[#F97316] text-black px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-[#F97316]/20">
            <Plus size={16} /> Novo Cliente
          </button>
        </div>
      </div>

      {/* Tabela */}
      <div className="bg-zinc-950 border border-white/5 rounded-[40px] overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.02]">
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Cliente</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Telefone</th>
              <th className="p-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">Marca</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {clientes.length > 0 ? clientes.map((c) => (
              <tr key={c.id} className="hover:bg-white/[0.01] transition-colors">
                <td className="p-8 text-sm font-bold uppercase tracking-wider">{c.nome}</td>
                <td className="p-8 text-xs text-zinc-500 uppercase">{c.telefone}</td>
                <td className="p-8 text-[10px] font-black text-[#F97316] uppercase">{c.marca}</td>
              </tr>
            )) : (
              <tr><td colSpan={3} className="p-20 text-center text-xs font-bold text-zinc-700 uppercase tracking-[0.5em]">Nenhum cliente cadastrado.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de Cadastro (LEGO Adicional) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-zinc-950 border border-white/10 p-10 rounded-[40px] w-full max-w-md shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-light uppercase tracking-[0.2em]">Novo <span className="text-[#F97316] font-black">Cliente</span></h3>
                <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white"><X size={20} /></button>
              </div>

              <form onSubmit={handleAddCliente} className="space-y-6">
                <div>
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2 block">Nome Completo</label>
                  <input required value={nome} onChange={(e) => setNome(e.target.value)} type="text" className="w-full bg-zinc-900 border border-white/5 p-4 rounded-xl focus:border-[#F97316] outline-none text-sm uppercase font-bold" placeholder="EX: ANA SILVA" />
                </div>
                <div>
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2 block">WhatsApp</label>
                  <input required value={telefone} onChange={(e) => setTelefone(e.target.value)} type="text" className="w-full bg-zinc-900 border border-white/5 p-4 rounded-xl focus:border-[#F97316] outline-none text-sm font-bold" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2 block">Marca de Uso</label>
                  <select value={marca} onChange={(e) => setMarca(e.target.value)} className="w-full bg-zinc-900 border border-white/5 p-4 rounded-xl focus:border-[#F97316] outline-none text-[10px] font-black uppercase tracking-widest text-[#F97316]">
                    {["SELAGEM 3D", "PLATINUM PRO", "LUX GLOSS", "YGRY"].map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <button type="submit" className="w-full bg-[#F97316] text-black font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-2 hover:bg-white transition-all">
                  <Save size={16} /> Salvar no Sistema
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}