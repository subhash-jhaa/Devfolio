"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SLIDE_UP, STAGGER_CONTAINER, VIEWPORT_CONFIG } from '@/lib/animations';

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({ 
  children, 
  className = "",
  delay = 0
}) => {
  return (
    <motion.div
      variants={SLIDE_UP}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionList: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_CONFIG}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <motion.div variants={SLIDE_UP} className={className}>
      {children}
    </motion.div>
  );
};
