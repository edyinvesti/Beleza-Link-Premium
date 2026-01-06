import React, { useEffect, useState } from 'react';
import { getClients, createClient } from '../services/database';
import { Client } from '../types';
import BackHeader from '../components/BackHeader';
import { Plus, Search, User, Phone, Loader } from 'lucide-react';
import { toast } from 'sonner';

const Clients: React.FC = () => {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);

    // Form inputs
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const loadData = async () => {
        try {
            const data = await getClients();
            setClients(data);
        } catch {
            toast.error('Erro ao carregar clientes');
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
            if (!name) {
                toast.error('Nome é obrigatório');
                return;
            }

            await createClient({
                name,
                phone,
                totalSpent: 0,
                lastVisit: new Date().toISOString() // Temporarily set to now or null
            });

            toast.success('Cliente cadastrado!');
            setShowForm(false);
            setName('');
            setPhone('');
            loadData();
        } catch (error) {
            console.error(error);
            toast.error('Erro ao salvar cliente');
        }
    };

    const filtered = clients.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.includes(searchTerm)
    );

    return (
        <div className="pb-24 min-h-screen bg-black">
            <BackHeader title="Meus Clientes" />

            <div className="p-4">
                {/* Header Actions */}
                <div className="flex gap-2 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Buscar por nome ou telefone..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-9 pr-4 text-white focus:ring-pink-500 focus:border-pink-500 placeholder-zinc-600"
                        />
                    </div>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition"
                    >
                        <Plus className="w-6 h-6" />
                    </button>
                </div>

                {/* Add Form */}
                {showForm && (
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 mb-6 animate-in slide-in-from-top-2">
                        <h3 className="text-white font-bold mb-4">Novo Cliente</h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                placeholder="Nome Completo"
                                value={name} onChange={e => setName(e.target.value)}
                            />
                            <input
                                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                placeholder="Telefone / WhatsApp"
                                value={phone} onChange={e => setPhone(e.target.value)}
                            />
                            <button className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg mt-2">
                                Salvar Cliente
                            </button>
                        </form>
                    </div>
                )}

                {/* List */}
                {loading ? (
                    <div className="flex justify-center p-10"><Loader className="animate-spin text-pink-500" /></div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-10 text-zinc-500">
                        <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>Nenhum cliente encontrado.</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {filtered.map(client => (
                            <div key={client.id} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-bold text-lg">
                                        {client.name?.[0]?.toUpperCase()}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white">{client.name}</h3>
                                        <div className="flex items-center gap-1 text-zinc-500 text-sm">
                                            <Phone className="w-3 h-3" />
                                            <span>{client.phone}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Future: Add functionality to View Details or WhatsApp */}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Clients;
