import { motion } from 'framer-motion';
import { Zap, Palette, Code2, Lightbulb } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';
import { AnimatedCounter } from './AnimatedCounter';
import { SectionBackground } from './SectionBackground';
import { useState, useEffect } from 'react';

export const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const values = [
    { icon: Zap, title: 'Performance', description: 'Optimizing for lightning-fast speed', color: 'from-yellow-500 to-orange-500' },
    { icon: Palette, title: 'Design', description: 'Creating beautiful user interfaces', color: 'from-pink-500 to-purple-500' },
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable code', color: 'from-blue-500 to-cyan-500' },
    { icon: Lightbulb, title: 'Innovation', description: 'Always exploring new tech', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-transparent">
      {/* Impressive background */}
      {!isMobile && <SectionBackground variant="about" />}

      {/* Background orbs - hidden on mobile */}
      {!isMobile && (
        <>
          <div
            className="absolute top-40 right-10 w-96 h-96 rounded-full blur-3xl opacity-25"
            style={{
              background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
            }}
          />

          <div
            className="absolute bottom-40 left-10 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Head */}
        <div
          className="text-center mb-20"
        >
          <span 
            className="text-[#5b9eff] font-semibold text-sm uppercase tracking-widest mb-4 block"
          >
            👤 About Me
          </span>
          <AnimatedTitle>Who I Am</AnimatedTitle>
          <p 
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
          >
            A passionate developer crafting beautiful, performant digital experiences with modern technologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* My Story */}
          <div
            className="grid md:grid-cols-2 gap-12 mb-24 items-center"
          >
            {/* Story Text */}
            <div
              className="relative"
            >
              {/* Accent line */}
              <div
                className="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-[#5b9eff] to-transparent rounded-full"
              />
              
              <h3 className="text-4xl font-bold mb-8 relative">
                <span>
                  👋 My Story
                </span>
              </h3>
              
              <div className="space-y-6">
                {[
                  "Hey! I'm Mohsin Rafiq, a Full Stack Developer specializing in the MERN stack. I'm currently pursuing a Bachelor's degree in Computer Science at SZABIST, Islamabad, while building scalable and high-performance web applications.",
                  "With over 3+ years of experience, I've developed 20+ projects ranging from responsive e-commerce platforms to complex full-stack applications. I'm passionate about clean architecture, responsive design, and creating smooth user experiences that delight end-users.",
                  "Beyond coding, I'm committed to continuous learning, staying updated with modern technologies, and contributing to the developer community. Let's collaborate and build something amazing together!"
                ].map((text, idx) => (
                  <p
                    key={idx}
                    className="text-gray-400 text-lg leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Stats Grid with Premium Styling */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { number: 3, label: 'Years Experience', suffix: '+', icon: '🚀' },
                { number: 20, label: 'Projects Built', suffix: '+', icon: '💻' },
                { number: 100, label: 'Code Quality', suffix: '%', icon: '❤️' },
                { number: 10, label: 'Happy Clients', suffix: '+', icon: '😊' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Top bar */}
                  <motion.div
                    className="h-1 rounded-full bg-gradient-to-r from-[#5b9eff] to-[#c778dd] mb-4 overflow-hidden"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: idx * 0.12 + 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Stat Card */}
                  <motion.div
                    className="p-6 rounded-2xl backdrop-blur-xl border border-white/10 h-full relative overflow-hidden hover:border-white/20 hover:shadow-lg hover:scale-105 transition-all"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
                    }}
                    whileHover={{
                      borderColor: 'rgba(255,255,255,0.2)',
                      boxShadow: '0 0 30px rgba(91, 158, 255, 0.2)',
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      className="text-3xl mb-3"
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Number */}
                    <motion.div
                      className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5b9eff] to-[#c778dd] mb-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.12 + 0.15, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <AnimatedCounter from={0} to={stat.number} duration={2} suffix={stat.suffix} />
                    </motion.div>

                    {/* Label */}
                    <motion.p
                      className="text-sm text-gray-400 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.12 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.p>

                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b9eff] to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="text-[#c778dd] font-semibold text-sm uppercase tracking-widest mb-4 block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                💎 My Values
              </motion.span>
              <h3 className="text-4xl font-bold mb-6">Core Principles</h3>
              <p className="text-gray-400 text-lg">The values that drive my work and passion</p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const IconComponent = value.icon;
                const colorScheme: Record<string, { shadow: string; glow: string }> = {
                  'from-yellow-500 to-orange-500': { shadow: 'rgba(234, 179, 8, 0.3)', glow: 'rgba(234, 179, 8, 0.5)' },
                  'from-pink-500 to-purple-500': { shadow: 'rgba(236, 72, 153, 0.3)', glow: 'rgba(236, 72, 153, 0.5)' },
                  'from-blue-500 to-cyan-500': { shadow: 'rgba(59, 130, 246, 0.3)', glow: 'rgba(59, 130, 246, 0.5)' },
                  'from-green-500 to-emerald-500': { shadow: 'rgba(34, 197, 94, 0.3)', glow: 'rgba(34, 197, 94, 0.5)' },
                };
                const colors = colorScheme[value.color] || colorScheme['from-blue-500 to-cyan-500'];

                return (
                  <motion.div
                    key={idx}
                    className="relative group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Animated top bar */}
                    <motion.div
                      className={`h-1 rounded-full bg-gradient-to-r ${value.color} mb-4 overflow-hidden`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: idx * 0.15 + 0.15, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${value.color} w-full`}
                      />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      className="relative p-8 rounded-2xl backdrop-blur-xl border border-white/10 h-full overflow-hidden flex flex-col"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
                      }}
                      whileHover={{
                        borderColor: 'rgba(255,255,255,0.3)',
                        boxShadow: `0 0 40px ${colors.glow}`,
                        scale: 1.08,
                        transition: { type: 'spring', stiffness: 300, damping: 20 }
                      }}
                    >
                      {/* Icon Container */}
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 flex-shrink-0`}
                      >
                        <IconComponent size={28} className="text-white" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <motion.h4
                        className="text-xl font-bold text-white mb-3 relative group/title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.1 }}
                        viewport={{ once: true }}
                      >
                        {value.title}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${value.color} opacity-0 group-hover/title:opacity-100`}
                          initial={{ width: '0%' }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.h4>

                      {/* Description */}
                      <motion.p
                        className="text-gray-400 text-sm leading-relaxed flex-grow"
                        initial={{ opacity: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.15 }}
                        viewport={{ once: true }}
                      >
                        {value.description}
                      </motion.p>

                      {/* Bottom progress indicator */}
                      <motion.div
                        className="h-0.5 bg-gray-800 rounded-full mt-6 overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${value.color}`}
                          initial={{ width: '0%' }}
                          whileInView={{ width: '100%' }}
                          transition={{ delay: idx * 0.15 + 0.25, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </motion.div>

                      {/* Glow effect */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
