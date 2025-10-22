'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';

export default function CallToActionSection() {
  const ctaCards = [
    {
      Icon: Calendar,
      title: 'Check Schedule',
      description: 'View important dates and competition timeline',
      href: '/date-time',
      buttonText: 'View Dates',
      color: 'primary',
    },
    {
      Icon: Users,
      title: 'Learn About Us',
      description: 'Discover the story behind SamosaTech',
      href: '/about',
      buttonText: 'About Us',
      color: 'accent',
    },
    {
      Icon: Trophy,
      title: 'Register Now',
      description: 'Secure your spot in the competition',
      href: '/register',
      buttonText: 'Register',
      color: 'secondary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          bg: 'bg-primary',
          bgHover: 'hover:bg-primary-dark',
          shadow: 'hover:shadow-primary/25',
          border: 'border-primary/30',
        };
      case 'accent':
        return {
          text: 'text-accent',
          bg: 'bg-accent',
          bgHover: 'hover:bg-blue-600',
          shadow: 'hover:shadow-accent/25',
          border: 'border-accent/30',
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          bg: 'bg-secondary',
          bgHover: 'hover:bg-orange-600',
          shadow: 'hover:shadow-secondary/25',
          border: 'border-secondary/30',
        };
      default:
        return {
          text: 'text-primary',
          bg: 'bg-primary',
          bgHover: 'hover:bg-primary-dark',
          shadow: 'hover:shadow-primary/25',
          border: 'border-primary/30',
        };
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Join the Revolution
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Don't miss your chance to be part of the future of robotics. 
            Register today and transform your ideas into reality.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/register">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 255, 136, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full text-xl transition-all duration-300 hover:shadow-2xl animate-glow inline-flex items-center space-x-3"
              >
                <span>Register for Competition</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* CTA Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ctaCards.map((card, index) => {
            const colorClasses = getColorClasses(card.color);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`
                  group bg-gray-900/40 backdrop-blur-sm border rounded-2xl p-8 text-center
                  hover:bg-gray-900/60 transition-all duration-300
                  ${colorClasses.border} hover:shadow-xl
                `}
              >
                <motion.div
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gray-800/50 rounded-full mb-6 group-hover:bg-gray-800/70 transition-all duration-300`}
                >
                  <card.Icon className={`w-8 h-8 ${colorClasses.text}`} />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                  {card.title}
                </h3>

                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  {card.description}
                </p>

                <Link href={card.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      w-full px-6 py-3 ${colorClasses.bg} ${colorClasses.bgHover} 
                      text-white font-semibold rounded-full transition-all duration-300 
                      ${colorClasses.shadow} hover:shadow-lg
                    `}
                  >
                    {card.buttonText}
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Newsletter/Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest news, updates, and announcements about SamosaTech competitions and events.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 border-2 border-white/20"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}