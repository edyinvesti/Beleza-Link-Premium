import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { toast } from "sonner";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            toast.success("Conta criada! Verifica o teu email.");
            navigate("/login");
        } catch (error: any) {
            toast.error(error.message || "Erro ao registar");
        } finally { setLoading(false); }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="w-full max-w-md space-y-8 bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5">
                <div className="text-center">
                    <h2 className="text-4xl font-black italic tracking-tighter uppercase text-amber-500">Registo.</h2>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-zinc-500">Cria a tua conta elite</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                    <div className="space-y-4">
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-zinc-800 bg-black px-6 py-4 text-white focus:border-amber-500 outline-none transition-all" placeholder="Teu Email" />
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-zinc-800 bg-black px-6 py-4 text-white focus:border-amber-500 outline-none transition-all" placeholder="Cria uma Senha" />
                    </div>
                    <button disabled={loading} className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-amber-500 transition-all uppercase tracking-widest text-xs">
                        {loading ? "A criar..." : "Finalizar Registo"}
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/login" className="text-[10px] font-black uppercase text-zinc-500 hover:text-white tracking-widest transition-all">Já tens conta? Fazer Login</Link>
                </div>
            </div>
        </div>
    );
}