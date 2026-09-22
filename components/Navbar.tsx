"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarDays, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Reality Check', href: '#reality' },
  { name: 'Results', href: '#numbers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Our Process', href: '#process' },
  { name: 'FAQs', href: '#faq' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = '';

      // Determine which section is currently active based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold: trigger when top of section is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      }

      // Handle the case where user scrolls to the very bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        const lastSection = sections[sections.length - 1];
        currentSection = lastSection;
      }

      // If we are at the very top, unset the active section
      if (window.scrollY < 100) {
        currentSection = '';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/neo_logo.png" alt="Neologicx Logo" width={160} height={45} priority className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 font-sans font-semibold text-foreground">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.name}
                href={`/${link.href}`}
                className={`relative group transition-colors hover:text-primary py-2 text-[15px] ${isActive ? 'text-primary' : 'text-foreground/80'
                  }`}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] rounded-t-sm bg-primary transition-transform duration-300 origin-left ${isActive
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf" target='blank' className="btn-gradient hidden lg:flex items-center gap-2 text-sm px-5 py-2.5 shadow-md hover:shadow-lg">
            <CalendarDays className="w-4 h-4" /> Book Your Slot
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl py-4 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold text-lg py-3 px-4 rounded-xl transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-accent'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2IeIsn89ZwrzAlQV0dnwjgUe7ZbIphty-0fC8xEzR2MOWpk3P4_lfCMyzKUU-EsGYuec7Zxqaf"
              target='blank'
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full text-brand-dark bg-gradient-to-r from-primary to-secondary font-bold text-lg px-6 py-4 rounded-xl shadow-lg"
            >
              <CalendarDays className="w-5 h-5" /> Book Your Slot
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
