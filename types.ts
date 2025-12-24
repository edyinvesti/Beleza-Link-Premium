
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  commission: number;
  image: string;
  category: string;
  tag?: string;
  tagColor?: string;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  duration: string;
  rating: number;
  students: number;
  image: string;
  category: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
}

export interface Appointment {
  id: string;
  clientName: string;
  service: string;
  time: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'canceled';
  avatar?: string;
  reminders?: {
    scheduled24h: boolean;
    scheduled1h: boolean;
    sent24h?: boolean;
    sent1h?: boolean;
  };
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  lastVisit: string;
  totalSpent: number;
  avatar?: string;
}

export interface Transaction {
  id: string;
  type: string;
  date: string;
  client: string;
  amount: number;
  image?: string;
  isIcon?: boolean;
  iconName?: string;
  status: 'confirmed' | 'pending';
  category: 'Serviços' | 'Produtos' | 'Aluguel' | 'Suprimentos' | 'Outros';
  flow: 'in' | 'out'; // in = Entrada, out = Saída
}
