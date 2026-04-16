import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, Target, Sparkles } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';
import { useState, useEffect } from 'react';

const timeline = [
  {
    year: 2020,
    title: 'FSC Pre Engineering',
    description: 'Started with English, Mathematics, Physics, Chemistry foundation',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: 2022,
    title: 'Joined SZABIST',
    description: 'Began Bachelor\'s in Computer Science at SZABIST, Islamabad',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: 2023,
    title: 'Built 20+ Projects',
    description: 'Mastered MERN stack and developed multiple full-stack applications',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: 2026,
    title: 'Current',
    description: 'Building scalable solutions, growing expertise, and helping teams succeed',
    icon: Target,
    color: 'from-green-500 to-emerald-500'
  },
];

export const Journey = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="journey" className="py-32 relative overflow-hidden bg-transparent">
      {/* Multiple animated background orbs - disabled on mobile */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
        animate={isMobile ? {} : { 
          y: [0, 50, 0],
          x: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
        }}
      />

      <motion.div
        className="absolute bottom-32 left-10 w-72 h-72 rounded-full blur-3xl opacity-25"
        animate={isMobile ? {} : { 
          y: [0, -40, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[#5b9eff] font-semibold text-sm uppercase tracking-widest mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            📍 My Journey
          </motion.span>
          <AnimatedTitle>Professional Timeline</AnimatedTitle>
          <motion.p 
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            A journey of growth, learning, and continuous achievements in tech
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Vertical connecting line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5b9eff] via-[#c778dd] to-[#5b9eff] hidden md:block"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />

          {/* Animated particles along the line */}
          {[...Array(3)].map((_, idx) => (
            <motion.div
              key={`particle-${idx}`}
              className="absolute left-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-[#5b9eff] to-[#c778dd] hidden md:block"
              style={{ x: -4, transformOrigin: 'center' }}
              animate={{
                y: ['0%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: idx * 1.2,
                ease: 'easeInOut'
              }}
            />
          ))}

          <div className="space-y-8 md:space-y-16">
            {timeline.map((item, idx) => {
              const IconComponent = item.icon;
              const isLeft = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  className={`flex gap-6 md:gap-0 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Content Card */}
                  <motion.div
                    className="flex-1 md:flex-none md:w-5/12 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Animated background blur */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-300`}
                    />

                    {/* Card */}
                    <motion.div
                      className="relative p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))'
                      }}
                      whileHover={{
                        borderColor: 'rgba(255,255,255,0.3)',
                        boxShadow: `0 0 50px ${
                          idx === 0 ? 'rgba(59, 130, 246, 0.4)' :
                          idx === 1 ? 'rgba(168, 85, 247, 0.4)' :
                          idx === 2 ? 'rgba(234, 179, 8, 0.4)' :
                          'rgba(34, 197, 94, 0.4)'
                        }, 0 0 100px ${
                          idx === 0 ? 'rgba(59, 130, 246, 0.15)' :
                          idx === 1 ? 'rgba(168, 85, 247, 0.15)' :
                          idx === 2 ? 'rgba(234, 179, 8, 0.15)' :
                          'rgba(34, 197, 94, 0.15)'
                        }`,
                        transition: { type: 'spring', stiffness: 200, damping: 15 }
                      }}
                    >
                      {/* Top animated accent line */}
                      <motion.div
                        className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: idx * 0.15 + 0.2, duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5">
                        {/* Icon with animation */}
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 relative overflow-hidden`}
                          animate={{
                            scale: [1, 1.15, 1],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: idx * 0.2
                          }}
                          whileHover={{ 
                            scale: 1.3,
                            rotate: 10,
                            transition: { duration: 0.3 }
                          }}
                        >
                          {/* Icon glow effect */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl opacity-50`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 0.2, 0.5]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                          />
                          <IconComponent size={32} className="text-white relative z-10" strokeWidth={1.5} />
                        </motion.div>

                        {/* Year and Title */}
                        <div className="flex-1 min-w-0">
                          <motion.div
                            className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 + 0.1 }}
                            viewport={{ once: true }}
                          >
                            {item.year}
                          </motion.div>
                          <motion.h3
                            className="text-base md:text-lg font-bold text-white mt-1"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 + 0.15 }}
                            viewport={{ once: true }}
                          >
                            {item.title}
                          </motion.h3>
                        </div>
                      </div>

                      {/* Description with fade-in */}
                      <motion.p
                        className="text-gray-400 text-sm md:text-base leading-relaxed mb-6"
                        initial={{ opacity: 0.3 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Bottom bar with progress animation */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.25 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${item.color}`}
                          initial={{ width: '0%', opacity: 0.3 }}
                          whileInView={{ width: '100%', opacity: 1 }}
                          viewport={{ once: true }}
                          animate={{
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{
                            width: { delay: idx * 0.15 + 0.3, duration: 1.2, ease: 'easeOut' },
                            opacity: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Timeline dot */}
                  <motion.div
                    className="relative z-20 flex justify-center md:flex-col items-center gap-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.15 + 0.05, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    {/* Main dot with gradient */}
                    <motion.div
                      className={`w-6 h-6 md:w-5 md:h-5 rounded-full bg-gradient-to-br ${item.color} ring-4 ring-[#282c33] relative`}
                      animate={{
                        scale: [1, 1.4, 1],
                        boxShadow: [
                          `0 0 0px rgba(200, 100, 200, 0)`,
                          `0 0 30px ${
                            idx === 0 ? 'rgba(59, 130, 246, 0.8)' :
                            idx === 1 ? 'rgba(168, 85, 247, 0.8)' :
                            idx === 2 ? 'rgba(234, 179, 8, 0.8)' :
                            'rgba(34, 197, 94, 0.8)'
                          }`,
                          `0 0 0px rgba(200, 100, 200, 0)`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: idx * 0.2
                      }}
                      whileHover={{
                        scale: 2,
                        boxShadow: `0 0 40px ${
                          idx === 0 ? 'rgba(59, 130, 246, 1)' :
                          idx === 1 ? 'rgba(168, 85, 247, 1)' :
                          idx === 2 ? 'rgba(234, 179, 8, 1)' :
                          'rgba(34, 197, 94, 1)'
                        }`,
                        transition: { duration: 0.2 }
                      }}
                    />

                    {/* Connecting line to card (hidden on mobile) */}
                    <motion.div
                      className="hidden md:block absolute w-1 h-12 bg-gradient-to-b from-white/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      style={{
                        [isLeft ? 'right' : 'left']: '100%',
                        top: '50%',
                        marginTop: isLeft ? 0 : 0
                      }}
                    />
                  </motion.div>

                  {/* Empty space on right/left */}
                  <div className="hidden md:flex flex-1" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#c778dd]/30 bg-[#c778dd]/5 backdrop-blur-sm"
            animate={{
              boxShadow: [
                'inset 0 0 10px rgba(199, 120, 221, 0.1)',
                'inset 0 0 30px rgba(199, 120, 221, 0.3)',
                'inset 0 0 10px rgba(199, 120, 221, 0.1)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles size={16} className="text-[#c778dd]" />
            <span className="text-sm text-gray-300">And the journey continues...</span>
            <Sparkles size={16} className="text-[#c778dd]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
