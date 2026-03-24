import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    slug: 'shortiq',
    title: 'ShortIQ',
    tagline: 'AI Faceless Content Engine — automate script generation, video rendering, and social media publishing at scale.',
    status: 'live',
    type: 'SaaS · AI Tool',
    year: '2025 – 2026',
    liveUrl: 'https://short-iq.vercel.app',
    repoUrl: 'https://github.com/subhash-jhaa/ShortIQ',
    heroImage: '/shortiq.img.png',
    logoImage: '/shortiq/logo.svg',
    stack: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'OpenAI', icon: 'openai-icon' },
      { name: 'Clerk', icon: 'clerk' },
      { name: 'Vercel', icon: 'vercel' },
    ],
    overview: [
      'TODO: Add overview paragraph 1',
      'TODO: Add overview paragraph 2',
    ],
    implementation: [
      { title: 'TODO: Implementation title', description: 'TODO: description' },
    ],
    features: [
      { title: 'TODO: Feature title', description: 'TODO: description' },
      { title: 'TODO: Feature title', description: 'TODO: description' },
      { title: 'TODO: Feature title', description: 'TODO: description' },
      { title: 'TODO: Feature title', description: 'TODO: description' },
      { title: 'TODO: Feature title', description: 'TODO: description' },
    ],
    screenshots: [
      { src: '/shortiq.img.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq.img.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq.img.png', alt: 'Dashboard', caption: 'TODO: caption' },
      { src: '/shortiq.img.png', alt: 'Dashboard', caption: 'TODO: caption' },
    ],
    challenges: [
      { problem: 'TODO: problem', solution: 'TODO: solution' },
      { problem: 'TODO: problem', solution: 'TODO: solution' },
      { problem: 'TODO: problem', solution: 'TODO: solution' },
      { problem: 'TODO: problem', solution: 'TODO: solution' },
    ],
  },

  {
    slug: 'investiq',
    title: 'Invest IQ',
    tagline: 'AI-powered personal finance assistant for investment planning and goal-tracking.',
    status: 'live',
    type: 'Web App · AI Tool',
    year: '2025',
    liveUrl: 'https://my-investiq.vercel.app',
    repoUrl: 'https://github.com/subhash-jhaa/Invest-Iq',
    heroImage: '/shortiq.img.png',
    logoImage: '/investiq.logo.png',
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Gemini AI', icon: 'googlegemini' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Appwrite', icon: 'appwrite' },
    ],
    overview: ['TODO: Add overview'],
    implementation: [{ title: 'TODO', description: 'TODO' }],
    features: [{ title: 'TODO', description: 'TODO' }],
    screenshots: [{ src: '/shortiq.img.png', alt: 'App', caption: 'TODO' }],
    challenges: [{ problem: 'TODO', solution: 'TODO' }],
  },

  {
    slug: 'vartaa',
    title: 'Vartaa',
    tagline: 'Real-time multilingual messaging platform with instant AI translation across 22+ languages.',
    status: 'live',
    type: 'Real-time App · AI',
    year: '2025',
    liveUrl: 'https://vartaa.vercel.app',
    repoUrl: 'https://github.com/subhash-jhaa/Vartaa',
    heroImage: '/shortiq.img.png',
    logoImage: '/vartaa-logo.svg',
    stack: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Convex', icon: 'convex' },
      { name: 'Radix UI', icon: 'radixui' },
      { name: 'Gemini AI', icon: 'googlegemini' },
    ],
    overview: ['TODO: Add overview'],
    implementation: [{ title: 'TODO', description: 'TODO' }],
    features: [{ title: 'TODO', description: 'TODO' }],
    screenshots: [{ src: '/shortiq.img.png', alt: 'Chat', caption: 'TODO' }],
    challenges: [{ problem: 'TODO', solution: 'TODO' }],
  },

  {
    slug: 'devevent',
    title: 'DevEvent',
    tagline: 'Community event discovery and booking platform with secure auth and email workflows.',
    status: 'building',
    type: 'Full Stack · Web App',
    year: '2025 – 2026',
    repoUrl: 'https://github.com/subhash-jhaa/Dev-Events',
    heroImage: '/shortiq.img.png',
    stack: [
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Clerk', icon: 'clerk' },
      { name: 'Radix UI', icon: 'radixui' },
    ],
    overview: ['TODO: Add overview'],
    implementation: [{ title: 'TODO', description: 'TODO' }],
    features: [{ title: 'TODO', description: 'TODO' }],
    screenshots: [{ src: '/shortiq.img.png', alt: 'App', caption: 'TODO' }],
    challenges: [{ problem: 'TODO', solution: 'TODO' }],
  },
]

// Helper to get a single project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Helper to get all slugs (used for generateStaticParams)
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
