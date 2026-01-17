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
      <nav className="fixed top-0 left-0 right-0 z-[1000] bg-black/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-6 py-4 md:py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="text-[#F97316] font-black text-lg md:text-2xl italic tracking-tighter uppercase leading-none">
              BELEZA LINK
            </div>
            <div className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#F97316] mt-1 rounded-full"></div>
          </div>
        </div>
      </nav>

      <main className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/20 px-3 md:px-4 py-2 rounded-full text-[#F97316] text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8">
            <Sparkles size={12} className="md:w-3.5 md:h-3.5" /> O Topo do Mercado da Beleza
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none mb-8 md:mb-12 px-4">
            ESCOLHA SUA <span className="text-[#F97316]">EXPERIÊNCIA</span>
          </h1>

          {/* GRADE DE FILTROS (OS CARDS QUE SUMIRAM) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* CARD CURSOS */}
            <button onClick={onCursosClick} className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-[#F97316] active:bg-[#F97316] transition-all duration-500 text-left overflow-hidden min-h-[140px] md:min-h-auto">
              <div className="relative z-10">
                <LayoutGrid className="text-[#F97316] group-hover:text-black group-active:text-black mb-3 md:mb-4 transition-colors" size={32} />
                <h3 className="text-xl md:text-2xl font-black uppercase italic group-hover:text-black group-active:text-black transition-colors">Cursos</h3>
                <p className="text-zinc-500 group-hover:text-black/70 group-active:text-black/70 text-xs md:text-sm mt-2 transition-colors">Especializações de elite para profissionais.</p>
              </div>
            </button>

            {/* CARD BLOG */}
            <button onClick={onBlogClick} className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-[#F97316] active:bg-[#F97316] transition-all duration-500 text-left overflow-hidden min-h-[140px] md:min-h-auto">
              <div className="relative z-10">
                <BookOpen className="text-[#F97316] group-hover:text-black group-active:text-black mb-3 md:mb-4 transition-colors" size={32} />
                <h3 className="text-xl md:text-2xl font-black uppercase italic group-hover:text-black group-active:text-black transition-colors">Blog Insights</h3>
                <p className="text-zinc-500 group-hover:text-black/70 group-active:text-black/70 text-xs md:text-sm mt-2 transition-colors">Dicas, tendências e novidades do mercado.</p>
              </div>
            </button>

            {/* CARD GEOLOCALIZAÇÃO */}
            <button className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-[#F97316] active:bg-[#F97316] transition-all duration-500 text-left overflow-hidden opacity-50 cursor-not-allowed min-h-[140px] md:min-h-auto">
              <div className="relative z-10">
                <MapPin className="text-[#F97316] group-hover:text-black mb-3 md:mb-4 transition-colors" size={32} />
                <h3 className="text-xl md:text-2xl font-black uppercase italic group-hover:text-black transition-colors">Encontrar</h3>
                <p className="text-zinc-500 group-hover:text-black/70 text-xs md:text-sm mt-2 transition-colors">Localize os melhores salões próximos.</p>
              </div>
            </button>

            {/* CARD SOCIAL */}
            <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-center items-center gap-4 md:gap-6 min-h-[140px] md:min-h-auto">
              <Instagram size={26} className="text-zinc-500 hover:text-[#F97316] cursor-pointer active:text-[#F97316] transition-colors md:w-[30px] md:h-[30px]" />
              <Youtube size={26} className="text-zinc-500 hover:text-[#F97316] cursor-pointer active:text-[#F97316] transition-colors md:w-[30px] md:h-[30px]" />
              <Facebook size={26} className="text-zinc-500 hover:text-[#F97316] cursor-pointer active:text-[#F97316] transition-colors md:w-[30px] md:h-[30px]" />
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 md:py-10 px-4 md:px-6 text-center text-zinc-600 font-bold text-[10px] md:text-xs uppercase tracking-widest">
        © 2026 Beleza Link • Direitos Reservados
      </footer>
    </div>
  );
};

export default Home;