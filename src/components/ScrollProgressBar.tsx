import { useRef, useEffect } from 'react';

export const ScrollProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);
  let rafId: number;

  useEffect(() => {
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        if (!barRef.current) return;
        
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        
        // Calculate how far down the page the user has scrolled
        const totalScrollableHeight = docHeight - windowHeight;
        const scrolled = totalScrollableHeight > 0 ? (scrollTop / totalScrollableHeight) * 100 : 0;
        
        // Directly update DOM without React re-render
        barRef.current.style.width = Math.min(Math.max(scrolled, 0), 100) + '%';
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#c778dd] via-white to-[#c778dd] z-[60]"
      style={{ 
        width: '0%',
        transition: 'width 60ms linear',
        willChange: 'width'
      }}
    />
  );
};
