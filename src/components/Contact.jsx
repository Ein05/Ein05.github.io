// ✏️ Sửa thông tin liên hệ của bạn
const socials = [
  { label: 'GitHub',   href: 'https://github.com/yourusername',      icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: '⊞' },
  { label: 'Twitter',  href: 'https://twitter.com/yourusername',     icon: '◈' },
  { label: 'Email',    href: 'mailto:your@email.com',                icon: '◎' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{
        border: '1px solid var(--border)', borderRadius: '16px',
        padding: 'clamp(3rem, 8vw, 6rem)', background: 'var(--surface)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* bg accent */}
        <div style={{
          position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
          width: '500px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,241,53,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />

        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>04 — contact</span>

        <h2 style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: 'clamp(2rem, 6vw, 4rem)', letterSpacing: '-0.04em',
          lineHeight: 1.0, margin: '1.5rem 0 1rem',
        }}>
          Let's build something<br />
          <span style={{ color: 'var(--accent)' }}>awesome</span>
        </h2>

        <p style={{ color: '#888', maxWidth: '460px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
          I am always open to new opportunities, interesting projects, or simply a
          good conversation. My inbox is always open!
        </p>

        <a href="mailto:your@email.com" style={{
          display: 'inline-block',
          background: 'var(--accent)', color: '#000',
          padding: '1rem 2.5rem', borderRadius: '6px',
          fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
          letterSpacing: '0.03em', marginBottom: '3rem',
          transition: 'transform 0.15s, box-shadow 0.15s',
        }}
        onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 32px rgba(200,241,53,0.35)' }}
        onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = '' }}
        >
          Say Hello ✉️
        </a>

        {/* Social links */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '1rem',
          borderTop: '1px solid var(--border)', paddingTop: '2rem', flexWrap: 'wrap',
        }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--muted)', textDecoration: 'none',
              letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px', border: '1px solid var(--border)', borderRadius: '4px',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.borderColor = 'var(--muted)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
            >
              <span>{s.icon}</span> {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
