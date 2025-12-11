'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Star, Gift } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Professional Aerialist',
    content: 'Training at Circus Castle transformed my aerial practice. The coaches are world-class, and training in a real castle adds magic to every session.',
    rating: 5,
  },
  {
    name: 'James L.',
    role: 'Beginner Enthusiast',
    content: 'I started as a complete beginner and the free trial week gave me the confidence to continue. The progression is incredible!',
    rating: 5,
  },
  {
    name: 'Maria K.',
    role: 'Gymnast',
    content: 'The equipment is professional grade, the location is stunning, and the community is incredibly supportive. Worth every moment.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-circus-black relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-circus-orange/5 via-transparent to-transparent" />

      <div className="relative z-10">
        {/* Free Trial Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card gradient className="text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-4 rounded-full bg-circus-orange/20 border-2 border-circus-orange">
                <Gift className="w-12 h-12 text-circus-orange" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The first week of training is{' '}
                <span className="text-circus-orange">FREE</span> for everyone!
              </h2>
              <p className="text-xl text-circus-lightGray mb-8 max-w-2xl">
                Experience world-class circus training in a real castle. No commitment required.
                Start your transformation today.
              </p>
              <Button variant="primary" className="text-xl px-12 py-6">
                Claim Your Free Week
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Testimonials Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Artists Say</span>
          </h3>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover={false} className="h-full">
                <div className="flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-circus-orange text-circus-orange" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-circus-lightGray mb-6 italic leading-relaxed flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-circus-lightGray/20 pt-4">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-circus-orange">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
