'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Diamond {
  id: number;
  startX: number;
  startY: number;
  centerX: number;
  centerY: number;
  color: string;
  delay: number;
}

const colors = ['#F05B30', '#FF3399', '#00A3FF', '#00CC66', '#FF6633'];

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
    const gridSize = 12;
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * Math.min(dimensions.width, dimensions.height) * 0.6;

        diamondsData.push({
          id: i * gridSize + j,
          startX: centerX + Math.cos(angle) * distance,
          startY: centerY + Math.sin(angle) * distance,
          centerX: centerX + (i - gridSize / 2) * 40,
          centerY: centerY + (j - gridSize / 2) * 40,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 2,
        });
      }
    }

    setDiamonds(diamondsData);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <svg className="w-full h-full opacity-20">
        <defs>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {diamonds.map((diamond) => {
          const x = useTransform(
            scrollYProgress,
            [0, 0.2, 0.5, 0.8, 1],
            [diamond.startX, diamond.centerX, diamond.centerX, diamond.centerX, diamond.startX]
          );

          const y = useTransform(
            scrollYProgress,
            [0, 0.2, 0.5, 0.8, 1],
            [diamond.startY, diamond.centerY, diamond.centerY, diamond.centerY, diamond.startY]
          );

          return (
            <motion.g key={diamond.id}>
              <motion.path
                d={`M 0 -8 L 8 0 L 0 8 L -8 0 Z`}
                fill={diamond.color}
                filter="url(#softGlow)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.15, 0.4, 0.15],
                  scale: [0.6, 1, 0.6],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12 + diamond.delay * 3,
                  repeat: Infinity,
                  delay: diamond.delay,
                  ease: 'easeInOut',
                }}
                style={{
                  x,
                  y,
                  transformOrigin: 'center',
                }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};
