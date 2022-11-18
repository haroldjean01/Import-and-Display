// Set Up Supbase Key and Url
const SUPABASE_URL = 'https://dssscdbblqlagvgvvtkc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzc3NjZGJibHFsYWd2Z3Z2dGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMTYsImV4cCI6MTk4MzY4NDAxNn0.ZLiT0DIvTuegM8zzRIvSgVzLLFRk-1PwYGXz7BhqKk4';

const client = supabase.createclient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchAnimals() {
    const response = await client.from('animals').select('*');
    return response.data;
}
export async function fetchbBitcoins() {
    const response = await client.from('bitcoins').select('*');
    return response.data;
}
export async function fetchSsns() {
    const response = await client.from('ssns').select('*');
    return response.data;
}
export async function fetchCreditCards() {
    const response = await client.from('credit_cards').select('*');
    return response.data;
}
