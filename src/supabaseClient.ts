import { createClient } from '@supabase/supabase-client'

// Substitua pelas suas chaves se forem diferentes, 
// mas estas costumam ser as padrão do seu projeto atual
const supabaseUrl = 'https://onpbtvpspgvgtstfzxue.supabase.co'
const supabaseAnonKey = 'SUA_CHAVE_ANON_AQUI' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
