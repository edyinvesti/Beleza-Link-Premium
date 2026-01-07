import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MessageCircle, Heart, Share2, Send, Users, ArrowLeft } from 'lucide-react';

const LiveWorkshop: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const videoId = id || 'jfKfPfyJRdk'; 

    const [comment, setComment] = useState('');
    const [messages, setMessages] = useState([
        { user: 'Ana Silva', text: 'Boa tarde! Ansiosa pela aula. ✨', color: 'text-pink-500' },
        { user: 'Carlos Edu', text: 'O som está ótimo.', color: 'text-blue-400' },
        { user: 'Patricia', text: 'Qual a marca da tinta?', color: 'text-amber-400' },
    ]);

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!comment.trim()) return;
        setMessages([...messages, { user: 'Você', text: comment, color: 'text-amber-500' }]);
        setComment('');
    };

    return (
        <div className="pb-10 min-h-screen bg-[#09090b] text-white">
            {/* Header Simples com Voltar */}
            <div className="p-4 flex items-center gap-4 bg-black/50 backdrop-blur-md sticky top-0 z-30 md:static">
                <button onClick={() => navigate(-1)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ArrowLeft size={24} className="text-amber-500" />
                </button>
                <h2 className="font-bold uppercase tracking-widest text-sm">Workshop Masterclass</h2>
            </div>

            {/* Player de Vídeo */}
            <div className="w-full aspect-video bg-black sticky top-[64px] md:relative md:top-0 z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-b border-white/5">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                    title="Live Workshop"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className="p-6 space-y-6 max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-amber-500 bg-clip-text text-transparent italic uppercase">
                            Técnicas Avançadas de Coloração 2026
                        </h1>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="flex items-center gap-1 text-[10px] font-black bg-red-500 text-white px-2 py-0.5 rounded-sm animate-pulse">
                                AO VIVO
                            </span>
                            <span className="flex items-center gap-1 text-zinc-500 text-xs font-bold">
                                <Users size={14} /> 1.240 ONLINE
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className="p-3 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-all group">
                            <Heart className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
                        </button>
                        <button className="p-3 rounded-2xl bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-all group">
                            <Share2 className="w-5 h-5 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Chat Glassmorphism */}
                <div className="relative group rounded-[2rem] border border-white/10 bg-zinc-900/40 backdrop-blur-xl flex flex-col h-[450px] overflow-hidden shadow-2xl">
                    <div className="p-4 border-b border-white/5 bg-white/5">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-zinc-400 flex items-center gap-2">
                            <MessageCircle size={16} className="text-amber-500" /> Chat da Comunidade
                        </h3>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, i) => (
                            <div key={i} className="animate-in slide-in-from-bottom-2 duration-300">
                                <span className={`font-black text-[10px] uppercase tracking-tighter ${msg.color} block mb-1`}>
                                    {msg.user}
                                </span>
                                <p className="text-zinc-200 text-sm bg-white/5 p-3 rounded-2xl rounded-tl-none inline-block border border-white/5">
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-black/40 backdrop-blur-md border-t border-white/5 flex gap-2">
                        <input
                            type="text"
                            placeholder="Diga algo para o expert..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="flex-1 bg-zinc-800/50 border border-white/10 rounded-2xl py-3 px-5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                        />
                        <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-black p-3 rounded-2xl transition-all shadow-lg shadow-amber-500/20">
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LiveWorkshop;
