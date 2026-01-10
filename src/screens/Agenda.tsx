import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Clock, Loader2, Trash2 } from "lucide-react";

export default function Agenda() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [clientes, setClientes] = useState<any[]>([]);
  const [agendamentos, setAgendamentos] = useState<any[]>([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [servico, setServico] = useState("");

  const carregarDados = async () => {
    setFetching(true);
    try {
      const { data: cData } = await supabase.from("clientes").select("id, nome");
      if (cData) setClientes(cData);
      
      const { data: aData } = await supabase
        .from("appointments")
        .select("id, data_hora, servico, clientes ( nome )")
        .order("data_hora", { ascending: true });
      
      if (aData) setAgendamentos(aData);
    } catch (error) { 
      console.error("Erro ao carregar:", error); 
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => { carregarDados(); }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("appointments").insert([
      { client_id: selectedClient, data_hora: `${data}T${hora}:00Z`, servico: servico }
    ]);
    if (!error) {
      setServico(""); setSelectedClient(""); setData(""); setHora(""); 
      carregarDados();
    }
    setLoading(false);
  };

  const deletarAgendamento = async (id: string) => {
    if (confirm("Deseja realmente cancelar este horário?")) {
      await supabase.from("appointments").delete().eq("id", id);
      carregarDados();
    }
  };

  return (
    <div className="p-4 space-y-8 max-w-4xl mx-auto pb-32 text-left">
      <header>
        <h1 className="text-3xl font-black italic uppercase text-white tracking-tighter">AGENDA <span className="text-[#F97316]">PREMIUM</span></h1>
      </header>

      <form onSubmit={handleSave} className="bg-zinc-900/50 p-6 rounded-[2.5rem] border border-white/5 space-y-4">
        <h2 className="text-[10px] font-black text-[#F97316] uppercase tracking-[0.2em] italic">Marcar Horário</h2>
        <select required value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)} className="w-full bg-black border border-white/5 p-4 rounded-2xl text-white text-xs font-bold uppercase outline-none focus:border-[#F97316]">
          <option value="">Selecione o Cliente...</option>
          {clientes.map(c => <option key={c.id} value={c.id}>{c.nome}</option>)}
        </select>
        
        <div className="grid grid-cols-2 gap-4">
          <input required type="date" value={data} onChange={(e) => setData(e.target.value)} className="bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none focus:border-[#F97316]" />
          <input required type="time" value={hora} onChange={(e) => setHora(e.target.value)} className="bg-black border border-white/5 p-4 rounded-2xl text-xs text-white outline-none focus:border-[#F97316]" />
        </div>
        
        <input required placeholder="QUAL O SERVIÇO?" value={servico} onChange={(e) => setServico(e.target.value.toUpperCase())} className="w-full bg-black border border-white/5 p-4 rounded-2xl text-xs font-bold text-white outline-none focus:border-[#F97316]" />
        
        <button type="submit" disabled={loading} className="w-full bg-[#F97316] text-black font-black py-5 rounded-[2rem] text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
          {loading ? <Loader2 className="animate-spin" size={18} /> : "AGENDAR AGORA"}
        </button>
      </form>

      <section className="space-y-4">
        <h2 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] italic">Próximos Clientes</h2>
        
        {fetching ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-[#F97316]" /></div>
        ) : agendamentos.length === 0 ? (
          <p className="text-zinc-600 text-xs font-bold uppercase text-center py-10">Nenhum agendamento encontrado.</p>
        ) : (
          agendamentos.map(a => (
            <div key={a.id} className="bg-zinc-900/30 border border-white/5 p-5 rounded-[2rem] flex justify-between items-center group hover:bg-zinc-900/60 transition-all">
              <div className="flex gap-4 items-center">
                <div className="bg-[#F97316]/10 p-4 rounded-2xl text-[#F97316]">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-black text-sm uppercase italic text-white">{(a.clientes as any)?.nome || "CLIENTE EXCLUÍDO"}</p>
                  <p className="text-zinc-500 text-[9px] font-bold uppercase mt-1">
                    {new Date(a.data_hora).toLocaleDateString("pt-BR")} às {new Date(a.data_hora).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                  </p>
                  <div className="inline-block px-2 py-0.5 bg-[#F97316]/10 rounded text-[#F97316] text-[8px] font-black uppercase mt-2">{a.servico}</div>
                </div>
              </div>
              <button onClick={() => deletarAgendamento(a.id)} className="text-zinc-800 hover:text-red-500 transition-colors p-3">
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </section>
    </div>
  );
}