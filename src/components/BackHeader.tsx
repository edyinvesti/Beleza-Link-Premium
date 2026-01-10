import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BackHeaderProps {
  title: string;
}

const BackHeader: React.FC<BackHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center gap-4 p-5 bg-black/60 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
      <button 
        onClick={() => navigate(-1)} 
        className="p-2 hover:bg-[#F97316]/10 rounded-xl transition-all active:scale-90 group"
      >
        <ArrowLeft className="w-6 h-6 text-[#F97316] group-hover:scale-110 transition-transform" />
      </button>
      
      <div>
        <h1 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 leading-none mb-1">Voltar</h1>
        <h2 className="text-sm font-bold text-white uppercase tracking-tighter italic">{title}</h2>
      </div>
    </div>
  );
};

export default BackHeader;