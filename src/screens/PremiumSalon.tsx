import { Star, ShieldCheck, Zap, Award } from 'lucide-react';

export default function PremiumSalon() {
  const diferenciais = [
    { titulo: "Acesso Elite", desc: "Conteúdo exclusivo para especialistas em beleza.", icone: Award },
    { titulo: "Comissões 20%", desc: "A maior taxa de retorno do mercado de afiliados.", icone: Zap },
    { titulo: "Pagamento Instantâneo", desc: "Receba suas comissões via PIX na hora.", icone: ShieldCheck }
  ];

  return (
    <div className="p-8">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Star className="text-amber-500 fill-amber-500" size={20} />
          <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">Módulo Premium</span>
        </div>
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">
          SALÃO <span className="text-amber-500">PREMIUM</span>
        </h1>
        <p className="text-zinc-500 font-medium mt-2 text-sm uppercase tracking-widest text-glow">Gestão de alta performance para parceiros.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {diferenciais.map((item, i) => (
          <div key={i} className="bg-zinc-900/30 border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm hover:border-amber-500/20 transition-all group">
            <div className="bg-amber-500/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <item.icone className="text-amber-500" size={24} />
            </div>
            <h3 className="text-white font-black uppercase italic mb-3 tracking-tight">{item.titulo}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}