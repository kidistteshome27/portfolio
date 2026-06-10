export type BlushTheme = {
  id: string
  name: string
  emoji: string
  bg: string
  surface: string
  accent: string
  accentSoft: string
  text: string
  textMuted: string
  gradient: string
}

export const blushThemes: BlushTheme[] = [
  {
    id: 'rose',
    name: 'Rose Garden',
    emoji: '🌹',
    bg: '#fdf8f9',
    surface: '#ffffff',
    accent: '#b85c75',
    accentSoft: '#fce7f3',
    text: '#2d1f28',
    textMuted: '#7a6570',
    gradient: 'linear-gradient(135deg, #fce7f3, #fecdd3)',
  },
  {
    id: 'lavender',
    name: 'Lavender Dream',
    emoji: '💜',
    bg: '#f8f7ff',
    surface: '#ffffff',
    accent: '#8b5cf6',
    accentSoft: '#ede9fe',
    text: '#1e1b2e',
    textMuted: '#6b6580',
    gradient: 'linear-gradient(135deg, #ede9fe, #ddd6fe)',
  },
  {
    id: 'peach',
    name: 'Peach Sorbet',
    emoji: '🍑',
    bg: '#fff9f5',
    surface: '#ffffff',
    accent: '#e07a5f',
    accentSoft: '#fde8d8',
    text: '#2c2420',
    textMuted: '#7a6b63',
    gradient: 'linear-gradient(135deg, #fde8d8, #fcd5ce)',
  },
  {
    id: 'mauve',
    name: 'Evening Mauve',
    emoji: '✨',
    bg: '#faf5f8',
    surface: '#ffffff',
    accent: '#9d6b84',
    accentSoft: '#f3e8ee',
    text: '#2a1f26',
    textMuted: '#75606b',
    gradient: 'linear-gradient(135deg, #f3e8ee, #e9d5e0)',
  },
]

export type ButtonVariant = 'filled' | 'soft' | 'outline' | 'ghost'

export const buttonVariants: { id: ButtonVariant; label: string }[] = [
  { id: 'filled', label: 'Filled' },
  { id: 'soft', label: 'Soft' },
  { id: 'outline', label: 'Outline' },
  { id: 'ghost', label: 'Ghost' },
]
