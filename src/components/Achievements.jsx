import { useState } from 'react'
import Section from './ui/Section'

export default function Achievements({ onViewCert }) {
  const featured = [
    {
      title: "ICICDS 2026 Paper Presentation",
      desc: "Presented a research paper on 'Precision Dietary Recommendation using YOLOv8 Food Detection and Optimization based Nutritional Planning' at the Third International Conference on Innovations in Cybersecurity and Data Science.",
      icon: "fa-scroll",
      badge: "Paper Presenter",
      inst: "Shinawatra University, Thailand",
      image: "/images/Certificate_of_Presentation_ICICDS2026_Manam_Thulasiram.pdf.jpg",
      iconColor: "text-indigo-400",
    },
    {
      title: "Human Computer Interaction",
      desc: "Earned Elite certification in NPTEL Human Computer Interaction course with an outstanding score of 90%.",
      icon: "fa-medal",
      badge: "Elite (90%)",
      inst: "IIT Institution",
      image: "/images/HUMAN NPTEL.jpeg",
      iconColor: "text-amber-400",
    },
    {
      title: "Industry 4.0 & Industrial IoT",
      desc: "Successfully completed NPTEL Introduction to Industry 4.0 and Industrial Internet of Things certification.",
      icon: "fa-microchip",
      badge: "Completed",
      inst: "IIT Institution",
      image: "/images/IOT NPTEL.jpeg",
      iconColor: "text-cyan-400",
    },
    {
      title: "Remote Sensing Essentials",
      desc: "Completed NPTEL Remote Sensing Essentials certification from IIT Roorkee.",
      icon: "fa-satellite",
      badge: "Completed",
      inst: "IIT Roorkee",
      image: "/images/remote NPTEL.jpeg",
      iconColor: "text-violet-400",
    },
  ]

  const general = [
    { text: "Completed multiple NPTEL certifications from prestigious IIT institutions.", icon: "fa-graduation-cap", iconColor: "#6366f1" },
    { text: "Built strong knowledge in Human Computer Interaction, Industry 4.0, IoT, and Remote Sensing technologies.", icon: "fa-brain", iconColor: "#06b6d4" },
    { text: "Demonstrated consistent learning and technical skill development through NPTEL online certifications.", icon: "fa-arrow-up-right-dots", iconColor: "#8b5cf6" },
    { text: "Passionate about Artificial Intelligence, Data Science, Machine Learning, and emerging technologies.", icon: "fa-robot", iconColor: "#818cf8" },
    { text: "Active learner dedicated to continuous professional and technical growth.", icon: "fa-lightbulb", iconColor: "#fbbf24" },
  ]

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--x', `${x}px`)
    e.currentTarget.style.setProperty('--y', `${y}px`)
  }

  return (
    <Section id="achievements" title="Achievements & Credentials">
      <div className="mb-10 max-w-3xl reveal d1">
        <p className="text-white/60 text-sm md:text-base leading-relaxed">
          Consistently expanding technical horizons through research presentations and professional certifications.
          Here is a curated list of my key academic achievements and specialized accomplishments.
        </p>
      </div>

      <h3 className="text-lg md:text-xl font-display font-semibold text-white/90 mb-6 reveal d2 flex items-center gap-2">
        <i className="fas fa-award text-brand"></i> Featured Achievements & Credentials
      </h3>

      <div className="achievement-grid featured mb-14 reveal d2">
        {featured.map((item, idx) => (
          <AchievementCard key={idx} item={item} onViewCert={onViewCert} />
        ))}
      </div>

      <h3 className="text-lg md:text-xl font-display font-semibold text-white/90 mb-6 reveal d3 flex items-center gap-2">
        <i className="fas fa-arrow-trend-up text-brand"></i> Professional Growth & Dedication
      </h3>

      <div className="achievement-grid reveal d4">
        {general.map((item, idx) => (
          <div key={idx} className="achievement-card" onMouseMove={handleMouseMove}>
            <div className="achievement-glow"></div>
            <div className="achievement-content" style={{ padding: '20px 24px' }}>
              <div className="flex items-start gap-4">
                <div
                  className="achievement-icon-wrapper flex-shrink-0"
                  style={{
                    width: '40px', height: '40px',
                    background: `rgba(${parseInt(item.iconColor.slice(1,3), 16) || 99}, ${parseInt(item.iconColor.slice(3,5), 16) || 102}, ${parseInt(item.iconColor.slice(5,7), 16) || 241}, 0.1)`,
                    borderColor: `rgba(${parseInt(item.iconColor.slice(1,3), 16) || 99}, ${parseInt(item.iconColor.slice(3,5), 16) || 102}, ${parseInt(item.iconColor.slice(5,7), 16) || 241}, 0.25)`,
                  }}
                >
                  <i className={`fas ${item.icon}`} style={{ color: item.iconColor, fontSize: '15px' }}></i>
                </div>
                <p className="text-white/85 text-xs md:text-sm leading-relaxed pt-1.5">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function AchievementCard({ item, onViewCert }) {
  const storageKey = `portfolio_like_${item.title.replace(/\s+/g, '_').toLowerCase()}`;
  const [liked, setLiked] = useState(() => localStorage.getItem(storageKey) === 'true');
  const [likeCount, setLikeCount] = useState(() => {
    const baseLikes = Math.floor((item.title.length * 3) % 15) + 5;
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

  const getModalTitle = () => {
    if (item.title.includes('ICICDS')) {
      return item.title;
    }
    return `NPTEL: ${item.title}`;
  }

  return (
    <div className="achievement-card" onMouseMove={handleMouseMove}>
      <div className="achievement-glow"></div>
      <div className="achievement-content" style={{ padding: '24px' }}>
        <div className="flex-grow">
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="achievement-icon-wrapper">
              <i className={`fas ${item.icon} text-lg ${item.iconColor}`}></i>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-white/40">{item.inst}</span>
              <span className="chip mt-1" style={{ fontSize: '10px', padding: '2px 8px' }}>{item.badge}</span>
            </div>
          </div>

          <div className="cert-image-container cursor-pointer mb-5 group/img" onClick={() => onViewCert(item.image, getModalTitle())}>
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onError={e => { e.target.src = 'https://placehold.co/400x260/0c0c14/818cf8?text=Certificate+Preview'; }}
            />
            <div className="cert-overlay">
              <span className="px-4 py-2 rounded-xl bg-indigo-600/90 text-white font-medium text-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                <i className="fas fa-eye"></i> View Certificate
              </span>
            </div>
          </div>

          <h4 className="font-display font-semibold text-white text-base md:text-lg mb-3 leading-snug">
            {item.title}
          </h4>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6">
            {item.desc}
          </p>
        </div>

        <div className="flex items-center gap-3 mt-auto w-full">
          <button
            onClick={() => onViewCert(item.image, getModalTitle())}
            className="flex-1 btn-o justify-center gap-2 hover:bg-brand/10 hover:border-brand/30 transition-all duration-300"
            style={{ padding: '8px 16px', fontSize: '12px' }}
          >
            <i className="fas fa-expand-alt"></i> Expand Certificate
          </button>
          <button onClick={handleLike} className={`like-btn ${liked ? 'liked' : ''}`}>
            <i className={`${liked ? 'fas' : 'far'} fa-heart`}></i>
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
