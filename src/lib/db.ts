import fs from 'fs';
import path from 'path';

// Simple in-memory database with JSON file persistence
const DB_FILE = path.join(process.cwd(), 'flower_shop.json');

interface Flower {
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

interface User {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
}

interface Order {
  id: number;
  user_id?: number;
  total_amount: number;
  status: string;
  created_at: string;
  updated_at: string;
}

interface OrderItem {
  id: number;
  order_id: number;
  flower_id: number;
  quantity: number;
  price_at_purchase: number;
  created_at: string;
}

// Initialize database
function initDB() {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = {
      flowers: [],
      users: [],
      orders: [],
      order_items: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
  }
}

// Load data
function loadData<T>(key: string): T[] {
  initDB();
  const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  return data[key] || [];
}

// Save data
function saveData(key: string, data: any[]) {
  initDB();
  const db = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  db[key] = data;
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

// Generate ID
function generateId(data: any[]): number {
  return data.length > 0 ? Math.max(...data.map((item: any) => item.id)) + 1 : 1;
}

// Database operations
export const db = {
  // Flowers
  getFlowers: (): Flower[] => loadData<Flower>('flowers'),
  saveFlower: (flower: Flower) => {
    const flowers = db.getFlowers();
    if (flower.id) {
      const index = flowers.findIndex(f => f.id === flower.id);
      if (index !== -1) {
        flowers[index] = flower;
      }
    } else {
      flower.id = generateId(flowers);
      flower.created_at = new Date().toISOString();
      flower.updated_at = new Date().toISOString();
      flowers.push(flower);
    }
    saveData('flowers', flowers);
    return flower;
  },
  deleteFlower: (id: number) => {
    const flowers = db.getFlowers().filter(f => f.id !== id);
    saveData('flowers', flowers);
  },

  // Users
  getUsers: (): User[] => loadData<User>('users'),
  saveUser: (user: User) => {
    const users = db.getUsers();
    if (user.id) {
      const index = users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        users[index] = user;
      }
    } else {
      user.id = generateId(users);
      user.created_at = new Date().toISOString();
      users.push(user);
    }
    saveData('users', users);
    return user;
  },

  // Orders
  getOrders: (): Order[] => loadData<Order>('orders'),
  saveOrder: (order: Order) => {
    const orders = db.getOrders();
    if (order.id) {
      const index = orders.findIndex(o => o.id === order.id);
      if (index !== -1) {
        orders[index] = order;
      }
    } else {
      order.id = generateId(orders);
      order.created_at = new Date().toISOString();
      order.updated_at = new Date().toISOString();
      orders.push(order);
    }
    saveData('orders', orders);
    return order;
  },

  // Order Items
  getOrderItems: (): OrderItem[] => loadData<OrderItem>('order_items'),
  saveOrderItem: (item: OrderItem) => {
    const items = db.getOrderItems();
    if (item.id) {
      const index = items.findIndex(i => i.id === item.id);
      if (index !== -1) {
        items[index] = item;
      }
    } else {
      item.id = generateId(items);
      item.created_at = new Date().toISOString();
      items.push(item);
    }
    saveData('order_items', items);
    return item;
  }
};

// Initialize on import
initDB();