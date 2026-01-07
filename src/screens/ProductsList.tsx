import React, { useEffect, useState } from 'react';
import { getProducts, createProduct } from '../services/database';
import { Product } from '../types';
import BackHeader from '../components/BackHeader';
import { Plus, Search, ShoppingBag, Loader } from 'lucide-react';
import { toast } from 'sonner';

const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);

    // Form inputs
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const loadData = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch {
            toast.error('Erro ao carregar produtos');
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
            if (!name || !price) {
                toast.error('Nome e PreÃ§o sÃ£o obrigatÃ³rios');
                return;
            }

            await createProduct({
                name,
                brand,
                price: Number(price),
                category: category || 'Geral',
                image: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=800&q=80', // Default placeholder
                commission: 0
            });

            toast.success('Produto adicionado!');
            setShowForm(false);
            setName('');
            setBrand('');
            setPrice('');
            setCategory('');
            loadData();
        } catch (error) {
            console.error(error);
            toast.error('Erro ao salvar produto');
        }
    };

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pb-24 min-h-screen bg-black">
            <BackHeader title="Produtos" />

            <div className="p-4">
                {/* Header Actions */}
                <div className="flex gap-2 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Buscar produtos..."
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
                        <h3 className="text-white font-bold mb-4">Novo Produto</h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                placeholder="Nome do Produto"
                                value={name} onChange={e => setName(e.target.value)}
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                    placeholder="Marca"
                                    value={brand} onChange={e => setBrand(e.target.value)}
                                />
                                <input
                                    className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                    placeholder="PreÃ§o (R$)"
                                    type="number" step="0.01"
                                    value={price} onChange={e => setPrice(e.target.value)}
                                />
                            </div>
                            <input
                                className="w-full bg-black border border-zinc-700 rounded-lg p-3 text-white"
                                placeholder="Categoria (ex: Shampoos)"
                                value={category} onChange={e => setCategory(e.target.value)}
                            />
                            <button className="w-full bg-pink-600 text-white font-bold py-3 rounded-lg mt-2">
                                Salvar Produto
                            </button>
                        </form>
                    </div>
                )}

                {/* Grid */}
                {loading ? (
                    <div className="flex justify-center p-10"><Loader className="animate-spin text-pink-500" /></div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-10 text-zinc-500">
                        <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>Nenhum produto encontrado.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4">
                        {filtered.map(product => (
                            <div key={product.id} className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition group">
                                <div className="aspect-square bg-zinc-800 relative">
                                    <img
                                        src={product.image || 'https://via.placeholder.com/300'}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                                        R$ {Number(product.price).toFixed(2)}
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="text-white font-medium text-sm truncate">{product.name}</h3>
                                    <p className="text-zinc-500 text-xs">{product.brand}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsList;

