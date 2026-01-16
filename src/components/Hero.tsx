import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [projectCount, setProjectCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    // Animated counters
    const projectTimer = setInterval(() => {
      setProjectCount(prev => {
        if (prev >= 100) {
          clearInterval(projectTimer);
          return 100;
        }
        return prev + 3;
      });
    }, 30);

    const satisfactionTimer = setInterval(() => {
      setSatisfactionCount(prev => {
        if (prev >= 98) {
          clearInterval(satisfactionTimer);
          return 98;
        }
        return prev + 3;
      });
    }, 30);

    const experienceTimer = setInterval(() => {
      setExperienceCount(prev => {
        if (prev >= 5) {
          clearInterval(experienceTimer);
          return 5;
        }
        return prev + 1;
      });
    }, 250);

    setHasAnimated(true);

    return () => {
      clearInterval(projectTimer);
      clearInterval(satisfactionTimer);
      clearInterval(experienceTimer);
    };
  }, [hasAnimated]);

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-700">Transforming Ideas into Reality</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl"
            >
              <span className="block text-gray-900">Innovate Beyond</span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Boundaries
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-xl"
            >
              We transform your ideas into powerful digital solutions. From strategy to deployment, 
              we're with you every step of the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Process
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-12 pt-8"
            >
              <div>
                <div className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {projectCount}+
                </div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {satisfactionCount}%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {experienceCount}+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl"
            ></motion.div>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjI2NDgwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Innovation workspace"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}