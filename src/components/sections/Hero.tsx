"use client";

import React from 'react';
import { portfolioData } from "@/components/constants/data";
import { motion } from "framer-motion";
import { FADE_IN_LEFT, SCALE_SPRING, SLIDE_UP } from "@/lib/animations";

export const Hero = () => {
  return (
    <motion.div 
      variants={SLIDE_UP}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start text-left space-y-3 mb-6 mt-8"
    >
      <motion.div
        variants={SCALE_SPRING}
        className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-indigo-400/30 bg-white dark:bg-zinc-800 shadow-xl"
      >
        <img
          alt={portfolioData.name}
          src={portfolioData.profilePic}
          className="aspect-square h-full w-full object-cover shadow-inner"
        />
      </motion.div>
      <div className="space-y-1">
        <motion.h1 
          variants={FADE_IN_LEFT}
          className="text-2xl font-bold text-gray-800 dark:text-zinc-100 leading-tight"
        >
          {portfolioData.name}
        </motion.h1>
        <motion.p 
          variants={FADE_IN_LEFT}
          className="text-sm sm:text-base text-gray-500 dark:text-zinc-400 font-medium"
        >
          {portfolioData.role}
        </motion.p>
      </div>
    </motion.div>
  );
};
