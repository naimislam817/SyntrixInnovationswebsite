import { ArrowLeft, Users, Calendar, FileText, Activity, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function HospitalDemo() {
  const features = [
    {
      icon: Users,
      title: 'HR Management',
      description: 'Complete employee management with attendance, payroll, and performance tracking'
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Automated appointment booking and doctor availability management'
    },
    {
      icon: FileText,
      title: 'Patient Records',
      description: 'Secure electronic health records with complete medical history'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Live patient vitals monitoring and emergency alerts system'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Comprehensive reports and insights for better decision making'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full regulatory compliance'
    }
  ];

  const stats = [
    { value: '5K+', label: 'Patients Managed' },
    { value: '200+', label: 'Healthcare Staff' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '15+', label: 'Departments' }
  ];

  const modules = [
    'Patient Management',
    'HR & Payroll',
    'Inventory Management',
    'Billing & Insurance',
    'Laboratory Management',
    'Pharmacy Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500 to-emerald-500">
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
                Enterprise Healthcare Solution
              </div>
              <h1 className="text-5xl lg:text-6xl text-white mb-6">
                Hospital Management System
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive healthcare solution featuring integrated HR module and patient management system for streamlined hospital operations and improved patient care.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white text-green-600 rounded-full">Healthcare</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">HR Module</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full">Patient Management</span>
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
                  src="https://images.unsplash.com/photo-1766299892693-2370a8d47e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODQ1Nzg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hospital Management System"
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
                <div className="text-4xl lg:text-5xl text-green-600 mb-2">{stat.value}</div>
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
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All-in-one solution for modern healthcare management
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
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
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

      {/* Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Integrated Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete suite of modules working seamlessly together
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="text-lg text-gray-800">{module}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
              Enterprise Technology Stack
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'WebSocket'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white rounded-full shadow-md text-gray-800 border-2 border-green-100"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-500 to-emerald-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Transform Your Healthcare Operations
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build a custom healthcare management solution tailored to your needs
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
