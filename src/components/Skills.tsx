import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
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


const SkillCard = ({ skill, color }: { skill: any; color: string }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:-translate-y-2"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
      }}
    >
      {/* Top Bar */}
      <div
        className={`h-1 bg-gradient-to-r ${color} rounded-full absolute top-0 left-0 w-full`}
      />

      <div className="p-6">
        {/* Header with name and percentage */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <h4
              className="text-white font-bold text-sm leading-tight"
            >
              {skill.name}
            </h4>
            <p
              className="text-gray-500 text-xs mt-1.5"
            >
              {skill.exp}
            </p>
          </div>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white font-bold text-sm flex-shrink-0 ml-3 shadow-lg`}
          >
            {skill.level}%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2.5 bg-white/10 rounded-full overflow-hidden">
          {/* Background fill */}
          <motion.div
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
            initial={{ width: '0%' }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          
          {/* Loading shimmer bar */}
          <motion.div
            className={`absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-50`}
            initial={{ left: '-80px' }}
            whileInView={{ left: `${skill.level}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ filter: 'blur(1px)' }}
          />
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
      {!isMobile && <SectionBackground variant="skills" />}

      {/* Background orbs - hidden on mobile */}
      {!isMobile && (
        <>
          <div
            className="absolute top-32 left-0 w-96 h-96 rounded-full blur-3xl opacity-25"
            style={{
              background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
            }}
          />

          <div
            className="absolute bottom-32 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className="max-w-3xl mx-auto mb-20 text-center relative"
        >
          {/* Accent line */}
          <div
            className="h-1 w-16 bg-gradient-to-r from-[#5b9eff] to-[#c778dd] rounded-full mx-auto mb-8"
          />

          <span
            className="inline-block text-[#5b9eff] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            🔧 My Expertise
          </span>

          <AnimatedTitle>Technical Skills</AnimatedTitle>

          <p
            className="text-gray-400 text-lg mt-6"
          >
            Proficiency in modern web technologies and tools
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex justify-center gap-3 mb-16 flex-wrap"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-widest transition-all overflow-hidden group border-2 hover:scale-105 ${
                activeTab === category.id
                  ? 'text-white border-cyan-500 bg-cyan-500/10'
                  : 'text-gray-400 border-white/20 hover:text-gray-200 hover:border-white/40'
              }`}
            >
              <span className="relative z-10">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {activeCategory && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 max-w-5xl mx-auto"
            key={activeTab}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {activeCategory.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  skill={skill}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom decoration line */}
        <div
          className="mt-20 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
        />
      </div>
    </section>
  );
};
