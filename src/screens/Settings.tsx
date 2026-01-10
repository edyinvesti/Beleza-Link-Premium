import { useState, useEffect } from "react";
import { Save, User, Store, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import BackHeader from "../components/BackHeader";

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [perfil, setPerfil] = useState({ nome_salao: "Barbearia do Edy", proprietario: "Edy Carlos" });

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("perfil_salao").select("*").maybeSingle();
      if (data) setPerfil({ nome_salao: data.nome, proprietario: "Edy Carlos" });
    }
    load();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("perfil_salao").upsert([{ nome: perfil.nome_salao, updated_at: new Date().toISOString() }]);
    if (!error) alert("✅ Configurações da Barbearia do Edy salvas!");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <BackHeader title="Ajustes do Sistema" />
      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        <form onSubmit={handleSave} className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5 space-y-6 text-left">
          <div>
            <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-widest flex items-center gap-2"><Store size={12} /> Nome do Negócio</label>
            <input value={perfil.nome_salao} onChange={(e) => setPerfil({...perfil, nome_salao: e.target.value})} className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl mt-2 outline-none focus:border-[#F97316] transition-all" />
          </div>
          <div>
            <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-widest flex items-center gap-2"><User size={12} /> Proprietário</label>
            <input value={perfil.proprietario} onChange={(e) => setPerfil({...perfil, proprietario: e.target.value})} className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl mt-2 outline-none focus:border-[#F97316] transition-all" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#F97316] text-black font-black py-6 rounded-[2rem] flex items-center justify-center gap-3 uppercase text-xs tracking-widest shadow-xl shadow-orange-500/20 active:scale-95 transition-all">
            {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> SALVAR ALTERAÇÕES</>}
          </button>
        </form>
      </div>
    </div>
  );
}