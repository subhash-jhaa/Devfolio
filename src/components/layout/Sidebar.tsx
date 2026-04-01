"use client";

import React from 'react';
import { Mail, Github, Instagram, Linkedin, Globe, Download } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { portfolioData } from "@/components/constants/data";
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { motion } from 'framer-motion';
import { SLIDE_UP, STAGGER_CONTAINER } from '@/lib/animations';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  mail: <Mail className="w-4 h-4" />,
  github: <Github className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  website: <Globe className="w-4 h-4" />,
  x: <SiX className="w-4 h-4" />,
};

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full h-full space-y-4 z-10">
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {/* Profile Section (Hero) */}
        <Hero />

        {/* Download CV */}
        <motion.div variants={SLIDE_UP}>
          <a href={portfolioData.cvUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:border-gray-300 dark:hover:border-zinc-500 shadow-sm hover:shadow-md hover:translate-y-[-2px]" aria-label={portfolioData.labels.cvAriaLabel} tabIndex={0}>
            <span className="text-sm font-semibold text-gray-700 dark:text-zinc-200">{portfolioData.labels.downloadCv}</span>
            <div className="bg-white dark:bg-zinc-700 border border-gray-100 dark:border-transparent rounded-lg p-1.5 flex items-center justify-center shadow-inner">
              <Download className="h-4 w-4 text-gray-600 dark:text-zinc-300" aria-hidden="true" />
            </div>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={STAGGER_CONTAINER}
          className="flex gap-2 justify-start flex-wrap w-full" 
          aria-label={portfolioData.labels.socialsAriaLabel}
        >
          {portfolioData.socials.map((social, i) => (
            <motion.a
              key={i}
              variants={SLIDE_UP}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:text-gray-900 dark:hover:text-zinc-100 hover:border-gray-300 dark:hover:border-zinc-500 shadow-sm",
                social.platform === 'instagram' ? "hover:shadow-lg hover:shadow-purple-500/20" :
                  social.platform === 'linkedin' ? "hover:shadow-lg hover:shadow-blue-600/20" : "hover:shadow-md"
              )}
              aria-label={`${portfolioData.labels.visitProfile} ${social.platform} profile`}
              tabIndex={0}
            >
              {SOCIAL_ICONS[social.platform] || <Globe className="w-4 h-4" />}
            </motion.a>
          ))}
          <motion.div variants={SLIDE_UP}>
            <ThemeToggle />
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <Skills />

        {/* Work Experience Section */}
        <Experience />
      </motion.div>
    </aside>
  );
};
