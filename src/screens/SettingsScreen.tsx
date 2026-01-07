import { useState } from 'react';
import { Save, User, Store, Loader2 } from 'lucide-react';

const SettingsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [perfil, setPerfil] = useState({ nome_salao: 'Kelly hair', proprietario: 'Kelly da Silva Laureano' });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Configuracoes salvas com sucesso!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-4 text-white space-y-6">
      <h1 className="text-3xl font-black">Ajustes</h1>
      <form onSubmit={handleSave} className="bg-zinc-900 p-6 rounded-3xl border border-white/5 space-y-4">
        <div>
          <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><Store size={14} /> Nome do Estabelecimento</label>
          <input value={perfil.nome_salao} onChange={(e) => setPerfil({...perfil, nome_salao: e.target.value})} className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1 outline-none focus:border-amber-500" />
        </div>
        <div>
          <label className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-2"><User size={14} /> Nome do Proprietário</label>
          <input value={perfil.proprietario} onChange={(e) => setPerfil({...perfil, proprietario: e.target.value})} className="w-full bg-black border border-white/10 p-3 rounded-xl mt-1 outline-none focus:border-amber-500" />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-amber-500 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2">
          {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> SALVAR ALTERAÇÕES</>}
        </button>
      </form>
    </div>
  );
};
export default SettingsScreen;

