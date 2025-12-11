'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Instagram, MessageCircle, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-circus-darkGray border-t border-circus-lightGray/10">
      {/* Main CTA Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your{' '}
            <span className="gradient-text">Transformation?</span>
          </h2>
          <p className="text-xl text-circus-lightGray mb-8 max-w-2xl mx-auto">
            Write <span className="text-circus-orange font-bold">'MAGIC'</span> or{' '}
            <span className="text-circus-orange font-bold">'JUMP'</span> in Direct to reserve your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="gap-2">
              <Instagram className="w-5 h-5" />
              Message on Instagram
            </Button>
            <Button variant="secondary" className="gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-circus-lightGray/10 pt-12">
          {/* Logo & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/logo.png"
              alt="Circus Castle Bali Logo"
              className="h-12 mb-6"
            />
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MapPin className="text-circus-orange" />
              Location
            </h3>
            <p className="text-circus-lightGray mb-6">
              Circus Castle Bali
              <br />
              Ubud, Bali
              <br />
              Indonesia
            </p>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden border-2 border-circus-lightGray/20 hover:border-circus-orange/50 transition-colors duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.8899999999994!2d115.2!3d-8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMDAuMCJTIDExNcKwMTInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Circus Castle Bali Location"
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-circus-lightGray">
              <li>
                <a href="#philosophy" className="hover:text-circus-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-circus-orange transition-colors">
                  Disciplines
                </a>
              </li>
              <li>
                <a href="#retreats" className="hover:text-circus-orange transition-colors">
                  Retreats
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-circus-orange transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Mail className="text-circus-orange" />
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-circus-black border border-circus-lightGray/20 hover:border-circus-orange hover:text-circus-orange transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-circus-black border border-circus-lightGray/20 hover:border-circus-orange hover:text-circus-orange transition-all"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-circus-lightGray/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-circus-lightGray text-sm">
            <p>© 2024 Circus Castle Bali. All rights reserved.</p>
            <img
              src="/images/logo.png"
              alt="Circus Castle Bali Logo"
              className="h-8 opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
