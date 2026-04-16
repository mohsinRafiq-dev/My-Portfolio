import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, Target } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';

const timeline = [
  {
    year: 2022,
    title: 'Started Journey',
    description: 'Began learning web development with passion and curiosity',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    year: 2023,
    title: 'First Project',
    description: 'Built and launched my first web application to production',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500'
  },
  {
    year: 2024,
    title: 'Gained Expertise',
    description: 'Mastered full stack development skills and best practices',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    year: 2025,
    title: 'Current',
    description: 'Building amazing products and continuously growing',
    icon: Target,
    color: 'from-green-500 to-emerald-500'
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-32 relative overflow-hidden bg-transparent">
      {/* Gradient background elements */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
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

        {/* Timeline Grid */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((item, idx) => {
              const IconComponent = item.icon;
              
              return (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {/* Top Animated Bar */}
                  <motion.div
                    className={`h-1 rounded-full bg-gradient-to-r ${item.color} mb-5 overflow-hidden`}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: idx * 0.12 + 0.1, duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.15 }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="relative p-7 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden group/card h-full flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
                    }}
                    whileHover={{
                      borderColor: 'rgba(255,255,255,0.2)',
                      boxShadow: `0 0 40px ${
                        item.color === 'from-blue-500 to-cyan-500'
                          ? 'rgba(59, 130, 246, 0.3)'
                          : item.color === 'from-purple-500 to-pink-500'
                          ? 'rgba(168, 85, 247, 0.3)'
                          : item.color === 'from-yellow-500 to-orange-500'
                          ? 'rgba(234, 179, 8, 0.3)'
                          : 'rgba(34, 197, 94, 0.3)'
                      }`,
                      scale: 1.05,
                      transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                  >
                    {/* Header with Icon and Year */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Icon Container */}
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                        animate={{
                          scale: [1, 1.12, 1],
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.2,
                          ease: 'easeInOut'
                        }}
                        whileHover={{ scale: 1.25 }}
                      >
                        <IconComponent size={28} className="text-white" strokeWidth={1.5} />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        {/* Year */}
                        <motion.div
                          className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.12 + 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item.year}
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h3
                          className="text-lg font-bold text-white mt-1"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.12 + 0.15 }}
                          viewport={{ once: true }}
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p
                      className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0.5 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.12 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Bottom Progress Bar */}
                    <motion.div
                      className="h-0.5 bg-gray-800 rounded-full overflow-hidden mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.12 + 0.25 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color}`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: idx * 0.12 + 0.3, duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        animate={{
                          opacity: [0.6, 1, 0.6]
                        }}
                      />
                    </motion.div>

                    {/* Footer Indicator */}
                    <div className="flex items-center justify-between">
                      <motion.span
                        className="text-xs font-semibold uppercase tracking-widest text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.12 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        Milestone {idx + 1}
                      </motion.span>
                      
                      <motion.div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: idx * 0.15
                        }}
                      />
                    </div>

                    {/* Top border accent glow */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
