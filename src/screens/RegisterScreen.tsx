import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

const RegisterScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('As senhas não coincidem');
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error;

            toast.success('Cadastro realizado! Faça login.');
            navigate('/login');
        } catch (error: any) {
            toast.error(error.message || 'Erro ao cadastrar');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white">Criar Conta</h2>
                    <p className="mt-2 text-sm text-zinc-400">Comece sua jornada conosco</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                    <div className="space-y-4 rounded-md shadow-sm">
                        <div>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="relative block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="relative block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm"
                                placeholder="Senha"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="relative block w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-white placeholder-zinc-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm"
                                placeholder="Confirmar Senha"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50"
                        >
                            {loading ? 'Criando conta...' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    <Link to="/login" className="text-sm text-pink-500 hover:text-pink-400">
                        Já tem uma conta? Entre
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;
