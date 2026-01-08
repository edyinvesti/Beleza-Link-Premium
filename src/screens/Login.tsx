import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            navigate("/painel");
            toast.success("Bem-vindo de volta!");
        } catch (error: any) {
            toast.error(error.message || "Erro ao fazer login");
        } finally { setLoading(false); }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="w-full max-w-md space-y-8 bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5">
                <div className="text-center">
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase">Login.</h2>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">Área Restrita</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-zinc-800 bg-black px-6 py-4 text-white focus:border-amber-500 outline-none transition-all" placeholder="Teu Email" />
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-zinc-800 bg-black px-6 py-4 text-white focus:border-amber-500 outline-none transition-all" placeholder="Tua Senha" />
                    </div>
                    <button disabled={loading} className="w-full bg-amber-500 text-black font-black py-5 rounded-2xl hover:bg-amber-400 transition-all uppercase tracking-widest text-xs">
                        {loading ? "A processar..." : "Entrar no Sistema"}
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/register" className="text-[10px] font-black uppercase text-zinc-500 hover:text-white tracking-widest transition-all">Não tens conta? Criar acesso</Link>
                </div>
            </div>
        </div>
    );
}