import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = 'px-8 py-4 rounded-lg font-heading font-semibold text-lg transition-all duration-300 uppercase tracking-wide inline-block';

  const variants = {
    primary: 'bg-circus-orange text-white hover:bg-circus-orange/90 shadow-lg shadow-circus-orange/50 hover:shadow-xl hover:shadow-circus-orange/60',
    secondary: 'bg-transparent border-2 border-circus-orange text-circus-orange hover:bg-circus-orange hover:text-white',
    ghost: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-circus-black',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};
