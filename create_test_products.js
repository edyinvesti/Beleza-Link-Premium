
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ksianwgdfioqbbkgqhgg.supabase.co';
const supabaseKey = 'sb_publishable_VAF3utL2cckW0kkS46qeoA_sKx8VKZy';

const supabase = createClient(supabaseUrl, supabaseKey);

async function createTestProducts() {
    console.log('Cadastrando produtos de exemplo...');

    const products = [
        {
            name: 'Shampoo Hidratante Premium',
            brand: 'L\'Oréal',
            price: 85.90,
            category: 'Cabelo',
            image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=80'
        },
        {
            name: 'Máscara Reconstrutora',
            brand: 'Kérastase',
            price: 240.00,
            category: 'Tratamento',
            image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=800&q=80'
        },
        {
            name: 'Óleo Reparador',
            brand: 'Wella',
            price: 120.50,
            category: 'Finalização',
            image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80'
        }
    ];

    const { data, error } = await supabase
        .from('products')
        .insert(products)
        .select();

    if (error) {
        console.error('Erro:', error);
    } else {
        console.log(`Sucesso! ${data.length} produtos cadastrados.`);
    }
}

createTestProducts();
