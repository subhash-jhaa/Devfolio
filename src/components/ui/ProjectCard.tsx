"use client";

import React from 'react';
import { portfolioData } from '@/components/constants/data';
import { Github, MoveUpRight, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TechIcon } from './TechIcon';
import { Project } from '@/types';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (project.slug) {
      router.push(`/projects/${project.slug}`);
    }
  };

  return (
    <motion.article 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex w-full h-full"
    >
      <div 
        onClick={handleCardClick}
        className={cn(
          "relative flex w-full min-h-[180px] sm:min-h-[230px] flex-col rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-4 group-hover:border-gray-300 dark:group-hover:border-zinc-500 group-hover:shadow-xl shadow-sm",
          project.slug && "cursor-pointer"
        )}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="w-6 h-6 text-xs bg-white dark:bg-zinc-700 overflow-hidden">
            {project.logo.length === 1 ? (
              <div className="w-full h-full flex items-center justify-center font-bold text-slate-400 dark:text-zinc-400 border border-slate-100 dark:border-zinc-600 rounded">
                {project.logo}
              </div>
            ) : (
              <img alt={`${project.name} logo`} className="w-full h-full object-contain p-0.5" src={project.logo} />
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-gray-500 dark:text-zinc-400 whitespace-nowrap hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4 flex-shrink-0" />
              </motion.a>
            )}
            {project.status && (
              project.status === 'Live' && project.url ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={cn(
                    "inline-flex items-center text-[10px] font-semibold rounded-md px-2 py-0.5 border whitespace-nowrap transition-colors",
                    "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:bg-emerald-200 dark:hover:bg-emerald-900/50"
                  )}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                  {project.status}
                  <MoveUpRight className="ml-1 h-2.5 w-2.5" />
                </motion.a>
              ) : (
                <span
                  className={cn(
                    "inline-flex items-center text-[10px] font-semibold rounded-md px-2 py-0.5 border whitespace-nowrap",
                    project.status === 'Building' ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800" :
                      "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  )}
                >
                  {project.status === 'Building' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />}
                  {project.status}
                </span>
              )
            )}
          </div>
        </div>

        <h3 className="text-sm xs:text-base font-semibold text-gray-900 dark:text-zinc-100 break-words mb-2">
          {project.name}
        </h3>
        <p className="text-xs xs:text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center gap-1 mb-1.5">
            <Code2 className="h-3 w-3 text-gray-500 dark:text-zinc-400" aria-hidden="true" />
            <span className="text-[9px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">{portfolioData.labels.techStack}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <motion.span 
                key={tech} 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-1 text-[10px] font-medium rounded-md px-1.5 py-1 bg-gray-50 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-600 shadow-sm group-hover:bg-gray-100 dark:group-hover:bg-zinc-600"
              >
                <TechIcon name={tech} size={14} />
                <span>{tech}</span>
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

