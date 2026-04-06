'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-bg/92 backdrop-blur-xl border-b border-border' : ''
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="font-display font-extrabold text-lg text-accent">AB</a>
        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="font-mono text-[11px] text-muted hover:text-accent transition-colors tracking-widest uppercase">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
