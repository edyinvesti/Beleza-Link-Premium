import { ArrowRight, ShieldCheck, Sparkles, Smartphone, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      {/* Background Decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-zinc-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter italic text-amber-500">
          BELEZA LINK <span className="text-white/20 font-light">|</span> PREMIUM
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-white/5 border border-white/10 px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-all"
        >
          Acessar Sistema
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32 text-center">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-amber-500 text-sm font-bold mb-8 animate-bounce uppercase">
          <Sparkles size={16} />
          Exclusivo para Profissionais
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
          O PODER DO SEU <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            NEGÓCIO ONLINE.
          </span>
        </h1>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12 font-medium">
          Gestão inteligente, agendamentos rápidos e segurança total para o seu salão ou clínica.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => navigate('/dashboard')}
            className="group bg-amber-500 text-black text-xl font-black px-12 py-6 rounded-3xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all uppercase"
          >
            Entrar no Painel <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 text-left">
          <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[32px] hover:border-amber-500/50 transition-colors group">
            <Zap className="text-amber-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-2">Interface Nexo OS</h3>
            <p className="text-zinc-500">Fluidez absoluta em cada clique, otimizado para a sua rotina.</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[32px] hover:border-amber-500/50 transition-colors group">
            <ShieldCheck className="text-amber-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-2">Cloud Supabase</h3>
            <p className="text-zinc-500">Seus dados de clientes e faturamento protegidos na nuvem.</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-[32px] hover:border-amber-500/50 transition-colors group">
            <Smartphone className="text-amber-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-xl font-bold mb-2">Acesso Mobile</h3>
            <p className="text-zinc-500">Gerencie tudo pelo telemóvel com a mesma potência do PC.</p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center text-zinc-600 text-sm font-bold uppercase tracking-widest">
        © 2026 BELEZA LINK PREMIUM • NEXO OS
      </footer>
    </div>
  );
}
