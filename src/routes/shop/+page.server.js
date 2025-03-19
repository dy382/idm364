import { supabase } from '$lib/server/supabase_client';

export async function load() {
    console.log('🔄 Fetching products from Supabase...');

    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        console.error('❌ Supabase error:', error);
        throw new Error(`Supabase fetch failed: ${error.message}`);
    }

    console.log('✅ Fetched products:', data); // Log the fetched products

    return { products: data ?? [] };
}