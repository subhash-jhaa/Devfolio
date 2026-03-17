"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Download, Mail, Github, Instagram, Linkedin, Globe,
  Code, Terminal, Layers, Box, Cpu, Database, Server
} from 'lucide-react';
import {
  SiX, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiVercel
} from 'react-icons/si';
import { portfolioData } from "@/lib/data";
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { TechIcon } from './TechIcon';

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
        {/* Profile Section */}
        <div className="flex flex-col items-start text-left space-y-3 mb-6 mt-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-cyan-400/30 bg-white shadow-xl"
          >
            <img
              alt={portfolioData.name}
              src={portfolioData.profilePic}
              className="aspect-square h-full w-full object-cover shadow-inner"
            />
          </motion.div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              {portfolioData.name}
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium">
              {portfolioData.role}
            </p>
          </div>
        </div>

        {/* Download CV */}
        <div style={{ opacity: 1, transform: 'none' }}>
          <a href={portfolioData.cvUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm" tabIndex={0}>
            <span className="text-sm font-semibold text-gray-700">Download CV</span>
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
        <section className="pt-2" aria-label="Technical skills">
          <h2 className="mb-4 text-base font-bold text-gray-900 text-left">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.map((skill, i) => (
              <div key={i} className="group flex-shrink-0">
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-[12px] font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-300 hover:shadow-md">
                  <span className="flex h-5 w-5 items-center justify-center">
                    <TechIcon name={skill.name} size={14} />
                  </span>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="pt-4" aria-label="Work experience">
          <h2 className="mb-4 text-base font-bold text-gray-900 text-left">Work Experience</h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-100"></div>
            <div className="space-y-4">
              {portfolioData.experience.map((exp, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-orange-400"></div>
                  <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 flex-shrink-0 border border-gray-100">
                        <img alt={exp.company} className="h-6 w-6 object-contain" src={exp.logo} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900">{exp.company}</div>
                        <div className="text-[11px] font-semibold text-gray-500">
                          {exp.role} • {exp.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
};
