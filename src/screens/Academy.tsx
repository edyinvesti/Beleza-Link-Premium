import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play, BookOpen, Award, Users, Scissors, Star,
  ChevronRight, Zap, Lock, CheckCircle2,
  Clock, BarChart3, ArrowLeft, CreditCard,
  ShieldCheck, Sparkles
} from "lucide-react";

type ViewState = 'categories' | 'checkout' | 'player';

export default function Academy({ onBack }: { onBack: () => void }) {
  const [view, setView] = useState<ViewState>('categories');
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [purchasedCourses, setPurchasedCourses] = useState<string[]>([]);

  // Player State
  const [currentLessonIdx, setCurrentLessonIdx] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const categories = [
    { id: 'corte', title: "Corte & Estilo", icon: Scissors, color: "text-amber-500", desc: "Técnicas avançadas de tesoura e máquina", status: "NOVO", price: "R$ 197,90" },
    { id: 'visagismo', title: "Visagismo", icon: Star, color: "text-amber-400", desc: "Harmonia facial e consultoria de imagem", price: "R$ 147,00" },
    { id: 'masterclass', title: "Masterclass", icon: Play, color: "text-red-500", desc: "Aulas ao vivo com grandes mestres", status: "AO VIVO", price: "R$ 297,00" },
    { id: 'gestao', title: "Gestão", icon: BookOpen, color: "text-blue-400", desc: "Marketing, Vendas e Atendimento de Elite", price: "R$ 197,90" },
    { id: 'certificados', title: "Certificados", icon: Award, color: "text-green-400", desc: "Acompanhe sua evolução profissional", price: "GRÁTIS" },
    { id: 'comunidade', title: "Comunidade", icon: Users, color: "text-purple-400", desc: "Troca de experiências e networking", price: "GRÁTIS" }
  ];

  const lessons = [
    { title: "Boas-vindas e Introdução", duration: "05:20" },
    { title: "Fundamentos da Tesoura de Elite", duration: "15:45" },
    { title: "Técnicas de Angularidade", duration: "22:10" },
    { title: "Degradê de Alta Performance", duration: "18:30" },
    { title: "Finalização e Styling Premium", duration: "12:15" },
    { title: "Conclusão do Módulo", duration: "08:00" }
  ];

  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    if (category.price === "GRÁTIS" || purchasedCourses.includes(category.id)) {
      setView('player');
    } else {
      setView('checkout');
    }
  };

  const handlePurchase = () => {
    // Simula a compra e libera o curso
    setPurchasedCourses([...purchasedCourses, selectedCategory.id]);
    setView('player');
  };

  const toggleLessonCompletion = () => {
    if (completedLessons.includes(currentLessonIdx)) {
      setCompletedLessons(completedLessons.filter(idx => idx !== currentLessonIdx));
    } else {
      setCompletedLessons([...completedLessons, currentLessonIdx]);
      // Move para a próxima aula se não for a última
      if (currentLessonIdx < lessons.length - 1) {
        setTimeout(() => setCurrentLessonIdx(currentLessonIdx + 1), 500);
      }
    }
  };

  return (
    <div className="text-white min-h-screen bg-[#050505] pb-32 relative overflow-x-hidden">
      <AnimatePresence mode="wait">

        {/* VIEW: CATEGORIAS */}
        {view === 'categories' && (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 md:p-12 max-w-7xl mx-auto"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBack}
              className="mb-12 text-white/40 hover:text-white uppercase text-[10px] font-black tracking-widest flex items-center gap-2 transition-colors bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/5"
            >
              ← Voltar
            </motion.button>

            <header className="mb-16 text-center md:text-left">
              <span className="text-[#F97316] font-bold uppercase text-[9px] tracking-[0.4em] mb-3 block px-1">Plataforma de Elite</span>
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] mb-4">
                TREINAMENTO <br /> <span className="text-amber-500 not-italic">LINK</span>
              </h1>
            </header>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-[2.5rem] blur-3xl group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-zinc-900/60 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] overflow-hidden">
                <div className="max-w-2xl">
                  <span className="bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Destaque do Mês</span>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">Masterclass 2026: <br /><span className="text-zinc-400">Técnicas Afros & Lisos</span></h2>
                  <p className="text-zinc-400 text-xs md:text-sm font-medium mb-8 leading-relaxed">Domine as técnicas mais requisitadas do mercado com nossa metodologia exclusiva.</p>
                  <button onClick={() => handleCategoryClick(categories[2])} className="bg-white text-black font-black px-8 py-4 rounded-2xl uppercase text-[10px] tracking-widest flex items-center gap-3 hover:bg-amber-500 transition-colors group/btn shadow-2xl">
                    Começar Agora <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((item, idx) => {
                const isPurchased = purchasedCourses.includes(item.id) || item.price === "GRÁTIS";
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
                    whileHover={{ y: -5 }}
                    onClick={() => handleCategoryClick(item)}
                    className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-[2.5rem] flex flex-col items-start gap-6 hover:bg-zinc-800/60 transition-all cursor-pointer group shadow-2xl relative"
                  >
                    {!isPurchased && <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-amber-500 transition-colors"><Lock size={16} /></div>}
                    <div className="bg-zinc-800/50 p-5 rounded-3xl group-hover:scale-110 transition-all"><item.icon className={item.color} size={32} /></div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-black uppercase text-sm tracking-widest">{item.title}</h3>
                        {item.status && <span className={`text-[8px] font-black px-2 py-0.5 rounded-full ${item.status === 'AO VIVO' ? 'bg-red-500' : 'bg-amber-500'} text-black`}>{item.status}</span>}
                      </div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* VIEW: CHECKOUT */}
        {view === 'checkout' && (
          <motion.div
            key="checkout"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 md:p-12 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen text-center"
          >
            <div className="bg-zinc-900/80 backdrop-blur-3xl border border-white/5 p-10 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden w-full">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>

              <button
                onClick={() => setView('categories')}
                className="mb-10 text-zinc-500 hover:text-white uppercase text-[9px] font-black tracking-widest flex items-center gap-2 mx-auto transition-colors"
              >
                ← Escolher outro curso
              </button>

              <div className="mb-12">
                <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-amber-500">
                  {selectedCategory && <selectedCategory.icon size={40} />}
                </div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                  LIBERAR <span className="text-amber-500">{selectedCategory?.title}</span>
                </h2>
                <p className="text-zinc-500 text-sm font-medium max-w-md mx-auto">Invista na sua carreira com o treinamento mais completo do mercado. Acesso vitalício e certificado incluso.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
                {[
                  { icon: Play, text: "Acesso a 42 aulas em 4K" },
                  { icon: Award, text: "Certificado de Especialista" },
                  { icon: Clock, text: "Acesso Vitalício ilimitado" },
                  { icon: BarChart3, text: "Material Digital Incluso" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-2xl flex items-center gap-4">
                    <item.icon size={18} className="text-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/40 p-8 rounded-[2rem] border border-white/5 mb-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em]">Investimento Único</span>
                  <span className="text-3xl font-black text-white italic">{selectedCategory?.price}</span>
                </div>
                <button
                  onClick={handlePurchase}
                  className="w-full bg-white text-black font-black py-6 rounded-2xl uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-amber-500 transition-all hover:scale-[1.02] active:scale-95 shadow-2xl"
                >
                  <CreditCard size={18} /> Finalizar Compra
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 text-zinc-600">
                <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest"><ShieldCheck size={14} /> Compra Segura</div>
                <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest"><Sparkles size={14} /> 7 Dias de Garantia</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW: PLAYER */}
        {view === 'player' && (
          <motion.div
            key="player"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col lg:flex-row min-h-screen bg-black"
          >
            {/* Player Area */}
            <div className="flex-1 flex flex-col p-6 md:p-12">
              <button
                onClick={() => setView('categories')}
                className="mb-8 text-white/30 hover:text-white uppercase text-[9px] font-black tracking-widest flex items-center gap-2 transition-colors self-start"
              >
                ← Voltar para cursos
              </button>

              <div className="relative aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLessonIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_60px_rgba(245,158,11,0.4)]">
                      <Play size={40} className="text-black ml-1" fill="currentColor" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Mock Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 group-hover:h-3 transition-all">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "45%" }}
                    className="h-full bg-amber-500 rounded-r-full shadow-[0_0_15px_rgba(245,158,11,0.8)]"
                  />
                </div>

                <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
                  <div>
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">Aula {String(currentLessonIdx + 1).padStart(2, '0')} • Módulo 01</h4>
                    <p className="text-2xl font-black uppercase italic tracking-tighter">{lessons[currentLessonIdx].title}</p>
                  </div>
                  <div className="bg-black/60 backdrop-blur-xl px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/5">
                    {lessons[currentLessonIdx].duration}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">{selectedCategory?.title}</h2>
                  <div className="flex items-center gap-4 text-zinc-500 text-[9px] font-black uppercase tracking-widest">
                    <span>Módulo 01</span>
                    <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span>
                    <span className="text-amber-500">{progress}% Concluído</span>
                    <div className="w-32 h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div animate={{ width: `${progress}%` }} className="h-full bg-amber-500" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleLessonCompletion}
                  className={`font-black px-10 py-5 rounded-2xl uppercase text-[10px] tracking-[0.3em] transition-all flex items-center gap-3 ${completedLessons.includes(currentLessonIdx) ? 'bg-green-500 text-black' : 'bg-white text-black hover:bg-amber-500'}`}
                >
                  {completedLessons.includes(currentLessonIdx) ? <CheckCircle2 size={16} /> : null}
                  {completedLessons.includes(currentLessonIdx) ? 'Concluída' : 'Marcar como Concluída'}
                </button>
              </div>
            </div>

            {/* Sidebar: Lesson List */}
            <div className="w-full lg:w-[450px] bg-zinc-950/50 backdrop-blur-3xl border-l border-white/5 p-8 overflow-y-auto max-h-[600px] lg:max-h-screen">
              <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-10 px-2 flex items-center justify-between">
                Trilha de Aulas <span className="text-amber-500">{lessons.length} Aulas</span>
              </h3>

              <div className="space-y-4">
                {lessons.map((lesson, idx) => (
                  <motion.div
                    key={idx}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentLessonIdx(idx)}
                    className={`p-6 rounded-[2rem] flex items-center gap-5 transition-all cursor-pointer border-2 ${currentLessonIdx === idx ? 'bg-amber-500 border-amber-500 text-black shadow-[0_15px_30px_rgba(245,158,11,0.2)]' : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5 text-white/50 hover:text-white'}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${currentLessonIdx === idx ? 'bg-black/10' : completedLessons.includes(idx) ? 'bg-green-500/10 text-green-500' : 'bg-zinc-900'}`}>
                      {completedLessons.includes(idx) ? <CheckCircle2 size={22} strokeWidth={3} /> : <span className="text-[11px] font-black">{String(idx + 1).padStart(2, '0')}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-black uppercase tracking-widest mb-1 truncate">{lesson.title}</h4>
                      <div className="flex items-center gap-2 text-[8px] font-black opacity-60 uppercase">
                        <Clock size={10} /> {lesson.duration}
                      </div>
                    </div>
                    {currentLessonIdx === idx && (
                      <motion.div layoutId="active-indicator" className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}