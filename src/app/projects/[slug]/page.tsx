import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/components/constants/projects'
import { ProjectLayout } from '@/components/project/ProjectLayout'
import BuildingProject from '@/components/project/BuildingProject'

// ── Types ──────────────────────────────────────────
type Props = {
  params: Promise<{ slug: string }>
}

// ── Static params ──────────────────────────────────
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

// ── Metadata ───────────────────────────────────────
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return { title: 'Not Found' }

  return {
    title: `${project.title} | Subhash Jha`,
    description: project.tagline,
  }
}

// ── Page ───────────────────────────────────────────
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  // If the project is in 'building' status, show the "Under Construction" page
  if (project.status === 'building') {
    return <BuildingProject projectName={project.title} />
  }

  return <ProjectLayout project={project} />
}
