'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flower } from '@/types';

export default function Shop() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<Flower[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const response = await fetch('/api/flowers');
      const data = await response.json();
      setFlowers(data);
    } catch (error) {
      console.error('Error fetching flowers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredFlowers = flowers.filter(flower => {
    const matchesFilter = filter === 'all' || flower.category === filter;
    const matchesSearch = flower.name.toLowerCase().includes(search.toLowerCase()) ||
                         flower.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['all', 'Roses', 'Sunflowers', 'Tulips', 'Orchids', 'Lavender', 'Mixed'];

  const addToCart = (flower: Flower) => {
    setCart([...cart, flower]);
    setShowCart(true);
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    try {
      // Create order
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer_name: 'Guest',
          customer_email: 'guest@example.com',
          customer_phone: '1234567890',
          delivery_address: '123 Flower Street',
          total_amount: cartTotal,
          items: cart,
        }),
      });

      if (orderResponse.ok) {
        // Clear cart
        setCart([]);
        setShowCart(false);
        alert('Order placed successfully! 🌸');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const cartCount = cart.length;
  const cartTotal = cart.reduce((sum, flower) => sum + Number(flower.price), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🌸</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Bloom & Petal
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Home</Link>
              <Link href="/shop" className="text-pink-500 font-medium">Shop</Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</Link>
              <Link href="/admin" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Icon */}
      <button
        onClick={() => setShowCart(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        🛒
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((flower, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl">
                      <img
                        src={flower.image_url}
                        alt={flower.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{flower.name}</h3>
                        <p className="text-pink-500 font-bold">${Number(flower.price).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => {
                          const newCart = cart.filter((_, i) => i !== index);
                          setCart(newCart);
                        }}
                        className="text-red-500 hover:text-red-700 text-xl"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-pink-500">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                >
                  Checkout 🛍️
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Our Collection</h1>
          <p className="text-xl text-white/90">Discover our beautiful selection of flowers</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filter === cat
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-pink-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search flowers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 pl-10 border-2 border-gray-200 rounded-full focus:outline-none focus:border-pink-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center text-gray-500 text-xl">Loading flowers...</div>
          ) : filteredFlowers.length === 0 ? (
            <div className="text-center text-gray-500 text-xl">No flowers found</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFlowers.map((flower) => (
                <div
                  key={flower.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={flower.image_url}
                      alt={flower.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                      {flower.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{flower.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{flower.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-pink-500">${Number(flower.price).toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(flower)}
                        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                      >
                        Add to Cart 🛒
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}