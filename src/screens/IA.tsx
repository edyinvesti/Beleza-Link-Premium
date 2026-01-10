import { useState, useEffect } from "react";
import { Send, Sparkles, Loader2, Bot, User } from "lucide-react";
import { supabase } from "../lib/supabase";
import BackHeader from "../components/BackHeader";

export default function IA() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá Edy! Sou o Mestre da Beleza. Já identifiquei a Barbearia do Edy aqui no sistema. Como posso ajudar seu negócio em Anápolis hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    async function loadPerfil() {
      const { data } = await supabase.from("perfil_salao").select("*").maybeSingle();
      if (data) setPerfil(data);
    }
    loadPerfil();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    // Simulação de resposta inteligente focada no perfil
    setTimeout(() => {
      const response = perfil 
        ? `Edy, pensando na ${perfil.nome} em ${perfil.cidade}, minha dica é focar em divulgar o endereço ${perfil.endereco} nos seus stories hoje para atrair os clientes da região!`
        : "Excelente pergunta, Edy! Como mestre da beleza, recomendo focar na fidelização dos seus clientes ativos esta semana.";
      
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <BackHeader title="Mestre da Beleza" />
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-32">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-4 rounded-[2rem] text-sm font-bold ${
              m.role === "user" ? "bg-[#F97316] text-black" : "bg-zinc-900 text-zinc-300 border border-white/5"
            }`}>
              <div className="flex items-center gap-2 mb-1 opacity-50 text-[9px] uppercase tracking-widest">
                {m.role === "user" ? <><User size={10}/> Você</> : <><Bot size={10}/> Mestre</>}
              </div>
              {m.content}
            </div>
          </div>
        ))}
        {loading && <div className="flex justify-start"><Loader2 className="animate-spin text-zinc-500" /></div>}
      </div>

      <div className="fixed bottom-6 left-4 right-4">
        <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-2 rounded-[2.5rem] flex items-center shadow-2xl">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Pergunte ao mestre..."
            className="flex-1 bg-transparent border-none outline-none px-4 text-sm font-bold"
          />
          <button onClick={handleSend} className="bg-[#F97316] p-4 rounded-full text-black hover:scale-105 transition-all">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}