export interface Project {
  name: string;
  description: string;
  status?: "Live" | "Building";
  users?: number;
  techStack: string[];
  logo: string;
  color: string;
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  logo: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Social {
  platform: "mail" | "github" | "instagram" | "linkedin" | "website" | "x";
  url: string;
}

export interface GitHubStats {
  username: string;
  totalContributions: number;
}

export interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  profilePic: string;
  cvUrl: string;
  socials: Social[];
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  githubStats: GitHubStats;
  pinnedRepositories: PinnedRepo[];
  titles: {
    skills: string;
    experience: string;
    projects: string;
    github: string;
    githubSubtitle: string;
  };
  labels: {
    downloadCv: string;
    techStack: string;
    contributions: string;
    pinned: string;
    publicRepos: string;
    share: string;
  };
}
