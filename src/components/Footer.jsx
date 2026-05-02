export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      maxWidth: '1100px', margin: '0 auto',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        color: 'var(--muted)', letterSpacing: '0.05em',
      }}>
        © {year} YourName — Built with React + Vite
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
        color: 'var(--muted)', letterSpacing: '0.05em',
      }}>
        Designed & coded with ♥ in Hà Nội
      </span>
    </footer>
  )
}
