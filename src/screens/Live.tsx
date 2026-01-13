import { Play, MessageCircle, Calendar, Users, Send, Heart, Share2 } from "lucide-react";
import { useState } from "react";

export default function Live() {
    const [messages] = useState([
        { user: "Ana Silva", text: "Ansiosa para começar! 😍" },
        { user: "Carlos Edu", text: "Beleza Link revolucionando..." },
        { user: "Mariana", text: "Boa noite a todos!" },
    ]);

    return (
        <div className="min-h-screen bg-black text-white p-6 pt-20 md:p-12 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Coluna Principal: Player */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-red-600/20 text-red-500 px-3 py-1 rounded-full border border-red-500/20">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-[10px] font-black uppercase tracking-widest">Ao Vivo</span>
                        </div>
                        <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter">Lançamento <span className="text-[#F97316]">Beleza Link</span></h1>
                    </div>

                    {/* Player Mock */}
                    <div className="relative aspect-video bg-zinc-900 rounded-[30px] border border-white/5 overflow-hidden shadow-2xl group cursor-pointer">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-[#F97316]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#F97316]/50 group-hover:scale-110 transition-transform">
                                <Play fill="white" className="ml-1 text-white" size={32} />
                            </div>
                        </div>
                    </div>

                    {/* Info Stream */}
                    <div className="flex items-center justify-between text-zinc-500">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Users size={18} />
                                <span className="text-xs font-bold">1.2k assistindo</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart size={18} className="hover:text-red-500 cursor-pointer transition-colors" />
                                <span className="text-xs font-bold">4.5k</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-[#F97316] transition-colors">
                            <Share2 size={18} /> Compartilhar
                        </button>
                    </div>
                </div>

                {/* Coluna Lateral: Chat / Agenda */}
                <div className="flex flex-col gap-6 h-full">
                    {/* Chat */}
                    <div className="flex-1 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[25px] p-6 flex flex-col h-[400px] lg:h-auto">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                            <MessageCircle size={20} className="text-[#F97316]" />
                            <h3 className="font-black uppercase tracking-widest text-xs">Chat ao vivo</h3>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <div key={i} className="bg-zinc-800/50 p-3 rounded-xl border border-white/5">
                                    <span className="text-[#F97316] text-[10px] font-black uppercase block mb-1">{msg.user}</span>
                                    <p className="text-sm text-zinc-300">{msg.text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 relative">
                            <input type="text" placeholder="Envie uma mensagem..." className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-xs focus:border-[#F97316] outline-none transition-colors" />
                            <button className="absolute right-3 top-2.5 text-zinc-500 hover:text-[#F97316]"><Send size={16} /></button>
                        </div>
                    </div>

                    {/* Próximos Eventos */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[25px] p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Calendar size={20} className="text-[#F97316]" />
                            <h3 className="font-black uppercase tracking-widest text-xs">Agenda</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { day: "15 JAN", title: "Masterclass Cortes" },
                                { day: "20 JAN", title: "Gestão de Salão" }
                            ].map((evt) => (
                                <div key={evt.day} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-xl transition-colors cursor-pointer">
                                    <span className="text-[#F97316] text-[10px] font-black uppercase text-center w-12 leading-tight">{evt.day}</span>
                                    <span className="text-xs font-bold text-zinc-300">{evt.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}