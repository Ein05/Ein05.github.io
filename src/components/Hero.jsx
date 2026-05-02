import { useEffect, useState } from 'react'

const roles = ['Frontend Developer', 'UI Designer', 'React Enthusiast', 'Open Source Contributor']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIdx((roleIdx + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '6rem 2rem 4rem',
      maxWidth: '1100px', margin: '0 auto', position: 'relative',
    }}>
      {/* Removed old inline grid as we now have global-grid in App.jsx */}

      {/* Removed old local blob as we have global orbs */}

      <div className="fade-up">
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          {'// hello world'}
        </span>
      </div>

      <h1 className="fade-up delay-1 text-gradient" style={{
        fontFamily: 'var(--font-head)', fontWeight: 800,
        fontSize: 'clamp(3rem, 9vw, 7rem)',
        lineHeight: 1.0, letterSpacing: '-0.04em',
        margin: '0.5rem 0',
      }}>
        Vu Duc<br />
        <span className="text-gradient-accent">Anh</span>
      </h1>

      <div className="fade-up delay-2" style={{
        fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
        color: 'var(--muted)', marginBottom: '2.5rem', height: '2rem',
        display: 'flex', alignItems: 'center', gap: '4px',
      }}>
        <span style={{ color: 'var(--accent2)' }}>{'>'}</span>&nbsp;
        {displayed}
        <span style={{ animation: 'blink 1s infinite', color: 'var(--accent)' }}>|</span>
      </div>

      <p className="fade-up delay-3" style={{
        maxWidth: '520px', color: '#888', lineHeight: 1.8,
        fontSize: '1rem', marginBottom: '3rem',
      }}>
        I build beautiful and high-performance web applications.
        Passionate about clean code, great UX, and everything that lies at the
        intersection of design and engineering.
      </p>

      <div className="fade-up delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#projects" className="glow-btn" style={{
          padding: '0.8rem 2rem', borderRadius: '8px',
          fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
          letterSpacing: '0.05em',
        }}>
          View Projects →
        </a>
        <a href="#contact" className="glass-card" style={{
          padding: '0.8rem 2rem', borderRadius: '8px',
          fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem',
          letterSpacing: '0.05em', color: 'var(--text)',
        }}>
          Contact Me
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="fade-up delay-5" style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--muted)',
        letterSpacing: '0.1em',
      }}>
        <span>scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--muted), transparent)',
          animation: 'fadeUp 1.5s ease infinite',
        }} />
      </div>
    </section>
  )
}
