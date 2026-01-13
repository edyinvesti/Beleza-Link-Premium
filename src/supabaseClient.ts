import { createClient } from "@supabase/supabase-js";

// Substitua com suas credenciais do painel do Supabase
const supabaseUrl = "https://SEU_PROJETO.supabase.co";
const supabaseKey = "SUA_CHAVE_ANON_PUBLICA";

export const supabase = createClient(supabaseUrl, supabaseKey);