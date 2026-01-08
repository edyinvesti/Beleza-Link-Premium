import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, Bot, User, Loader2 } from "lucide-react";

export default function Assistant() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Olá! Chaves configuradas com sucesso. Como posso ajudar seu negócio hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  async function callGemini(prompt: string) {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: "Você é uma consultora de elite para salões de beleza. Responda de forma direta: " + prompt }] }]
        })
      });
      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      return "Erro ao conectar com a IA. Verifique sua internet ou a validade da chave.";
    }
  }

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    const aiResponse = await callGemini(input);
    setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] md:h-screen bg-black text-white p-4 md:p-8">
      <header className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
          <Sparkles className="text-black" size={24} />
        </div>
        <h1 className="text-2xl font-black uppercase italic tracking-tighter">AI Strategist</h1>
      </header>
      <div className="flex-1 overflow-y-auto space-y-6 mb-4 pr-2">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`p-4 rounded-2xl max-w-[85%] ${msg.role === "user" ? "bg-amber-500 text-black font-bold" : "bg-zinc-900 border border-white/5 text-zinc-300"}`}>
              {msg.content}
            </div>
          </div>
        ))}
        <div ref={scrollRef} />
      </div>
      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-2 flex items-center gap-2 mb-20 md:mb-4">
        <input 
          disabled={loading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Como posso lucrar mais?"
          className="flex-1 bg-transparent border-none outline-none px-4 text-sm text-white"
        />
        <button onClick={handleSend} disabled={loading} className="bg-amber-500 text-black p-4 rounded-2xl">
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        </button>
      </div>
    </div>
  );
}