import { ExternalLink, Github } from 'lucide-react';
import { ProjectStatus, StackItem } from '@/types/project';
import { TechIcon } from '../ui/TechIcon';

interface ProjectHeaderProps {
  title: string;
  tagline: string;
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  stack: StackItem[];
}

export function ProjectHeader({ title, tagline, status, liveUrl, repoUrl, stack }: ProjectHeaderProps) {
  return (
    <header className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-[#f0f0f0]">
              {title}
            </h1>
            <div className={`flex items-center gap-2 px-2 py-0.5 rounded-md border text-[10px] font-bold ${
              status === 'live' 
                ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/20 text-emerald-600 dark:text-emerald-400' 
                : 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/20 text-yellow-600 dark:text-yellow-400'
            }`}>
              {status === 'live' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
              )}
              {status.toUpperCase()}
            </div>
          </div>
          <p className="text-gray-600 dark:text-[#a0a0a0] text-base leading-snug">
            {tagline}
          </p>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 flex-1 md:flex-initial flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-lg transition-all hover:scale-[1.02] active:scale-95 hover:shadow-xl dark:hover:shadow-white/10"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-[14px] font-bold tracking-tight whitespace-nowrap">Live Demo</span>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 flex-1 md:flex-initial flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-lg transition-all hover:scale-[1.02] active:scale-95 hover:shadow-xl dark:hover:shadow-white/10"
            >
              <Github className="w-4 h-4 flex-shrink-0" strokeWidth={2.5} />
              <span className="text-[14px] font-bold tracking-tight whitespace-nowrap">Source Code</span>
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-[#222] rounded-xl text-[12px] font-medium text-gray-600 dark:text-[#888] shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          >
            <TechIcon name={item.name} size={14} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
