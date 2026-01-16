import { CheckCircle, Shield, Lightbulb, Target, Info, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';

const guarantees = [
  {
    icon: Lightbulb,
    text: 'Help you explore and define your idea',
  },
  {
    icon: Target,
    text: 'Challenge any assumptions that you may be blind to',
  },
  {
    icon: CheckCircle,
    text: 'Provide you with things to consider when validating your idea',
  },
  {
    icon: Info,
    text: 'Provide information and advice based on our experience',
  },
  {
    icon: ArrowRight,
    text: 'Provide you with direction and next steps for developing your custom software',
  },
];

export function GuaranteeSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200 mb-6">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-600">Our Guarantee</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Don't Sweat the Small Stuff
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are so sure that you will be happy working with us, that we're willing to bet money on it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4">
                For all our initial app consultations we guarantee to:
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-gray-700 leading-relaxed">
                        {guarantee.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border-2 border-purple-300">
                <Shield className="w-6 h-6 text-purple-600" />
                <p className="text-lg text-gray-700">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">100% FREE</span> strategy session - No strings attached!
                </p>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
