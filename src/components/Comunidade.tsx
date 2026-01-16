import { motion } from "framer-motion";
import { MessageSquare, Heart, Share2, UserPlus } from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Ricardo Silveira",
    role: "Master Colorista",
    content: "Acabei de finalizar essa Selagem 3D. O brilho ficou surreal! Alguém já testou a nova técnica com o Lux Gloss?",
    time: "2h atrás",
    likes: 24,
    comments: 8
  },
  {
    id: 2,
    author: "Ana Julia",
    role: "Proprietária Studio VIP",
    content: "Dica do dia: O CRM me ajudou a recuperar 15 clientes que não vinham há 3 meses. Usem as notificações automatizadas!",
    time: "5h atrás",
    likes: 42,
    comments: 15
  }
];

export default function Comunidade() {
  return (
    <div className="min-h-screen bg-black text-white p-4 pt-24 md:p-20 md:pt-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUNA DA ESQUERDA: FEED */}
        <div className="lg:col-span-2 space-y-6">
          <header className="mb-8">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">ELITE <span className="text-[#F97316]">FEED</span></h2>
            <p className="text-zinc-500 font-black uppercase text-[10px] tracking-[0.4em] mt-2">Conectando os melhores do Brasil</p>
          </header>

          <div className="bg-zinc-900/50 p-6 rounded-[30px] border border-white/5 mb-8">
            <textarea placeholder="O que você está criando hoje?" className="w-full bg-black/40 rounded-2xl p-4 text-sm border border-white/5 focus:border-[#F97316] outline-none resize-none h-24 transition-all"></textarea>
            <div className="flex justify-end mt-4">
              <button className="bg-[#F97316] text-black font-black uppercase text-[10px] px-8 py-3 rounded-xl hover:scale-105 transition-all">Postar na Comunidade</button>
            </div>
          </div>

          {posts.map((post) => (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={post.id} className="bg-zinc-900/50 p-8 rounded-[35px] border border-white/5 hover:border-white/10 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-tr from-[#F97316] to-orange-900 rounded-full border-2 border-black shadow-lg"></div>
                  <div>
                    <h4 className="font-black uppercase text-sm tracking-tight">{post.author}</h4>
                    <span className="text-[9px] font-black text-[#F97316] uppercase tracking-widest">{post.role}</span>
                  </div>
                </div>
                <span className="text-zinc-600 text-[9px] font-bold uppercase">{post.time}</span>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">"{post.content}"</p>
              <div className="flex gap-6 border-t border-white/5 pt-6">
                <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                  <Heart size={18} /> <span className="text-[10px] font-black">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                  <MessageSquare size={18} /> <span className="text-[10px] font-black">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors ml-auto">
                  <Share2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COLUNA DA DIREITA: MEMBROS ONLINE */}
        <div className="hidden lg:block">
          <div className="bg-zinc-900/80 p-8 rounded-[40px] sticky top-32 border-t-4 border-[#F97316] shadow-2xl">
            <h3 className="font-black uppercase text-sm mb-8 tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> Membros Online
            </h3>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((m) => (
                <div key={m} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full border border-white/10 group-hover:border-[#F97316] transition-all"></div>
                    <span className="text-[10px] font-black uppercase text-zinc-400 group-hover:text-white">Profissional #{m}0{m}</span>
                  </div>
                  <UserPlus size={14} className="text-zinc-700 group-hover:text-[#F97316]" />
                </div>
              ))}
            </div>
            <button className="w-full mt-10 bg-white/5 text-zinc-400 font-black uppercase text-[9px] py-4 rounded-2xl hover:bg-[#F97316] hover:text-black transition-all">Ver Todos os Membros</button>
          </div>
        </div>

      </div>
    </div>
  );
}