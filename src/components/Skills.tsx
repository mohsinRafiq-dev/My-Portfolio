import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedTitle } from './AnimatedElements';
import { SectionBackground } from './SectionBackground';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js', color: 'from-purple-500 to-pink-500', level: 95, exp: '3 years experience' },
      { name: 'Next.js', color: 'from-blue-500 to-cyan-500', level: 90, exp: '2 years experience' },
      { name: 'TypeScript', color: 'from-blue-600 to-indigo-600', level: 88, exp: '3 years experience' },
      { name: 'TailwindCSS', color: 'from-pink-500 to-purple-500', level: 92, exp: '3 years experience' },
      { name: 'JavaScript', color: 'from-yellow-500 to-orange-500', level: 94, exp: '3 years experience' },
      { name: 'HTML/CSS', color: 'from-green-500 to-emerald-500', level: 96, exp: '3 years experience' },
      { name: 'React Native', color: 'from-red-500 to-pink-500', level: 85, exp: '1 year experience' },
      { name: 'Bootstrap', color: 'from-indigo-500 to-purple-500', level: 87, exp: '2 years experience' },
      { name: 'Redux', color: 'from-purple-600 to-pink-600', level: 87, exp: '2 years experience' },
      { name: 'Framer Motion', color: 'from-cyan-500 to-blue-500', level: 91, exp: '2.5 years experience' },
      { name: 'Sass/SCSS', color: 'from-pink-600 to-red-600', level: 89, exp: '2.5 years experience' },
      { name: 'Webpack', color: 'from-cyan-600 to-blue-600', level: 82, exp: '2 years experience' },
      { name: 'Jest/Testing', color: 'from-red-600 to-pink-600', level: 80, exp: '1.5 years experience' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', color: 'from-green-500 to-emerald-500', level: 90, exp: '3 years experience' },
      { name: 'Express.js', color: 'from-red-500 to-pink-500', level: 89, exp: '3 years experience' },
      { name: 'MongoDB', color: 'from-green-600 to-emerald-600', level: 88, exp: '2.5 years experience' },
      { name: 'PostgreSQL', color: 'from-blue-600 to-indigo-600', level: 85, exp: '2 years experience' },
      { name: 'Python', color: 'from-blue-500 to-cyan-500', level: 82, exp: '1.5 years experience' },
      { name: 'REST API', color: 'from-cyan-500 to-blue-500', level: 91, exp: '3 years experience' },
      { name: 'GraphQL', color: 'from-pink-500 to-purple-500', level: 82, exp: '1.5 years experience' },
      { name: 'Firebase', color: 'from-orange-500 to-yellow-500', level: 88, exp: '2 years experience' },
      { name: 'Django', color: 'from-green-700 to-emerald-700', level: 80, exp: '1 year experience' },
      { name: 'MySQL', color: 'from-blue-600 to-indigo-600', level: 83, exp: '2 years experience' },
      { name: 'Redis', color: 'from-red-600 to-pink-600', level: 79, exp: '1.5 years experience' },
      { name: 'PHP', color: 'from-purple-600 to-indigo-600', level: 78, exp: '1 year experience' },
      { name: 'Laravel', color: 'from-red-500 to-pink-500', level: 76, exp: '1 year experience' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', color: 'from-blue-500 to-cyan-500', level: 94, exp: '3 years experience' },
      { name: 'Docker', color: 'from-blue-600 to-indigo-600', level: 83, exp: '1.5 years experience' },
      { name: 'AWS', color: 'from-orange-500 to-red-500', level: 81, exp: '1 year experience' },
      { name: 'VS Code', color: 'from-blue-500 to-cyan-500', level: 96, exp: '3 years experience' },
      { name: 'Figma', color: 'from-pink-500 to-purple-500', level: 89, exp: '2 years experience' },
      { name: 'Postman', color: 'from-orange-600 to-red-600', level: 92, exp: '2 years experience' },
      { name: 'Linux', color: 'from-yellow-500 to-orange-500', level: 85, exp: '2 years experience' },
      { name: 'CI/CD', color: 'from-blue-600 to-indigo-600', level: 80, exp: '1 year experience' },
      { name: 'Jira', color: 'from-blue-700 to-indigo-700', level: 84, exp: '2 years experience' },
    ],
  },
];


const SkillCard = ({ skill, delay, color }: { skill: any; delay: number; color: string }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        boxShadow: `0 0 40px ${
          color.includes('purple') ? 'rgba(199, 120, 221, 0.25)' :
          color.includes('blue') ? 'rgba(91, 158, 255, 0.25)' :
          color.includes('green') ? 'rgba(34, 197, 94, 0.25)' :
          'rgba(249, 115, 22, 0.25)'
        }`,
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
      }}
    >
      {/* Animated Top Bar */}
      <motion.div
        className={`h-1 bg-gradient-to-r ${color} rounded-full absolute top-0 left-0 overflow-hidden`}
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        transition={{ delay: delay + 0.1, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`h-full bg-gradient-to-r ${color}`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: delay * 0.15 }}
        />
      </motion.div>

      <div className="p-6">
        {/* Header with name and percentage */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <motion.h4
              className="text-white font-bold text-sm leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.15 }}
              viewport={{ once: true }}
            >
              {skill.name}
            </motion.h4>
            <motion.p
              className="text-gray-500 text-xs mt-1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.2 }}
              viewport={{ once: true }}
            >
              {skill.exp}
            </motion.p>
          </div>
          <motion.div
            className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white font-bold text-sm flex-shrink-0 ml-3 shadow-lg`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.15, type: 'spring', stiffness: 200 }}
            viewport={{ once: true }}
          >
            {skill.level}%
          </motion.div>
        </div>

        {/* Animated Progress Bar with shimmer effect */}
        <div className="relative h-2.5 bg-white/10 rounded-full overflow-hidden">
          {/* Background fill */}
          <motion.div
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
            initial={{ width: '0%' }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ delay: delay + 0.2, duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          {/* Animated shimmer/loading effect */}
          <motion.div
            className={`absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-40`}
            animate={{
              x: ['-100%', '300%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      <SectionBackground variant="skills" />

      <div className="container mx-auto px-4">
        {/* Section Header with Animated Line */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated accent line */}
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          <motion.span
            className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            🔧 My Expertise
          </motion.span>

          <AnimatedTitle>Technical Skills</AnimatedTitle>

          <motion.p
            className="text-gray-400 text-lg mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Proficiency in modern web technologies and tools
          </motion.p>
        </motion.div>

        {/* Tab Navigation with Enhanced Styling */}
        <motion.div
          className="flex justify-center gap-3 mb-16 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-widest transition-all overflow-hidden group border-2 ${
                activeTab === category.id
                  ? 'text-white border-cyan-500'
                  : 'text-gray-400 border-white/20 hover:text-gray-200 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background gradient for active tab */}
              {activeTab === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full opacity-20"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}

              <span className="relative z-10">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        {activeCategory && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            key={activeTab}
          >
            {activeCategory.skills.map((skill, idx) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                delay={idx * 0.08}
                color={skill.color}
              />
            ))}
          </motion.div>
        )}

        {/* Bottom decoration line */}
        <motion.div
          className="mt-20 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};
