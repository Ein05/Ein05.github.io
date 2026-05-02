import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Premium Background Elements */}
      <div className="global-grid" />
      <div className="bg-orb" style={{ top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'rgba(200, 241, 53, 0.08)' }} />
      <div className="bg-orb" style={{ bottom: '-10%', right: '-5%', width: '40vw', height: '40vw', background: 'rgba(59, 130, 246, 0.08)', animationDelay: '-5s' }} />
      <div className="bg-orb" style={{ top: '40%', left: '50%', width: '30vw', height: '30vw', background: 'rgba(139, 92, 246, 0.05)', animationDelay: '-10s' }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
