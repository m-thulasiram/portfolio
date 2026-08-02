import DATA from '../data'
import Section from './ui/Section'

export default function Internships({ onViewCert }) {
  if (!DATA.internships || DATA.internships.length === 0) return null

  return (
    <Section id="internships" title="Internships & Industrial Training">
      <div className="grid md:grid-cols-2 gap-6">
        {DATA.internships.map((i, idx) => (
          <div key={idx} className="achievement-card group reveal">
            <div className="achievement-glow"></div>
            <div className="achievement-content" style={{ padding: '24px' }}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-lg">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base md:text-lg">{i.company}</h3>
                    <p className="text-xs text-indigo-300 font-medium">{i.role}</p>
                  </div>
                </div>
                <span className="chip text-emerald-400 border-emerald-500/30 bg-emerald-500/10" style={{ fontSize: '11px', padding: '4px 10px' }}>
                  {i.duration}
                </span>
              </div>

              {i.certificate && (
                <div className="cert-image-container cursor-pointer my-4 group/img rounded-xl overflow-hidden border border-white/10" onClick={() => onViewCert && onViewCert(i.certificate, `${i.company} — ${i.role}`)}>
                  <img src={i.certificate} alt={i.role} loading="lazy" className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover/img:scale-105" />
                  <div className="cert-overlay">
                    <span className="px-4 py-2 rounded-xl bg-indigo-600/90 text-white font-medium text-xs shadow-lg flex items-center gap-2">
                      <i className="fas fa-expand-alt"></i> View Certificate
                    </span>
                  </div>
                </div>
              )}

              <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4">{i.work}</p>

              <div className="flex flex-col gap-3 pt-3 border-t border-white/5 mt-auto">
                <p className="text-xs text-white/50"><span className="text-indigo-400 font-semibold">Skills & Domain: </span>{i.tools}</p>
                
                <div className="flex items-center justify-between pt-1">
                  {i.certificate && (
                    <button
                      onClick={() => onViewCert && onViewCert(i.certificate, `${i.company} — ${i.role}`)}
                      className="btn-o text-xs py-1.5 px-3 flex items-center gap-1.5 hover:bg-brand/10"
                    >
                      <i className="fas fa-eye text-xs"></i> View Certificate
                    </button>
                  )}
                  {i.verifyUrl && (
                    <a
                      href={i.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors ml-auto"
                    >
                      <i className="fas fa-external-link-alt text-[10px]"></i> Verify Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

