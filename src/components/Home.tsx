import React from 'react';
import { Sparkles, BookOpen, MapPin, LayoutGrid, Instagram, Youtube, Facebook } from 'lucide-react';

interface HomeProps {
  onCursosClick: () => void;
  onBlogClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onCursosClick, onBlogClick }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#F97316]">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="text-[#F97316] font-black text-2xl italic tracking-tighter uppercase leading-none">
              BELEZA LINK
            </div>
            <div className="h-[3px] w-12 bg-[#F97316] mt-1 rounded-full"></div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-2 rounded-full text-[#F97316] text-xs font-black uppercase tracking-widest mb-8">
            <Sparkles size={14} /> O Topo do Mercado da Beleza
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-12">
            ESCOLHA SUA <span className="text-[#F97316]">EXPERIÊNCIA</span>
          </h1>

          {/* GRADE DE FILTROS (OS CARDS QUE SUMIRAM) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD CURSOS */}
            <button onClick={onCursosClick} className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-[#F97316] transition-all duration-500 text-left overflow-hidden">
              <div className="relative z-10">
                <LayoutGrid className="text-[#F97316] group-hover:text-black mb-4 transition-colors" size={40} />
                <h3 className="text-2xl font-black uppercase italic group-hover:text-black transition-colors">Cursos</h3>
                <p className="text-zinc-500 group-hover:text-black/70 text-sm mt-2 transition-colors">Especializações de elite para profissionais.</p>
              </div>
            </button>

            {/* CARD BLOG */}
            <button onClick={onBlogClick} className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-[#F97316] transition-all duration-500 text-left overflow-hidden">
              <div className="relative z-10">
                <BookOpen className="text-[#F97316] group-hover:text-black mb-4 transition-colors" size={40} />
                <h3 className="text-2xl font-black uppercase italic group-hover:text-black transition-colors">Blog Insights</h3>
                <p className="text-zinc-500 group-hover:text-black/70 text-sm mt-2 transition-colors">Dicas, tendências e novidades do mercado.</p>
              </div>
            </button>

            {/* CARD GEOLOCALIZAÇÃO */}
            <button className="group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-[#F97316] transition-all duration-500 text-left overflow-hidden opacity-50 cursor-not-allowed">
              <div className="relative z-10">
                <MapPin className="text-[#F97316] group-hover:text-black mb-4 transition-colors" size={40} />
                <h3 className="text-2xl font-black uppercase italic group-hover:text-black transition-colors">Encontrar</h3>
                <p className="text-zinc-500 group-hover:text-black/70 text-sm mt-2 transition-colors">Localize os melhores salões próximos.</p>
              </div>
            </button>

            {/* CARD SOCIAL */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-center items-center gap-6">
              <Instagram size={30} className="text-zinc-500 hover:text-[#F97316] cursor-pointer" />
              <Youtube size={30} className="text-zinc-500 hover:text-[#F97316] cursor-pointer" />
              <Facebook size={30} className="text-zinc-500 hover:text-[#F97316] cursor-pointer" />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-10 px-6 text-center text-zinc-600 font-bold text-xs uppercase tracking-widest">
        © 2026 Beleza Link • Direitos Reservados
      </footer>
    </div>
  );
};

export default Home;