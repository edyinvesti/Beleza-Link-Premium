import { motion } from "framer-motion";
import { Play, BookOpen, Award, Users, Scissors, Star, ChevronRight, Zap } from "lucide-react";

export default function Academy({ onBack }: { onBack: () => void }) {
  const categories = [
    { title: "Corte & Estilo", icon: Scissors, color: "text-amber-500", desc: "Técnicas avançadas de tesoura e máquina", status: "NOVO" },
    { title: "Visagismo", icon: Star, color: "text-amber-400", desc: "Harmonia facial e consultoria de imagem" },
    { title: "Masterclass", icon: Play, color: "text-red-500", desc: "Aulas ao vivo com grandes mestres", status: "AO VIVO" },
    { title: "Gestão", icon: BookOpen, color: "text-blue-400", desc: "Marketing, Vendas e Atendimento de Elite" },
    { title: "Certificados", icon: Award, color: "text-green-400", desc: "Acompanhe sua evolução profissional" },
    { title: "Comunidade", icon: Users, color: "text-purple-400", desc: "Troca de experiências e networking" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="p-6 md:p-12 text-white min-h-screen bg-[#050505] pb-32 relative overflow-x-hidden">
      {/* Botão Voltar */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="absolute top-6 left-6 z-50 text-white/40 hover:text-white uppercase text-[10px] font-black tracking-widest flex items-center gap-2 transition-colors bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/5"
      >
        ← Voltar
      </motion.button>

      {/* Header Estilizado */}
      <header className="mb-16 mt-16 md:mt-4 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          <span className="text-[#F97316] font-bold uppercase text-[9px] tracking-[0.4em] mb-3 block px-1">
            Plataforma de Elite
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-4">
            TREINAMENTO <br />
            <span className="text-amber-500 not-italic">LINK</span>
          </h1>
        </motion.div>
      </header>

      {/* Hero: Curso em Destaque */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-16 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-[2.5rem] blur-3xl group-hover:opacity-60 transition-opacity"></div>
        <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <Zap size={120} className="text-amber-500" />
          </div>

          <div className="max-w-2xl">
            <span className="bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
              Destaque do Mês
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              Masterclass 2026: <br />
              <span className="text-zinc-400">Técnicas Afros & Lisos</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-medium mb-8 leading-relaxed">
              Domine as técnicas mais requisitadas do mercado com nossa metodologia exclusiva
              de alta performance para salões premium.
            </p>
            <button className="bg-white text-black font-black px-8 py-4 rounded-2xl uppercase text-xs tracking-widest flex items-center gap-3 hover:bg-amber-500 transition-colors group/btn shadow-2xl">
              Começar Agora <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* Grid de Categorias */}
      <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-8 px-2">
        Explorar Trilhas
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-[2.5rem] flex flex-col items-start gap-6 hover:bg-zinc-800/60 transition-colors cursor-pointer group shadow-2xl relative overflow-hidden"
          >
            <div className="bg-zinc-800/50 p-5 rounded-3xl group-hover:scale-110 group-hover:bg-zinc-700 transition-all">
              <item.icon className={item.color} size={32} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-black uppercase text-sm tracking-widest">{item.title}</h3>
                {item.status && (
                  <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${item.status === 'AO VIVO' ? 'bg-red-500' : 'bg-amber-500'} text-black animate-pulse`}>
                    {item.status}
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-500 font-bold leading-relaxed uppercase tracking-tight">{item.desc}</p>
            </div>

            <div className="flex w-full items-center justify-between mt-4">
              <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-white transition-colors">
                Ver Módulos →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}