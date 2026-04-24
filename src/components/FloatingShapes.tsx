import { motion } from 'framer-motion';

interface FloatingShapeProps {
  type?: 'circle' | 'square' | 'triangle' | 'blob';
  size?: number; // Size in pixels
  color?: string;
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * FloatingShape - Animated SVG shapes for background decoration
 * Creates smooth floating/orbiting animations
 */
export const FloatingShape = ({
  type = 'circle',
  size = 100,
  color = '#c778dd',
  duration = 10,
  delay = 0,
  className = '',
  style,
}: FloatingShapeProps) => {
  const shapeStyle = {
    width: size,
    height: size,
    opacity: 0.25,
    ...style,
  };

  const floatVariants = {
    animate: {
      y: [0, -25, 0],
      x: [0, 12, 0],
    },
  };

  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <div
            style={{
              ...shapeStyle,
              borderRadius: '50%',
              backgroundColor: color,
            }}
          />
        );
      case 'square':
        return (
          <div
            style={{
              ...shapeStyle,
              backgroundColor: color,
              borderRadius: '20%',
            }}
          />
        );
      case 'triangle':
        return (
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${size / 2}px solid transparent`,
              borderRight: `${size / 2}px solid transparent`,
              borderBottom: `${size}px solid ${color}`,
              opacity: 0.25,
            }}
          />
        );
      case 'blob':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            style={{ opacity: 0.25 }}
          >
            <path
              d="M50,10 Q90,30 90,50 Q90,80 50,90 Q10,80 10,50 Q10,30 50,10"
              fill={color}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={className}
      variants={floatVariants}
      animate="animate"
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {renderShape()}
    </motion.div>
  );
};

/**
 * OrbitingShapes - Multiple shapes orbiting around a center point
 */
export const OrbitingShapes = ({
  count = 3,
  radius = 150,
  duration = 20,
  colors = ['#c778dd', '#9e5bb8', '#c778dd'],
}: {
  count?: number;
  radius?: number;
  duration?: number;
  colors?: string[];
}) => {
  const shapes = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      style={{
        position: 'relative',
        width: radius * 2,
        height: radius * 2,
      }}
    >
      {shapes.map((idx) => {
        const angle = (idx / count) * 360;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              left: '50%',
              top: '50%',
              marginLeft: -20,
              marginTop: -20,
            }}
            animate={{
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration,
              delay: (idx / count) * duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: colors[idx % colors.length],
                opacity: 0.4,
                filter: 'blur(8px)',
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

/**
 * PulsingShape - Shape that pulses in and out
 */
export const PulsingShape = ({
  type = 'circle',
  size = 100,
  color = '#c778dd',
  duration = 2,
  className = '',
}: FloatingShapeProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <FloatingShape
        type={type}
        size={size}
        color={color}
        duration={0}
      />
    </motion.div>
  );
};
