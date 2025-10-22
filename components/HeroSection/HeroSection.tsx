'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Calendar, Trophy, Users } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-6xl mx-auto pb-8"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium text-sm tracking-wide uppercase">
            Off-Season Competition
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
            SamosaTech
          </span>
          <br />
          <span className="text-white">Robotics</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Join the ultimate off-season robotics competition where innovation meets engineering excellence. 
          Design, build, and compete with cutting-edge robotics technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/register">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full text-lg transition-all duration-300 hover:shadow-lg animate-glow"
            >
              Register Now
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:border-primary hover:text-primary backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block p-4 bg-primary/10 rounded-full mb-4"
            >
              <Calendar className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
            <p className="text-gray-400">Compete at your own pace with our flexible timeline</p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block p-4 bg-secondary/10 rounded-full mb-4"
            >
              <Trophy className="w-8 h-8 text-secondary" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Custom Challenges</h3>
            <p className="text-gray-400">Unique game designed specifically for innovation</p>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block p-4 bg-accent/10 rounded-full mb-4"
            >
              <Users className="w-8 h-8 text-accent" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-gray-400">Connect with robotics enthusiasts worldwide</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}