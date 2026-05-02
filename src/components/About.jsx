const stats = [
  { value: '3+',   label: 'Năm kinh nghiệm' },
  { value: '20+',  label: 'Dự án hoàn thành' },
  { value: '10+',  label: 'Khách hàng hài lòng' },
  { value: '∞',    label: 'Cốc cà phê' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
        
        {/* Left: Text */}
        <div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
          }}>01 — about</span>

          <h2 style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.03em',
            lineHeight: 1.1, margin: '1rem 0 1.5rem',
          }}>
            Tôi làm cho<br />
            <span style={{ color: 'var(--accent)' }}>ý tưởng</span> thành<br />
            sản phẩm thật
          </h2>

          {/* ✏️ Sửa đoạn bio này */}
          <p style={{ color: '#888', lineHeight: 1.9, marginBottom: '1rem' }}>
            Xin chào! Tôi là một developer đam mê xây dựng những trải nghiệm
            web hiện đại và có ý nghĩa. Tôi thích làm việc tại điểm giao thoa
            giữa thiết kế và kỹ thuật — nơi code tốt gặp UX tốt.
          </p>
          <p style={{ color: '#888', lineHeight: 1.9 }}>
            Hiện tại tôi tập trung vào React, TypeScript và xây dựng các hệ thống
            frontend có thể scale được. Khi không code, tôi thường đọc sách hoặc
            khám phá những quán cà phê mới ở Hà Nội.
          </p>

          <a href="/resume.pdf" target="_blank" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginTop: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
            color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.1em',
            borderBottom: '1px solid var(--accent)', paddingBottom: '2px',
            transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '14px'}
          onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            Download CV →
          </a>
        </div>

        {/* Right: Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {stats.map(s => (
            <div key={s.label} style={{
              border: '1px solid var(--border)', borderRadius: '8px',
              padding: '2rem 1.5rem',
              background: 'var(--surface)',
              transition: 'border-color 0.2s, transform 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = '' }}
            >
              <div style={{
                fontFamily: 'var(--font-head)', fontWeight: 800,
                fontSize: '2.5rem', color: 'var(--accent)',
                letterSpacing: '-0.03em', lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                color: 'var(--muted)', marginTop: '0.5rem', letterSpacing: '0.05em',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
