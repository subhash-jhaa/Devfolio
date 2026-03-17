"use client";

import React from 'react';
import { Users, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TechIcon } from './TechIcon';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group relative flex cursor-pointer" style={{ width: '374.67px', height: '230px', opacity: 1, transform: 'none' }}>
      <div className="relative flex w-full h-full flex-col rounded-2xl border border-gray-200 bg-white p-3 xs:p-4 sm:p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex items-center justify-between mb-3">
          <div className="w-6 h-6 text-xs bg-white overflow-hidden">
            {project.logo.length === 1 ? (
              <div className="w-full h-full flex items-center justify-center font-bold text-slate-400 border border-slate-100 rounded">
                {project.logo}
              </div>
            ) : (
              <img alt={`${project.name} icon`} className="w-full h-full object-contain p-0.5" src={project.logo} />
            )}
          </div>
          <div className="flex items-center gap-1.5">
            {project.users && (
              <span className="inline-flex items-center text-[10px] font-semibold rounded-full px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">
                <Users className="h-2.5 w-2.5 mr-1 flex-shrink-0" />
                {project.users}
              </span>
            )}
            {project.status && (
              <span className={cn(
                "inline-flex items-center text-[10px] font-semibold rounded-md px-2 py-0.5 border whitespace-nowrap",
                project.status === 'Building' ? "bg-green-100 text-green-800 border-green-200" :
                  project.status === 'Live' ? "bg-emerald-100 text-emerald-800 border-emerald-200" :
                    "bg-blue-100 text-blue-800 border-blue-200"
              )}>
                {project.status === 'Building' && <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse" />}
                {project.status === 'Live' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />}
                {project.status}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-sm xs:text-base font-semibold text-gray-900 break-words mb-2">
          {project.name}
        </h3>
        <p className="text-xs xs:text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-2">
          <div className="flex items-center gap-1 mb-1.5">
            <Code2 className="h-3 w-3 text-gray-500" aria-hidden="true" />
            <span className="text-[9px] font-medium text-gray-500 uppercase tracking-wide">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1 text-[10px] font-medium rounded-md px-1.5 py-1 bg-slate-100 text-slate-700 border border-slate-200">
                <TechIcon name={tech} size={14} />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
