'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/date-time', label: 'Schedule' },
  { href: '/game', label: 'Game' },
  { href: '/about', label: 'About' },
  { href: '/register', label: 'Register' },
];

export default function Navigation({ className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      color: "#00ff88",
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${className}`}
      >
        <div
          className={`
            px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300
            ${scrolled 
              ? 'bg-black/80 border-primary/30 shadow-lg shadow-primary/20' 
              : 'bg-black/60 border-white/20'
            }
          `}
        >
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-primary"
              >
                <Zap className="w-6 h-6" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SamosaTech
              </span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
              {navigationItems.map((item) => (
                <motion.div key={item.href} variants={linkVariants} whileHover="hover">
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Spacer for balance */}
            <div className="flex-shrink-0 w-20"></div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <div className="relative flex flex-col items-center justify-center h-full space-y-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-white hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}