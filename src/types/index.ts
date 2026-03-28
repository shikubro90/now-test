export interface Flower {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock_quantity: number;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: number;
  user_id?: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  delivery_address: string;
  total_amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: number;
  order_id: number;
  flower_id: number;
  quantity: number;
  price_at_purchase: number;
  created_at: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  created_at: string;
}

export interface CartItem {
  flower: Flower;
  quantity: number;
}