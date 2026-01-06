
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ksianwgdfioqbbkgqhgg.supabase.co';
const supabaseKey = 'sb_publishable_VAF3utL2cckW0kkS46qeoA_sKx8VKZy'; // Public key provided by user

const supabase = createClient(supabaseUrl, supabaseKey);

async function createTestClient() {
    console.log('Criando cliente de teste...');
    const { data, error } = await supabase
        .from('clients')
        .insert([
            { name: 'Maria Exemplo', phone: '(11) 99999-0000', total_spent: 150.00 }
        ])
        .select();

    if (error) {
        console.error('Erro:', error);
    } else {
        console.log('Sucesso! Cliente criado:', data);
    }
}

createTestClient();
