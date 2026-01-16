import { MessageSquare, Pencil, Code, Rocket, HeartHandshake, Clock, ArrowDown, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const processes = [
  {
    number: '01',
    title: 'Strategy Session & Idea Discussion',
    description: 'Our FREE strategy session is where we understand your goals, aspirations and your idea. We then provide a truck load of tailored advice on how to succeed.',
    estimatedTime: '1 week',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Planning & Design',
    description: 'We then delve into detailed workshops to give you clarity on what you\'re going to get, a fixed cost, and the return on investment. You get a vision of the end result.',
    estimatedTime: '2-4 weeks',
    icon: Pencil,
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We get down and dirty, and start to build your idea to life. This is still a highly interactive process, with regular "sneak-peeks" into the product.',
    estimatedTime: 'Dependent on size of project',
    icon: Code,
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    title: 'Go-Live & Training',
    description: 'All that planning, research, analysis, design, development… it all becomes "real". We hold your hand in launching your new app to the world (or wherever its new home may be).',
    estimatedTime: null,
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
  },
  {
    number: '05',
    title: 'Support, Maintenance & Continuous Improvement',
    description: 'We make sure that you and your new-born app gets the love and care it deserves: regular updates, maintenance, support, ongoing tweaks and fine-tuning.',
    estimatedTime: null,
    icon: HeartHandshake,
    color: 'from-indigo-500 to-purple-500',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            How Our Process Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology to bring your vision to life, from concept to launch and beyond.
          </p>
        </motion.div>

        {/* Process Flowchart Diagram */}
        <div className="relative">
          {/* Vertical connector line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-indigo-200 transform -translate-x-1/2" />

          <div className="space-y-0">
            {processes.map((process, index) => {
              const Icon = process.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={process.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Left side */}
                      <div className={isEven ? 'lg:text-right' : 'lg:order-2'}>
                        <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-300 bg-white relative overflow-hidden group">
                          {/* Animated gradient background on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                          
                          <div className="relative z-10">
                            <div className={`flex items-start gap-6 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center text-white shadow-lg flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className="w-10 h-10" />
                              </div>
                              
                              <div className="flex-1 space-y-3">
                                <div className="flex items-center gap-3">
                                  <span className={`text-5xl bg-gradient-to-br ${process.color} bg-clip-text text-transparent opacity-30`}>
                                    {process.number}
                                  </span>
                                  {process.estimatedTime && (
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full">
                                      <Clock className="w-4 h-4 text-gray-600" />
                                      <span className="text-sm text-gray-700">{process.estimatedTime}</span>
                                    </div>
                                  )}
                                </div>
                                
                                <h3 className="text-2xl text-gray-900">
                                  {process.title}
                                </h3>
                                
                                <p className="text-gray-600 leading-relaxed">
                                  {process.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Center circle indicator */}
                      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                          className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center shadow-lg`}
                        >
                          <CheckCircle className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>

                      {/* Right side (empty for spacing) */}
                      <div className={isEven ? 'lg:order-2' : ''} />
                    </div>
                  </motion.div>

                  {/* Arrow connector */}
                  {index < processes.length - 1 && (
                    <div className="flex justify-center my-6 lg:my-8">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      >
                        <ArrowDown className={`w-8 h-8 text-blue-400 animate-bounce`} />
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <p className="text-lg text-gray-700">
              <span>End-to-end development process designed for your success</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
