import React, { useEffect, useState } from 'react';
import { getTransactions, createTransaction } from '../services/database';
import { Transaction } from '../types';
import BackHeader from '../components/BackHeader';
import { ArrowUpCircle, ArrowDownCircle, DollarSign, Plus, Loader } from 'lucide-react';
import { toast } from 'sonner';

const CashFlow: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    // Form inputs
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState<'in' | 'out'>('out');

    const loadData = async () => {
        try {
            const data = await getTransactions();
            setTransactions(data);
        } catch {
            toast.error('Erro ao carregar transações');
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
            if (!description || !amount) {
                toast.error('Preencha os campos obrigatórios');
                return;
            }

            await createTransaction({
                description,
                amount: Number(amount),
                type: type === 'in' ? 'credit' : 'debit', // Mapping to schema enums often used
                flow: type,
                date: new Date().toISOString(),
                status: 'confirmed'
            });

            toast.success('Transação registrada!');
            setShowForm(false);
            setDescription('');
            setAmount('');
            loadData();
        } catch (error) {
            console.error(error);
            toast.error('Erro ao salvar transação');
        }
    };

    const income = transactions.filter(t => t.flow === 'in').reduce((acc, curr) => acc + Number(curr.amount), 0);
    const expenses = transactions.filter(t => t.flow === 'out').reduce((acc, curr) => acc + Number(curr.amount), 0);
    const balance = income - expenses;

    return (
        <div className="pb-24 min-h-screen bg-black">
            <BackHeader title="Fluxo de Caixa" />

            <div className="p-4 space-y-6">

                {/* Balance Card */}
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 border border-zinc-700 shadow-xl">
                    <p className="text-zinc-400 text-sm mb-1">Saldo Total</p>
                    <h2 className="text-3xl font-bold text-white mb-6">R$ {balance.toFixed(2)}</h2>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-1 text-green-500 text-xs mb-1">
                                <ArrowUpCircle className="w-3 h-3" />
                                <span>Entradas</span>
                            </div>
                            <p className="text-lg font-semibold text-white">R$ {income.toFixed(2)}</p>
                        </div>
                        <div className="w-px bg-zinc-700"></div>
                        <div className="flex-1">
                            <div className="flex items-center gap-1 text-red-500 text-xs mb-1">
                                <ArrowDownCircle className="w-3 h-3" />
                                <span>Saídas</span>
                            </div>
                            <p className="text-lg font-semibold text-white">R$ {expenses.toFixed(2)}</p>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="w-full bg-pink-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-pink-700 transition"
                >
                    <Plus className="w-5 h-5" />
                    Nova Transação
                </button>

                {/* Form */}
                {showForm && (
                    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 animate-in slide-in-from-top-2">
                        <h3 className="text-white font-bold mb-4">Adicionar Movimentação</h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="flex gap-2">
                                <button type="button" onClick={() => setType('in')} className={`flex-1 py-2 rounded-lg font-medium transition ${type === 'in' ? 'bg-green-500/20 text-green-500 border border-green-500/50' : 'bg-zinc-800 text-zinc-400'}`}>
                                    Entrada
                                </button>
                                <button type="button" onClick={() => setType('out')} className={`flex-1 py-2 rounded-lg font-medium transition ${type === 'out' ? 'bg-red-500/20 text-red-500 border border-red-500/50' : 'bg-zinc-800 text-zinc-400'}`}>
                                    Saída
                                </button>
                            </div>

                            <input
                                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                placeholder="Descrição (Ex: Conta de Luz)"
                                value={description} onChange={e => setDescription(e.target.value)}
                            />

                            <div className="relative">
                                <DollarSign className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                                <input
                                    className="w-full bg-black border border-zinc-700 rounded-lg p-3 pl-9 text-white"
                                    placeholder="0.00"
                                    type="number" step="0.01"
                                    value={amount} onChange={e => setAmount(e.target.value)}
                                />
                            </div>

                            <button className="w-full bg-white text-black font-bold py-3 rounded-lg mt-2 hover:bg-zinc-200 transition">
                                Salvar
                            </button>
                        </form>
                    </div>
                )}

                {/* Transactions List */}
                <div>
                    <h3 className="text-white font-semibold mb-3">Histórico</h3>
                    {loading ? (
                        <div className="flex justify-center p-4"><Loader className="animate-spin text-pink-500" /></div>
                    ) : transactions.length === 0 ? (
                        <p className="text-zinc-500 text-center py-4">Nenhuma movimentação registrada.</p>
                    ) : (
                        <div className="space-y-3">
                            {transactions.map(t => (
                                <div key={t.id} className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.flow === 'in' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                            {t.flow === 'in' ? <ArrowUpCircle className="w-5 h-5" /> : <ArrowDownCircle className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-medium text-white">{t.description}</p>
                                            <p className="text-xs text-zinc-500">{new Date(t.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <span className={`font-bold ${t.flow === 'in' ? 'text-green-500' : 'text-red-500'}`}>
                                        {t.flow === 'in' ? '+' : '-'} R$ {Number(t.amount).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CashFlow;
