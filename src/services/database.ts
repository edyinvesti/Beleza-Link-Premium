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

// Appointments
export const getAppointments = async (): Promise<Appointment[]> => {
    const { data, error } = await supabase.from('appointments').select('*');
    if (error) throw error;
    return data || [];
};

// Transactions
export const getTransactions = async (): Promise<Transaction[]> => {
    const { data, error } = await supabase.from('transactions').select('*');
    if (error) throw error;
    return data || [];
};
