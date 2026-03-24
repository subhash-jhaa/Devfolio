import { Screenshot } from '@/types/project';
import ProjectImage from './ProjectImage';

interface ProjectScreenshotsProps {
  screenshots: Screenshot[];
}

export function ProjectScreenshots({ screenshots }: ProjectScreenshotsProps) {
  if (screenshots.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight border-b border-gray-200 dark:border-[#272727] pb-3 mb-4 text-gray-900 dark:text-[#f0f0f0]">
        Screenshots
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {screenshots.map((s, i) => (
          <div key={i} className="space-y-3">
            <ProjectImage 
              src={s.src} 
              alt={s.alt} 
              aspectRatio="16/10" 
            />
            <p className="text-center text-gray-400 dark:text-[#555555] text-xs font-mono">
              {s.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
