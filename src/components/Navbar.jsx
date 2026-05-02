import { useState, useEffect } from 'react'

const links = ['about', 'projects', 'skills', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.25rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#" style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.1rem',
        color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
        <span style={{ color: 'var(--accent)' }}>{'<'}</span>
        YourName
        <span style={{ color: 'var(--accent)' }}>{'/>'}</span>
      </a>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
        {links.map(l => (
          <a key={l} href={`#${l}`} style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.08em',
            color: 'var(--muted)', textDecoration: 'none', textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{l}</a>
        ))}
      </nav>

      {/* Hamburger (mobile) */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none', color: 'var(--text)',
        cursor: 'pointer', fontSize: '1.4rem', padding: '4px',
      }} className="hamburger" aria-label="menu">
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0,
          background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(12px)',
          padding: '2rem', borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '1rem', letterSpacing: '0.1em',
              color: 'var(--text)', textDecoration: 'none', textTransform: 'uppercase',
            }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  )
}
