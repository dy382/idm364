import { createClient } from '@supabase/supabase-js';

const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabase_url || !supabase_anon_key) {
    console.error('🚨 Supabase environment variables are missing!');
    throw new Error('Supabase configuration is missing. Check your environment variables.');
}

console.log('✅ Supabase URL:', supabase_url);
// console.log('✅ Supabase ANONKEY:', supabase_anon_key);

export const supabase = createClient(supabase_url, supabase_anon_key);