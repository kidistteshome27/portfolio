import { useState, type CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Heart, Star, Bell } from 'lucide-react'
import {
  blushThemes,
  buttonVariants,
  type BlushTheme,
  type ButtonVariant,
} from './themes'

function PreviewButton({
  variant,
  theme,
}: {
  variant: ButtonVariant
  theme: BlushTheme
}) {
  const styles: Record<ButtonVariant, CSSProperties> = {
    filled: {
      background: theme.accent,
      color: '#fff',
      border: 'none',
    },
    soft: {
      background: theme.accentSoft,
      color: theme.accent,
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: theme.accent,
      border: `1.5px solid ${theme.accent}`,
    },
    ghost: {
      background: 'transparent',
      color: theme.textMuted,
      border: 'none',
    },
  }

  return (
    <motion.button
      type="button"
      className="blush-ui__btn"
      style={styles[variant]}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {variant === 'filled' ? 'Get Started' : variant === 'soft' ? 'Learn More' : 'Button'}
    </motion.button>
  )
}

export default function BlushUIPlayground() {
  const [theme, setTheme] = useState<BlushTheme>(blushThemes[0])
  const [variant, setVariant] = useState<ButtonVariant>('filled')
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyPalette = async () => {
    const palette = `${theme.name}\nBG: ${theme.bg}\nAccent: ${theme.accent}\nSoft: ${theme.accentSoft}`
    await navigator.clipboard.writeText(palette)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="blush-ui"
      style={{
        '--blush-bg': theme.bg,
        '--blush-surface': theme.surface,
        '--blush-accent': theme.accent,
        '--blush-accent-soft': theme.accentSoft,
        '--blush-text': theme.text,
        '--blush-muted': theme.textMuted,
        '--blush-gradient': theme.gradient,
      } as CSSProperties}
    >
      <div className="blush-ui__panel blush-ui__panel--controls">
        <p className="blush-ui__panel-label">Theme</p>
        <div className="blush-ui__themes">
          {blushThemes.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`blush-ui__theme-btn ${theme.id === t.id ? 'blush-ui__theme-btn--active' : ''}`}
              onClick={() => setTheme(t)}
              style={{ '--swatch': t.accent } as CSSProperties}
              aria-pressed={theme.id === t.id}
            >
              <span>{t.emoji}</span>
              <span>{t.name}</span>
            </button>
          ))}
        </div>

        <p className="blush-ui__panel-label">Button style</p>
        <div className="blush-ui__variants">
          {buttonVariants.map((v) => (
            <button
              key={v.id}
              type="button"
              className={`blush-ui__variant-btn ${variant === v.id ? 'blush-ui__variant-btn--active' : ''}`}
              onClick={() => setVariant(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>

        <button type="button" className="blush-ui__copy" onClick={copyPalette}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied!' : 'Copy palette'}
        </button>
      </div>

      <div className="blush-ui__panel blush-ui__panel--preview">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme.id}
            className="blush-ui__preview-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <div className="blush-ui__preview-header">
              <div className="blush-ui__avatar">{theme.emoji}</div>
              <div>
                <p className="blush-ui__preview-title">Blush UI Kit</p>
                <p className="blush-ui__preview-sub">Mini design system demo</p>
              </div>
              <div className="blush-ui__preview-actions">
                <button type="button" aria-label="Notifications">
                  <Bell size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Like"
                  onClick={() => setLiked(!liked)}
                  className={liked ? 'blush-ui__liked' : ''}
                >
                  <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>

            <div className="blush-ui__preview-body">
              <div className="blush-ui__stat-row">
                <div className="blush-ui__stat">
                  <Star size={14} />
                  <span>4.9</span>
                </div>
                <div className="blush-ui__stat">
                  <span>12 components</span>
                </div>
              </div>
              <p className="blush-ui__preview-text">
                A feminine, accessible UI playground — swap themes and button styles live.
              </p>
              <PreviewButton variant={variant} theme={theme} />
            </div>

            <div className="blush-ui__swatches">
              {[theme.bg, theme.accentSoft, theme.accent, theme.text].map((color) => (
                <span
                  key={color}
                  className="blush-ui__swatch"
                  style={{ background: color }}
                  title={color}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
