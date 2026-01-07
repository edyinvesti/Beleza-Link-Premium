import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Star, AlertCircle, MessageSquare, ArrowUpRight, CheckCircle2, X, Send, Gift } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Client {
  id: string;
  name: string;
  phone: string;
  total_spent: number;
}

export default function CRMScreen() {
  const navigate = useNavigate();
  const [vips, setVips] = useState<Client[]>([]);
  const [totalLeads, setTotalLeads] = useState(0);
  const [showCampaignModal, setShowCampaignModal] = useState(false);

  useEffect(() => {
    async function fetchCRMData() {
      const { data: vipData } = await supabase
        .from('clients')
        .select('*')
        .gt('total_spent', 300)
        .order('total_spent', { ascending: false });

      const { count } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true });

      if (vipData) setVips(vipData);
      if (count !== null) setTotalLeads(count);
    }
    fetchCRMData();
  }, []);

  const handleWhatsApp = (phone: string, name: string) => {
    const msg = encodeURIComponent(`Olá ${name}! ✨ Notamos que você é um cliente especial aqui no salão. Temos um voucher exclusivo te esperando para este mês!`);
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-purple-500 mb-4">
          <Target size={32} />
          <span className="font-black tracking-widest uppercase text-sm">Inteligência de Clientes</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          CRM <br />
          <span className="text-purple-500">Estratégico.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Painel VIP */}
        <div className="bg-zinc-900/50 border border-purple-500/20 rounded-[2.5rem] p-8 backdrop-blur-md">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black uppercase italic flex items-center gap-2">
              <Star className="text-amber-500" fill="currentColor" size={20} /> Clientes VIP
            </h2>
            <span className="text-[10px] bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full font-bold uppercase tracking-widest italic">
              Gasto Superior R$ 300
            </span>
          </div>

          <div className="space-y-4">
            {vips.length > 0 ? vips.map((vip) => (
              <div key={vip.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center font-black text-sm">
                    {vip.name[0].toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{vip.name}</p>
                    <p className="text-zinc-500 text-[10px]">Investimento: R$ {vip.total_spent}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleWhatsApp(vip.phone, vip.name)}
                  className="bg-purple-500/10 text-purple-500 hover:bg-purple-500 hover:text-white p-3 rounded-xl transition-all"
                >
                  <MessageSquare size={18} />
                </button>
              </div>
            )) : (
              <p className="text-zinc-600 italic text-sm text-center py-10">Cadastre clientes com gastos altos para aparecerem aqui.</p>
            )}
          </div>
        </div>

        {/* Ações e Métricas */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-[2.5rem] text-black group relative overflow-hidden">
            <AlertCircle size={32} className="mb-4" />
            <h3 className="text-2xl font-black uppercase leading-tight mb-2 italic">Aumente sua <br /> Retenção</h3>
            <p className="text-black/70 text-sm font-medium mb-6 leading-relaxed">Sua base de dados indica clientes que podem ser fidelizados hoje.</p>
            <button
              onClick={() => setShowCampaignModal(true)}
              className="bg-black text-white font-black px-8 py-4 rounded-2xl text-[10px] uppercase tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              Criar Campanha Agora <ArrowUpRight size={14} />
            </button>
          </div>

          {/* CARD DE LEADS AGORA CLICÁVEL */}
          <div
            onClick={() => navigate('/clientes')}
            className="bg-zinc-900/50 border border-white/5 p-8 rounded-[2.5rem] flex items-center justify-between cursor-pointer hover:bg-zinc-800 transition-all group"
          >
            <div>
              <h3 className="text-zinc-500 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Total de Leads</h3>
              <p className="text-5xl font-black italic group-hover:text-amber-500 transition-colors">{totalLeads}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-green-500 font-bold text-xs mb-1">
                <CheckCircle2 size={14} /> VER TODOS
              </div>
              <p className="text-zinc-600 text-[10px] uppercase font-black">Clique para gerenciar</p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE CAMPANHA */}
      {showCampaignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-zinc-950 border border-white/10 w-full max-w-sm rounded-[2.5rem] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black uppercase italic italic tracking-tighter">Escolha a <span className="text-amber-500">Ação</span></h2>
              <button onClick={() => setShowCampaignModal(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="space-y-3">
              <button className="w-full bg-white/5 hover:bg-amber-500 hover:text-black p-5 rounded-2xl flex items-center gap-4 transition-all font-bold text-sm uppercase">
                <Send size={18} /> Enviar Cupom WhatsApp
              </button>
              <button className="w-full bg-white/5 hover:bg-amber-500 hover:text-black p-5 rounded-2xl flex items-center gap-4 transition-all font-bold text-sm uppercase">
                <Gift size={18} /> Oferta de Aniversário
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

