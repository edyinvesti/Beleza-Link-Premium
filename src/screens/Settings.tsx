import React, { useState } from "react";
import { Settings as SettingsIcon, User, Store, Palette, Globe, Save, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("perfil");

  const handleSave = () => {
    toast.success("Configurações atualizadas com sucesso!");
  };

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-amber-500 mb-4">
          <SettingsIcon size={32} />
          <span className="font-black tracking-widest uppercase text-sm">Painel de Controle</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Configurações <br /> <span className="text-amber-500">Do Sistema.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Menu Lateral de Configurações */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { id: "perfil", label: "Perfil", icon: User },
            { id: "negocio", label: "Negócio", icon: Store },
            { id: "aparencia", label: "Aparência", icon: Palette },
            { id: "api", label: "Integrações", icon: Globe }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                activeTab === tab.id ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" : "bg-zinc-900/50 text-zinc-500 hover:text-white"
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo */}
        <div className="lg:col-span-3 bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-[3rem]">
          {activeTab === "perfil" && (
            <div className="space-y-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-zinc-800 rounded-3xl border-2 border-dashed border-zinc-700 flex items-center justify-center text-zinc-500">
                  Foto
                </div>
                <button className="bg-white text-black text-xs font-black px-6 py-3 rounded-xl uppercase tracking-widest">Alterar Avatar</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Nome Profissional</label>
                  <input className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-amber-500 transition-all" defaultValue="Especialista Expert" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-2">Email de Contato</label>
                  <input className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-amber-500 transition-all" defaultValue="contato@beleza.link" />
                </div>
              </div>
            </div>
          )}

          {activeTab === "aparencia" && (
            <div className="space-y-8">
              <h3 className="text-xl font-black italic uppercase">Tema do Painel</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Dourado Elite", "Rosa Premium", "Prata Chrome"].map((tema) => (
                  <button key={tema} className="p-6 bg-black border border-white/5 rounded-[2rem] text-left hover:border-amber-500 transition-all group">
                    <div className={`w-12 h-2 mb-4 rounded-full ${tema.includes("Dourado") ? "bg-amber-500" : tema.includes("Rosa") ? "bg-pink-500" : "bg-zinc-400"}`}></div>
                    <p className="font-bold text-sm">{tema}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-[2rem] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500" />
                  <div>
                    <p className="font-bold">Supabase Database</p>
                    <p className="text-[10px] text-emerald-500/70 uppercase font-black tracking-widest">Conectado e Ativo</p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-[2rem] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500" />
                  <div>
                    <p className="font-bold">Gemini AI Strategist</p>
                    <p className="text-[10px] text-emerald-500/70 uppercase font-black tracking-widest">Conectado e Ativo</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-white/5">
            <button onClick={handleSave} className="flex items-center gap-3 bg-white text-black font-black px-10 py-5 rounded-2xl hover:bg-amber-500 transition-all uppercase tracking-widest text-xs">
              <Save size={18} /> Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}