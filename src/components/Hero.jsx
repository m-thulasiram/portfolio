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
              <a href="#contact" className="btn-o">Connect with Me</a>
              <a
                href={DATA.about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-linkedin"
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
