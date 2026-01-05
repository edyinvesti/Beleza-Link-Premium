import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { getAppointments, getClients, getTransactions } from '../services/database';
import { Appointment, Client, Transaction } from '../types';
import { DollarSign, Users, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { user } = useUser();
    const [stats, setStats] = useState({
        revenue: 0,
        appointmentsToday: 0,
        totalClients: 0,
    });
    const [recentAppointments, setRecentAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                // Parallel fetching for performance
                const [appointmentsData, clientsData, transactionsData] = await Promise.all([
                    getAppointments(),
                    getClients(),
                    getTransactions()
                ]);

                // Calculate Revenue (Sum of confirmend 'in' transactions)
                const revenue = transactionsData
                    .filter(t => t.flow === 'in' && t.status === 'confirmed')
                    .reduce((acc, curr) => acc + Number(curr.amount), 0);

                // Calculate Appointments Today
                const today = new Date().toISOString().split('T')[0];
                const aptToday = appointmentsData.filter(a => a.time.startsWith(today)).length;

                setStats({
                    revenue,
                    appointmentsToday: aptToday,
                    totalClients: clientsData.length
                });

                // Get next 5 appointments
                const upcoming = appointmentsData
                    .filter(a => new Date(a.time) > new Date())
                    .sort((a, b) => new Date(a.time).getTime() - new Date(b.time).getTime())
                    .slice(0, 5);

                setRecentAppointments(upcoming);

            } catch (error) {
                console.error("Failed to load dashboard data", error);
            } finally {
                setLoading(false);
            }
        };

        loadDashboardData();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-zinc-500">Carregando dados...</div>;
    }

    return (
        <div className="min-h-screen pb-24 px-4 pt-6">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-white">Olá, {user?.email?.split('@')[0] || 'Profissional'}! 👋</h1>
                <p className="text-zinc-400">Aqui está o resumo do seu negócio hoje.</p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-green-500 mb-2">
                        <DollarSign className="w-5 h-5" />
                        <span className="text-sm font-medium">Faturamento</span>
                    </div>
                    <p className="text-2xl font-bold text-white">R$ {stats.revenue.toFixed(2)}</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-blue-500 mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm font-medium">Hoje</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.appointmentsToday} agendamentos</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                    <div className="flex items-center gap-2 text-purple-500 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-medium">Clientes</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{stats.totalClients}</p>
                </div>
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex flex-col justify-center items-center text-center cursor-pointer hover:bg-zinc-800 transition">
                    <TrendingUp className="w-6 h-6 text-pink-500 mb-1" />
                    <span className="text-sm font-medium text-zinc-300">Ver Relatórios</span>
                </div>
            </div>

            {/* Recent Appointments */}
            <div className="mb-20">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-white">Próximos Clientes</h2>
                    <Link to="/appointments" className="text-sm text-pink-500">Ver todos</Link>
                </div>

                {recentAppointments.length === 0 ? (
                    <div className="text-center py-8 bg-zinc-900/50 rounded-xl border border-dashed border-zinc-800">
                        <p className="text-zinc-500">Nenhum agendamento futuro.</p>
                        <Link to="/appointments" className="text-pink-500 text-sm mt-2 inline-block">Agendar agora</Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {recentAppointments.map(apt => (
                            <div key={apt.id} className="bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold">
                                        {apt.clientName?.[0]?.toUpperCase() || 'C'}
                                    </div>
                                    <div>
                                        <p className="font-medium text-white">{apt.clientName}</p>
                                        <p className="text-xs text-zinc-400">{apt.service}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-white font-medium">
                                        {new Date(apt.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {new Date(apt.time).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
