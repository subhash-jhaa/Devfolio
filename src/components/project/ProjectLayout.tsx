import { Project } from '@/types/project';
import Link from 'next/link';
import { ProjectHeader } from './ProjectHeader';
import { ProjectHero } from './ProjectHero';
import { ProjectOverview } from './ProjectOverview';
import { ProjectImplementation } from './ProjectImplementation';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectScreenshots } from './ProjectScreenshots';
import { ProjectChallenges } from './ProjectChallenges';
import { Footer } from '../layout/Footer';

interface ProjectLayoutProps {
  project: Project;
}

export function ProjectLayout({ project }: ProjectLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0c0c0c] transition-colors duration-300">
      <div className="flex-1 flex flex-col">
        <main className="flex-1 px-6 py-8 md:px-12 lg:px-24 text-gray-900 dark:text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Back button */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-gray-500 dark:text-[#555555] hover:text-gray-900 dark:hover:text-[#a0a0a0] font-mono text-sm group"
            >
              <span className="group-hover:-translate-x-1">←</span>
              Back to Portfolio
            </Link>

            <ProjectHeader
              title={project.title}
              tagline={project.tagline}
              status={project.status}
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
              stack={project.stack}
            />

            <ProjectHero heroImage={project.heroImage} title={project.title} />

            <div className="grid grid-cols-1 gap-12 pb-24">
              <ProjectOverview overview={project.overview} />
              
              {project.features.length > 0 && (
                <ProjectFeatures features={project.features} />
              )}

              {project.implementation.length > 0 && (
                <ProjectImplementation implementation={project.implementation} />
              )}

              <ProjectScreenshots screenshots={project.screenshots} />
              <ProjectChallenges challenges={project.challenges} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
