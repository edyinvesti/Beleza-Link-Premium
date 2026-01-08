import React, { useState, useEffect } from "react";
import { Send, Users, ShieldCheck, Award, Crown, TrendingUp, CheckCircle2, Circle } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Community() {
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");
  const [completedMissions, setCompletedMissions] = useState<string[]>([]);

  useEffect(() => { fetchPosts(); }, []);

  async function fetchPosts() {
    const { data } = await supabase.from("community_posts").select("*").order("created_at", { ascending: false });
    if (data) setPosts(data);
  }

  const missions = [
    { id: "post", label: "Postar um trabalho hoje", xp: 50 },
    { id: "like", label: "Curtir 3 publicações", xp: 20 },
    { id: "comment", label: "Dar um feedback positivo", xp: 30 }
  ];

  async function handleSendPost(e: React.FormEvent) {
    e.preventDefault();
    if (!newPost.trim()) return;
    const { error } = await supabase.from("community_posts").insert([{ author_name: "Membro", content: newPost }]);
    if (!error) {
      setNewPost("");
      fetchPosts();
      if (!completedMissions.includes("post")) setCompletedMissions([...completedMissions, "post"]);
    }
  }

  const getLevel = (count: number) => {
    if (count >= 10) return { label: "OURO", color: "text-amber-500", icon: Crown };
    if (count >= 5) return { label: "PRATA", color: "text-zinc-300", icon: ShieldCheck };
    return { label: "BRONZE", color: "text-orange-400", icon: Award };
  };

  const ranking = [
    { name: "Ana Silva", posts: 24 },
    { name: "Membro", posts: posts.filter(p => p.author_name === "Membro").length },
    { name: "Carla Santos", posts: 8 },
  ].sort((a, b) => b.posts - a.posts);

  return (
    <div className="p-6 md:p-12 text-white min-h-screen pb-32">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-blue-500 mb-4">
          <Users size={32} />
          <span className="font-black tracking-widest uppercase text-sm">Social Club</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
          Mural da <br /> <span className="text-blue-500">Expert.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 italic">
        <div className="lg:col-span-2 space-y-8 not-italic">
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-[2.5rem] shadow-2xl">
            <form onSubmit={handleSendPost} className="flex gap-4">
              <input value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="O que aprendeste hoje?" className="flex-1 bg-black border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-sm" />
              <button type="submit" className="bg-blue-500 text-white p-4 rounded-2xl hover:scale-105 transition-all"><Send size={20} /></button>
            </form>
          </div>
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-zinc-900/20 border border-white/5 p-8 rounded-[2.5rem] hover:bg-zinc-900/40 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center font-black text-blue-400 border border-white/5 text-xs">{post.author_name[0]}</div>
                  <p className="font-bold text-sm">{post.author_name}</p>
                </div>
                <p className="text-zinc-400 leading-relaxed text-md">{post.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 not-italic">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-white font-black italic uppercase text-lg mb-6 flex items-center gap-2"><Award size={20} /> Missões do Dia</h3>
            <div className="space-y-4">
              {missions.map((m) => (
                <div key={m.id} className={`flex items-center justify-between p-4 rounded-2xl transition-all ${completedMissions.includes(m.id) ? "bg-green-500/20 text-green-200" : "bg-black/20 text-white/70"}`}>
                  <div className="flex items-center gap-3">
                    {completedMissions.includes(m.id) ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    <span className="text-[11px] font-bold uppercase tracking-wide">{m.label}</span>
                  </div>
                  <span className="text-[9px] font-black">+{m.xp} XP</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/80 border border-white/5 p-8 rounded-[2.5rem]">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-amber-500" />
              <h2 className="text-xl font-black uppercase italic tracking-tighter">Leaderboard</h2>
            </div>
            <div className="space-y-6">
              {ranking.map((user, index) => {
                const l = getLevel(user.posts);
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-zinc-700 font-black italic text-lg w-6">#0{index + 1}</span>
                      <p className="font-bold text-sm">{user.name}</p>
                    </div>
                    <l.icon size={16} className={l.color} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}