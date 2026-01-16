import { Smartphone, Globe, Palette, Code, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjI3Nzk3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Scalable, responsive web applications built with modern technologies and best practices.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjI3NDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, intuitive designs that engage users and drive conversions.',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWdufGVufDF8fHx8MTc2MjczNDY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs and workflows.',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjI3NjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Lead Generation',
    description: 'Drive organic traffic and convert visitors into qualified leads with proven strategies.',
    image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBtYXJrZXRpbmclMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYyNzcxMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Comprehensive testing to ensure your product is reliable, secure, and bug-free.',
    image: 'https://images.unsplash.com/photo-1586868538513-51335a0c5337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjI4MzkzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Emerging Technologies',
    description: 'Stay ahead with AI, blockchain, IoT, and other cutting-edge technologies.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI4MDgyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-indigo-500 to-purple-500',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full mb-4">
            What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to power your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 hover:border-purple-200 h-full">
                  {/* Image with overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Icon on image */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    
                    {/* Number badge */}
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Animated underline */}
                    <div className="pt-2">
                      <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your next project with us?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
