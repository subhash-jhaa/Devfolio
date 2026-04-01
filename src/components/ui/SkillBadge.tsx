"use client";

import React from 'react';
import { TechIcon } from './TechIcon';
import { Skill } from '@/types';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  skill: Skill;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <motion.div 
    whileHover={{ 
      scale: 1.05,
      transition: { type: "spring", stiffness: 200, damping: 8 }
    }}
    whileTap={{ scale: 0.95 }}
    className="group flex-shrink-0"
  >
    <div className="flex items-center gap-2 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1.5 text-[12px] font-semibold text-gray-700 dark:text-zinc-300 shadow-sm group-hover:border-gray-300 dark:group-hover:border-zinc-500 group-hover:shadow-md">
      <span className="flex h-5 w-5 items-center justify-center">
        <TechIcon name={skill.name} size={14} />
      </span>
      <span>{skill.name}</span>
    </div>
  </motion.div>
);

