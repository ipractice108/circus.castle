'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Award, Castle, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'World-Class Coaching',
    description: 'Train with professional circus artists, former Olympic coaches, and world/national champions.',
    color: 'circus-orange',
  },
  {
    icon: Castle,
    title: 'Real Castle Venue',
    description: 'Experience the magic of training in an authentic castle in the heart of Ubud, Bali.',
    color: 'circus-magenta',
  },
  {
    icon: Zap,
    title: 'Professional Equipment',
    description: 'Access to Trampwall, Electric Winch, professional aerial rigs, and competition-grade apparatus.',
    color: 'circus-cyan',
  },
];

export const Philosophy: React.FC = () => {
  return (
    <Section id="philosophy" className="bg-gradient-to-b from-circus-black to-circus-darkGray">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          It's Not Just Training –<br />
          <span className="gradient-text">It's a Transformation</span>
        </h2>
        <p className="text-xl text-circus-lightGray max-w-3xl mx-auto">
          Join a community where passion meets precision, and every training session brings you closer to mastering the extraordinary.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card gradient>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-circus-orange/10 border-2 border-circus-orange">
                    <Icon className="w-12 h-12 text-circus-orange" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-circus-lightGray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
