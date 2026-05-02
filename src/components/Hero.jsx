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
      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px', opacity: 0.35,
      }} />

      {/* Accent blob */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,241,53,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="fade-up">
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>
          {'// hello world'}
        </span>
      </div>

      <h1 className="fade-up delay-1" style={{
        fontFamily: 'var(--font-head)', fontWeight: 800,
        fontSize: 'clamp(3rem, 9vw, 7rem)',
        lineHeight: 1.0, letterSpacing: '-0.04em',
        margin: '0.5rem 0',
      }}>
        Your<br />
        <span style={{ color: 'var(--accent)' }}>Name</span>
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
        {/* ✏️ Sửa đoạn mô tả này */}
        Tôi xây dựng những sản phẩm web đẹp và hiệu năng cao.
        Đam mê với clean code, UX tốt và mọi thứ nằm ở giao thoa giữa
        thiết kế và kỹ thuật.
      </p>

      <div className="fade-up delay-4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="#projects" style={{
          background: 'var(--accent)', color: '#000',
          padding: '0.8rem 2rem', borderRadius: '4px',
          fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem',
          letterSpacing: '0.05em', transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 24px rgba(200,241,53,0.3)' }}
        onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '' }}
        >
          Xem Projects →
        </a>
        <a href="#contact" style={{
          border: '1px solid var(--border)', color: 'var(--text)',
          padding: '0.8rem 2rem', borderRadius: '4px',
          fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem',
          letterSpacing: '0.05em', transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
        >
          Liên hệ
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
