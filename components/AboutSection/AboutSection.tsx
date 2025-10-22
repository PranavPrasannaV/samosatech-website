'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Trophy, Lightbulb, Globe, Zap, Target, Code } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of robotics technology and creative problem-solving.',
      color: 'primary',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a global network of passionate robotics enthusiasts and engineers.',
      color: 'accent',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Maintaining the highest standards in competition design and execution.',
      color: 'secondary',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Fostering genuine love for robotics, engineering, and technological advancement.',
      color: 'primary',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Competition Director',
      background: 'Former NASA engineer with 15+ years in robotics',
      icon: Zap,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Technical Lead',
      background: 'Software architect specializing in autonomous systems',
      icon: Code,
    },
    {
      name: 'Emily Johnson',
      role: 'Community Manager',
      background: 'Education specialist with robotics outreach experience',
      icon: Users,
    },
    {
      name: 'Alex Kim',
      role: 'Game Designer',
      background: 'Former FRC mentor and competition game designer',
      icon: Target,
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'SamosaTech Founded',
      description: 'Started as a small community project to bridge the off-season gap',
    },
    {
      year: '2021',
      title: 'First Competition',
      description: '50 teams participated in our inaugural virtual event',
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to include international teams from 15 countries',
    },
    {
      year: '2023',
      title: 'Hybrid Format',
      description: 'Introduced innovative hybrid virtual-physical competition model',
    },
    {
      year: '2024',
      title: 'Next Evolution',
      description: 'Launching advanced AI integration and custom hardware platforms',
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
            About SamosaTech
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing off-season robotics competitions through innovation, community, and cutting-edge technology.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 text-center">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8"
            >
              <Globe className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>
            
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              SamosaTech exists to bridge the gap in off-season robotics competitions by providing innovative, 
              accessible, and technically challenging events that foster learning, collaboration, and technological advancement. 
              We believe that robotics education shouldn't pause during the off-season, and that every team deserves 
              opportunities to grow, compete, and innovate year-round.
            </p>
          </div>
        </motion.div>

        {/* Values */}
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
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${getColorClasses(value.color)}`}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
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
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary rounded-full" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-black">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
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
            Meet Our Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-accent/30 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6"
                >
                  <member.icon className="w-8 h-8 text-accent" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>

                <div className="text-accent font-medium mb-4 text-sm uppercase tracking-wide">
                  {member.role}
                </div>

                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {member.background}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact/Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Join Our Community
          </h3>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a competitor, mentor, volunteer, or robotics enthusiast, 
            there's a place for you in the SamosaTech community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Register for Competition
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent hover:text-black transition-all duration-300"
            >
              Volunteer with Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}