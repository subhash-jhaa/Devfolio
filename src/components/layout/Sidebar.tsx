"use client";

import React from 'react';
import { Mail, Github, Instagram, Linkedin, Globe } from 'lucide-react';
import { SiX } from 'react-icons/si';
import { portfolioData } from "@/components/constants/data";
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Download } from 'lucide-react';

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
      <div className="space-y-4">
        {/* Profile Section (Hero) */}
        <Hero />

        {/* Download CV */}
        <div style={{ opacity: 1, transform: 'none' }}>
          <a href={portfolioData.cvUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm" tabIndex={0}>
            <span className="text-sm font-semibold text-gray-700">{portfolioData.labels.downloadCv}</span>
            <div className="bg-gray-100 rounded-lg p-1.5 flex items-center justify-center">
              <Download className="h-4 w-4 text-gray-600" aria-hidden="true" />
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-2 justify-start flex-wrap w-full" aria-label="Social media links">
          {portfolioData.socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "p-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-all duration-300 shadow-sm",
                social.platform === 'instagram' ? "hover:shadow-lg hover:shadow-purple-500/20" :
                  social.platform === 'linkedin' ? "hover:shadow-lg hover:shadow-blue-600/20" : "hover:shadow-md"
              )}
              aria-label={`Visit ${social.platform} profile`}
              tabIndex={0}
            >
              {SOCIAL_ICONS[social.platform] || <Globe className="w-4 h-4" />}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Work Experience Section */}
        <Experience />
      </div>
    </aside>
  );
};
