export const profile = {
  name: 'Kidist Teshome',
  title: 'Front-End & UI/UX Designer',
  tagline: 'Crafting interfaces that feel as good as they look.',
  email: 'kidist.teshome@aii.et',
  location: 'Addis Ababa, Ethiopia',
  github: 'https://github.com/kidistteshome27',
  gitlab: 'https://gitlab.aii.et/',
  githubUsername: 'kidistteshome27',
  about: `I'm a front-end developer and UI/UX designer who bridges the gap between beautiful design and clean code. I love turning Figma wireframes into pixel-perfect, responsive experiences — with thoughtful interactions, accessible layouts, and a strong eye for visual hierarchy.`,
  stats: [
    { label: 'GitHub', value: '@kidistteshome27' },
    { label: 'Design Focus', value: 'UI/UX' },
    { label: 'GitLab', value: 'AII' },
  ],
}

export const skills = [
  {
    category: 'Design',
    items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'User Research'],
  },
  {
    category: 'Front-End',
    items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design', 'Vite'],
  },
  {
    category: 'Tools',
    items: ['Git & GitHub', 'GitLab (AII)', 'VS Code', 'Cursor', 'Vibe Coding', 'Framer Motion'],
  },
]

export const projects = [
  {
    title: 'Blush UI Playground',
    description:
      'Interactive mini design-system demo — 4 feminine themes, live button variants, palette copy, and micro-interactions. Built as a GitHub showcase project.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Design System'],
    github: 'https://github.com/kidistteshome27/portfolio',
    gitlab: null,
    year: '2026',
    featured: true,
  },
  {
    title: 'Designer Portfolio',
    description:
      'This portfolio — built with React, Vite, and Framer Motion. Features a Vibe Coder playground, Blush UI showcase, and a feminine creative design system.',
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    github: 'https://github.com/kidistteshome27/portfolio',
    gitlab: 'https://gitlab.aii.et/',
    year: '2026',
    featured: true,
  },
  {
    title: 'AII GitLab Projects',
    description:
      'Course and collaborative projects hosted on the AII self-managed GitLab instance — front-end modules, team repos, and DevOps workflows.',
    tech: ['GitLab', 'CI/CD', 'React', 'Team Projects'],
    github: null,
    gitlab: 'https://gitlab.aii.et/',
    year: '2025',
    featured: true,
  },
  {
    title: 'UI/UX Case Studies',
    description:
      'Figma-to-code design explorations — wireframes, prototypes, and interface studies. More case studies coming as projects go public on GitHub.',
    tech: ['Figma', 'UI/UX', 'Prototyping'],
    github: 'https://github.com/kidistteshome27',
    gitlab: null,
    year: '2026',
    featured: false,
  },
  {
    title: 'Open Source Contributions',
    description:
      'Tracking experiments and contributions on GitHub. Follow my profile for upcoming front-end and design-system repos.',
    tech: ['Git', 'GitHub', 'Open Source'],
    github: 'https://github.com/kidistteshome27',
    gitlab: 'https://gitlab.aii.et/',
    year: '2026',
    featured: false,
  },
]

export const vibes = [
  {
    id: 'chill',
    label: 'Chill Vibe',
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#7eb8da',
    prompt: 'Build a soft, minimal landing page with gentle fade-ins',
  },
  {
    id: 'focus',
    label: 'Focus Mode',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2d1f1f 100%)',
    accent: '#c9a962',
    prompt: 'Create a sharp dashboard with clean typography and data cards',
  },
  {
    id: 'creative',
    label: 'Creative Flow',
    emoji: '✨',
    gradient: 'linear-gradient(135deg, #2d132c 0%, #4a1942 50%, #6b2d3c 100%)',
    accent: '#e8a0bf',
    prompt: 'Design a bold portfolio hero with glassmorphism and motion',
  },
  {
    id: 'bold',
    label: 'Bold Energy',
    emoji: '🔥',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #3d1515 50%, #6b2d3c 100%)',
    accent: '#ff6b6b',
    prompt: 'Ship a high-contrast CTA section with animated gradients',
  },
] as const

export type VibeId = (typeof vibes)[number]['id']
