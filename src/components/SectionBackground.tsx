import { motion } from 'framer-motion';

interface SectionBackgroundProps {
  variant?: 'about' | 'projects' | 'skills' | 'contact' | 'journey' | 'default';
  children?: React.ReactNode;
}

/**
 * SectionBackground - Reusable impressive animated backgrounds for each section
 */
export const SectionBackground = ({ variant = 'default' }: SectionBackgroundProps) => {
  const variants = {
    about: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top left gradient orb */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#c778dd]/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, 40, -50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Bottom right gradient orb */}
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-[#5b9eff]/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -60, 30, 0],
            y: [0, -40, 50, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Center accent */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#c778dd]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c778dd" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-about)" />
        </svg>
      </div>
    ),

    projects: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-projects" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c778dd" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-projects)" />
        </svg>
      </div>
    ),

    skills: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Radial gradient effect */}
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-[#c778dd]/20 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Bottom gradient orbs */}
        <motion.div
          className="absolute -bottom-40 left-1/4 w-80 h-80 bg-gradient-to-t from-[#5b9eff]/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute -bottom-40 right-1/4 w-80 h-80 bg-gradient-to-t from-[#c778dd]/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -40, 40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Mesh grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-skills" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#5b9eff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-skills)" />
        </svg>
      </div>
    ),

    contact: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c778dd" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" />
        </svg>
      </div>
    ),

    journey: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Timeline-inspired background */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c778dd] via-[#9e5bb8] to-[#5b9eff]"
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 0.1, height: '100%' }}
          transition={{ duration: 2 }}
        />

        {/* Side glows - much more subtle */}
        <motion.div
          className="absolute left-0 top-1/4 w-96 h-96 bg-gradient-to-r from-[#c778dd]/05 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.9, 1],
            x: [0, 50, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute right-0 bottom-1/4 w-96 h-96 bg-gradient-to-l from-[#5b9eff]/05 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 0.9, 1.2, 1],
            x: [0, -50, 50, 0],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.008]" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-journey" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#c778dd" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-journey)" />
        </svg>
      </div>
    ),

    default: (
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#c778dd]/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tl from-[#5b9eff]/15 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 0.9, 1.2, 1],
            rotate: [180, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    ),
  };

  return variants[variant];
};
