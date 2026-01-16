import { ArrowLeft, ShoppingCart, Star, CreditCard, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function RedpandaDemo() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Smart Shopping Cart',
      description: 'Real-time cart updates with recommended products and bulk discounts'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment gateways with encrypted transactions'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Real-time order tracking and flexible delivery options'
    },
    {
      icon: Shield,
      title: 'Buyer Protection',
      description: '30-day money-back guarantee and secure checkout process'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '15K+', label: 'Products' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-orange-500">
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
                E-commerce Platform
              </div>
              <h1 className="text-5xl lg:text-6xl text-white mb-6">
                Redpanda
              </h1>
              <p className="text-xl text-white/90 mb-8">
                A modern, responsive ecommerce platform delivering seamless shopping experiences with secure payment integration and intelligent product recommendations.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-red-600 rounded-full">E-commerce</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">Web Development</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">UI/UX</span>
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
                  src="https://images.unsplash.com/photo-1726443221401-ddd359c08d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBzaG9wcGluZyUyMGNhcnQlMjBjaGVja291dHxlbnwxfHx8fDE3Njg0NTc4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Redpanda Platform"
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
                <div className="text-4xl lg:text-5xl text-red-600 mb-2">{stat.value}</div>
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
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a successful online store
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
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

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Built With Modern Technology
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Node.js', 'Laravel', 'MySQL', 'Stripe API', 'AWS'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white rounded-full shadow-md text-gray-800"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Build Your E-commerce Platform?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a powerful online store that drives sales and delights customers
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-white text-red-600 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
