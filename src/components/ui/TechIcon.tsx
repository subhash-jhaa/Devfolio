"use client";

import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';

import { portfolioData } from "@/components/constants/data";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className, size = 14 }) => {
  const [error, setError] = useState(false);
  const normName = name.toLowerCase().trim();
  const slug = portfolioData.techIconMapping[normName] || normName.replace(/\s+/g, '').replace(/[^\w]/g, '');

  if (error) {
    return <Code className={cn("text-gray-400", className)} style={{ width: size, height: size }} />;
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={`${name} ${portfolioData.labels.projectIconAlt}`}
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
