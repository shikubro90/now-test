import Link from 'next/link';

export default function Contact() {
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

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-2xl text-gray-600">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all"
              >
                Send Message 🌸
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📍</span>
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-white/90">123 Flower Street<br/>Bloom City, BC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">📞</span>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-white/90">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">✉️</span>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-white/90">hello@bloomandpetal.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-3xl mr-4">🕐</span>
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="text-white/90">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  f
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  𝕏
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  in
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">How long does delivery take?</h3>
              <p className="text-gray-600">Same-day delivery is available for orders placed before 2 PM. Standard delivery takes 1-2 business days.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">Yes, we offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact us for a full refund.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">Can I customize my bouquet?</h3>
              <p className="text-gray-600">Absolutely! Contact us with your preferences and our florists will create a custom arrangement just for you.</p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-2">Do you deliver on holidays?</h3>
              <p className="text-gray-600">Yes, we deliver on most holidays. Please place your order at least 24 hours in advance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}