import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Sparkles, Terminal } from 'lucide-react'
import { vibes, type VibeId } from '../data/profile'

const codeSnippets: Record<VibeId, string[]> = {
  chill: [
    '// vibe: chill 🌙',
    'const Hero = () => (',
    '  <section className="hero hero--soft">',
    '    <motion.h1 initial={{ opacity: 0 }}',
    '      animate={{ opacity: 1 }}',
    '      transition={{ duration: 1.2 }}>',
    '      Breathe. Design. Ship.',
    '    </motion.h1>',
    '  </section>',
    ')',
  ],
  focus: [
    '// vibe: focus ⚡',
    'const Dashboard = () => (',
    '  <Grid columns={12} gap={4}>',
    '    <MetricCard title="Users" value="2.4k" />',
    '    <MetricCard title="Conversion" value="12.8%" />',
    '    <Chart data={analytics} minimal />',
    '  </Grid>',
    ')',
  ],
  creative: [
    '// vibe: creative ✨',
    'const PortfolioHero = () => (',
    '  <div className="glass-panel">',
    '    <Avatar src={profile} glow />',
    '    <GradientText>UI/UX Designer</GradientText>',
    '    <FloatingOrbs count={6} />',
    '  </div>',
    ')',
  ],
  bold: [
    '// vibe: bold 🔥',
    'const CTASection = () => (',
    '  <section className="cta--bold">',
    '    <h2>Let\'s build something</h2>',
    '    <Button variant="glow" size="xl">',
    '      Start a Project →',
    '    </Button>',
    '  </section>',
    ')',
  ],
}

export default function VibeCoder() {
  const [activeVibe, setActiveVibe] = useState<VibeId>('creative')
  const [lines, setLines] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [prompt, setPrompt] = useState('')
  const terminalRef = useRef<HTMLDivElement>(null)

  const currentVibe = vibes.find((v) => v.id === activeVibe)!

  const runVibeCode = () => {
    if (isRunning) return
    setIsRunning(true)
    setLines([])

    const snippet = codeSnippets[activeVibe]
    let index = 0

    const interval = setInterval(() => {
      if (index < snippet.length) {
        setLines((prev) => [...prev, snippet[index]])
        index++
      } else {
        clearInterval(interval)
        setIsRunning(false)
      }
    }, 180)
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  useEffect(() => {
    setLines([])
    setPrompt(currentVibe.prompt)
  }, [activeVibe, currentVibe.prompt])

  return (
    <section id="vibe-coder" className="section vibe-coder">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section__label">
            <Sparkles size={14} /> Vibe Coder
          </span>
          <h2 className="section__title">Code with feeling</h2>
          <p className="section__desc">
            Pick a vibe, hit run, and watch UI come to life — my take on vibe coding:
            intuitive design meets expressive front-end craft.
          </p>
        </motion.div>

        <motion.div
          className="vibe-coder__workspace"
          style={{ '--vibe-accent': currentVibe.accent } as CSSProperties}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="vibe-coder__sidebar">
            <p className="vibe-coder__sidebar-label">Select your vibe</p>
            {vibes.map((vibe) => (
              <button
                key={vibe.id}
                type="button"
                className={`vibe-btn ${activeVibe === vibe.id ? 'vibe-btn--active' : ''}`}
                onClick={() => setActiveVibe(vibe.id)}
                style={{ '--btn-gradient': vibe.gradient } as CSSProperties}
              >
                <span className="vibe-btn__emoji">{vibe.emoji}</span>
                <span>{vibe.label}</span>
              </button>
            ))}
          </div>

          <div className="vibe-coder__editor">
            <div
              className="vibe-coder__editor-bg"
              style={{ background: currentVibe.gradient }}
              aria-hidden="true"
            />

            <div className="vibe-coder__toolbar">
              <div className="vibe-coder__dots">
                <span /><span /><span />
              </div>
              <span className="vibe-coder__filename">
                <Terminal size={14} /> vibe-component.tsx
              </span>
              <button
                type="button"
                className="vibe-coder__run"
                onClick={runVibeCode}
                disabled={isRunning}
              >
                <Play size={14} />
                {isRunning ? 'Coding...' : 'Run Vibe'}
              </button>
            </div>

            <div className="vibe-coder__prompt-bar">
              <span className="vibe-coder__prompt-label">prompt ›</span>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to build..."
                className="vibe-coder__prompt-input"
              />
            </div>

            <div className="vibe-coder__terminal" ref={terminalRef}>
              <AnimatePresence>
                {lines.length === 0 && !isRunning && (
                  <motion.p
                    className="vibe-coder__placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Select a vibe and press <strong>Run Vibe</strong> to start coding...
                  </motion.p>
                )}
              </AnimatePresence>
              {lines.map((line, i) => (
                <motion.div
                  key={`${activeVibe}-${i}`}
                  className="vibe-coder__line"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="vibe-coder__line-num">{i + 1}</span>
                  <code>{line}</code>
                </motion.div>
              ))}
              {isRunning && (
                <span className="vibe-coder__cursor" aria-hidden="true">▋</span>
              )}
            </div>

            <div className="vibe-coder__preview">
              <p className="vibe-coder__preview-label">Live preview</p>
              <div
                className="vibe-coder__preview-card"
                style={{ borderColor: currentVibe.accent }}
              >
                <span className="vibe-coder__preview-emoji">{currentVibe.emoji}</span>
                <p style={{ color: currentVibe.accent }}>{currentVibe.label}</p>
                <small>{prompt || currentVibe.prompt}</small>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
