import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxScrollProps {
  children: React.ReactNode;
  offset?: number; // Parallax offset amount (default 50)
  className?: string;
}

/**
 * ParallaxScroll - Creates parallax effect where element moves slower than scroll
 * Use for background orbs, decorative elements, or subtle depth effects
 */
export const ParallaxScroll = ({ 
  children, 
  offset = 50,
  className = '' 
}: ParallaxScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Convert scroll progress (0-1) to y position offset
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * ParallaxElement - Wraps any element with parallax effect
 * Automatically detects scroll and applies offset
 */
export const ParallaxElement = ({ 
  children, 
  rate = 0.5,
  className = '' 
}: { 
  children: React.ReactNode; 
  rate?: number; // Scroll rate (0-1, where 0.5 = half speed)
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, (value) => value * rate);

  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
