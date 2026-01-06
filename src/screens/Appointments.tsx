import React, { useEffect, useState } from 'react';
import { getAppointments, createAppointment } from '../services/database';
import { Appointment } from '../types';
import BackHeader from '../components/BackHeader';
import { toast } from 'sonner';
import { Plus, Calendar, Clock, DollarSign, User } from 'lucide-react';

const Appointments: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    // Form states
    const [clientName, setClientName] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [price, setPrice] = useState('');

    const loadData = async () => {
        try {
            const data = await getAppointments();
            setAppointments(data);
        } catch {
            toast.error('Erro ao carregar agendamentos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!clientName || !service || !date || !time || !price) {
                toast.error('Preencha todos os campos');
                return;
            }

            const dateTime = new Date(`${date}T${time}`).toISOString();

            await createAppointment({
                clientName,
                service,
                time: dateTime,
                price: Number(price),
                status: 'pending'
            });

            toast.success('Agendamento criado!');
            setShowForm(false);
            // Reset form
            setClientName('');
            setService('');
            setDate('');
            setTime('');
            setPrice('');

            loadData(); // Refresh list
        } catch (error) {
            console.error(error);
            toast.error('Erro ao criar agendamento');
        }
    };

    return (
        <div className="pb-24">
            <BackHeader title="Agendamentos" />

            <div className="p-4 max-w-xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Próximos Horários</h2>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                    >
                        <Plus size={20} />
                        Novo
                    </button>
                </div>

                {/* Form */}
                {showForm && (
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-8 animate-in fade-in slide-in-from-top-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Novo Agendamento</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">Cliente</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="text"
                                        value={clientName}
                                        onChange={e => setClientName(e.target.value)}
                                        className="w-full bg-zinc-800 border-zinc-700 rounded-lg py-2 pl-9 text-white focus:ring-pink-500 focus:border-pink-500"
                                        placeholder="Nome do cliente"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">Serviço</label>
                                <input
                                    type="text"
                                    value={service}
                                    onChange={e => setService(e.target.value)}
                                    className="w-full bg-zinc-800 border-zinc-700 rounded-lg py-2 px-3 text-white focus:ring-pink-500 focus:border-pink-500"
                                    placeholder="Ex: Corte de Cabelo"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">Data</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        className="w-full bg-zinc-800 border-zinc-700 rounded-lg py-2 px-3 text-white focus:ring-pink-500 focus:border-pink-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">Hora</label>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={e => setTime(e.target.value)}
                                        className="w-full bg-zinc-800 border-zinc-700 rounded-lg py-2 px-3 text-white focus:ring-pink-500 focus:border-pink-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-zinc-400 mb-1">Preço (R$)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        className="w-full bg-zinc-800 border-zinc-700 rounded-lg py-2 pl-9 text-white focus:ring-pink-500 focus:border-pink-500"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="flex-1 bg-zinc-800 text-white py-2 rounded-lg hover:bg-zinc-700 transition"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* List */}
                {loading ? (
                    <div className="text-center text-zinc-500 mt-10">Carregando...</div>
                ) : appointments.length === 0 ? (
                    <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/30 rounded-2xl border border-zinc-800/50">
                        <Calendar className="w-12 h-12 text-zinc-700 mb-3" />
                        <p className="text-zinc-400">Nenhum agendamento encontrado.</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {appointments.map((apt) => (
                            <div key={apt.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between items-center hover:border-zinc-700 transition">
                                <div>
                                    <h3 className="font-semibold text-white">{apt.clientName || 'Cliente sem nome'}</h3>
                                    <p className="text-sm text-zinc-400">{apt.service}</p>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
                                        <Calendar className="w-3 h-3" />
                                        <span>{new Date(apt.time).toLocaleDateString()}</span>
                                        <Clock className="w-3 h-3 ml-2" />
                                        <span>{new Date(apt.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-pink-500 font-bold">R$ {Number(apt.price).toFixed(2)}</div>
                                    <span className={`inline-block px-2 py-0.5 rounded text-xs mt-1 capitalize
                    ${apt.status === 'confirmed' ? 'bg-green-500/10 text-green-500' :
                                            apt.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-zinc-800 text-zinc-400'}`}>
                                        {apt.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Appointments;
