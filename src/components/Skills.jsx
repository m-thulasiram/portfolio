import DATA from '../data'
import Section from './ui/Section'
import Card from './ui/Card'
import Chip from './ui/Chip'

export default function Skills() {
  const groups = [
    { label: "Programming Languages", icon: "fa-code", items: DATA.skills.programming },
    { label: "ML Libraries", icon: "fa-brain", items: DATA.skills.libraries },
    { label: "ML Techniques", icon: "fa-robot", items: DATA.skills.ml },
    { label: "Databases", icon: "fa-database", items: DATA.skills.databases },
    { label: "Tools & Platforms", icon: "fa-tools", items: DATA.skills.tools },
    { label: "Core Concepts", icon: "fa-lightbulb", items: DATA.skills.concepts },
    { label: "Soft Skills", icon: "fa-users", items: DATA.skills.soft },
  ]

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, idx) => (
          <Card key={idx}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg,rgba(99,102,241,.2),rgba(6,182,212,.12))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={`fas ${g.icon}`} style={{ fontSize: '13px', color: '#a5b4fc' }}></i>
              </div>
              <h3 style={{ fontWeight: 600, fontSize: '14px', color: 'var(--txt)' }}>{g.label}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {g.items.map((s, i) => <Chip key={i}>{s}</Chip>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
