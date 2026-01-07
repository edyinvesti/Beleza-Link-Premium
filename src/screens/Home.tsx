import { useNavigate } from 'react-router-dom';
import { Shield, Zap, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      {/* Background Decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[25%] -right-[10%] w-[60%] h-[60%] bg-zinc-800/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        {/* Header Simples */}
        <nav className="flex justify-between items-center mb-24">
          <div className="text-2xl font-black italic tracking-tighter text-amber-500">
            BELEZA LINK <span className="text-white/20 ml-2 font-light">PREMIUM</span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
            <Star size={16} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Plataforma Expert 2026</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black italic mb-8 tracking-tighter leading-[0.9]">
            O PODER DO SEU<br />
            <span className="text-amber-500">NEGÓCIO ONLINE.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Gestão inteligente, agendamentos rápidos e segurança total para o seu salão ou clínica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="group bg-amber-500 text-black font-black px-10 py-6 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-amber-400 hover:scale-[1.02] active:scale-95"
            >
              ENTRAR NO PAINEL
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <div className="flex items-center gap-6 px-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold">100%</span>
                <span className="text-[10px] text-zinc-500 uppercase font-black">Seguro</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">24/7</span>
                <span className="text-[10px] text-zinc-500 uppercase font-black">Suporte</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer com diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 border-t border-white/5 pt-16">
          <div className="flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-xl text-amber-500"><Zap size={24} /></div>
            <div>
              <h3 className="font-bold mb-1 uppercase text-sm">Alta Performance</h3>
              <p className="text-zinc-500 text-xs">Sistema otimizado para agendamentos em segundos.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-xl text-amber-500"><Shield size={24} /></div>
            <div>
              <h3 className="font-bold mb-1 uppercase text-sm">Dados Protegidos</h3>
              <p className="text-zinc-500 text-xs">Seus clientes e finanças com criptografia total.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-white/5 p-3 rounded-xl text-amber-500"><Star size={24} /></div>
            <div>
              <h3 className="font-bold mb-1 uppercase text-sm">Interface Premium</h3>
              <p className="text-zinc-500 text-xs">Design moderno que valoriza a sua marca profissional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
