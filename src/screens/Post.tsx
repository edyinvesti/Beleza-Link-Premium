import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Image as ImageIcon } from 'lucide-react';

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Conteúdo real dos artigos
  const content: Record<string, any> = {
    "1": {
      title: "5 Tendências de Cortes para 2026",
      date: "06 Jan, 2026",
      category: "Tendências",
      body: "O ano de 2026 traz o retorno do 'Luxury Shag' e cortes ultra-estruturados. Especialistas apontam que a personalização baseada na inteligência artificial do formato do rosto será o grande diferencial nos salões premium. Espere ver muitas camadas e franjas cortinas com acabamento acetinado."
    },
    "2": {
      title: "Como Dobrar seu Faturamento com a Agenda",
      date: "04 Jan, 2026",
      category: "Gestão",
      body: "A gestão de tempo é o ativo mais valioso de um profissional de beleza. Implementar políticas de cancelamento, lembretes automáticos via WhatsApp e intervalos estratégicos pode aumentar sua produtividade em até 45% sem precisar trabalhar mais horas por dia."
    }
  };

  // Busca o artigo ou usa o 1 como padrão se não encontrar
  const article = content[id || "1"];

  // Caso o ID seja inválido e não exista nem o padrão
  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <p className="text-zinc-500 italic mb-4">Artigo não encontrado.</p>
        <button onClick={() => navigate('/blog')} className="text-amber-500 font-black uppercase text-xs">Voltar ao Blog</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 pb-32">
      <button 
        onClick={() => navigate('/blog')} 
        className="flex items-center gap-2 text-amber-500 mb-8 font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all"
      >
        <ArrowLeft size={16} /> Voltar para o Editorial
      </button>

      <div className="max-w-3xl mx-auto">
        <span className="bg-amber-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase mb-6 inline-block tracking-widest">
          {article.category}
        </span>
        
        <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase mb-8 leading-[0.85]">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-widest border-y border-white/5 py-6 mb-10">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-amber-500" /> {article.date}
          </div>
          <button 
            onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
            className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors"
          >
            <Share2 size={14} className="text-amber-500" /> Compartilhar
          </button>
        </div>

        <div className="prose prose-invert">
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed italic font-medium">
            {article.body}
          </p>
        </div>
        
        <div className="mt-16 aspect-video w-full bg-zinc-900/50 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-zinc-700 gap-4 group hover:border-amber-500/20 transition-all">
          <ImageIcon size={40} className="opacity-20 group-hover:scale-110 transition-transform" />
          <span className="font-black uppercase tracking-[0.3em] text-[10px]">Galeria Premium em Breve</span>
        </div>
      </div>
    </div>
  );
}
