import { MapPin, Navigation, Search } from "lucide-react";

export default function Geo() {
  const profissionais = [
    { nome: "Studio Beleza Pro", local: "Anápolis, GO", status: "Aberto" },
    { nome: "Elite Hair Academy", local: "Goiânia, GO", status: "Aberto" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 p-6 md:p-20">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase mb-4">Geo<span className="text-zinc-600 underline">Localização</span></h2>
          <p className="text-zinc-400 font-black uppercase tracking-widest text-xs">Encontre especialistas próximos a você em tempo real</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lado Esquerdo: Lista de Profissionais */}
          <div className="lg:col-span-1 space-y-4">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-4 text-zinc-500" size={18} />
              <input type="text" placeholder="BUSCAR CIDADE..." className="w-full bg-zinc-900 border border-white/5 p-4 pl-12 rounded-2xl text-[10px] font-black tracking-widest outline-none focus:border-[#F97316]" />
            </div>
            
            {profissionais.map((p, i) => (
              <div key={i} className="bg-zinc-900/50 p-6 rounded-[25px] border border-white/5 hover:border-[#F97316] transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#F97316] p-2 rounded-lg text-black"><MapPin size={20} /></div>
                  <span className="text-[9px] font-black text-green-500 uppercase">{p.status}</span>
                </div>
                <h3 className="font-black uppercase text-sm mb-1 group-hover:text-[#F97316]">{p.nome}</h3>
                <p className="text-zinc-500 text-[10px] font-bold uppercase">{p.local}</p>
              </div>
            ))}
          </div>

          {/* Lado Direito: O Mapa (Visual Original) */}
          <div className="lg:col-span-2 h-[400px] md:h-full min-h-[500px] bg-zinc-900 rounded-[40px] border border-white/5 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
            <div className="relative text-center z-10">
              <div className="w-24 h-24 bg-[#F97316]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Navigation size={40} className="text-[#F97316] animate-pulse" />
              </div>
              <h4 className="text-2xl font-black uppercase italic">Mapa de Especialistas</h4>
              <p className="text-zinc-500 text-[10px] font-black mt-2 tracking-widest">SISTEMA ATIVO EM GOIÁS</p>
            </div>
            <button className="absolute bottom-10 bg-white text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-2xl">Ativar GPS</button>
          </div>
        </div>
      </div>
    </div>
  );
}