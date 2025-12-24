
import { Product, Transaction, Course, Appointment, Client } from './types';

export const APPOINTMENTS: Appointment[] = [
  { 
    id: 'a1', 
    clientName: 'Helena Soares', 
    service: 'Mechas + Hidratação', 
    time: '09:00', 
    price: 450.00, 
    status: 'completed', 
    avatar: 'https://i.pravatar.cc/150?u=helena',
    reminders: { scheduled24h: true, scheduled1h: true, sent24h: true, sent1h: true }
  },
  { 
    id: 'a2', 
    clientName: 'Marcos Viana', 
    service: 'Corte Degradê', 
    time: '11:30', 
    price: 60.00, 
    status: 'confirmed', 
    avatar: 'https://i.pravatar.cc/150?u=marcos',
    reminders: { scheduled24h: true, scheduled1h: true, sent24h: true, sent1h: false }
  },
  { 
    id: 'a3', 
    clientName: 'Beatriz Lima', 
    service: 'Manicure Gel', 
    time: '14:00', 
    price: 120.00, 
    status: 'pending', 
    avatar: 'https://i.pravatar.cc/150?u=bea',
    reminders: { scheduled24h: true, scheduled1h: true, sent24h: false, sent1h: false }
  },
  { 
    id: 'a4', 
    clientName: 'Clara Mendes', 
    service: 'Escova Modelada', 
    time: '16:00', 
    price: 85.00, 
    status: 'confirmed', 
    avatar: 'https://i.pravatar.cc/150?u=clara',
    reminders: { scheduled24h: true, scheduled1h: true, sent24h: false, sent1h: false }
  }
];

