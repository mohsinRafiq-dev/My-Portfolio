import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Rotation intensity (1-10, default 5)
}

/**
 * Card3DTilt - Adds 3D perspective rotation effect on mouse move (OPTIMIZED)
 * Rotates based on mouse position relative to card
 */
export const Card3DTilt = ({ 
  children, 
  className = '',
  intensity = 2 // Reduced default intensity
}: Card3DTiltProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  let throttleTimer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isHovering) return;

    // Throttle mouse events - only update every 16ms (60fps)
    if (throttleTimer) return;
    throttleTimer = setTimeout(() => (throttleTimer = null), 16);

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const distX = (e.clientX - centerX) / (rect.width / 2);
    const distY = (e.clientY - centerY) / (rect.height / 2);

    // Apply reduced rotation based on distance and intensity
    setRotateY(Math.max(-5, Math.min(5, distX * intensity)));
    setRotateX(Math.max(-5, Math.min(5, -distY * intensity)));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        willChange: isHovering ? 'transform' : 'auto'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovering ? rotateX : 0,
        rotateY: isHovering ? rotateY : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * TiltCard - Simplified 3D card with automatic rotation on hover (OPTIMIZED)
 * Better for project cards and skill cards
 */
export const TiltCard = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  let throttleTimer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isHovering) return;

    // Throttle to prevent excessive updates
    if (throttleTimer) return;
    throttleTimer = setTimeout(() => (throttleTimer = null), 16);

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = (e.clientX - centerX) / (rect.width / 2);
    const distY = (e.clientY - centerY) / (rect.height / 2);

    setRotateY(Math.max(-8, Math.min(8, distX * 8)));
    setRotateX(Math.max(-8, Math.min(8, -distY * 8)));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        perspective: '1000px',
        willChange: isHovering ? 'transform' : 'auto'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovering ? rotateX : 0,
        rotateY: isHovering ? rotateY : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};
