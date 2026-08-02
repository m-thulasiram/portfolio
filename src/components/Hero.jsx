import DATA from '../data'

export default function Hero() {
  return (
    <section id="home" className="bg-grid" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 w-full" style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20">

          {/* Photo Section */}
          <div className="flex-shrink-0 reveal">
            <div className="profile-pic-outer">
              <div className="profile-glow"></div>
              <div className="profile-pic-border">
                <div className="profile-pic-inner">
                  <img src="/images/mine.png" alt={DATA.about.name} />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left">
            <p className="s-tag reveal d1 mx-auto lg:mx-0" style={{ marginBottom: '16px' }}>Hello, I'm</p>
            <h1 className="font-display font-bold reveal d2" style={{ fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 1.1, marginBottom: '12px' }}>
              <span className="g-text">{DATA.about.name}</span>
            </h1>
            <p className="reveal d3 hero-subtitle" style={{ marginBottom: '16px' }}>{DATA.about.title}</p>
            <p className="reveal d3 hero-summary">{DATA.about.summary}</p>
            <div className="reveal d4 hero-actions">
              <a href="#projects" className="btn-p">View Projects →</a>
              <a href="#contact" className="btn-o">Contact Me</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
