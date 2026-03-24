export type ProjectStatus = 'live' | 'building' | 'archived'

export type StackItem = {
  name: string
  icon: string   // simpleicons.org slug e.g. "nextdotjs", "typescript"
}

export type Screenshot = {
  src: string
  alt: string
  caption: string
}

export type ImplementationItem = {
  title: string
  description: string
}

export type FeatureItem = {
  title: string
  description: string
}

export type ChallengeItem = {
  problem: string
  solution: string
}

export type Project = {
  // ── Identity ──────────────────────────
  slug: string          // used in URL: /projects/[slug]
  title: string
  tagline: string       // one-line description shown in header
  status: ProjectStatus
  type: string          // e.g. "SaaS · AI Tool"
  year: string          // e.g. "2025 – 2026"

  // ── Links ─────────────────────────────
  liveUrl?: string      // if missing, Live Demo button is hidden
  repoUrl?: string      // if missing, Source Code button is hidden

  // ── Visuals ───────────────────────────
  heroImage: string     // path from /public e.g. "/projects/shortiq/hero.png"
  logoImage?: string    // small logo for project cards (optional)

  // ── Stack ─────────────────────────────
  stack: StackItem[]

  // ── Content sections ──────────────────
  overview: string[]                      // each string = one paragraph
  implementation: ImplementationItem[]    // shown as titled subsections
  features: FeatureItem[]                 // shown as dash list
  screenshots: Screenshot[]              // shown as 2-col grid
  challenges: ChallengeItem[]            // each has problem + solution
}
