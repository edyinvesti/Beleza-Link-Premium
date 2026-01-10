import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Target, Star, AlertCircle, MessageSquare, ArrowUpRight, CheckCircle2, X, Send, Gift } from "lucide-react";
import { supabase } from "../lib/supabase";
import BackHeader from "../components/BackHeader";

export default function CRM() {
  const navigate = useNavigate();
  const [vips, setVips] = useState([]);
  const [totalLeads, setTotalLeads] = useState(0);
  const [showCampaignModal, setShowCampaignModal] = useState(false);

  useEffect(() => {
    async function fetchCRMData() {
      const { data: vipData } = await supabase
        .from("clients")
        .select("*")
        .gt("total_spent", 300)
        .order("total_spent", { ascending: false });

      const { count } = await supabase
        .from("clients")
        .select("*", { count: "exact", head: true });

      if (vipData) setVips(vipData);
      if (count !== null) setTotalLeads(count);
    }
    fetchCRMData();
  }, []);

  const handleWhatsApp = (phone, name) => {
    const msg = encodeURIComponent(`Olá ${name}! ✨ Notamos que você é um cliente especial na Barbearia do Edy. Temos um voucher exclusivo te esperando para este mês!`);
    window.open(`https://wa.me/${phone.replace(/\D/g, "")}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <BackHeader title="CRM Estratégico" />
      <div className="p-6 space-y-8">
        <header>
          <div className="flex items-center gap-3 text-[#F97316] mb-2">
            <Target size={24} />
            <span className="font-black tracking-widest uppercase text-[10px]">Inteligência de Mercado</span>
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
            CLIENTES <br /> <span className="text-[#F97316]">VIP.</span>
          </h1>
        </header>

        <div className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-black uppercase italic flex items-center gap-2">
              <Star className="text-amber-500" fill="currentColor" size={16} /> Top Clientes
            </h2>
          </div>

          <div className="space-y-3">
            {vips.length > 0 ? vips.map((vip) => (
              <div key={vip.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center font-black text-sm border border-white/10">
                    {vip.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{vip.name}</p>
                    <p className="text-[#F97316] text-[10px] font-black">R$ {vip.total_spent}</p>
                  </div>
                </div>
                <button onClick={() => handleWhatsApp(vip.phone, vip.name)} className="bg-emerald-500/10 text-emerald-500 p-3 rounded-xl">
                  <MessageSquare size={18} />
                </button>
              </div>
            )) : (
              <p className="text-zinc-600 italic text-xs text-center py-6">Nenhum VIP acima de R$300 ainda.</p>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-8 rounded-[2.5rem] text-black">
          <AlertCircle size={32} className="mb-4" />
          <h3 className="text-2xl font-black uppercase leading-tight mb-2 italic">Aumente sua Retenção</h3>
          <p className="text-black/80 text-sm font-bold mb-6">Crie campanhas para trazer clientes de volta.</p>
          <button onClick={() => setShowCampaignModal(true)} className="w-full bg-black text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl">
            CRIAR CAMPANHA <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}