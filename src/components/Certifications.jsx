import { useState } from 'react'
import DATA from '../data'
import Section from './ui/Section'

const getCertIcon = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('be10x') || lower.includes('claude') || lower.includes('ai tools')) return { icon: 'fa-brain', color: 'text-purple-400' };
  if (lower.includes('ibm') || lower.includes('sustainability') || lower.includes('1m1b')) return { icon: 'fa-leaf', color: 'text-emerald-400' };
  if (lower.includes('aws')) return { icon: 'fa-aws', color: 'text-amber-400' };
  if (lower.includes('machine learning') || lower.includes('ml')) return { icon: 'fa-robot', color: 'text-cyan-400' };
  if (lower.includes('big data')) return { icon: 'fa-database', color: 'text-emerald-400' };
  if (lower.includes('data structures') || lower.includes('dsa') || lower.includes('python')) return { icon: 'fa-code', color: 'text-blue-400' };
  if (lower.includes('biosparx')) return { icon: 'fa-dna', color: 'text-pink-400' };
  if (lower.includes('codeathon')) return { icon: 'fa-laptop-code', color: 'text-orange-400' };
  if (lower.includes('edzial')) return { icon: 'fa-lightbulb', color: 'text-yellow-400' };
  if (lower.includes('techyugam')) return { icon: 'fa-award', color: 'text-red-400' };
  return { icon: 'fa-certificate', color: 'text-brand' };
};

export default function Certifications({ onViewCert }) {
  const courseCerts = DATA.certifications.filter(c => c.category === 'course')
  const eventCerts = DATA.certifications.filter(c => c.category === 'event')

  return (
    <Section id="certifications" title="Certifications" subtle>
      {/* Course Certifications */}
      {courseCerts.length > 0 && (
        <>
          <h3 className="text-lg md:text-xl font-display font-semibold text-white/90 mb-6 reveal flex items-center gap-2">
            <i className="fas fa-certificate text-brand"></i> Professional Certifications
          </h3>
          <div className="cert-grid mb-14 reveal">
            {courseCerts.map((c, idx) => (
              <CertCard key={idx} cert={c} onViewCert={onViewCert} />
            ))}
          </div>
        </>
      )}

      {/* Event Certificates */}
      {eventCerts.length > 0 && (
        <>
          <h3 className="text-lg md:text-xl font-display font-semibold text-white/90 mb-6 reveal flex items-center gap-2">
            <i className="fas fa-trophy text-brand"></i> Events & Participation
          </h3>
          <div className="cert-grid reveal">
            {eventCerts.map((c, idx) => (
              <CertCard key={idx} cert={c} onViewCert={onViewCert} />
            ))}
          </div>
        </>
      )}
    </Section>
  )
}

function CertCard({ cert, onViewCert }) {
  const { icon, color } = getCertIcon(cert.title);

  const storageKey = `portfolio_like_${cert.title.replace(/\s+/g, '_').toLowerCase()}`;
  const [liked, setLiked] = useState(() => localStorage.getItem(storageKey) === 'true');
  const [likeCount, setLikeCount] = useState(() => {
    const baseLikes = Math.floor((cert.title.length * 3) % 15) + 5;
    const hasLiked = localStorage.getItem(storageKey) === 'true';
    return baseLikes + (hasLiked ? 1 : 0);
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  const handleLike = (e) => {
    e.stopPropagation();
    if (liked) {
      localStorage.setItem(storageKey, 'false');
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      localStorage.setItem(storageKey, 'true');
      setLiked(true);
      setLikeCount(prev => prev + 1);
      createParticles(e);
    }
  }

  const createParticles = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('span');
      particle.className = 'like-particle';
      const angle = (i * 45) * (Math.PI / 180);
      const velocity = 30 + Math.random() * 30;
      const x = Math.cos(angle) * velocity;
      const y = Math.sin(angle) * velocity;
      particle.style.setProperty('--x', `${x}px`);
      particle.style.setProperty('--y', `${y}px`);
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      particle.style.left = `${clickX}px`;
      particle.style.top = `${clickY}px`;
      btn.appendChild(particle);
      setTimeout(() => particle.remove(), 600);
    }
  }

  return (
    <div className="achievement-card group" onMouseMove={handleMouseMove}>
      <div className="achievement-glow"></div>
      <div className="achievement-content" style={{ padding: '24px' }}>
        <div className="flex-grow">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="achievement-icon-wrapper">
              <i className={`${icon.startsWith('fa-aws') ? 'fab' : 'fas'} ${icon} text-lg ${color}`}></i>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-white/40">{cert.issuer}</span>
              <span className={`chip mt-1 ${cert.badgeColor}`} style={{ fontSize: '10px', padding: '2px 8px' }}>
                {cert.badge}
              </span>
            </div>
          </div>

          <div className="cert-image-container cursor-pointer mb-5 group/img" onClick={() => onViewCert(cert.image, cert.title)}>
            <img src={cert.image} alt={cert.title} loading="lazy"
              onError={e => { e.target.src = 'https://placehold.co/600x400/0c0c14/818cf8?text=Certificate'; }} />
            <div className="cert-overlay">
              <span className="px-4 py-2 rounded-xl bg-indigo-600/90 text-white font-medium text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                <i className="fas fa-eye"></i> View Certificate
              </span>
            </div>
          </div>

          <h4 className="font-display font-semibold text-white text-base md:text-lg mb-3 leading-snug">
            {cert.title}
          </h4>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          {cert.verifyUrl && (
            <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
              className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 justify-end font-medium">
              <i className="fas fa-external-link-alt text-[10px]"></i> Verify Credential
            </a>
          )}
          <div className="flex items-center gap-3">
            <button onClick={() => onViewCert(cert.image, cert.title)}
              className="flex-1 btn-o justify-center gap-2 hover:bg-brand/10 hover:border-brand/30 transition-all duration-300"
              style={{ padding: '8px 16px', fontSize: '12px' }}>
              <i className="fas fa-expand-alt"></i> View Certificate
            </button>
            <button onClick={handleLike} className={`like-btn ${liked ? 'liked' : ''}`}>
              <i className={`${liked ? 'fas' : 'far'} fa-heart`}></i>
              <span>{likeCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
