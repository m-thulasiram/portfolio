import DATA from '../data'
import Section from './ui/Section'
import Card from './ui/Card'
import Chip from './ui/Chip'

export default function Education() {
  return (
    <Section id="education" title="Education" subtle>
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.education.map((e, idx) => (
          <Card key={idx}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg,rgba(99,102,241,.2),rgba(6,182,212,.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🎓</div>
              <div style={{ flex: 1 }}>
                <h3 className="font-display font-semibold" style={{ fontSize: '1rem', color: 'var(--txt)', lineHeight: 1.3 }}>{e.degree}</h3>
                <p style={{ color: 'var(--brand2)', fontSize: '13px', marginTop: '4px' }}>{e.school}</p>
                <p style={{ color: 'var(--txt2)', fontSize: '12px', marginTop: '2px' }}>{e.years}</p>
                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {e.coursework.map((c, i) => <Chip key={i}>{c}</Chip>)}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
