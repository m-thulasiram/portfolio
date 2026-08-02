export default function Section({ id, title, children, subtle = false }) {
  return (
    <section id={id} style={{ background: subtle ? 'rgba(255,255,255,0.02)' : 'transparent' }} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="s-tag reveal">{title}</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold reveal d1" style={{ color: 'var(--txt)' }}>
          {title}
        </h2>
        <div className="mt-8 reveal d2">{children}</div>
      </div>
    </section>
  )
}
