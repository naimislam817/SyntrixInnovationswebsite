import { ArrowLeft, Smartphone, Package, BarChart3, Bell, Scan, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function StationaryAppDemo() {
  const features = [
    {
      icon: Scan,
      title: 'Barcode Scanning',
      description: 'Quick inventory updates with built-in barcode scanner integration'
    },
    {
      icon: Package,
      title: 'Stock Management',
      description: 'Real-time inventory tracking with low stock alerts and reorder suggestions'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Detailed sales reports and trends to optimize your business'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Instant alerts for low stock, pending orders, and sales updates'
    },
    {
      icon: Zap,
      title: 'Offline Mode',
      description: 'Continue working even without internet connection'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Works seamlessly on both Android and iOS devices'
    }
  ];

  const stats = [
    { value: '2K+', label: 'Products Tracked' },
    { value: '500+', label: 'Daily Transactions' },
    { value: '100%', label: 'Inventory Accuracy' },
    { value: '4.8★', label: 'User Rating' }
  ];

  const capabilities = [
    'Real-time Inventory Sync',
    'Multi-store Support',
    'Customer Management',
    'Invoice Generation',
    'Payment Integration',
    'Purchase Orders',
    'Supplier Management',
    'Expense Tracking'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
                Flutter Mobile Application
              </div>
              <h1 className="text-5xl lg:text-6xl text-white mb-6">
                Stationary Shop Inventory App
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professional inventory management system built with Flutter for seamless stock tracking, order management, and sales analytics on the go.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-purple-600 rounded-full">Flutter</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">Mobile App</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">Inventory Management</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4NDIzMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Stationary Shop Mobile App"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Powerful Mobile Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your inventory from anywhere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Complete Business Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the tools you need in one app
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="text-gray-800">{capability}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl mb-4">
                Built with Flutter
              </h2>
              <p className="text-xl text-white/90">
                Native performance, beautiful UI, cross-platform compatibility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-2">⚡</div>
                <h3 className="text-xl mb-2">Lightning Fast</h3>
                <p className="text-white/80">Optimized performance for smooth experience</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🎨</div>
                <h3 className="text-xl mb-2">Beautiful Design</h3>
                <p className="text-white/80">Modern Material Design interface</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🔄</div>
                <h3 className="text-xl mb-2">Auto Sync</h3>
                <p className="text-white/80">Cloud backup and multi-device sync</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Technology Stack
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST API', 'Material Design'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white rounded-full shadow-md text-gray-800 border-2 border-purple-100"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Need a Custom Mobile App?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build a powerful mobile solution that helps your business grow
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Let's Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
