import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  gradient = false,
  hover = true,
}) => {
  const baseStyles = 'rounded-xl p-8 backdrop-blur-sm';
  const gradientStyles = gradient ? 'gradient-border bg-circus-darkGray/50' : 'bg-circus-darkGray/80 border border-circus-lightGray/10';
  const hoverStyles = hover ? 'hover:transform hover:scale-105 transition-all duration-300' : '';

  return (
    <motion.div
      className={`${baseStyles} ${gradientStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
