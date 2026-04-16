 import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Trophy, Rocket, Github, Linkedin, Database, GitBranch, Zap, Twitter, Instagram, Dribbble, Mail, ArrowRight, Mouse } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { useEffect, useState, useRef } from 'react';

const profileImage = new URL('../Public/IMG_3465.jpeg', import.meta.url).href;

const CountUpNumber = ({ target }: { target: string }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const numValue = parseInt(target.replace(/[^0-9]/g, ''));
    const suffix = target.replace(/[0-9]/g, '');
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const value = Math.floor(increment * currentStep);
      setDisplayValue(value + suffix);

      if (currentStep >= steps) {
        setDisplayValue(target);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return <div ref={elementRef}>{displayValue}</div>;
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const profileY = useTransform(scrollY, [0, 500], [0, 150]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-transparent pt-20 pb-10">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#c778dd]/70 to-transparent blur-3xl"
        animate={isMobile ? {} : {
          scale: [1, 1.3, 0.9, 1.2, 1],
          x: [0, 60, -30, 50, 0],
          y: [0, -40, 20, -30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#5b9eff]/70 to-transparent blur-3xl"
        animate={isMobile ? {} : {
          scale: [1, 1.1, 0.85, 1.15, 1],
          x: [0, -60, 30, -50, 0],
          y: [0, 40, -20, 30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c778dd" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#5b9eff]/40 rounded-lg hidden lg:block"
        animate={isMobile ? {} : { rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-[#c778dd]/40 rounded-full hidden lg:block"
        animate={isMobile ? {} : { rotate: -360, scale: [1, 1.15, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div className="container mx-auto px-4 py-8 md:py-20 relative z-10 flex items-center min-h-screen" variants={container} initial="hidden" animate="visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto w-full">
          
          {/* Left Column - Text Content */}
          <motion.div className="space-y-6 md:space-y-8 order-last md:order-first">
            
            {/* Status Badge */}
            <motion.div variants={item}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-sm"
                animate={{ 
                  borderColor: ['rgba(16, 185, 129, 0.4)', 'rgba(16, 185, 129, 0.8)', 'rgba(16, 185, 129, 0.4)'],
                  boxShadow: ['0 0 15px rgba(16, 185, 129, 0.2)', '0 0 30px rgba(16, 185, 129, 0.5)', '0 0 15px rgba(16, 185, 129, 0.2)']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-emerald-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.4, 1],
                    boxShadow: [
                      '0 0 0px rgba(52, 211, 153, 0)',
                      '0 0 16px rgba(52, 211, 153, 0.8)',
                      '0 0 0px rgba(52, 211, 153, 0)'
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <span className="text-sm font-semibold text-emerald-400">Available for work</span>
              </motion.div>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={item}>
              <p className="text-sm md:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5b9eff] to-[#c778dd] uppercase tracking-widest">
                Creative Developer
              </p>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={item}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <TextReveal 
                  text="Full Stack" 
                  className="block text-white"
                  delay={0}
                />
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: 'linear-gradient(90deg, #5b9eff 0%, #c778dd 50%, #9e5bb8 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <TextReveal 
                    text="Developer" 
                    className="block"
                    delay={0.15}
                  />
                </motion.div>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={item}>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                I'm <span className="font-semibold text-white">a passionate Full Stack Developer</span> specializing in the MERN stack. I create <span className="text-[#c778dd] font-semibold">scalable and high-performance</span> web applications focused on clean architecture, responsive design, and smooth user experiences.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-3 gap-4 md:gap-6 pt-4">
              {[
                { icon: Rocket, label: 'Years Experience', value: '3+' },
                { icon: Code2, label: 'Projects Completed', value: '20+' },
                { icon: Trophy, label: 'Happy Clients', value: '10+' },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    className="group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ scale: isMobile ? 1 : 1.25, rotate: isMobile ? 0 : 15 }}
                      animate={isMobile ? {} : { rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                      className="text-[#c778dd] mb-2 inline-block"
                    >
                      <Icon size={isMobile ? 24 : 28} />
                    </motion.div>
                    <motion.div 
                      className="text-xl md:text-3xl font-bold text-white"
                      animate={isMobile ? {} : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 }}
                    >
                      <CountUpNumber target={stat.value} />
                    </motion.div>
                    <div className="text-xs md:text-sm text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                className="group relative px-6 md:px-8 py-3 md:py-4 font-bold rounded-full overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-[#5b9eff] to-[#c778dd] text-white shadow-lg"
                whileHover={{ 
                  scale: 1.08, 
                  boxShadow: '0 20px 60px rgba(199, 120, 221, 0.8), 0 0 40px rgba(91, 158, 255, 0.6)' 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#5b9eff]/40 to-[#c778dd]/40 blur-xl opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <motion.div
                    animate={{ x: [0, 6, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                className="group relative px-6 md:px-8 py-3 md:py-4 font-bold rounded-full border-2 border-[#c778dd]/50 text-white overflow-hidden flex items-center justify-center gap-2"
                whileHover={{ 
                  scale: 1.08, 
                  backgroundColor: 'rgba(199, 120, 221, 0.15)', 
                  borderColor: '#c778dd',
                  boxShadow: '0 15px 50px rgba(199, 120, 221, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-full"
                  animate={{ borderColor: ['rgba(199, 120, 221, 0)', 'rgba(199, 120, 221, 0.5)', 'rgba(199, 120, 221, 0)'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <motion.svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    animate={{ y: [0, 4, 0], x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </motion.svg>
                  Resume
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex gap-4 pt-4 flex-wrap justify-center lg:justify-start">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-mohsin-rafiq-94060333a/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/mohsinRafiq-dev', label: 'GitHub' },
                { icon: Twitter, href: 'https://twitter.com/_asadmughal', label: 'Twitter' },
                { icon: Instagram, href: 'https://www.instagram.com/_asadmughal/', label: 'Instagram' },
                { icon: Mail, href: 'mailto:mohsinrafiq931@gmail.com', label: 'Email' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-[#c778dd]/30 flex items-center justify-center text-[#c778dd] bg-gradient-to-br from-[#c778dd]/10 to-[#5b9eff]/5 backdrop-blur-sm hover:border-[#c778dd] transition-all relative overflow-hidden"
                    whileHover={{ scale: 1.3, y: -10, boxShadow: '0 15px 35px rgba(199, 120, 221, 0.6)' }}
                    whileTap={{ scale: 0.8 }}
                    title={social.label}
                    animate={{ 
                      y: [0, -6, 0],
                      x: [0, 2, -2, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.15
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 2 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Icon size={20} className="relative z-10" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            className="relative w-full h-96 sm:h-80 md:h-96 lg:h-full flex items-center justify-center order-first md:order-last"
            style={{ y: isMobile ? 0 : profileY }}
            transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 100 }}
          >
            {/* Dual glow backgrounds */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: isMobile ? [1, 1.15, 1] : [1, 1.3, 0.9, 1.2, 1],
                opacity: isMobile ? [0.5, 0.7, 0.5] : [0.6, 0.9, 0.2, 0.8, 0.6],
                rotate: isMobile ? [0, 180, 360] : [0, 45, 90, 135, 180]
              }}
              transition={{ duration: isMobile ? 15 : 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c778dd]/50 via-transparent to-[#5b9eff]/50 blur-3xl" />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                scale: isMobile ? [1.1, 1.25, 1.1] : [1.2, 1.4, 0.95, 1.25, 1.2],
                opacity: isMobile ? [0.2, 0.4, 0.2] : [0.25, 0.5, 0.1, 0.4, 0.25],
                rotate: isMobile ? [-180, 0, 180] : [-45, 0, 45, 90, -45]
              }}
              transition={{ duration: isMobile ? 18 : 10, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#5b9eff]/40 to-[#c778dd]/40 blur-3xl" />
            </motion.div>

            {/* Animated Particles around profile */}
            {[0, 1, 2, 3, 4].map((idx) => (
              <motion.div
                key={`particle-${idx}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#c778dd] to-[#5b9eff] z-20"
                animate={{
                  x: [
                    Math.cos((idx / 5) * Math.PI * 2) * 200,
                    Math.cos((idx / 5) * Math.PI * 2 + 0.5) * 220,
                    Math.cos((idx / 5) * Math.PI * 2) * 200,
                  ],
                  y: [
                    Math.sin((idx / 5) * Math.PI * 2) * 200,
                    Math.sin((idx / 5) * Math.PI * 2 + 0.5) * 220,
                    Math.sin((idx / 5) * Math.PI * 2) * 200,
                  ],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + idx * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: idx * 0.2,
                }}
              />
            ))}

            {/* Floating coding icons around the profile */}
            {[
              { icon: Code2, top: '15%', right: '-8px', delay: 0 },
              { icon: Database, bottom: '20%', right: '-8px', delay: 1 },
              { icon: Zap, bottom: '15%', left: '-8px', delay: 2 },
              { icon: GitBranch, top: '20%', left: '-8px', delay: 1.5 },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="absolute w-10 h-10 rounded-lg bg-gradient-to-br from-[#c778dd]/20 to-[#5b9eff]/20 border border-[#c778dd]/40 flex items-center justify-center text-[#c778dd] backdrop-blur-sm md:flex z-20"
                  style={{
                    top: item.top,
                    right: item.right,
                    bottom: item.bottom,
                    left: item.left,
                  }}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: item.delay,
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon size={18} className="relative z-10" />
                </motion.div>
              );
            })}

            {/* Profile Image Circle */}
            <motion.div
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80 z-10 rounded-full overflow-hidden shadow-2xl shadow-[#c778dd]/30"
              whileHover={isMobile ? {} : { scale: 1.12 }}
              animate={{ 
                boxShadow: isMobile ? ['0 0 15px rgba(199, 120, 221, 0.2)', '0 0 25px rgba(199, 120, 221, 0.4)'] : ['0 0 20px rgba(199, 120, 221, 0.3)', '0 0 40px rgba(199, 120, 221, 0.6)']
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                scale: { type: 'spring', stiffness: 200, damping: 20 },
              }}
            >
              {/* Simple Rotating Gradient Border */}
              <motion.div
                className="absolute inset-0 border-3 rounded-full pointer-events-none hidden md:block"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  rotate: { duration: isMobile ? 50 : 35, repeat: Infinity, ease: 'linear' },
                }}
                style={{
                  borderImage: 'linear-gradient(135deg, #c778dd, #5b9eff, #c778dd) 1',
                  zIndex: 5,
                }}
              />

              {/* Profile image - clean and clear */}
              <img 
                src={profileImage} 
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-4 sm:bottom-5 md:bottom-24 left-1/2 -translate-x-1/2 -ml-16"
          animate={{ y: isMobile ? [0, 15, 0] : [0, 20, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div 
            className="text-center flex flex-col items-center gap-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="text-xs font-semibold tracking-widest uppercase text-[#c778dd]">Scroll to explore</div>
            <motion.div
              animate={isMobile ? { y: [0, 8, 0] } : { 
                y: [0, 10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: isMobile ? 2 : 2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <motion.div
                className="absolute -inset-3 bg-gradient-to-br from-[#c778dd]/20 to-[#5b9eff]/20 rounded-full blur-lg"
                animate={isMobile ? { scale: [1, 1.15, 1] } : { 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Mouse className="w-6 h-6 text-[#c778dd] relative z-10" strokeWidth={2} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
