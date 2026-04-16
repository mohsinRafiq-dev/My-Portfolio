import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';
import { SectionBackground } from './SectionBackground';
import { useState, useEffect } from 'react';

const allProjects = [
  {
    id: 1,
    category: 'web',
    featured: true,
    title: 'Justees',
    description: 'Full-featured e-commerce platform with modern design and seamless shopping experience',
    tech: ['React', 'Vite', 'TailwindCSS', 'Firebase'],
    link: 'https://www.justees.store/',
    github: 'https://github.com/mohsinRafiq-dev/Justees-Project',
    image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    imageUrl: '/Project%20Pics/Justees%20project.png',
    views: '58.9K',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    category: 'fullstack',
    featured: true,
    title: 'Ashraf Furnitures',
    description: 'Premium furniture e-commerce platform with Firebase backend, real-time inventory, and seamless shopping experience',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Firebase', 'Framer Motion'],
    link: 'https://www.ashraffurnitures.com/',
    github: 'https://github.com/mohsinRafiq-dev/Ashraf-Furnitures',
    image: 'bg-gradient-to-br from-amber-600 to-orange-600',
    imageUrl: '/Project%20Pics/Ashraf%20Furnitures.png',
    views: '85.2K',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 3,
    category: 'fullstack',
    featured: true,
    title: 'LearnCode AI',
    description: 'AI-Powered Programming Learning Platform with interactive code execution, real-time tutorials, and AI-assisted learning (FYP)',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'React Router', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Docker'],
    link: '#',
    github: 'https://github.com/mohsinRafiq-dev/learncodeai-frontend',
    image: 'bg-gradient-to-br from-cyan-500 to-purple-500',
    imageUrl: '/Project%20Pics/LearnCodeAi.png',
    views: '42.1K',
    color: 'from-cyan-500 to-purple-500'
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects =
    activeFilter === 'all' ? allProjects : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      {!isMobile && <SectionBackground variant="projects" />}

      {/* Enhanced animated background orbs - hidden on mobile */}
      {!isMobile && (
        <>
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
              y: [0, -40, 0],
              x: [0, -25, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            style={{
              background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Head */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Project Card */}
              <motion.div
                className="relative rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden group/card h-full flex flex-col bg-gradient-to-br from-white/5 to-white/2 shadow-lg"
                whileHover={{
                  borderColor: 'rgba(199, 120, 221, 0.6)',
                  boxShadow: '0 25px 50px rgba(199, 120, 221, 0.3), 0 0 40px rgba(199, 120, 221, 0.2)',
                  y: -8,
                  transition: { type: 'spring', stiffness: 300, damping: 20 }
                }}
              >
                {/* Large Project Image Section */}
                <motion.div 
                  className={`h-72 ${!project.imageUrl ? project.image : 'bg-gradient-to-br from-gray-900 to-black'} relative overflow-hidden flex items-center justify-center group`}
                  whileHover="hover"
                  initial="initial"
                  variants={{
                    initial: {},
                    hover: {}
                  }}
                >
                  {/* Image with proper scaling */}
                  {project.imageUrl && (
                    <motion.img 
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      variants={{
                        initial: { scale: 1, filter: 'blur(0px)' },
                        hover: { scale: 1.15, filter: 'blur(6px)' }
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  )}
                  
                  {/* Overlay with gradient and icons on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-5" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} z-20 shadow-lg`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      Featured
                    </motion.div>
                  )}
                  
                  
                  {/* Hover Icons Overlay - NOT Blurred */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-6 z-30"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* GitHub Link Icon */}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/50 flex items-center justify-center text-white shadow-xl"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.3)', borderColor: 'rgba(199,120,221,1)' }}
                      whileTap={{ scale: 0.95 }}
                      title="View Code"
                    >
                      <Github size={20} />
                    </motion.a>

                    {/* Live Link Icon */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/50 flex items-center justify-center text-white shadow-xl"
                      whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.3)', borderColor: 'rgba(199,120,221,1)' }}
                      whileTap={{ scale: 0.95 }}
                      title="View Live"
                    >
                      <ArrowRight size={20} />
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.15 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#5b9eff] hover:text-[#c778dd] font-semibold text-sm transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <ArrowRight size={16} />
                  </motion.a>

                  {/* GitHub Link */}
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold text-sm transition-colors mt-3"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  )}
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
