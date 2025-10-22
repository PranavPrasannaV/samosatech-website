'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Zap } from 'lucide-react';

export default function DateTimeSection() {
  const phases = [
    {
      phase: 'Registration',
      date: 'January 15 - February 15, 2024',
      time: 'Open 24/7',
      description: 'Team registration and initial submissions',
      icon: Users,
      status: 'upcoming',
      details: ['Team formation', 'Initial documentation', 'Resource allocation'],
    },
    {
      phase: 'Design Phase',
      date: 'February 16 - March 15, 2024',
      time: '4 weeks duration',
      description: 'Robot design and planning period',
      icon: Zap,
      status: 'upcoming',
      details: ['CAD modeling', 'Strategy development', 'Parts ordering'],
    },
    {
      phase: 'Build Phase',
      date: 'March 16 - April 30, 2024',
      time: '6 weeks duration',
      description: 'Construction and programming period',
      icon: Trophy,
      status: 'upcoming',
      details: ['Robot assembly', 'Programming', 'Testing & iteration'],
    },
    {
      phase: 'Competition',
      date: 'May 1 - May 15, 2024',
      time: 'Various time slots',
      description: 'Final competition and awards',
      icon: Trophy,
      status: 'upcoming',
      details: ['Qualification matches', 'Elimination rounds', 'Awards ceremony'],
    },
  ];

  const importantDates = [
    {
      date: 'Jan 15',
      event: 'Registration Opens',
      time: '12:00 AM EST',
      type: 'registration',
    },
    {
      date: 'Feb 1',
      event: 'Game Reveal',
      time: '6:00 PM EST',
      type: 'announcement',
    },
    {
      date: 'Feb 15',
      event: 'Registration Closes',
      time: '11:59 PM EST',
      type: 'deadline',
    },
    {
      date: 'Mar 1',
      event: 'Kickoff Event',
      time: '2:00 PM EST',
      type: 'event',
    },
    {
      date: 'Apr 15',
      event: 'Submission Deadline',
      time: '11:59 PM EST',
      type: 'deadline',
    },
    {
      date: 'May 1',
      event: 'Competition Begins',
      time: '9:00 AM EST',
      type: 'competition',
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'registration':
        return 'text-primary border-primary/30 bg-primary/10';
      case 'announcement':
        return 'text-accent border-accent/30 bg-accent/10';
      case 'deadline':
        return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'event':
        return 'text-secondary border-secondary/30 bg-secondary/10';
      case 'competition':
        return 'text-green-400 border-green-400/30 bg-green-400/10';
      default:
        return 'text-primary border-primary/30 bg-primary/10';
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
            Competition Schedule
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay on track with all important dates, deadlines, and events for SamosaTech 2024.
          </p>
        </motion.div>

        {/* Competition Phases Timeline */}
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
            Competition Phases
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <phase.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {phase.phase}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mb-4">
                      <div className="flex items-center space-x-2 text-gray-300 mb-2 sm:mb-0">
                        <Calendar className="w-4 h-4" />
                        <span>{phase.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Clock className="w-4 h-4" />
                        <span>{phase.time}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                      {phase.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                        Key Activities:
                      </h4>
                      <ul className="space-y-1">
                        {phase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Dates */}
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
            Important Dates
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`
                  p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300
                  ${getTypeColor(item.type)} hover:shadow-lg
                `}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">
                    {item.date}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.event}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meeting Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Weekly Check-ins & Support
            </h3>
            <p className="text-gray-300 mb-6">
              Join our weekly virtual meetings for updates, Q&A sessions, and technical support throughout the competition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-white font-medium">Virtual Meetings</span>
                </div>
                <p className="text-gray-400">
                  Every Saturday at 2:00 PM EST via Zoom
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 mb-4">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-white font-medium">Mentor Support</span>
                </div>
                <p className="text-gray-400">
                  24/7 Discord support & office hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}