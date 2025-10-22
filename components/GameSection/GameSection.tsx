'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Cpu, Layers, Globe, Timer, Trophy, Users } from 'lucide-react';

export default function GameSection() {
  const gameFeatures = [
    {
      icon: Target,
      title: 'Multi-Objective Scoring',
      description: 'Robots must complete diverse tasks including autonomous navigation, object manipulation, and strategic positioning.',
      color: 'primary',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Advanced autonomous period requiring machine learning algorithms for optimal performance.',
      color: 'accent',
    },
    {
      icon: Globe,
      title: 'Environmental Challenges',
      description: 'Dynamic field conditions that change throughout matches, testing adaptability.',
      color: 'secondary',
    },
    {
      icon: Users,
      title: 'Alliance Strategy',
      description: 'Team up with other robots in strategic alliances to maximize scoring potential.',
      color: 'primary',
    },
  ];

  const gameRules = [
    {
      category: 'Match Structure',
      rules: [
        '3-minute matches with 30-second autonomous period',
        '2v2 alliance format with strategic partnerships',
        'Best of 3 series in elimination rounds',
      ],
    },
    {
      category: 'Scoring System',
      rules: [
        'Energy Orbs: 5 points each in storage zones',
        'Power Cores: 15 points when properly activated',
        'Alliance bonus: 25 points for successful cooperation',
      ],
    },
    {
      category: 'Robot Specifications',
      rules: [
        'Maximum dimensions: 28" x 38" x 60" (L x W x H)',
        'Weight limit: 125 lbs including battery',
        'Voltage limit: 12V DC with approved components',
      ],
    },
  ];

  const fieldElements = [
    {
      name: 'Energy Collection Zone',
      description: 'Starting area where robots collect energy orbs',
      icon: Zap,
    },
    {
      name: 'Power Core Station',
      description: 'Central hub for activating power cores',
      icon: Cpu,
    },
    {
      name: 'Charging Platforms',
      description: 'Elevated platforms for end-game positioning',
      icon: Layers,
    },
    {
      name: 'Alliance Bridge',
      description: 'Cooperative element requiring team coordination',
      icon: Users,
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10 border-primary/30';
      case 'accent':
        return 'text-accent bg-accent/10 border-accent/30';
      case 'secondary':
        return 'text-secondary bg-secondary/10 border-secondary/30';
      default:
        return 'text-primary bg-primary/10 border-primary/30';
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Quantum Nexus
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our custom-designed robotics game challenges teams to master energy manipulation, autonomous navigation, 
            and strategic alliance building in a dynamic competition environment.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-gray-800 rounded-full px-6 py-3"
          >
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-white font-medium">Official Game Reveal: February 1st, 2024</span>
          </motion.div>
        </motion.div>

        {/* Game Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Game Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gameFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}
                >
                  <feature.icon className="w-7 h-7" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Field Elements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Field Elements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fieldElements.map((element, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-accent/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4"
                >
                  <element.icon className="w-6 h-6 text-accent" />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  {element.name}
                </h3>

                <p className="text-gray-400 text-sm">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Game Rules */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Game Rules & Specifications
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gameRules.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-primary mb-6">
                  {section.category}
                </h3>

                <ul className="space-y-4">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategy Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6"
            >
              <Timer className="w-8 h-8 text-secondary" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Strategy Considerations
            </h3>
            
            <p className="text-gray-300 mb-8">
              Success in Quantum Nexus requires balancing autonomous efficiency with strategic alliance play. 
              Teams must optimize for both individual scoring and cooperative bonuses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Autonomous Strategy</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Prioritize energy orb collection in first 15 seconds</li>
                  <li>• Implement vision tracking for power core activation</li>
                  <li>• Plan fallback routines for field variations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-accent mb-4">Alliance Coordination</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Establish clear communication protocols</li>
                  <li>• Practice coordinated bridge maneuvers</li>
                  <li>• Develop complementary robot designs</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}