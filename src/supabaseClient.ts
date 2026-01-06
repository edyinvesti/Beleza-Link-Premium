import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ksianwgdfioqbbkgqhgg.supabase.co'
const supabaseAnonKey = 'sb_publishable_VAF3utL2cckW0kkS46qeoA_sKx8VKZy' 

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
