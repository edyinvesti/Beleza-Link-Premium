import { Play, MessageCircle, Calendar, Users, Send, Heart, Share2, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Live() {
    const [messages, setMessages] = useState([
        { user: "Ana Silva", text: "Ansiosa para começar! 😍", time: "20:01" },
        { user: "Carlos Edu", text: "Beleza Link revolucionando...", time: "20:02" },
        { user: "Mariana", text: "Boa noite a todos!", time: "20:02" },
    ]);
    const [newMessage, setNewMessage] = useState("");
    const [likes, setLikes] = useState(4520);
    const [isLiked, setIsLiked] = useState(false);
    const [viewers, setViewers] = useState(1240);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Simulated Chat Traffic
    useEffect(() => {
        const interval = setInterval(() => {
            const botMessages = [
                { user: "João Paulo", text: "Essa técnica de corte é incrível! ✂️" },
                { user: "Bia Hair", text: "Qual a marca dessa tesoura?" },
                { user: "Studio Elite", text: "Cheguei agora, perdi muita coisa?" },
                { user: "Master Barber", text: "Link sempre na frente! 🔥" }
            ];
            const randomMsg = botMessages[Math.floor(Math.random() * botMessages.length)];
            setMessages(prev => [...prev.slice(-15), { ...randomMsg, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
            setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;
        setMessages(prev => [...prev, {
            user: "Eu",
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setNewMessage("");
    };

    const handleLike = () => {
        if (!isLiked) {
            setLikes(prev => prev + 1);
            setIsLiked(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[#050505] text-white p-6 pt-24 md:p-12 overflow-x-hidden"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Coluna Principal: Player Area */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <div className="flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-white"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Ao Vivo</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">
                            Lançamento <span className="text-[#F97316] not-italic">Beleza Link</span>
                        </h1>
                    </motion.div>

                    {/* Real Video Player Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative aspect-video bg-zinc-950 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5 group"
                    >
                        <video
                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
                        />

                        {/* Overlay Controls Fake */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button className="bg-white/10 backdrop-blur-md p-3 rounded-2xl hover:bg-white/20 transition-colors">
                                        <Play fill="white" size={20} />
                                    </button>
                                    <div className="h-1 w-48 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#F97316] w-[65%]"></div>
                                    </div>
                                </div>
                                <div className="text-[10px] font-black tracking-widest uppercase text-white/60">Quality: 4K Ultra HD</div>
                            </div>
                        </div>

                        {/* Top Badge */}
                        <div className="absolute top-6 right-8">
                            <div className="bg-black/40 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full border border-black bg-zinc-800" />
                                    ))}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#F97316]">{viewers.toLocaleString()} Assistindo</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stream Actions & Info */}
                    <div className="flex flex-wrap items-center justify-between gap-6 bg-zinc-900/30 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 shadow-2xl">
                        <div className="flex items-center gap-10">
                            <button
                                onClick={handleLike}
                                className={`flex flex-col items-center gap-2 transition-all ${isLiked ? 'text-red-500 scale-110' : 'text-zinc-500 hover:text-white'}`}
                            >
                                <div className={`p-4 rounded-2xl ${isLiked ? 'bg-red-500/10' : 'bg-white/5'} transition-colors`}>
                                    <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                                </div>
                                <span className="text-[10px] font-black tracking-widest uppercase">{likes.toLocaleString()}</span>
                            </button>
                            <div className="flex flex-col items-center gap-2 text-zinc-500">
                                <div className="p-4 rounded-2xl bg-white/5">
                                    <Users size={24} />
                                </div>
                                <span className="text-[10px] font-black tracking-widest uppercase">Audiência</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#F97316] transition-all hover:scale-105 active:scale-95">
                                <Share2 size={16} /> Compartilhar
                            </button>
                        </div>
                    </div>
                </div>

                {/* Coluna Sidebar: Chat & Agenda */}
                <div className="flex flex-col gap-8 h-full">

                    {/* Living Chat Component */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] flex flex-col h-[500px] lg:h-[600px] shadow-2xl overflow-hidden"
                    >
                        <div className="p-8 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-[#F97316]">
                                    <MessageCircle size={20} />
                                </div>
                                <h3 className="font-black uppercase tracking-[0.2em] text-[11px]">Chat da Comunidade</h3>
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar scroll-smooth">
                            <AnimatePresence initial={false}>
                                {messages.map((msg, i) => (
                                    <motion.div
                                        key={`${msg.user}-${i}`}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`flex flex-col ${msg.user === "Eu" ? "items-end" : "items-start"}`}
                                    >
                                        <div className={`p-4 rounded-2xl max-w-[85%] ${msg.user === "Eu" ? "bg-[#F97316] text-black" : "bg-zinc-800/60 border border-white/5 text-zinc-300"}`}>
                                            <span className={`text-[8px] font-black uppercase tracking-widest mb-1 block ${msg.user === "Eu" ? "text-black/60" : "text-[#F97316]"}`}>
                                                {msg.user} • {msg.time}
                                            </span>
                                            <p className="text-xs font-medium leading-relaxed">{msg.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                                <div ref={chatEndRef} />
                            </AnimatePresence>
                        </div>

                        <form onSubmit={handleSendMessage} className="p-6 bg-black/40 border-t border-white/5 relative">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Participe do chat..."
                                className="w-full bg-zinc-900/80 border border-white/5 rounded-2xl py-4 pl-6 pr-14 text-[11px] font-medium focus:border-[#F97316] outline-none transition-all placeholder:text-zinc-600"
                            />
                            <button
                                type="submit"
                                className="absolute right-9 top-[2.1rem] text-zinc-500 hover:text-[#F97316] transition-colors"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>

                    {/* Agenda Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-amber-500">
                                <Calendar size={20} />
                            </div>
                            <h3 className="font-black uppercase tracking-[0.2em] text-[11px]">Próximas Lives</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { day: "15", month: "JAN", title: "Masterclass Cortes", color: "text-amber-500" },
                                { day: "20", month: "JAN", title: "Gestão Financeira", color: "text-blue-500" }
                            ].map((evt) => (
                                <div key={evt.day} className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all cursor-pointer group">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <span className={`text-[13px] font-black tracking-tighter ${evt.color}`}>{evt.day}</span>
                                        <span className="text-[7px] font-extrabold uppercase tracking-widest text-zinc-600">{evt.month}</span>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest block group-hover:text-white transition-colors">{evt.title}</span>
                                        <span className="text-[8px] font-bold text-zinc-500">A partir das 20:00</span>
                                    </div>
                                    <ChevronRight size={14} className="text-zinc-700 group-hover:text-white transition-colors" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
