import { PlayCircle, Clock, Star, ShieldCheck } from 'lucide-react';

export default function Courses() {
  const myCourses = [
    {
      title: "Design de Barba e Visagismo",
      instructor: "Edy Investi",
      duration: "2h 45min",
      rating: 4.9,
      students: 128,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Marketing Digital para Barber",
      instructor: "Expert Team",
      duration: "5h 20min",
      rating: 5.0,
      students: 85,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32 italic">
      <header className="mb-12">
        <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">
          Meus <span className="text-amber-500">Treinamentos</span>
        </h1>
        <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em]">Acesso Exclusivo</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-italic">
        {myCourses.map((course, index) => (
          <div key={index} className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] overflow-hidden group hover:border-amber-500/30 transition-all cursor-pointer">
            <div className="relative h-48">
              <img src={course.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <PlayCircle className="absolute bottom-6 right-6 text-amber-500" size={40} />
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={14} className="text-amber-500" />
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Certificado Incluso</span>
              </div>
              
              <h3 className="text-2xl font-black uppercase italic mb-6 leading-tight">{course.title}</h3>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1 text-amber-500"><Star size={12} fill="currentColor" /> {course.rating}</span>
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-full font-black text-[9px] uppercase hover:bg-amber-500 transition-colors">
                  Assistir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

