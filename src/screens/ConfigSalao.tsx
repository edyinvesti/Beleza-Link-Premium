import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Save, Loader2, MessageCircle } from "lucide-react";
import BackHeader from "../components/BackHeader";

export default function ConfigSalao() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "Barbearia do Edy",
    endereco: "",
    cidade: "Anápolis",
    horario: "09:00 às 19:00"
  });

  const WHATSAPP_EDY = "5562992115143";

  useEffect(() => {
    async function loadData() {
      const { data } = await supabase.from("perfil_salao").select("*").maybeSingle();
      if (data) {
        setFormData({
          nome: data.nome || "Barbearia do Edy",
          endereco: data.endereco || "",
          cidade: data.cidade || "Anápolis",
          horario: data.horario || "09:00 às 19:00"
        });
      }
    }
    loadData();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("perfil_salao").upsert([
      { ...formData, updated_at: new Date().toISOString() }
    ]);
    if (!error) alert("✅ Dados da Barbearia salvos!");
    setLoading(false);
  };

  const compartilharWhatsApp = () => {
    if (!formData.endereco) {
      alert("Por favor, preencha e salve o endereço antes de compartilhar!");
      return;
    }

    const buscaMaps = encodeURIComponent(`${formData.nome} ${formData.endereco} ${formData.cidade}`);
    const linkMaps = `https://www.google.com/maps/search/?api=1&query=${buscaMaps}`;
    const linkAgendamento = `https://wa.me/${WHATSAPP_EDY}`;

    const texto = `📍 *${formData.nome.toUpperCase()}*\n` +
      `━━━━━━━━━━━━━━━━━━━\n\n` +
      `🏠 *Endereço:* ${formData.endereco}\n` +
      `🏙️ *Cidade:* ${formData.cidade}\n` +
      `⏰ *Horário:* ${formData.horario}\n\n` +
      `🗺️ *VER NO MAPA:* \n${linkMaps}\n\n` +
      `✂️ *PARA AGENDAR CLIQUE AQUI:* \n${linkAgendamento}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <BackHeader title="Configurar Unidade" />
      <div className="p-4 max-w-2xl mx-auto space-y-6">
        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] text-left">
          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className="text-[10px] font-black text-[#F97316] uppercase ml-2 tracking-widest">Nome da Unidade</label>
              <input required value={formData.nome} onChange={e => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl mt-1 text-sm outline-none focus:border-[#F97316]" />
            </div>
            <div>
              <label className="text-[10px] font-black text-zinc-500 uppercase ml-2 tracking-widest">Endereço (Rua, Nº, Bairro)</label>
              <input required value={formData.endereco} onChange={e => setFormData({ ...formData, endereco: e.target.value })}
                className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl mt-1 text-sm outline-none focus:border-[#F97316]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Cidade" required value={formData.cidade} onChange={e => setFormData({ ...formData, cidade: e.target.value })}
                className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl text-sm outline-none focus:border-[#F97316]" />
              <input placeholder="Horário de Funcionamento" value={formData.horario} onChange={e => setFormData({ ...formData, horario: e.target.value })}
                className="w-full bg-black/50 border border-white/10 p-5 rounded-2xl text-sm outline-none focus:border-[#F97316]" />
            </div>

            <div className="grid gap-3 pt-4">
              <button type="submit" disabled={loading} className="w-full bg-white text-black font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em] hover:bg-zinc-200 transition-all">
                {loading ? <Loader2 className="animate-spin" /> : <><Save size={18} /> Salvar Dados</>}
              </button>

              <button type="button" onClick={compartilharWhatsApp} className="w-full bg-emerald-600 text-white font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em] shadow-lg shadow-emerald-900/20 active:scale-95 transition-all">
                <MessageCircle size={18} /> Compartilhar p/ Clientes
              </button>
            </div>
          </form>
        </div>

        <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2rem] flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-[#F97316]">
            <MessageCircle size={20} />
          </div>
          <div className="text-left">
            <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest">Link de Agendamento</p>
            <p className="text-white font-bold text-sm">(62) 99211-5143</p>
          </div>
        </div>
      </div>
    </div>
  );
}