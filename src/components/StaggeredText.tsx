import { motion } from 'framer-motion';

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  highlightWords?: string[]; // Words to highlight with color
  highlightColor?: string; // Color for highlights (default purple)
}

/**
 * StaggeredText - Animates text with staggered word entrance
 * Perfect for paragraph descriptions and content
 */
export const StaggeredText = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.05,
  highlightWords = [],
  highlightColor = '#c778dd',
}: StaggeredTextProps) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, idx) => {
        const isHighlighted = highlightWords.includes(word);

        return (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: delay + idx * staggerDelay,
              duration: 0.3,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            style={{
              display: 'inline-block',
              marginRight: '0.3em',
              color: isHighlighted ? highlightColor : 'inherit',
              fontWeight: isHighlighted ? '600' : 'inherit',
              willChange: 'opacity, transform',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

/**
 * ParagraphReveal - Animates entire paragraph with line-by-line effect
 */
export const ParagraphReveal = ({
  text,
  className = '',
  delay = 0,
  lineDelay = 0.1,
}: {
  text: string;
  className?: string;
  delay?: number;
  lineDelay?: number;
}) => {
  const lines = text.split('\n');

  return (
    <div className={className}>
      {lines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: delay + idx * lineDelay,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * CharacterReveal - Animates text character by character
 * Use sparingly for dramatic effect
 */
export const CharacterReveal = ({
  text,
  className = '',
  delay = 0,
  charDelay = 0.02,
}: {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}) => {
  const chars = text.split('');

  return (
    <div className={className}>
      {chars.map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: delay + idx * charDelay,
            duration: 0.2,
            type: 'spring',
            stiffness: 200,
          }}
          viewport={{ once: true }}
          style={{
            display: char === ' ' ? 'inline' : 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};
