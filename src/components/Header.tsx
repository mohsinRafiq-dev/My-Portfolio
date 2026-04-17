import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code2, Zap, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(0);

  const navItems = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Journey', href: '#journey', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: Code2 },
    { label: 'Skills', href: '#skills', icon: Zap },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    // Intersection Observer to detect which section is in view
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const navIndex = navItems.findIndex(
            (item) => item.href.replace('#', '') === sectionId || (sectionId === '' && item.href === '#')
          );
          if (navIndex !== -1) {
            setActiveNav(navIndex);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    const homeSection = document.querySelector('section:first-of-type');
    
    if (homeSection) {
      observer.observe(homeSection);
    }
    
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      if (homeSection) observer.unobserve(homeSection);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [navItems]);

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-none">
      {/* Top Bar Background - Mobile Only */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black/35 border-b border-white/5 z-40 md:hidden" />
      
      {/* Professional Logo - Static */}
      <motion.div
        className="fixed top-4 left-4 z-50 pointer-events-auto md:top-8 md:left-12"
        whileHover={{ scale: 1.12 }}
        initial={{ opacity: 0, x: -30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
      >
        <div className="px-4 py-2 rounded-xl bg-white/5 border border-[#c778dd]/30 flex items-center justify-center hover:bg-white/10 transition-all relative overflow-hidden group">
          {/* Braces + Mohsin Logo Text */}
          <span className="text-[#c778dd] font-semibold text-sm relative z-10 leading-none hover:text-white transition-colors">{`{mohsin}`}</span>
        </div>
      </motion.div>

      {/* Desktop Navigation - Center */}
      <motion.nav 
        className="hidden md:flex items-center gap-1 bg-white/2 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10 fixed top-4 z-50 pointer-events-auto"
        style={{ left: '50%', x: '-50%' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
      >
        {navItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setActiveNav(idx);
              if (item.href === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`px-6 py-2 rounded-full transition-all text-sm font-medium relative cursor-pointer group ${
              activeNav === idx
                ? 'bg-gradient-to-r from-[#5b9eff] to-[#c778dd] text-white shadow-lg'
                : 'text-[#ABB2BF] hover:text-white'
            }`}
            whileHover={
              activeNav === idx
                ? { boxShadow: '0 0 20px rgba(91, 158, 255, 0.6)', scale: 1.05 }
                : { color: '#ffffff', backgroundColor: 'rgba(199, 120, 221, 0.1)', scale: 1.05 }
            }
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.2 + idx * 0.12, 
              duration: 0.5,
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
          >
            <span className="relative z-10">{item.label}</span>
          </motion.a>
        ))}
      </motion.nav>

      {/* Mobile Menu Button - Compact */}
      <motion.button
        className="fixed top-4 right-4 md:hidden z-50 pointer-events-auto w-10 h-10 rounded-lg bg-white/5 border border-[#c778dd]/30 flex items-center justify-center text-[#c778dd] hover:bg-white/10 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, borderColor: '#c778dd' }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 30, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.div>
      </motion.button>

      {/* Compact Transparent Dropdown Menu */}
      {isOpen && (
        <motion.div
          className="fixed top-14 right-4 md:hidden z-40 pointer-events-auto"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          {/* Click outside to close */}
          <motion.div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, ease: 'linear' }}
          />

          {/* Compact Menu Container */}
          <motion.nav
            className="relative w-48 bg-[#111827]/95 border border-white/15 rounded-2xl overflow-hidden shadow-xl shadow-black/40"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            <div className="relative space-y-1 p-2">
              {navItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={idx}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveNav(idx);
                      if (item.href === '#') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.025, duration: 0.14, ease: 'easeOut' }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer group ${
                      activeNav === idx
                        ? 'bg-gradient-to-r from-[#5b9eff]/40 to-[#c778dd]/40 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent size={16} />
                    </div>
                    <span className="text-sm font-medium">{item.label}</span>
                    {activeNav === idx && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#5b9eff] to-[#c778dd]" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </header>
  );
};
