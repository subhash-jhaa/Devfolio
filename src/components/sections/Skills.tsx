"use client";

import React from 'react';
import { portfolioData } from "@/components/constants/data";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { motion } from "framer-motion";
import { STAGGER_CONTAINER, SCALE_SPRING, VIEWPORT_CONFIG, FADE_IN_LEFT } from "@/lib/animations";

const itemVariants = SCALE_SPRING;

export const Skills = () => {
  return (
    <section className="pt-2" aria-label="Technical skills">
      <motion.h2 
        variants={FADE_IN_LEFT}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        className="mb-4 text-base font-bold text-gray-900 dark:text-zinc-100 text-left"
      >
        {portfolioData.titles.skills}
      </motion.h2>
      <motion.div 
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_CONFIG}
        className="flex flex-wrap gap-2"
      >
        {portfolioData.skills.map((skill, i) => (
          <motion.div key={i} variants={itemVariants}>
            <SkillBadge skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
