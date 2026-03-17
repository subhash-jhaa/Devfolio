"use client";

import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

const NAME_MAPPING: Record<string, string> = {
  // Common Frameworks & Languages
  'next.js': 'nextdotjs',
  'node.js': 'nodedotjs',
  'express.js': 'express',
  'typescript': 'typescript',
  'javascript': 'javascript',
  'react': 'react',
  'python': 'python',
  'sass': 'sass',
  'svelte': 'svelte',
  'nuxt.js': 'nuxtdotjs',
  'html': 'html5',
  'html5': 'html5',
  'css': 'css3',
  'css3': 'css3',
  
  // Styling & UI
  'tailwind css': 'tailwindcss',
  'tailwind': 'tailwindcss',
  'material ui': 'mui',
  'shadcn ui': 'shadcnui',
  'shadcn': 'shadcnui',
  'radix ui': 'radixui',
  
  // Backend & Cloud
  'postgresql': 'postgresql',
  'postgressql': 'postgresql',
  'mongodb': 'mongodb',
  'appwrite': 'appwrite',
  'aws': 'amazonwebservices',
  'docker': 'docker',
  'vercel': 'vercel',
  'convex': 'convex',
  'convex db': 'convex',
  'clerk auth': 'clerk',
  'clerk': 'clerk',
  
  // AI & Others
  'gemini ai': 'googlegemini',
  'gemini': 'googlegemini',
  'google gemini': 'googlegemini',
};

export const TechIcon: React.FC<TechIconProps> = ({ name, className, size = 14 }) => {
  const [error, setError] = useState(false);
  const normName = name.toLowerCase().trim();
  const slug = NAME_MAPPING[normName] || normName.replace(/\s+/g, '').replace(/[^\w]/g, '');

  if (error) {
    return <Code className={cn("text-gray-400", className)} style={{ width: size, height: size }} />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={`${name} icon`}
      className={cn("object-contain transition-all duration-300 filter group-hover:drop-shadow-sm", className)}
      style={{ 
        width: size, 
        height: size,
        minWidth: size,
        minHeight: size
      }}
      onError={() => setError(true)}
    />
  );
};
