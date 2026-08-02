import DATA from '../data'
import Section from './ui/Section'
import Card from './ui/Card'
import Chip from './ui/Chip'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtle>
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.projects.map((p, idx) => (
          <Card key={idx}>
            <div style={{ aspectRatio: '16/9', width: '100%', overflow: 'hidden', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', marginBottom: '16px', position: 'relative' }}>
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .4s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                onError={e => { e.target.src = 'https://placehold.co/960x540/0c0c14/818cf8?text=Project+Preview'; }}
              />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--txt)', marginBottom: '8px', lineHeight: 1.3 }}>{p.title}</h3>
            <p style={{ color: 'var(--txt2)', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '10px' }}>{p.description}</p>
            <p style={{ fontSize: '12.5px', color: 'var(--txt2)', marginBottom: '12px' }}><span style={{ color: 'var(--brand2)', fontWeight: 600 }}>Role: </span>{p.role}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {p.tech.map((t, i) => <Chip key={i}>{t}</Chip>)}
            </div>
            <a href={p.link} target="_blank" rel="noreferrer noopener" className="btn-p" style={{ fontSize: '13px', padding: '9px 18px' }}>View Project →</a>
          </Card>
        ))}
      </div>
    </Section>
  )
}