export const CLIENTS: Client[] = [
  { id: 'cl1', name: 'Helena Soares', phone: '11988887777', lastVisit: 'Hoje', totalSpent: 2450.00, avatar: 'https://i.pravatar.cc/150?u=helena' },
  { id: 'cl2', name: 'Juliana Paes', phone: '11977776666', lastVisit: '15 Out', totalSpent: 1200.50, avatar: 'https://i.pravatar.cc/150?u=juju' },
  { id: 'cl3', name: 'Ricardo Alvez', phone: '11966665555', lastVisit: '02 Out', totalSpent: 450.00, avatar: 'https://i.pravatar.cc/150?u=ricardo' }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Creme Hidratante Facial Glow Night',
    brand: 'Nivea Pro',
    price: 89.90,
    commission: 26.90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA86e8mpPOAUID2zT0-2bTl1pO1cTHCf9N2A6uBPJ71h9vqcwcBS0YXiBb_8COsCctITJeI-U3QNomdZITsoGtptblVpE4Ny9zY9VSK19g0aXYMELIrElcsOoRFmTDfyQodVyG_hQMTeZXww-mZjaEMs9myv-YKMK2ZMwpmRSCTztrlgqkuMpgKBPfFnQbOrPuYm9vajcyrOR6jWaYfq6xkSbas5WejV9vdDs6eS86qdL-VA-NzKFg9Gl9IJ3xDbDp4dfy0gkLrtPA',
    tag: 'Alta Procura',
    category: 'Skincare'
  },
  {
    id: '2',
    name: 'Batom Matte Velvet Red',
    brand: 'Ruby Rose',
    price: 45.00,
    commission: 13.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmJDsRNufsLtx-ifJ31t7MZLaDjWLIfmfR7aOvB-J5JRY63HmFSq_kyDcMUY6cWxeSy-pyZiX_f3peMX-CQVjX-wQu-2Sf69qRZY3d7vLPLGUS3RrkCAD-oyimDrHuQHuZ1BO-UyWz7rQ8tIb8PiSQd-4sfpSFgw8HUjbBBCi6k31HUnsc-BzShh9rfIxBq1Qz7xaslOGXuGrXe39u3Z-Em07eDMJm9DZSMrHskf7jbXOZvpIPJ8cwn2VHdZg5350sMyUfVHa9JMc',
    category: 'Maquiagem'
  },
  {
    id: '3',
    name: 'Shampoo Pro Absolut Repair',
    brand: 'L\'Oréal Professionnel',
    price: 120.00,
    commission: 36.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjn52G0kEdP0tdUkcRlNQa44uNQgSd3KphT9jgc1XnaGE1lqQ7JeWllltxTH-RU80JpD8czQKvQO87e0A6wuMANLJcNz9lgtsnLfzb5SYcpQbAUBxJCDUR_NsvOofARrCqHFRNdOwdNuto8I6jrAfHGJNfPQOuvFoyAfA_Glp93BGomSkk_PyEouh9s2fcLvH1QX1KEi4CIWnS_N8T719lg1NTgr3fNtKx65zhsssCyvWtlZGuc_rPIF7FmuJ3K-5VcEnK6V3rydI',
    category: 'Cabelo'
  },
  {
    id: '4',
    name: 'Pomada Matte Modeladora',
    brand: 'Barber Pro',
    price: 50.00,
    commission: 15.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcOdtKKHmlunAwhaeEkMOGDxBUYR3Ew9P903XB6BJ0lTzdByogW0CzaeCe5D5tF6zr9b3B2AzJvQLYDeZS07Kt9MjP0_dOfRE75HEE0Dj3pKsw88rh5iEDXKXUe89CRt5ZGTKqmi9XzKwtQOZaiijjm1lVuRDnBlfcaHJlhNz7OCSH8qgx3I32SXtoK21GH3uFGk79KzxcO3BRhxwTsLk2Me4LAhsZvYlcDZfozhxHRC7oqMmVTCGj32Vio3J7E6su7G_NI28u8S4',
    tag: 'NOVO',
    tagColor: 'bg-primary',
    category: 'Cabelo'
  }
];

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Master em Colorimetria: Do Zero ao Loiro Perfeito',
    instructor: 'Renata Vasconcelos',
    price: 297.00,
    originalPrice: 597.00,
    duration: '24h',
    rating: 4.9,
    students: 1250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn6x-VbwcLDAwUk4GSzG8kU5gKsOYM2EjOWu48QDujgLCEtDfJno3JXkuyeK3Dpnn6t42irJVad1zLBR52-lC8wx7UdqllwBE6ycwUI3jFFFxqiQMy8N5M5gW87lpBc6BCrz5UcyVkRvvILfr2vfFdyXhT-NbMQ5jlrMs_sHYmC8r6pJy0UEcCk79Y7noIFHDUCt9Woh31qH8hTZqIVN3xVEiadrta3WApPdXSfpO-P2mSy-8kQseRrMVmzOvsoNke0AqQawUwkTk',
    category: 'Colorimetria',
    level: 'Intermediário'
  }
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  { id: '1', type: 'Serviço - Mechas', date: '24 Out', client: 'Helena Soares', amount: 450.00, status: 'confirmed', category: 'Serviços', flow: 'in', isIcon: true, iconName: 'content_cut' },
  { id: '2', type: 'Venda - Kit Capilar', date: '22 Out', client: 'Maria Silva', amount: 120.00, status: 'confirmed', category: 'Produtos', flow: 'in', image: FEATURED_PRODUCTS[2].image },
  { id: '3', type: 'Compra de Estoque', date: '20 Out', client: 'L\'Oréal Brasil', amount: 350.00, status: 'confirmed', category: 'Suprimentos', flow: 'out', isIcon: true, iconName: 'shopping_cart' },
  { id: '4', type: 'Aluguel do Studio', date: '10 Out', client: 'Imobiliária XP', amount: 1200.00, status: 'confirmed', category: 'Aluguel', flow: 'out', isIcon: true, iconName: 'domain' },
  { id: '5', type: 'Serviço - Corte', date: '24 Out', client: 'Marcos Viana', amount: 60.00, status: 'confirmed', category: 'Serviços', flow: 'in', isIcon: true, iconName: 'face' }
];
