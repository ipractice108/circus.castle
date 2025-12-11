'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Sparkles, Users, Dumbbell, Music } from 'lucide-react';

const disciplines = [
  {
    title: 'Aerial Arts',
    description: 'Silks, Lyra, Straps, Loops, Hammock',
    details: 'Master the art of aerial performance with professional rigging and safety equipment. From graceful silk movements to powerful strap routines.',
    icon: Sparkles,
    gridClass: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Acrobatics & Gymnastics',
    description: 'Floor work, tumbling, handstands',
    details: 'Build strength, flexibility, and control through structured acrobatic training.',
    icon: Users,
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Trampoline & Trampwall',
    description: 'Dynamic aerial maneuvers',
    details: 'Experience the thrill of professional trampoline and trampwall training.',
    icon: Dumbbell,
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Ballet',
    description: 'Grace and precision',
    details: 'Develop the fundamental elegance that underpins all circus disciplines.',
    icon: Music,
    gridClass: 'md:col-span-2 md:row-span-1',
  },
];

export const Disciplines: React.FC = () => {
  return (
    <Section id="disciplines" className="bg-circus-black">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Our <span className="gradient-text">Disciplines</span>
        </h2>
        <p className="text-xl text-circus-lightGray max-w-3xl mx-auto">
          Designed for all levels: confident beginners to advanced aerial practitioners.
          <br />
          Every discipline is taught with world-class coaching and attention to detail.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {disciplines.map((discipline, index) => {
          const Icon = discipline.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${discipline.gridClass} group`}
            >
              <div className="h-full p-8 rounded-2xl bg-circus-darkGray/80 border border-circus-lightGray/10 hover:border-circus-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-circus-orange group-hover:text-circus-cyan transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{discipline.title}</h3>
                  <p className="text-circus-orange text-sm font-semibold mb-4 uppercase tracking-wide">
                    {discipline.description}
                  </p>
                  <p className="text-circus-lightGray leading-relaxed flex-grow">
                    {discipline.details}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
