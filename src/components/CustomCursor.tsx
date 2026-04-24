import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const throttleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse move updates - only update every 16ms (60fps max)
      if (throttleTimerRef.current) return;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      throttleTimerRef.current = setTimeout(() => {
        throttleTimerRef.current = null;
      }, 16);
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

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
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
          willChange: 'transform',
        }}
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderWidth: isHovering ? 2 : 1.5,
          borderColor: '#c778dd',
          borderRadius: '50%',
          boxShadow: isHovering
            ? '0 0 30px rgba(199, 120, 221, 0.8), 0 0 15px rgba(199, 120, 221, 0.5)'
            : '0 0 20px rgba(199, 120, 221, 0.6), 0 0 8px rgba(199, 120, 221, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
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
          boxShadow: '0 0 10px rgba(199, 120, 221, 0.8)',
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />
    </>
  );
};
