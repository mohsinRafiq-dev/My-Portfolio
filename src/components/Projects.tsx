import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { AnimatedTitle } from './AnimatedElements';
import { SectionBackground } from './SectionBackground';
import { useIsMobile } from '../hooks/useIsMobile';
import { useState } from 'react';

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
    imageUrl: '/projects/justees.png',
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
    imageUrl: '/projects/ashraf-furnitures.png',
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
    imageUrl: '/projects/learncode-ai.png',
    color: 'from-cyan-500 to-purple-500'
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'fullstack', label: 'Fullstack' },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const isMobile = useIsMobile();

  const filteredProjects =
    activeFilter === 'all' ? allProjects : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-transparent">
      {!isMobile && <SectionBackground variant="projects" />}

      {/* Background orbs - hidden on mobile */}
      {!isMobile && (
        <>
          <div
            className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-25"
            style={{
              background: 'linear-gradient(135deg, #c778dd, #5b9eff)'
            }}
          />

          <div
            className="absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background: 'linear-gradient(135deg, #5b9eff, #c778dd)'
            }}
          />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Head */}
        <div
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span 
            className="text-[#c778dd] font-semibold text-xs uppercase tracking-[0.25em] mb-4 block"
          >
            💼 My Work
          </span>
          <AnimatedTitle>Featured Projects</AnimatedTitle>
          <p 
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto"
          >
            A collection of projects showcasing my technical expertise and creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex justify-center gap-3 mb-16 flex-wrap"
        >
            {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all relative overflow-hidden group ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-[#5b9eff] to-[#c778dd] text-white shadow-lg'
                  : 'border border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid — first project spans 2 cols/rows on large screens */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 auto-rows-fr gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, idx) => {
            const isHero = idx === 0 && activeFilter === 'all';
            return (
            <motion.div
              key={project.id}
              className={`group relative ${isHero ? 'lg:col-span-2 lg:row-span-2 md:col-span-2' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Project Card */}
              <div
                className={`relative rounded-2xl border border-white/10 ${isMobile ? '' : 'backdrop-blur-xl'} overflow-hidden group/card h-full flex flex-col bg-gradient-to-br from-white/5 to-white/2 shadow-lg hover:border-[#c778dd]/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Project Image Section — taller for the bento hero */}
                <div
                  className={`${isHero ? 'h-80 lg:h-[26rem]' : 'h-56'} ${!project.imageUrl ? project.image : 'bg-gradient-to-br from-gray-900 to-black'} relative overflow-hidden flex items-center justify-center group`}
                >
                  {/* Image */}
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={576}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-5" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${project.color} z-20 shadow-lg`}
                    >
                      Featured
                    </div>
                  )}
                  
                  {/* Hover Icons Overlay */}
                  <div
                    className={`absolute inset-0 ${isMobile ? 'hidden' : 'flex'} items-center justify-center gap-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {/* GitHub Link Icon */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/50 flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-white/30 hover:border-[#c778dd] transition-all"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>

                    {/* Live Link Icon */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg border-2 border-white/50 flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-white/30 hover:border-[#c778dd] transition-all"
                      title="View Live"
                    >
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow"
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#5b9eff] hover:text-[#c778dd] font-semibold text-sm transition-colors hover:translate-x-1"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </a>

                  {/* GitHub Link */}
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold text-sm transition-colors mt-3 hover:translate-x-1"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <div
          className="text-center mt-20"
        >
          <a
            href="https://github.com/mohsinRafiq-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-[#5b9eff] text-[#5b9eff] font-semibold rounded-xl hover:bg-[#5b9eff]/10 transition-all hover:scale-105"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
