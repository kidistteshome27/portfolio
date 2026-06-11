import { profile } from './profile'

export type WorkDetail = {
  name: string
  visibility: 'public' | 'private'
  description: string
  language?: string
  html_url: string
  homepage?: string | null
  role: string
  year: string
  highlights: string[]
  topics: string[]
  updated_at?: string
  stargazers_count?: number
}

/** Private repos — GitHub API cannot list these; add your private work here */
export const privateWork: WorkDetail[] = [
  {
    name: 'AII Course Projects',
    visibility: 'private',
    description:
      'Front-end assignments and team projects from AII — React components, API integrations, and UI prototypes.',
    language: 'TypeScript',
    html_url: profile.gitlab,
    homepage: profile.gitlab,
    role: 'Front-End Developer',
    year: '2025',
    highlights: [
      'Collaborative GitLab workflows',
      'Component-based React architecture',
      'Responsive UI implementation',
    ],
    topics: ['React', 'GitLab', 'AII'],
  },
  {
    name: 'UI/UX Figma Prototypes',
    visibility: 'private',
    description:
      'Private design explorations — wireframes, user flows, and high-fidelity Figma prototypes for client-style briefs.',
    language: 'Figma',
    html_url: profile.github,
    role: 'UI/UX Designer',
    year: '2026',
    highlights: [
      'User research & wireframing',
      'Design system tokens',
      'Interactive prototypes',
    ],
    topics: ['Figma', 'UI/UX', 'Prototyping'],
  },
]

/** Extra context merged into public repos by name */
export const publicWorkMeta: Record<string, Partial<WorkDetail>> = {
  'E-commerce': {
    role: 'Front-End & UI Designer',
    year: '2026',
    highlights: [
      'VELORA creative storefront concept',
      'Tailwind CSS responsive layout',
      'Product grid & hero animations',
    ],
    topics: ['E-commerce', 'Tailwind', 'Vite', 'JavaScript'],
  },
  portfolio: {
    role: 'Front-End & UI/UX Designer',
    year: '2026',
    highlights: [
      'Feminine creative design system',
      'Blush UI Playground showcase',
      'Deployed on Netlify',
    ],
    topics: ['React', 'TypeScript', 'Framer Motion', 'Netlify'],
  },
  'blush-ui-playground': {
    role: 'UI Designer & Developer',
    year: '2026',
    highlights: [
      '4 live color themes',
      'Interactive button variants',
      'Palette copy to clipboard',
    ],
    topics: ['Design System', 'React', 'Framer Motion'],
  },
}

export type GitHubApiRepo = {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  private: boolean
  stargazers_count: number
  updated_at: string
}

export function mergePublicRepo(repo: GitHubApiRepo): WorkDetail {
  const meta = publicWorkMeta[repo.name] ?? {}
  const year = meta.year ?? new Date(repo.updated_at).getFullYear().toString()

  return {
    name: repo.name,
    visibility: 'public',
    description: repo.description ?? meta.description ?? 'Open-source project on GitHub.',
    language: repo.language ?? meta.language,
    html_url: repo.html_url,
    homepage: repo.homepage || meta.homepage,
    role: meta.role ?? 'Developer',
    year,
    highlights: meta.highlights ?? ['Built and maintained on GitHub'],
    topics: meta.topics ?? (repo.language ? [repo.language] : []),
    updated_at: repo.updated_at,
    stargazers_count: repo.stargazers_count,
  }
}
