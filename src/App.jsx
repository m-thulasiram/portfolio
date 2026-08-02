import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [modalImage, setModalImage] = useState(null)
  const [modalTitle, setModalTitle] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible')
          observer.unobserve(el.target)
        }
      })
    }, { threshold: 0.12 })
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 300)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Internships onViewCert={(img, title) => { setModalImage(img); setModalTitle(title) }} />
      <Certifications onViewCert={(img, title) => { setModalImage(img); setModalTitle(title) }} />
      <Achievements onViewCert={(img, title) => { setModalImage(img); setModalTitle(title) }} />
      <Contact />
      <Footer />

      {modalImage && (
        <div className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          onClick={() => setModalImage(null)}>
          <div className="modal-content relative max-w-4xl w-full bg-[#0c0c14]/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#05050a]/60">
              <h3 className="font-display font-semibold text-white text-sm md:text-base">{modalTitle}</h3>
              <button
                onClick={() => setModalImage(null)}
                className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <i className="fas fa-times text-base"></i>
              </button>
            </div>
            <div className="p-2 md:p-4 flex items-center justify-center bg-black/40" style={{ maxHeight: '80vh' }}>
              <img
                src={modalImage}
                alt={modalTitle}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-lg border border-white/5"
                onError={e => { e.target.src = 'https://placehold.co/1200x800/0c0c14/818cf8?text=Certificate+Preview+Not+Available'; }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
