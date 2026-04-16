import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

export const AnimatedCounter = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  delay = 0,
}: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay * 1000;
    const interval = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(from + (to - from) * progress);
      setCount(currentCount);

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, from, to, duration, delay]);

  return (
    <motion.span
      ref={ref}
      className="tabular-nums"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  );
};
