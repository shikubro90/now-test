import Link from 'next/link';

export default function Home() {
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
      <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Welcome to Bloom & Petal</h1>
          <p className="text-2xl text-white/90 mb-8">Discover our beautiful selection of flowers</p>
          <Link href="/shop" className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
            Shop Now 🌸
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">💐</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fresh Flowers</h3>
              <p className="text-gray-600">We source the freshest flowers from local growers</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Same-day delivery available for orders placed before 2 PM</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Handcrafted Arrangements</h3>
              <p className="text-gray-600">Each bouquet is carefully crafted by our expert florists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-white/90 mb-8">Browse our collection and find the perfect flowers for any occasion</p>
          <Link href="/shop" className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105">
            View Collection 🌸
          </Link>
        </div>
      </section>
    </div>
  );
}