import DATA from '../data'

export default function Footer() {
  return (
    <footer style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px' }}>
      <div className="footer-line" style={{ marginBottom: '32px' }}></div>
      <div className="max-w-6xl mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <span className="font-display font-bold g-text-brand" style={{ fontSize: '20px' }}>MT</span>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href={DATA.about.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ opacity: .6, transition: 'opacity .2s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = .6}>
            <i className="fab fa-linkedin" style={{ fontSize: '22px', color: '#fff' }}></i>
          </a>
          <a href={DATA.about.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ opacity: .6, transition: 'opacity .2s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = .6}>
            <i className="fab fa-github" style={{ fontSize: '22px', color: '#fff' }}></i>
          </a>
          <a href={DATA.about.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" style={{ opacity: .6, transition: 'opacity .2s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = .6}>
            <i className="fas fa-code" style={{ fontSize: '20px', color: '#fff' }}></i>
          </a>
          <a href={DATA.about.hackerrank} target="_blank" rel="noopener noreferrer" aria-label="HackerRank" style={{ opacity: .6, transition: 'opacity .2s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = .6}>
            <i className="fab fa-hackerrank" style={{ fontSize: '20px', color: '#fff' }}></i>
          </a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px' }}>© {new Date().getFullYear()} {DATA.about.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
