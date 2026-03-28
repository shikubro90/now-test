import Link from 'next/link';

export default function About() {
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

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Bloom & Petal</h1>
          <p className="text-2xl text-gray-600">Bringing nature's beauty to your doorstep since 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Bloom & Petal was founded with a simple mission: to make beautiful flowers accessible to everyone. 
              We believe that flowers have the power to brighten any moment, celebrate any occasion, and express 
              any emotion.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team of passionate florists carefully selects and arranges each bouquet, ensuring that every 
              flower meets our high standards of freshness and beauty. From romantic gestures to corporate gifts, 
              we're here to help you say it with flowers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-2xl mr-3">💚</span>
                <span>Freshness First</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">💝</span>
                <span>Hand-Crafted with Love</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🚚</span>
                <span>Fast & Reliable Delivery</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">🌍</span>
                <span>Sustainable Practices</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-3">✨</span>
                <span>Customer Satisfaction</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">💐</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">10,000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🌺</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
            <p className="text-gray-600">Flower Varieties</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">5,000+</h3>
            <p className="text-gray-600">Orders Delivered</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-5xl">
                👩‍💼
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-pink-500 font-medium">Founder & CEO</p>
              <p className="text-gray-600 mt-2">Passionate about flowers and customer service</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-5xl">
                👨‍🎨
              </div>
              <h3 className="text-xl font-bold text-gray-800">Michael Chen</h3>
              <p className="text-pink-500 font-medium">Head Florist</p>
              <p className="text-gray-600 mt-2">15 years of experience in floral design</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-5xl">
                👩‍💻
              </div>
              <h3 className="text-xl font-bold text-gray-800">Emily Davis</h3>
              <p className="text-pink-500 font-medium">Operations Manager</p>
              <p className="text-gray-600 mt-2">Ensuring smooth operations and delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}