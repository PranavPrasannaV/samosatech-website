'use client';

import { motion } from 'framer-motion';
import { Cpu, Zap, Target, Users, Brain, Wrench } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      Icon: Cpu,
      title: 'Advanced Robotics',
      description: 'Design and build sophisticated autonomous robots using cutting-edge technology and programming languages.',
      color: 'primary',
    },
    {
      Icon: Target,
      title: 'Custom Game Design',
      description: 'Experience our unique game challenges specifically crafted to test innovation and engineering skills.',
      color: 'accent',
    },
    {
      Icon: Brain,
      title: 'AI Integration',
      description: 'Incorporate artificial intelligence and machine learning algorithms into your robot designs.',
      color: 'secondary',
    },
    {
      Icon: Users,
      title: 'Team Collaboration',
      description: 'Work with diverse teams from around the world, fostering global connections and knowledge sharing.',
      color: 'primary',
    },
    {
      Icon: Wrench,
      title: 'Engineering Excellence',
      description: 'Apply real-world engineering principles and methodologies in a competitive environment.',
      color: 'accent',
    },
    {
      Icon: Zap,
      title: 'Innovation Focus',
      description: 'Push the boundaries of what\'s possible with creative solutions and breakthrough technologies.',
      color: 'secondary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          glow: 'group-hover:shadow-primary/20',
        };
      case 'accent':
        return {
          text: 'text-accent',
          bg: 'bg-accent/10',
          border: 'border-accent/30',
          glow: 'group-hover:shadow-accent/20',
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          bg: 'bg-secondary/10',
          border: 'border-secondary/30',
          glow: 'group-hover:shadow-secondary/20',
        };
      default:
        return {
          text: 'text-primary',
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          glow: 'group-hover:shadow-primary/20',
        };
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated Lines */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-full bg-[linear-gradient(45deg,transparent_0%,rgba(0,255,136,0.1)_50%,transparent_100%)] bg-[length:100px_100px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Why Choose SamosaTech?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the perfect blend of competition, learning, and innovation in our cutting-edge robotics platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className={`
                  group bg-gray-900/30 backdrop-blur-sm border rounded-2xl p-8 
                  hover:bg-gray-900/50 transition-all duration-300
                  ${colorClasses.border} ${colorClasses.glow} hover:shadow-2xl
                `}
              >
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`
                    inline-flex items-center justify-center w-14 h-14 
                    ${colorClasses.bg} rounded-xl mb-6 
                    group-hover:shadow-lg transition-all duration-300
                  `}
                >
                  <feature.Icon className={`w-7 h-7 ${colorClasses.text}`} />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`h-0.5 ${colorClasses.bg} mt-6 rounded-full`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Build the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of innovators, engineers, and creators in the ultimate robotics competition experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Explore Custom Game
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}