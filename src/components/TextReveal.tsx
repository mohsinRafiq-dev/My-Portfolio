import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TextReveal = ({ text, delay = 0, className = '' }: TextRevealProps) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: delay + i * 0.05,
            duration: 0.3,
          }}
          viewport={{ once: true }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const chars = text.split('');

  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.4,
            type: 'spring',
            stiffness: 100,
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};
