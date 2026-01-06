import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';

export default function Agenda() {
  return (
    <div className="p-4 text-white space-y-6 pb-24">
      <h1 className="text-3xl font-black italic tracking-tighter uppercase">Agenda</h1>
      
      <div className="bg-zinc-900 p-6 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center space-y-4">
        <div className="bg-amber-500/10 p-4 rounded-full text-amber-500">
          <CalendarIcon size={40} />
        </div>
        <div>
          <h2 className="text-xl font-bold">Nenhum agendamento hoje</h2>
          <p className="text-zinc-500 text-sm">Sua agenda está limpa por enquanto.</p>
        </div>
        <button className="bg-amber-500 text-black font-black px-6 py-3 rounded-2xl flex items-center gap-2 uppercase text-sm">
          <Plus size={18} /> Novo Agendamento
        </button>
      </div>

      {/* Placeholder para os próximos dias */}
      <div className="grid grid-cols-7 gap-2">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="bg-zinc-900/50 border border-white/5 aspect-square rounded-xl flex flex-col items-center justify-center">
            <span className="text-[10px] text-zinc-500 font-bold uppercase">{['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'][i]}</span>
            <span className="font-black text-lg">{10 + i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
