import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  order_number: number;
  is_eligible_for_consultation: boolean;
  order_status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export async function createOrder(data: {
  name: string;
  email: string;
  phone: string;
}): Promise<Order> {
  const { data: order, error } = await supabase
    .from('orders')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create order: ${error.message}`);
  }

  return order as Order;
}

export async function getOrdersByEmail(email: string): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch orders: ${error.message}`);
  }

  return data as Order[];
}
