'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Camera, MapPin, TrendingUp } from 'lucide-react';

export const Retreats: React.FC = () => {
  return (
    <Section id="retreats" className="bg-gradient-to-b from-circus-darkGray to-circus-black">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          The Artist's <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-xl text-circus-lightGray max-w-3xl mx-auto">
          Exclusive retreats and content creation opportunities designed for serious practitioners.
        </p>
      </motion.div>

      {/* Retreat Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Intensive Retreats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-circus-black via-circus-black/95 to-circus-black/80" />

          <Card gradient className="h-full relative z-10 bg-transparent border-0">
            <div className="flex flex-col h-full">
              <div className="mb-6 p-4 rounded-full bg-circus-magenta/10 border-2 border-circus-magenta w-fit">
                <Calendar className="w-10 h-10 text-circus-magenta" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Intensive Retreats</h3>

              <div className="flex items-center gap-2 text-circus-orange mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Ubud Castle, Bali</span>
              </div>

              <p className="text-circus-lightGray mb-6 leading-relaxed flex-grow">
                Boutique intensive programs limited to 6 participants. Experience visible progress in just 7-10 days with personalized coaching from world-class instructors. Focus on your chosen discipline with unlimited access to all equipment.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  'Maximum 6 participants for personalized attention',
                  '7-10 day intensive programs',
                  'Visible skill progression guaranteed',
                  'All equipment and accommodation included',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-circus-orange flex-shrink-0 mt-1" />
                    <span className="text-circus-lightGray">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" className="w-full">
                Learn More About Retreats
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Professional Photoshoots */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/photoshoot.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-circus-black via-circus-black/95 to-circus-black/80" />

          <Card gradient className="h-full relative z-10 bg-transparent border-0">
            <div className="flex flex-col h-full">
              <div className="mb-6 p-4 rounded-full bg-circus-cyan/10 border-2 border-circus-cyan w-fit">
                <Camera className="w-10 h-10 text-circus-cyan" />
              </div>

              <h3 className="text-3xl font-bold mb-4">Professional Photoshoots</h3>

              <div className="flex items-center gap-2 text-circus-orange mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Ocean, Rice Fields & Jungle</span>
              </div>

              <p className="text-circus-lightGray mb-6 leading-relaxed flex-grow">
                Capture your artistry in Bali's most breathtaking locations. Professional photography and videography services for creating stunning portfolio content that showcases your skills in unique, world-class settings.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  'Exotic locations: beaches, rice terraces, jungle',
                  'Professional photography & videography',
                  'Portfolio-ready content for social media',
                  'Flexible packages for individuals & groups',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-circus-cyan flex-shrink-0 mt-1" />
                    <span className="text-circus-lightGray">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" className="w-full">
                Book a Photoshoot
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
