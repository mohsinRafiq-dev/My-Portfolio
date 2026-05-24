import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatedTitle } from './AnimatedElements';
import { SectionBackground } from './SectionBackground';
import { useIsMobile } from '../hooks/useIsMobile';

type Skill = { name: string; years: number };

const skillCategories: { id: string; title: string; skills: Skill[] }[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React.js', years: 3 },
      { name: 'Next.js', years: 2 },
      { name: 'TypeScript', years: 3 },
      { name: 'TailwindCSS', years: 3 },
      { name: 'JavaScript', years: 3 },
      { name: 'HTML / CSS', years: 3 },
      { name: 'React Native', years: 1 },
      { name: 'Redux', years: 2 },
      { name: 'Framer Motion', years: 2 },
      { name: 'Sass / SCSS', years: 2 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', years: 3 },
      { name: 'Express.js', years: 3 },
      { name: 'MongoDB', years: 2 },
      { name: 'PostgreSQL', years: 2 },
      { name: 'Python', years: 1 },
      { name: 'REST API', years: 3 },
      { name: 'GraphQL', years: 1 },
      { name: 'Firebase', years: 2 },
      { name: 'MySQL', years: 2 },
      { name: 'Redis', years: 1 },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', years: 3 },
      { name: 'Docker', years: 1 },
      { name: 'AWS', years: 1 },
      { name: 'VS Code', years: 3 },
      { name: 'Figma', years: 2 },
      { name: 'Postman', years: 2 },
      { name: 'Linux', years: 2 },
      { name: 'CI / CD', years: 1 },
      { name: 'Jira', years: 2 },
    ],
  },
];

const SkillChip = ({ skill, idx }: { skill: Skill; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: Math.min(idx * 0.04, 0.4), duration: 0.4, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -4, borderColor: 'rgba(199, 120, 221, 0.6)' }}
    className="group flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
  >
    <span className="text-white font-medium text-sm tracking-tight">{skill.name}</span>
    <span className="text-[11px] uppercase tracking-widest text-gray-500 group-hover:text-[#c778dd] transition-colors">
      {skill.years}{skill.years === 1 ? ' yr' : ' yrs'}
    </span>
  </motion.div>
);

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const isMobile = useIsMobile();
  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-transparent">
      {!isMobile && <SectionBackground variant="skills" />}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block text-[#c778dd] font-semibold text-xs uppercase tracking-[0.25em] mb-4">
            My Expertise
          </span>

          <AnimatedTitle>Technical Skills</AnimatedTitle>

          <p className="text-gray-400 text-lg mt-4">
            Years building with modern web technologies
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === category.id
                  ? 'text-white bg-white/10 border border-white/25'
                  : 'text-gray-400 border border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              {category.title}
              <span className="ml-2 text-xs text-gray-500">{category.skills.length}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {activeCategory && (
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {activeCategory.skills.map((skill, idx) => (
              <SkillChip key={skill.name} skill={skill} idx={idx} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
