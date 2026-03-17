import React from 'react';
import { GitHubCalendarWrapper } from './GitHubCalendarWrapper';
import { portfolioData } from '@/lib/data';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/lib/utils';

// --- Shared Types & Helpers ---

interface RepoData {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

async function fetchGitHubData(url: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
}

async function getPinnedRepos(): Promise<RepoData[]> {
  try {
    const username = portfolioData.githubStats.username;
    const profileRes = await fetch(`https://github.com/${username}`);
    if (!profileRes.ok) return [];

    const profileHtml = await profileRes.text();
    const repoNames: string[] = [];
    const parts = profileHtml.split('class="repo">');

    for (let i = 1; i < parts.length; i++) {
      const name = parts[i].split('</span>')[0].trim();
      if (name && !repoNames.includes(name)) {
        repoNames.push(name);
      }
    }

    if (repoNames.length === 0) return [];

    const repos = await Promise.all(
      repoNames.map(async (repoName) => {
        const data = await fetchGitHubData(`https://api.github.com/repos/${username}/${repoName}`);
        if (!data) return null;
        return {
          name: data.name,
          description: data.description,
          language: data.language || 'TypeScript',
          stars: data.stargazers_count,
          forks: data.forks_count,
          url: data.html_url
        };
      })
    );

    return repos.filter((r): r is RepoData => r !== null);
  } catch (err) {
    return [];
  }
}

// --- Sub-components ---

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 flex flex-col gap-2">
    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
  </div>
);

const ProjectsSection = () => (
  <section aria-label="Projects showcase" className="mt-8">
    <h2 className="mb-4 text-base font-semibold text-gray-900">Projects I&apos;ve Made</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      {portfolioData.projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  </section>
);

const PinnedRepoCard = ({ repo }: { repo: RepoData }) => (
  <a
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex min-h-[120px] flex-col rounded-xl border p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:min-h-[140px] sm:p-4 border-gray-200 bg-white hover:border-gray-300"
  >
    <div className="mb-2 flex items-start justify-between">
      <div className="min-w-0 flex-1 pr-2">
        <h4 className="truncate text-sm font-semibold transition-colors sm:text-base text-gray-900 group-hover:text-blue-600">
          {repo.name}
        </h4>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link h-3 w-3 flex-shrink-0 transition-colors sm:h-4 sm:w-4 text-gray-500 group-hover:text-blue-600">
        <path d="M15 3h6v6"></path>
        <path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      </svg>
    </div>
    <p className="mb-3 flex-1 text-xs leading-relaxed sm:text-sm text-gray-600 line-clamp-2">
      {repo.description}
    </p>
    <div className="mt-auto flex flex-wrap items-center gap-2 text-xs sm:text-sm">
      <div className="flex items-center gap-1">
        <span className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
        <span className="text-gray-600">{repo.language}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3 w-3">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
        <span>{repo.stars}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork h-3 w-3">
          <circle cx="12" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="18" cy="6" r="3"></circle>
          <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
          <path d="M12 12v3"></path>
        </svg>
        <span>{repo.forks}</span>
      </div>
    </div>
  </a>
);

const GitHubSection = ({ username, totalContributions, repos }: { username: string; totalContributions: number; repos: RepoData[] }) => (
  <section className="rounded-3xl p-4 sm:p-8 border border-gray-200 bg-white shadow-xl overflow-hidden">
    <SectionHeader title="GitHub" subtitle="Highlights from my activity and pinned repositories." />

    <div className="space-y-6">
      <div>
        <div className="rounded-2xl border p-2 sm:p-4 border-gray-200 bg-white">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5 text-gray-900">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span className="text-sm font-semibold text-gray-900">
              {username} • {totalContributions} contributions
            </span>
          </div>
        </div>

        <div className="w-full">
          <GitHubCalendarWrapper username={username} />
        </div>
        </div>
      </div>

      <div>
        <div className="rounded-2xl border p-4 sm:p-5 border-gray-100 bg-gray-50">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded bg-white p-1 shadow-inner">
              <svg className="h-4 w-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v6.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {repos.length} pinned • 41 repositories (public only)
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {repos.slice(0, 3).map((repo, i) => (
            <PinnedRepoCard key={i} repo={repo} />
          ))}
        </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ year }: { year: number }) => (
  <footer className="pt-12 pb-6 flex items-center justify-between text-gray-400 text-[10px] font-bold uppercase tracking-widest">
    <p>© {year} Subhash</p>
    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors">
      <span className="text-[10px]">Share</span>
    </button>
  </footer>
);

// --- Main Component ---

export const MainContent = async () => {
  const [liveRepos, contributionsData] = await Promise.all([
    getPinnedRepos(),
    fetchGitHubData(`https://github-contributions-api.deno.dev/${portfolioData.githubStats.username}.json`)
  ]);

  const displayRepos = liveRepos.length > 0 ? liveRepos : (portfolioData.pinnedRepositories as unknown as RepoData[]);
  const totalContributions = contributionsData?.totalContributions || portfolioData.githubStats.totalContributions;
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex-1 p-4 lg:p-6 lg:pl-0 space-y-8">
      <ProjectsSection />
      
      <GitHubSection 
        username={portfolioData.githubStats.username} 
        totalContributions={totalContributions} 
        repos={displayRepos} 
      />

      <Footer year={currentYear} />
    </main>
  );
};

