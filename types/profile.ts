export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
  role: string;
  memberSince: string;
  phone: string;
  shippingAddress: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Processing' | 'Delivered' | 'Shipped' | 'Cancelled';
  total: number;
  itemsCount: number;
  items: OrderItem[];
}