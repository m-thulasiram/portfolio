import { useState } from 'react'
import DATA from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "internships", label: "Internships" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="navbar sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold g-text-brand" style={{ textDecoration: 'none' }}>MT</a>
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className="nav-a">{item.label}</a>
          ))}
          <a href={DATA.resume.url} className="btn-p ml-2" style={{ padding: '8px 18px', fontSize: '13px' }} download>
            ↓ Resume
          </a>
        </nav>
        <button
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px', cursor: 'pointer', color: 'var(--txt)' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden" style={{ background: 'rgba(5,5,10,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-6xl mx-auto px-6 py-4 grid gap-1">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} className="nav-a" style={{ padding: '10px 0', display: 'block' }} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
            <a href={DATA.resume.url} download className="btn-p mt-2" style={{ justifyContent: 'center' }}>↓ Download Resume</a>
          </div>
        </div>
      )}
    </header>
  )
}
