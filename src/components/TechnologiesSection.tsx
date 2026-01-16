import { Code2 } from 'lucide-react';
import { motion } from 'motion/react';

const technologies = [
  {
    name: 'React',
    icon: '⚛️',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Laravel',
    icon: '🔶',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Node.js',
    icon: '🟢',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'JavaScript',
    icon: '📜',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    name: 'PHP',
    icon: '🐘',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Flutter',
    icon: '💙',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function TechnologiesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600">Our Tech Stack</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Technologies We Use
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="text-5xl"
                  >
                    {tech.icon}
                  </motion.div>
                  
                  <h3 className="text-gray-900 text-center">
                    {tech.name}
                  </h3>
                </div>

                {/* Hover effect border glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            These are just some of the technologies we specialize in. We constantly adapt and learn new frameworks and tools to deliver the best solutions for your unique needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
