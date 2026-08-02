import { useState, useRef } from 'react'
import DATA from '../data'

const FORM_URL = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [msg, setMsg] = useState('')
  const [errors, setErrors] = useState({})

  const validate = (data) => {
    const errs = {}
    if (!data.name.trim()) errs.name = 'Name is required'
    if (!data.email.trim()) errs.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(data.email)) errs.email = 'Invalid email address'
    if (!data.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    const errs = validate(data)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setStatus('sending')
    setMsg('')
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        setMsg('Thank you! Your message has been sent successfully.')
        form.reset()
      } else {
        const json = await res.json()
        setStatus('error')
        setMsg(json?.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMsg('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="py-20" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="s-tag reveal">Contact</div>
        <h2 className="text-3xl md:text-4xl font-display font-bold reveal d1" style={{ color: 'var(--txt)', marginBottom: '32px' }}>Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="g-card p-8 reveal d2">
            <h3 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--txt)', marginBottom: '8px' }}>Get in touch</h3>
            <p style={{ color: 'var(--txt2)', fontSize: '13.5px', marginBottom: '24px', lineHeight: 1.7 }}>Feel free to reach out via phone, email, or connect with me on LinkedIn/GitHub!</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { href: `tel:${DATA.about.phone}`, icon: <i className="fas fa-phone" style={{ fontSize: '15px', color: '#a5b4fc' }}></i>, label: DATA.about.phone },
                { href: `mailto:${DATA.about.email}`, icon: <i className="fas fa-envelope" style={{ fontSize: '15px', color: '#a5b4fc' }}></i>, label: DATA.about.email },
                { href: DATA.about.linkedin, icon: <i className="fab fa-linkedin" style={{ fontSize: '17px', color: '#a5b4fc' }}></i>, label: 'manam-thulasiram', ext: true },
                { href: DATA.about.github, icon: <i className="fab fa-github" style={{ fontSize: '17px', color: '#a5b4fc' }}></i>, label: 'm-thulasiram', ext: true },
                { href: DATA.about.leetcode, icon: <i className="fas fa-code" style={{ fontSize: '15px', color: '#a5b4fc' }}></i>, label: 'M_Thulasi_ram', ext: true },
                { href: DATA.about.hackerrank, icon: <i className="fab fa-hackerrank" style={{ fontSize: '15px', color: '#a5b4fc' }}></i>, label: 'vtu30380', ext: true },
              ].map((item, i) => (
                <a key={i} href={item.href} target={item.ext ? '_blank' : undefined} rel={item.ext ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--txt)', fontSize: '14px', transition: 'color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'} onMouseLeave={e => e.currentTarget.style.color = 'var(--txt)'}>
                  <span className="c-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="g-card p-8 reveal d3">
            <h3 style={{ fontWeight: 700, fontSize: '18px', color: 'var(--txt)', marginBottom: '20px' }}>Send me a message</h3>
            <form ref={formRef} onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              <input type="text" name="name" placeholder="Your Name" className="p-input" />
              {errors.name && <span style={{ color: '#f87171', fontSize: '12px', marginTop: '-10px' }}>{errors.name}</span>}
              <input type="email" name="email" placeholder="Your Email" className="p-input" />
              {errors.email && <span style={{ color: '#f87171', fontSize: '12px', marginTop: '-10px' }}>{errors.email}</span>}
              <textarea name="message" placeholder="Your Message" rows="4" className="p-input" style={{ resize: 'vertical' }}></textarea>
              {errors.message && <span style={{ color: '#f87171', fontSize: '12px', marginTop: '-10px' }}>{errors.message}</span>}
              <button type="submit" className="btn-p" style={{ justifyContent: 'center' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
              {status === 'success' && <span style={{ color: '#4ade80', fontSize: '13px', textAlign: 'center' }}>{msg}</span>}
              {status === 'error' && <span style={{ color: '#f87171', fontSize: '13px', textAlign: 'center' }}>{msg}</span>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
