'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Trophy, DollarSign } from 'lucide-react';

export default function QuickInfoSection() {
  const infoItems = [
    {
      Icon: Clock,
      title: 'Duration',
      value: '6 Weeks',
      description: 'Flexible timeline for design & build',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Hybrid',
      description: 'Virtual meetings, local competitions',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      Icon: Trophy,
      title: 'Categories',
      value: '4 Divisions',
      description: 'Multiple skill levels welcome',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      Icon: DollarSign,
      title: 'Entry Fee',
      value: 'Free',
      description: 'No cost to participate',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Competition Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get all the essential details about SamosaTech's off-season robotics competition at a glance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center justify-center w-16 h-16 ${item.bgColor} rounded-full mb-4 group-hover:shadow-lg transition-all duration-300`}
              >
                <item.Icon className={`w-8 h-8 ${item.color}`} />
              </motion.div>
              
              <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-2">
                {item.title}
              </h3>
              
              <div className={`text-3xl font-bold ${item.color} mb-2`}>
                {item.value}
              </div>
              
              <p className="text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl font-bold text-primary mb-2"
              >
                100+
              </motion.div>
              <p className="text-gray-300">Expected Teams</p>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl font-bold text-accent mb-2"
              >
                $5K+
              </motion.div>
              <p className="text-gray-300">Total Prizes</p>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-4xl font-bold text-secondary mb-2"
              >
                24/7
              </motion.div>
              <p className="text-gray-300">Mentor Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}