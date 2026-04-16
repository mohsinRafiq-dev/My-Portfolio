import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Detect hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target?.tagName === 'BUTTON' ||
        target?.tagName === 'A' ||
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('[role="button"]') ||
        target?.closest('input') ||
        target?.closest('select');
      
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer glow ring - centered on cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          marginLeft: -20,
          marginTop: -20,
        }}
        animate={{
          width: isHovering ? 70 : 40,
          height: isHovering ? 70 : 40,
          borderWidth: isHovering ? 2 : 1.5,
          borderColor: '#c778dd',
          borderRadius: '50%',
          boxShadow: isHovering
            ? '0 0 50px rgba(199, 120, 221, 0.95), 0 0 25px rgba(199, 120, 221, 0.6)'
            : '0 0 25px rgba(199, 120, 221, 0.7), 0 0 10px rgba(199, 120, 221, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />

      {/* Inner bright dot - centered on cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          marginLeft: -4,
          marginTop: -4,
          width: 8,
          height: 8,
          backgroundColor: '#c778dd',
          borderRadius: '50%',
          boxShadow: '0 0 12px rgba(199, 120, 221, 0.9)',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          boxShadow: isHovering
            ? '0 0 20px rgba(199, 120, 221, 1)'
            : '0 0 10px rgba(199, 120, 221, 0.8)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Optional: Trailing effect - subtle circle that follows slower */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          marginLeft: -25,
          marginTop: -25,
          width: 50,
          height: 50,
          border: '1px solid rgba(199, 120, 221, 0.3)',
          borderRadius: '50%',
        }}
        animate={{
          opacity: isHovering ? 0.1 : 0.05,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 25 }}
      />
    </>
  );
};
