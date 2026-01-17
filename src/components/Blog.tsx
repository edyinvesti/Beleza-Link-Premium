import { Calendar, ChevronRight, Bookmark, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      id: 1,
      categoria: "TENDÊNCIAS",
      titulo: "O Retorno do Volume: Tendências para 2026",
      preview: "Descubra como os cortes repicados e o estilo 'blowout' estão dominando os salões de luxo.",
      data: "15 Jan, 2026",
      img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800"
    },
    {
      id: 2,
      categoria: "BUSINESS",
      titulo: "Como Fidelizar Clientes de Alto Padrão",
      preview: "Estratégias de atendimento personalizado que transformam um corte casual em uma experiência única.",
      data: "12 Jan, 2026",
      img: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Editorial <span className="text-[#F97316]">Beleza</span></h2>
          <div className="h-1 w-20 bg-[#F97316] mt-4"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {posts.map((post) => (
            <motion.article 
              key={post.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden rounded-[40px] mb-6 border border-white/5">
                <img src={post.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#F97316] text-black text-[9px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">
                    {post.categoria}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                <Calendar size={14} className="text-[#F97316]" /> {post.data}
                <div className="flex-1 h-[1px] bg-white/5"></div>
                <Bookmark size={14} />
                <Share2 size={14} />
              </div>

              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#F97316] transition-colors italic">
                {post.titulo}
              </h3>
              
              <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-2">
                {post.preview}
              </p>

              <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white group-hover:translate-x-3 transition-transform">
                Ler Matéria <ChevronRight size={16} className="text-[#F97316]" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}