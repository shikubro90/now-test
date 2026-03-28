'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Flower } from '@/types';

export default function Shop() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

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
                      <span className="text-2xl font-bold text-pink-500">${flower.price.toFixed(2)}</span>
                      <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
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