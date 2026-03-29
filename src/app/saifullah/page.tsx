import Link from 'next/link';

export default function SaifullahPortfolio() {
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
              <Link href="/shezan" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Shezan</Link>
              <Link href="/saifullah" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Saifullah</Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Contact</Link>
              <Link href="/admin" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Portfolio Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Saifullah's Portfolio</h1>
          <p className="text-2xl text-gray-600">Welcome to my creative space</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl p-12 mb-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Hello, I'm Saifullah</h2>
          <p className="text-xl text-white/90">Full Stack Developer & Designer</p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              I'm a passionate developer with expertise in creating beautiful and functional web applications.
            </p>
            <p className="text-gray-600">
              With a keen eye for design and a love for clean code, I bring ideas to life through innovative solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-2xl mr-3">💻</span>
                <span className="text-gray-700 font-medium">Full Stack Development</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎨</span>
                <span className="text-gray-700 font-medium">UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📱</span>
                <span className="text-gray-700 font-medium">Responsive Design</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                <span className="text-gray-700 font-medium">Performance Optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                <span className="text-gray-700 font-medium">API Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pink-50 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Flower Shop</h3>
              <p className="text-gray-600 mb-4">E-commerce platform for flowers with cart and checkout functionality</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm">TypeScript</span>
              </div>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Portfolio Website</h3>
              <p className="text-gray-600 mb-4">Personal portfolio showcasing projects and skills</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm">Tailwind</span>
              </div>
            </div>
            <div className="bg-pink-50 rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">E-commerce App</h3>
              <p className="text-gray-600 mb-4">Full-featured shopping application with payment integration</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-pink-200 text-pink-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm">MongoDB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">📧</div>
              <p className="font-medium">saifullah@example.com</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📱</div>
              <p className="font-medium">+1 234 567 891</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📍</div>
              <p className="font-medium">Bloom City, BC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}