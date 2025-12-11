'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface Diamond {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speed: number;
}

const colors = ['#F05B30', '#FF3399', '#00A3FF', '#00CC66', '#FF6633'];

// Simple diamond component with parallax scroll effect
const ScrollingDiamond: React.FC<{ diamond: Diamond; scrollProgress: MotionValue<number> }> = ({
  diamond,
  scrollProgress,
}) => {
  // Simple parallax - diamonds move at different speeds based on scroll
  const y = useTransform(scrollProgress, [0, 1], [diamond.y, diamond.y + diamond.speed]);

  return (
    <motion.path
      d={`M 0 -${diamond.size} L ${diamond.size} 0 L 0 ${diamond.size} L -${diamond.size} 0 Z`}
      fill={diamond.color}
      opacity={0.15}
      filter="url(#softGlow)"
      style={{
        x: diamond.x,
        y,
        transformOrigin: 'center',
      }}
    />
  );
};

export const AnimatedBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [diamonds, setDiamonds] = React.useState<Diamond[]>([]);
  const [dimensions, setDimensions] = React.useState({ width: 1200, height: 800 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const diamondsData: Diamond[] = [];
    const count = 60; // Reduced number for cleaner look

    for (let i = 0; i < count; i++) {
      diamondsData.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height * 3, // Spread across scroll height
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 6, // Random size between 6-12
        speed: 100 + Math.random() * 300, // Different parallax speeds
      });
    }

    setDiamonds(diamondsData);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <svg className="w-full h-full">
        <defs>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {diamonds.map((diamond) => (
          <ScrollingDiamond key={diamond.id} diamond={diamond} scrollProgress={scrollYProgress} />
        ))}
      </svg>
    </div>
  );
};
