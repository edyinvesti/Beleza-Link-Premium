import { motion } from "framer-motion";
import { MessageSquare, Heart, Share2, Image as ImageIcon } from "lucide-react";

export default function Comunidade() {
    const posts = [
        {
            user: "Julia Martins",
            role: "Colorista",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
            time: "2h",
            content: "Resultado do curso de mechas de ontem! O segredo foi a matização com a nova linha. ✨",
            image: "https://images.unsplash.com/photo-1492106087820-71f171d7dce7?q=80&w=1974&auto=format&fit=crop",
            likes: 45,
            comments: 12
        },
        {
            user: "Ricardo Silva",
            role: "Gestor",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
            time: "4h",
            content: "Alguém indicaria um software de gestão para salão pequeno? Estou testando o Beleza Link mas queria opiniões.",
            likes: 8,
            comments: 24
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-6 pt-20 md:p-12 overflow-x-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar Esquerda: Menu */}
                <div className="hidden lg:block space-y-8">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[25px] p-6">
                        <h3 className="font-black uppercase tracking-widest text-xs mb-6 text-zinc-500">Canais</h3>
                        <ul className="space-y-4">
                            {['Geral', 'Colorimetria', 'Cortes', 'Gestão', 'Vagas', 'Dúvidas'].map((channel) => (
                                <li key={channel} className="flex items-center gap-3 text-sm font-bold text-zinc-300 hover:text-[#F97316] cursor-pointer transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                                    # {channel}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Feed Principal */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Criar Post */}
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[25px] p-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10"></div>
                            <input type="text" placeholder="Compartilhe com a comunidade..." className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-zinc-600" />
                        </div>
                        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                            <button className="text-zinc-500 hover:text-[#F97316] transition-colors"><ImageIcon size={20} /></button>
                            <button className="bg-[#F97316] text-black text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full hover:bg-white transition-colors">Postar</button>
                        </div>
                    </div>

                    {/* Posts */}
                    {posts.map((post, i) => (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[25px] p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full object-cover border border-white/10" />
                                    <div>
                                        <h4 className="font-bold text-sm text-white">{post.user}</h4>
                                        <span className="text-[10px] font-black uppercase text-[#F97316] tracking-widest">{post.role}</span>
                                    </div>
                                </div>
                                <span className="text-xs text-zinc-600">{post.time}</span>
                            </div>

                            <p className="text-zinc-300 text-sm leading-relaxed mb-4">{post.content}</p>

                            {post.image && (
                                <div className="rounded-2xl overflow-hidden mb-6 border border-white/5">
                                    <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="flex items-center gap-6 pt-4 border-t border-white/5 text-zinc-500">
                                <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                                    <Heart size={18} /> <span className="text-xs font-bold">{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                                    <MessageSquare size={18} /> <span className="text-xs font-bold">{post.comments}</span>
                                </button>
                                <button className="hover:text-green-500 transition-colors ml-auto">
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sidebar Direita: Trending */}
                <div className="hidden lg:block space-y-8">
                    <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-[25px] p-6">
                        <h3 className="font-black uppercase tracking-widest text-xs mb-6 text-zinc-500">Em Alta</h3>
                        <div className="space-y-4">
                            {[
                                { topic: "Tendências 2026", posts: "2.4k posts" },
                                { topic: "Gestão Financeira", posts: "1.8k posts" },
                                { topic: "Colorimetria Avançada", posts: "950 posts" }
                            ].map((trend, i) => (
                                <div key={i} className="cursor-pointer hover:bg-white/5 p-2 rounded-lg -mx-2 transition-colors">
                                    <h4 className="font-bold text-sm text-white">{trend.topic}</h4>
                                    <span className="text-[10px] text-zinc-600">{trend.posts}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}