const bcrypt = require('bcryptjs');

console.log('🌸 Setting up local database...\n');

// Sample flowers data
const sampleFlowers = [
  {
    name: 'Red Rose Bouquet',
    description: 'A beautiful arrangement of 12 red roses perfect for any romantic occasion',
    price: 49.99,
    image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500',
    category: 'Roses',
    stock_quantity: 20
  },
  {
    name: 'Sunflower Field',
    description: 'Bright and cheerful sunflowers that bring joy to any room',
    price: 39.99,
    image_url: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500',
    category: 'Sunflowers',
    stock_quantity: 15
  },
  {
    name: 'Tulip Garden',
    description: 'A mix of colorful tulips in various shades of pink and purple',
    price: 44.99,
    image_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500',
    category: 'Tulips',
    stock_quantity: 18
  },
  {
    name: 'Orchid Elegance',
    description: 'Exotic white orchids arranged in a modern vase',
    price: 59.99,
    image_url: 'https://images.unsplash.com/photo-1566843534902-ebd4e0e6f6b6?w=500',
    category: 'Orchids',
    stock_quantity: 10
  },
  {
    name: 'Lavender Dreams',
    description: 'Soothing lavender flowers perfect for relaxation',
    price: 34.99,
    image_url: 'https://images.unsplash.com/photo-1527488774996-8f3b618d8f6d?w=500',
    category: 'Lavender',
    stock_quantity: 12
  },
  {
    name: 'Mixed Bouquet',
    description: 'A delightful mix of various flowers for a unique gift',
    price: 54.99,
    image_url: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=500',
    category: 'Mixed',
    stock_quantity: 25
  }
];

// Create database file
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'flower_shop.json');

try {
  // Initialize database with sample data
  const initialData = {
    flowers: sampleFlowers,
    users: [],
    orders: [],
    order_items: []
  };

  fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
  console.log('✅ Local database created successfully!');
  console.log('✅ Sample flowers added');
  console.log('\n🎉 Database setup complete!');
  console.log('\nDatabase file location:', dbPath);
  console.log('\nYou can now start the development server: npm run dev');

} catch (error) {
  console.error('❌ Error setting up database:', error);
  process.exit(1);
}