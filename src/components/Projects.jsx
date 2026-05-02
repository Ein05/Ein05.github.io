// ✏️ Thêm / sửa projects của bạn ở đây
const projects = [
  {
    number: '01',
    title: 'E-Commerce Platform',
    description: 'Nền tảng thương mại điện tử full-stack với tính năng giỏ hàng real-time, thanh toán online và dashboard quản trị.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
  },
  {
    number: '02',
    title: 'Task Management App',
    description: 'Ứng dụng quản lý công việc theo phong cách Kanban board với tính năng drag-and-drop và cộng tác nhóm.',
    tags: ['React', 'TypeScript', 'Firebase'],
    link: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    number: '03',
    title: 'Weather Dashboard',
    description: 'Dashboard thời tiết với biểu đồ dự báo 7 ngày, bản đồ gió và cảnh báo thời tiết cực đoan.',
    tags: ['React', 'D3.js', 'OpenWeather API'],
    link: 'https://github.com',
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ marginBottom: '4rem' }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
          letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>02 — projects</span>
        <h2 style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em',
          lineHeight: 1.1, marginTop: '1rem',
        }}>
          Những gì tôi<br />
          đã <span style={{ color: 'var(--accent)' }}>xây dựng</span>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  return (
    <div style={{
      border: '1px solid var(--border)', borderRadius: '12px',
      padding: '2.5rem', background: 'var(--surface)',
      display: 'grid', gridTemplateColumns: 'auto 1fr auto',
      gap: '2rem', alignItems: 'start',
      transition: 'border-color 0.2s, transform 0.2s',
      cursor: 'default',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateX(8px)' }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = '' }}
    >
      {/* Number */}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        color: 'var(--muted)', paddingTop: '4px',
      }}>{p.number}</span>

      {/* Content */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-head)', fontWeight: 700,
          fontSize: '1.3rem', letterSpacing: '-0.02em', marginBottom: '0.75rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          {p.title}
          {p.featured && (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: '#000', background: 'var(--accent)', padding: '2px 8px',
              borderRadius: '3px', letterSpacing: '0.1em',
            }}>FEATURED</span>
          )}
        </h3>
        <p style={{ color: '#888', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
          {p.description}
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
              color: 'var(--accent2)', border: '1px solid rgba(59,130,246,0.3)',
              padding: '3px 10px', borderRadius: '3px', letterSpacing: '0.05em',
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '4px' }}>
        <a href={p.link} target="_blank" rel="noreferrer" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted)',
          textDecoration: 'none', letterSpacing: '0.08em', whiteSpace: 'nowrap',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.target.style.color = 'var(--text)'}
        onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >GitHub ↗</a>
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
            textDecoration: 'none', letterSpacing: '0.08em', whiteSpace: 'nowrap',
          }}>Live ↗</a>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          div[style*="grid-template-columns: auto 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
