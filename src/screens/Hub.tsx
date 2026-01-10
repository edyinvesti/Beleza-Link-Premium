import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, Calendar, Video, Sparkles, 
  Brain, Newspaper, Wallet, Users, MessageSquare 
} from "lucide-react";

const apps = [
  { name: "Painel Executivo", icon: LayoutDashboard, path: "/painel", desc: "Barbearia do Edy" },
  { name: "Agenda Premium", icon: Calendar, path: "/agenda", desc: "Gestão de Horários" },
  { name: "Mestre da Beleza", icon: Sparkles, path: "/ia", desc: "Consultoria IA" },
  { name: "Masterclass", icon: Video, path: "/live", desc: "Aulas ao Vivo" },
  { name: "Strategist AI", icon: Brain, path: "/assistant", desc: "Estratégia" },
  { name: "Blog de Estilo", icon: Newspaper, path: "/blog", desc: "Marketing" },
  { name: "Carteira", icon: Wallet, path: "/wallet", desc: "Financeiro" },
  { name: "Clientes", icon: Users, path: "/clientes", desc: "Base de Dados" },
  { name: "Comunidade", icon: MessageSquare, path: "/comunidade", desc: "Networking" },
];

export default function Hub() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black p-6 pb-24 text-left overflow-y-auto">
      <header className="mb-10 pt-8">
        <h1 className="text-3xl font-black italic text-white uppercase tracking-tighter">
          ECOSSISTEMA <span className="text-[#F97316]">BELEZA LINK</span>
        </h1>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
          Selecione a ferramenta para gerenciar seu império
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {apps.map((app, i) => (
          <motion.div
            key={app.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => navigate(app.path)}
            className="bg-zinc-900/40 border border-white/5 p-8 rounded-[2.5rem] flex items-center gap-6 hover:border-[#F97316]/40 hover:bg-zinc-900/60 transition-all cursor-pointer group"
          >
            <div className="p-4 bg-black rounded-2xl group-hover:scale-110 transition-transform">
              <app.icon className="text-[#F97316]" size={32} />
            </div>
            <div>
              <h3 className="text-white font-black uppercase italic text-sm tracking-tighter">{app.name}</h3>
              <p className="text-zinc-600 text-[8px] font-bold uppercase tracking-widest mt-1">{app.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}