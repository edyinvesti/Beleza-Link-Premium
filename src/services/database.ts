import { supabase } from '../lib/supabase';
import { Product, Course, Client, Appointment, Transaction } from '../types';

// Settings
export const getSettings = () => {
    return {
        darkMode: true
    };
};

// Products
export const getProducts = async (): Promise<Product[]> => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) throw error;
    return data || [];
};

export const createProduct = async (product: Partial<Product>): Promise<Product> => {
    const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();
    if (error) throw error;
    return data;
};

// Courses
export const getCourses = async (): Promise<Course[]> => {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) throw error;
    return data || [];
};

// Clients
export const getClients = async (): Promise<Client[]> => {
    const { data, error } = await supabase.from('clients').select('*');
    if (error) throw error;
    return data || [];
};

export const createClient = async (client: Partial<Client>): Promise<Client> => {
    const { data, error } = await supabase
        .from('clients')
        .insert([client])
        .select()
        .single();
    if (error) throw error;
    return data;
};

// Appointments
export const getAppointments = async (): Promise<Appointment[]> => {
    const { data, error } = await supabase.from('appointments').select('*');
    if (error) throw error;
    return data || [];
};

export const createAppointment = async (appointment: Partial<Appointment>): Promise<Appointment> => {
    const { data, error } = await supabase
        .from('appointments')
        .insert([appointment])
        .select()
        .single();
    if (error) throw error;
    return data;
};

// Transactions
export const getTransactions = async (): Promise<Transaction[]> => {
    const { data, error } = await supabase.from('transactions').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data || [];
};

export const createTransaction = async (transaction: Partial<Transaction>): Promise<Transaction> => {
    const { data, error } = await supabase
        .from('transactions')
        .insert([transaction])
        .select()
        .single();
    if (error) throw error;
    return data;
};

