// ✏️ Sửa skills của bạn ở đây
const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Next.js', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST API', 'GraphQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'CI/CD', 'Figma', 'Linux', 'AWS'],
  },
]

// Skills chạy marquee
const allSkills = skillGroups.flatMap(g => g.skills)

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '4rem 0', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '0 2rem', maxWidth: '1100px', margin: '0 auto 4rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>03 — skills</span>
        <h2 className="text-gradient" style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em',
          lineHeight: 1.1, marginTop: '1rem',
        }}>
          Technologies I<br />
          <span className="text-gradient-accent">mastered</span>
        </h2>
      </div>

      {/* Marquee */}
      <div style={{
        padding: '1rem 0', marginBottom: '4rem', overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', gap: '3rem',
          animation: 'marquee 20s linear infinite',
          width: 'max-content',
        }}>
          {[...allSkills, ...allSkills].map((s, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
              color: 'var(--muted)', whiteSpace: 'nowrap', letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              <span style={{ color: 'var(--accent)', marginRight: '1rem' }}>✦</span>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Skill groups */}
      <div style={{
        padding: '0 2rem', maxWidth: '1100px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
      }}>
        {skillGroups.map(group => (
          <div key={group.category} className="glass-card" style={{
            padding: '2rem',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
              color: 'var(--accent)', letterSpacing: '0.15em',
              textTransform: 'uppercase', marginBottom: '1.5rem',
            }}>
              {group.category}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map(skill => (
                <span key={skill} style={{
                  fontFamily: 'var(--font-head)', fontWeight: 500,
                  fontSize: '0.9rem', color: 'var(--text)',
                  border: '1px solid var(--border)', borderRadius: '4px',
                  padding: '6px 12px', background: 'var(--bg)',
                  transition: 'border-color 0.2s, color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
                onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text)' }}
                >{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > div:last-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
