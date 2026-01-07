import React from 'react';
import { User, Shield, Bell, HelpCircle, LogOut, ChevronRight, Smartphone, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function More() {
  const navigate = useNavigate();

  const menuSections = [
    {
      title: "Conta",
      items: [
        { icon: User, label: "Meu Perfil", desc: "Alterar foto e dados profissionais" },
        { icon: Shield, label: "Segurança", desc: "Senha e autenticação" }
      ]
    },
    {
      title: "Preferências",
      items: [
        { icon: Bell, label: "Notificações", desc: "Alertas de agenda e sistema" },
        { icon: Moon, label: "Aparência", desc: "Tema escuro e cores" }
      ]
    },
    {
      title: "Suporte",
      items: [
        { icon: HelpCircle, label: "Central de Ajuda", desc: "Tutoriais e FAQ" },
        { icon: Smartphone, label: "Falar com Consultor", desc: "Suporte VIP via WhatsApp" }
      ]
    }
  ];

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <h1 className="text-5xl font-black italic tracking-tighter uppercase">Configurações</h1>
        <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-[0.3em] mt-2">Beleza Link Premium v1.0</p>
      </header>

      <div className="max-w-2xl space-y-10">
        {menuSections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-zinc-600 font-black text-[10px] uppercase tracking-[0.2em] ml-4">{section.title}</h3>
            <div className="bg-zinc-900/50 border border-white/5 rounded-[2rem] overflow-hidden">
              {section.items.map((item, itemIdx) => (
                <button 
                  key={itemIdx}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all border-b border-white/5 last:border-none group"
                >
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-black rounded-2xl text-amber-500 group-hover:scale-110 transition-transform">
                      <item.icon size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm">{item.label}</p>
                      <p className="text-zinc-500 text-[10px] font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-zinc-700 group-hover:text-amber-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}

        <button 
          onClick={() => navigate('/')}
          className="w-full mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-[2rem] flex items-center justify-center gap-3 text-red-500 font-black uppercase text-[10px] tracking-widest hover:bg-red-500 hover:text-white transition-all"
        >
          <LogOut size={18} /> Finalizar Sessão
        </button>
      </div>
    </div>
  );
}
