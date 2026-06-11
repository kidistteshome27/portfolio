import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkShowcase from './components/WorkShowcase'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingDecor from './components/FloatingDecor'
import CursorGlow from './components/CursorGlow'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <FloatingDecor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <WorkShowcase />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
