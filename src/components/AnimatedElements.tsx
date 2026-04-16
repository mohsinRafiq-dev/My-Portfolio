import React from 'react'
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedTitle = ({ children, className = '', delay = 0 }: AnimatedTitleProps) => {
  return (
    <motion.h1
      className={`text-5xl md:text-7xl font-bold ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, type: 'spring', stiffness: 80 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedSubtitle = ({ children, className = '', delay = 0 }: AnimatedTitleProps) => {
  return (
    <motion.p
      className={`text-xl md:text-2xl text-gray-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedCard = ({ children, className = '', delay = 0 }: AnimatedTitleProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40, rotateX: 15, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      whileHover={{ y: -15, scale: 1.05 }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05,
            duration: 0.6,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -30, 0],
        rotate: [0, 3, -3, 0],
        scale: [1, 1.08, 1]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: 'easeInOut',
        times: [0, 0.5, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export const GlowingText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`text-transparent bg-clip-text bg-gradient-to-r from-white via-[#c778dd] to-white ${className}`}
      animate={{
        textShadow: [
          '0 0 20px rgba(199, 120, 221, 0.5), 0 0 40px rgba(199, 120, 221, 0.3)',
          '0 0 40px rgba(199, 120, 221, 0.8), 0 0 80px rgba(199, 120, 221, 0.5)',
          '0 0 20px rgba(199, 120, 221, 0.5), 0 0 40px rgba(199, 120, 221, 0.3)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  );
};
