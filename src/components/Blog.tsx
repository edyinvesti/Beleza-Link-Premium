import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";

const materias = [
  {
    id: 1,
    categoria: "TENDÊNCIA",
    titulo: "O Retorno do Gloss: Como faturar mais com finalização",
    resumo: "Descubra por que o efeito espelhado voltou com tudo nas passarelas e como oferecer isso como serviço premium.",
    autor: "Equipe Elite",
    data: "15 Jan, 2026",
    imagem: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    conteudo: "O mercado de beleza em 2026 está focado em saúde capilar e brilho extremo. A técnica Lux Gloss não é apenas um produto, mas um protocolo de selagem que aumenta o ticket médio em até 40%..."
  },
  {
    id: 2,
    categoria: "GESTÃO",
    titulo: "5 Erros que impedem seu salão de crescer",
    resumo: "Não adianta ser a melhor técnica se a gestão financeira estiver no vermelho. Veja como organizar seu fluxo.",
    autor: "Marcos Gestão",
    data: "14 Jan, 2026",
    imagem: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    conteudo: "Muitos donos de salão confundem faturamento com lucro. O primeiro passo para a liberdade financeira é separar as contas pessoais das contas da empresa..."
  },
  {
    id: 3,
    categoria: "TÉCNICA",
    titulo: "Platinado Perfeito sem Quebra: É possível?",
    resumo: "Novos polímeros permitem clareamento extremo preservando a fibra capilar. Entenda a ciência por trás.",
    autor: "Dra. Cabelo",
    data: "12 Jan, 2026",
    imagem: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    conteudo: "A tecnologia de proteção de pontes evoluiu. Hoje conseguimos chegar em tons pérola em cabelos que antes seriam impossíveis de processar..."
  }
];

export default function Blog() {
  const [postAtivo, setPostAtivo] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 pt-24 md:p-20 md:pt-32">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!postAtivo ? (
            <motion.div key="lista" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <header className="mb-16">
                <span className="text-[#F97316] font-black uppercase text-[10px] tracking-[0.5em]">Beleza News</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase italic mt-2">BELEZA <span className="text-[#F97316]">INSIGHTS</span></h2>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {materias.map((post) => (
                  <motion.div 
                    key={post.id} 
                    whileHover={{ y: -10 }}
                    onClick={() => setPostAtivo(post)}
                    className="bg-zinc-900/50 rounded-[40px] overflow-hidden border border-white/5 cursor-pointer group"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img src={post.imagem} alt={post.titulo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 bg-[#F97316] text-black text-[9px] font-black px-4 py-1 rounded-full">{post.categoria}</div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-black uppercase mb-4 leading-tight group-hover:text-[#F97316] transition-colors">{post.titulo}</h3>
                      <p className="text-zinc-500 text-sm mb-6 line-clamp-3">{post.resumo}</p>
                      <div className="flex items-center justify-between border-t border-white/5 pt-6">
                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-tighter">Ler Matéria →</span>
                        <div className="flex items-center gap-2 text-zinc-600">
                          <Clock size={12} /> <span className="text-[9px] font-bold">{post.data}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="post" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
              <button onClick={() => setPostAtivo(null)} className="flex items-center gap-2 text-zinc-500 hover:text-white font-black uppercase text-[10px] tracking-widest mb-12 transition-all">
                <ArrowLeft size={16} /> Voltar para o Feed
              </button>
              
              <img src={postAtivo.imagem} className="w-full h-[400px] object-cover rounded-[50px] mb-12 shadow-2xl" />
              
              <div className="flex items-center gap-6 mb-8 text-zinc-500 font-black uppercase text-[9px] tracking-widest">
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full"><User size={14} className="text-[#F97316]" /> {postAtivo.autor}</div>
                <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-full"><Clock size={14} className="text-[#F97316]" /> {postAtivo.data}</div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-10">{postAtivo.titulo}</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-zinc-400 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#F97316] first-letter:mr-3 first-letter:float-left">
                  {postAtivo.conteudo}
                </p>
                <div className="mt-12 p-8 bg-zinc-900/50 rounded-[30px] border border-white/5">
                  <h4 className="text-[#F97316] font-black uppercase text-xs mb-4">Compartilhe esse Insight</h4>
                  <div className="flex gap-4">
                    <button className="bg-white/5 p-4 rounded-2xl hover:bg-[#F97316] hover:text-black transition-all"><Share2 size={20}/></button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}