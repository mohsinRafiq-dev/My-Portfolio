import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';
import { SectionBackground } from './SectionBackground';
import { useState } from 'react';

const allProjects = [
  {
    id: 1,
    category: 'web',
    featured: true,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment processing',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    views: '58.9K',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    category: 'fullstack',
    featured: true,
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI-powered suggestions and advanced search capabilities',
    tech: ['React', 'Node.js', 'Socket.io', 'Express'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-[#c778dd] to-white',
    views: '42.3K',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 3,
    category: 'fullstack',
    featured: true,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with real-time updates',
    tech: ['React', 'D3.js', 'PostgreSQL', 'GraphQL'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-green-500 to-emerald-500',
    views: '35.6K',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    category: 'mobile',
    featured: false,
    title: 'Mobile App Ecosystem',
    description: 'Cross-platform mobile application with offline support and cloud synchronization',
    tech: ['React Native', 'Firebase', 'Redux'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-orange-500 to-red-500',
    views: '28.9K',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    category: 'web',
    featured: false,
    title: 'Music Streaming App',
    description: 'Modern music streaming platform with recommendations and playlist management',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-pink-500 to-rose-500',
    views: '31.2K',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 6,
    category: 'fullstack',
    featured: false,
    title: 'Project Management Tool',
    description: 'Collaborative project management platform with real-time updates and team coordination',
    tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    views: '44.7K',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 7,
    category: 'web',
    featured: false,
    title: 'Blog Platform',
    description: 'Feature-rich blogging platform with markdown editor and comment system',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-[#c778dd] to-white',
    views: '21.5K',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 8,
    category: 'mobile',
    featured: false,
    title: 'Fitness Tracker App',
    description: 'Track workouts, calories, and health metrics with beautiful visualizations',
    tech: ['React Native', 'Firebase', 'Expo'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    views: '19.8K',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 9,
    category: 'web',
    featured: false,
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio builder for creative professionals',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-red-500 to-pink-500',
    views: '27.3K',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 10,
    category: 'fullstack',
    featured: false,
    title: 'Social Network',
    description: 'Decentralized social network with messaging, notifications, and feed system',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    link: '#',
    github: '#',
    image: 'bg-gradient-to-br from-[#c778dd] to-[#9e5bb8]',
    views: '52.1K',
    color: 'from-violet-500 to-purple-500'
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'fullstack', label: 'Fullstack' },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all' ? allProjects : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      <SectionBackground variant="projects" />

      {/* Enhanced animated background orbs */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-25"
        animate={{ 
          y: [0, 60, 0],
          x: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
        }}
      />

      <motion.div
        className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl opacity-20"
        animate={{ 
          y: [0, -50, 0],
          x: [0, -30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{
          background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 text-center"
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
            💼 My Work
          </motion.span>
          <AnimatedTitle>Featured Projects</AnimatedTitle>
          <motion.p 
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of projects showcasing my technical expertise and creative problem-solving
          </motion.p>
        </motion.div>

        {/* Filter Buttons with enhanced styling */}
        <motion.div
          className="flex justify-center gap-3 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
            {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all relative overflow-hidden group ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-[#5b9eff] to-[#c778dd] text-white shadow-lg'
                  : 'border border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.92 }}
              animate={activeFilter === cat.id ? { 
                boxShadow: [
                  '0 0 15px rgba(91, 158, 255, 0.4)',
                  '0 0 30px rgba(199, 120, 221, 0.6)',
                  '0 0 15px rgba(91, 158, 255, 0.4)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Bar Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Top Animated Bar */}
              <motion.div
                className={`h-1 rounded-full bg-gradient-to-r ${project.color} mb-5 overflow-hidden`}
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ delay: idx * 0.1 + 0.1, duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`h-full bg-gradient-to-r ${project.color}`}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.15 }}
                />
              </motion.div>

              {/* Project Card */}
              <motion.div
                className="relative rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden group/card h-full flex flex-col"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'
                }}
                whileHover={{
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow: `0 0 40px ${
                    (project.color || '').includes('purple') ? 'rgba(199, 120, 221, 0.3)' : 'rgba(91, 158, 255, 0.3)'
                  }`,
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                {/* Project Image Section */}
                <motion.div
                  className={`h-48 ${project.image} relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} z-10`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      Featured
                    </motion.div>
                  )}
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover/card:opacity-30 bg-gradient-to-r from-transparent via-white to-transparent"
                    animate={{ x: ['100%', '-100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Header with Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}
                      animate={{
                        scale: [1, 1.1, 1],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.15,
                        ease: 'easeInOut'
                      }}
                      whileHover={{ scale: 1.25 }}
                    >
                      <Code2 size={24} className="text-white" strokeWidth={1.5} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        className="text-lg font-bold text-white mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.1 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-xs text-gray-500 flex items-center gap-1"
                        initial={{ opacity: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.15 }}
                        viewport={{ once: true }}
                      >
                        👁️ {project.views}
                      </motion.p>
                    </div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow line-clamp-2"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.15 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* Bottom Progress Bar */}
                  <motion.div
                    className="h-0.5 bg-gray-800 rounded-full overflow-hidden mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.25 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${project.color}`}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: idx * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: [0.6, 1, 0.6]
                      }}
                    />
                  </motion.div>

                  {/* Footer Metrics */}
                  <div className="flex items-center justify-between mb-4 text-xs font-semibold text-gray-600 uppercase tracking-widest">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      Project {idx + 1}
                    </motion.span>
                    <motion.div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}
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

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.link}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors font-medium flex-1 py-2 px-3 rounded-lg hover:bg-white/5"
                      whileHover={{ scale: 1.08 }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors font-medium flex-1 py-2 px-3 rounded-lg hover:bg-white/5"
                      whileHover={{ scale: 1.08 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com"
            className="inline-block px-8 py-4 border-2 border-[#5b9eff] text-[#5b9eff] font-semibold rounded-xl hover:bg-[#5b9eff]/10 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(91, 158, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
