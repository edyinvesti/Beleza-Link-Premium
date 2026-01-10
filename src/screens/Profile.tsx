import { User, Shield, Settings, Award, Camera } from "lucide-react";

export default function Profile() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        <div className="relative group">
          <div className="w-32 h-32 rounded-3xl bg-zinc-900 border-2 border-[#F97316] flex items-center justify-center overflow-hidden">
            <User size={64} className="text-zinc-700" />
          </div>
          <button className="absolute bottom-2 right-2 p-2 bg-[#F97316] rounded-xl text-black hover:scale-110 transition-transform">
            <Camera size={16} />
          </button>
        </div>
        
        <div>
          <h1 className="text-3xl font-light tracking-widest text-white uppercase">Edy <span className="font-black text-[#F97316]">Carlos</span></h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
              <Shield size={12} className="text-[#F97316]" /> Administrador
            </span>
            <span className="flex items-center gap-1 text-[10px] text-zinc-500 uppercase tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
              <Award size={12} className="text-[#F97316]" /> Premium
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-[#F97316]/30 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Settings size={20} className="text-[#F97316]" />
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Configurações da Conta</h3>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-tighter">Gerencie suas preferências de segurança e notificações do sistema Beleza Link.</p>
        </div>
      </div>
    </div>
  );
}