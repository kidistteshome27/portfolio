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
    title: 'VELORA E-Commerce',
    description:
      'Creative e-commerce storefront — VELORA brand built with Vite, JavaScript, and Tailwind CSS. Product browsing with a polished, modern UI.',
    tech: ['JavaScript', 'Vite', 'Tailwind CSS', 'E-commerce'],
    github: 'https://github.com/kidistteshome27/E-commerce',
    gitlab: null,
    year: '2026',
    featured: true,
  },
  {
    title: 'Designer Portfolio',
    description:
      'This portfolio — React, Vite, Framer Motion, feminine design system, Blush UI showcase, and Netlify deployment.',
    tech: ['React', 'TypeScript', 'Vite', 'Netlify'],
    github: 'https://github.com/kidistteshome27/portfolio',
    gitlab: 'https://gitlab.aii.et/',
    year: '2026',
    featured: true,
  },
  {
    title: 'Blush UI Playground',
    description:
      'Interactive mini design-system demo — 4 themes, live button variants, palette copy, and micro-interactions.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Design System'],
    github: 'https://github.com/kidistteshome27/blush-ui-playground',
    gitlab: null,
    year: '2026',
    featured: true,
  },
  {
    title: 'AII GitLab Projects',
    description:
      'Private course and team projects on the AII GitLab instance — front-end modules, CI/CD, and collaborative workflows.',
    tech: ['GitLab', 'React', 'Team Projects'],
    github: null,
    gitlab: 'https://gitlab.aii.et/',
    year: '2025',
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
