import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackHeader from '../components/BackHeader';
import { MessageCircle, Heart, Share2 } from 'lucide-react';

const LiveWorkshop: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // Default to a placeholder video if no ID is provided
    const videoId = id || 'jfKfPfyJRdk'; // Lofi Girl as default placeholder

    const [comment, setComment] = useState('');

    return (
        <div className="pb-10 min-h-screen bg-black">
            <BackHeader title="Workshop Ao Vivo" />

            {/* Video Player Area */}
            <div className="w-full aspect-video bg-black sticky top-0 z-20 shadow-xl">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                    title="Live Workshop"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Info Section */}
            <div className="p-4 space-y-4">
                <div>
                    <h1 className="text-xl font-bold text-white leading-tight">
                        Masterclass: Técnicas Avançadas de Coloração
                    </h1>
                    <p className="text-zinc-400 text-sm mt-1">
                        Ao vivo agora • Iniciado há 15 min
                    </p>
                </div>

                <div className="flex gap-4 border-b border-zinc-800 pb-4">
                    <button className="flex flex-col items-center gap-1 text-zinc-300 hover:text-pink-500 transition">
                        <div className="bg-zinc-800 p-2 rounded-full">
                            <Heart className="w-5 h-5" />
                        </div>
                        <span className="text-xs">Curtir</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-zinc-300 hover:text-pink-500 transition">
                        <div className="bg-zinc-800 p-2 rounded-full">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="text-xs">Chat</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-zinc-300 hover:text-pink-500 transition">
                        <div className="bg-zinc-800 p-2 rounded-full">
                            <Share2 className="w-5 h-5" />
                        </div>
                        <span className="text-xs">Compartilhar</span>
                    </button>
                </div>

                {/* Chat Placeholder */}
                <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 h-64 flex flex-col">
                    <h3 className="text-sm font-semibold text-zinc-300 mb-3 block">Chat ao vivo</h3>

                    <div className="flex-1 overflow-y-auto space-y-3 mb-3 pr-2 scrollbar-thin">
                        <div className="text-sm">
                            <span className="font-bold text-pink-500 mr-2">Ana Silva:</span>
                            <span className="text-zinc-300">Boa tarde! Ansiosa pela aula.</span>
                        </div>
                        <div className="text-sm">
                            <span className="font-bold text-blue-400 mr-2">Carlos Edu:</span>
                            <span className="text-zinc-300">O som está ótimo.</span>
                        </div>
                        <div className="text-sm">
                            <span className="font-bold text-purple-400 mr-2">Patricia:</span>
                            <span className="text-zinc-300">Qual a marca da tinta que você está usando?</span>
                        </div>
                    </div>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Digite algo..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full bg-zinc-800 border-zinc-700 rounded-full py-2 px-4 text-sm text-white focus:ring-1 focus:ring-pink-500 outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveWorkshop;
