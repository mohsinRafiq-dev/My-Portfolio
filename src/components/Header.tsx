import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(0);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
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


  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="fixed top-0 w-full z-50 pointer-events-none">
      {/* Top Bar Background - Mobile Only */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/2 backdrop-blur-sm border-b border-white/5 z-40 md:hidden" />
      
      {/* Professional Logo - Static */}
      <motion.div
        className="fixed top-4 left-4 z-50 pointer-events-auto md:top-8 md:left-12"
        whileHover={{ scale: 1.08 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
      >
        <div className="px-4 py-2 rounded-2xl bg-gradient-to-br from-[#5b9eff] to-[#c778dd] border border-white/20 flex items-center justify-center shadow-lg relative overflow-hidden group">
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#c778dd] to-[#5b9eff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Braces + Mohsin Logo Text */}
          <span className="text-white font-semibold text-sm relative z-10 leading-none">{`{mohsin}`}</span>
        </div>
      </motion.div>

      {/* Desktop Navigation - Center */}
      <nav className="hidden md:flex items-center gap-1 bg-transparent backdrop-blur-md rounded-full px-8 py-3 border border-white/5 fixed left-1/2 top-4 transform -translate-x-1/2 z-50 pointer-events-auto">
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: idx * 0.1, 
              duration: 0.5,
              default: { type: 'spring', stiffness: 300, damping: 20 }
            }}
          >
            <span className="relative z-10">{item.label}</span>
          </motion.a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 md:hidden z-50 pointer-events-auto"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className="fixed top-16 left-0 right-0 flex flex-col gap-3 px-4 py-4 md:hidden z-40 pointer-events-auto bg-white/10 backdrop-blur-md border-b border-white/10"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
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
                setIsOpen(false);
              }}
              className={`px-4 py-3 rounded-lg transition-colors text-center border font-medium cursor-pointer text-white ${
                activeNav === idx
                  ? 'bg-gradient-to-r from-[#5b9eff] to-[#c778dd] border-transparent'
                  : 'border border-white/20 bg-white/5 hover:bg-white/10'
              }`}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </header>
  );
};
