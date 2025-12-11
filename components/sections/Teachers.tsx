'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Award, Trophy, Star, Users } from 'lucide-react';

const instructors = [
  {
    name: 'Alexandra Petrova',
    title: 'Head Coach - Aerial Arts',
    specialization: 'Olympic Coach, Silks & Lyra Specialist',
    achievements: [
      'Former Olympic Gymnastics Coach',
      '15+ years professional circus experience',
      'Cirque du Soleil performer',
    ],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600',
    icon: Trophy,
  },
  {
    name: 'Marcus Chen',
    title: 'Lead Instructor - Acrobatics',
    specialization: 'World Champion Tumbler',
    achievements: [
      'World Championship Gold Medalist',
      'National Team Head Coach',
      'Specialized in handstands & partner acro',
    ],
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600',
    icon: Award,
  },
  {
    name: 'Sofia Martinez',
    title: 'Trampoline & Trampwall Coach',
    specialization: 'Professional Aerialist',
    achievements: [
      'European Trampoline Champion',
      '10+ years teaching experience',
      'Specialized in dynamic aerial tricks',
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600',
    icon: Star,
  },
  {
    name: 'Yuki Tanaka',
    title: 'Ballet & Flexibility Coach',
    specialization: 'Classical Ballet Master',
    achievements: [
      'Principal Dancer - National Ballet',
      'Certified Contortion Coach',
      'Specialized in circus flexibility',
    ],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600',
    icon: Users,
  },
];

export const Teachers: React.FC = () => {
  return (
    <Section id="teachers" className="bg-gradient-to-b from-circus-black to-circus-darkGray">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          World-Class <span className="gradient-text">Instructors</span>
        </h2>
        <p className="text-xl text-circus-lightGray max-w-3xl mx-auto">
          Learn from Olympic coaches, world champions, and professional circus artists
          who have performed on the world's biggest stages.
        </p>
      </motion.div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {instructors.map((instructor, index) => {
          const Icon = instructor.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-circus-darkGray border border-circus-lightGray/10 hover:border-circus-orange/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Instructor Image */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${instructor.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-circus-black via-circus-black/60 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 p-3 rounded-full bg-circus-orange/90 backdrop-blur-sm">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-circus-orange font-semibold text-sm uppercase tracking-wide mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-circus-cyan text-sm mb-4">
                    {instructor.specialization}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {instructor.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-circus-lightGray">
                        <span className="text-circus-orange mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-xl text-circus-lightGray mb-6">
          Train with champions and transform your skills under expert guidance
        </p>
        <div className="inline-block px-8 py-3 rounded-lg bg-circus-darkGray/50 border border-circus-orange/30">
          <p className="text-circus-orange font-semibold">
            📸 All instructors are certified professionals with international competition experience
          </p>
        </div>
      </motion.div>
    </Section>
  );
};
