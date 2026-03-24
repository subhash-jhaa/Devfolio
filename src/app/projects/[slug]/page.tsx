import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/components/constants/projects'
import { ProjectLayout } from '@/components/project/ProjectLayout'

// ── Types ──────────────────────────────────────────
type Props = {
  params: Promise<{ slug: string }>   // ← Promise in Next.js 15
}

// ── Static params ──────────────────────────────────
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

// ── Metadata ───────────────────────────────────────
export async function generateMetadata({ params }: Props) {
  const { slug } = await params          // ← await here
  const project = getProjectBySlug(slug)

  if (!project) return { title: 'Not Found' }

  return {
    title: `${project.title} | Subhash Jha`,
    description: project.tagline,
  }
}

// ── Page ───────────────────────────────────────────
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params          // ← await here
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return <ProjectLayout project={project} />
}
