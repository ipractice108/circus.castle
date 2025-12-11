'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-circus-black/70 via-circus-black/50 to-circus-black z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2000')] bg-cover bg-center" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src="/images/logo.png"
            alt="Circus Castle Bali Logo"
            className="h-16 md:h-20 mx-auto"
            onError={(e) => {
              // Fallback to text if image fails to load
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }}
          />
          <div className="hidden">
            <span className="inline-block px-6 py-2 rounded-full border-2 border-circus-orange text-circus-orange font-heading text-sm tracking-widest uppercase">
              SPORT ART FUN
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Unique aerials & trampolines
          <br />
          <span className="gradient-text">club in a real castle</span>
          <br />
          in Bali.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-circus-lightGray mb-12 max-w-3xl mx-auto"
        >
          Pro circus artists & world/national champions coaching for adults & kids 5+.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button variant="primary" href="#testimonials">
            Get 1 Week FREE Trial
          </Button>
          <Button variant="ghost" href="#retreats">
            Explore Retreats
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center"
        >
          <motion.a
            href="#philosophy"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
          >
            <ArrowDown className="text-circus-orange w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
