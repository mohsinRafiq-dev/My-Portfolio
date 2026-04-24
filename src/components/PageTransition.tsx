import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  delay?: number;
  type?: 'fadeScale' | 'slideUp' | 'slideDown' | 'fadeRotate' | 'gradualReveal';
  className?: string;
}

/**
 * PageTransition - Smooth animation for sections entering viewport
 * Multiple animation styles available for variety
 */
export const PageTransition = ({ 
  children, 
  delay = 0,
  type = 'fadeScale',
  className = ''
}: PageTransitionProps) => {
  const variants = {
    fadeScale: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay, ease: 'easeOut' },
      },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' },
      },
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' },
      },
    },
    fadeRotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.6, delay, ease: 'easeOut' },
      },
    },
    gradualReveal: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom ease curve
        },
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={variants[type]}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

/**
 * SectionReveal - For entire sections with staggered children animation
 */
export const SectionReveal = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className={className}
      style={{ willChange: 'opacity' }}
    >
      <motion.div variants={itemVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

/**
 * StaggerContainer - For animating multiple children in sequence
 */
export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1,
  className = ''
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {/* Map through children if array, otherwise wrap in item variant */}
      {Array.isArray(children) ? (
        children.map((child, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};
