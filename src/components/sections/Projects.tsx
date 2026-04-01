"use client";

import React from 'react';
import { portfolioData } from "@/components/constants/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER, CARD_SCROLL_REVEAL, VIEWPORT_STRICT, FADE_IN_LEFT } from "@/lib/animations";

export const Projects = () => {
  return (
    <section aria-label="Projects showcase" className="mt-8">
      <motion.h2 
        variants={FADE_IN_LEFT}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_STRICT}
        className="mb-4 text-base font-bold text-gray-900 dark:text-zinc-100"
      >
        {portfolioData.titles.projects}
      </motion.h2>
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_STRICT}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
      >
        {portfolioData.projects.map((project, i) => (
          <motion.div key={i} variants={CARD_SCROLL_REVEAL}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
